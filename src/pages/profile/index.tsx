import {useCallback, useEffect, useState} from 'react'
import Taro from '@tarojs/taro'
import {ScrollView, View} from '@tarojs/components'
import empty from '@/assets/profile/image.png'
import './index.less'
import {Button} from "@nutui/nutui-react-taro";
import {IconFont} from "@nutui/icons-react-taro";
import order from "@/assets/profile/nav/order.png";
import merchant from "@/assets/profile/nav/merchant.png";
import star from "@/assets/profile/nav/star.png";
import comment from "@/assets/profile/nav/comment.png";
import nav6 from "@/assets/nav/nav6.png";
import profile from "../../assets/index/profile.png";
import moment from "moment";
import {imgUrl} from "../index/components/activityList";
import {saveToken} from "../../store/token";
import useUserInfo from "../../hooks/useUserInfo";
import Header from "../../common/header";

export const profileImgUrl = 'https://6672-frienda-console-6gm7dno861930126-1323669219.tcb.qcloud.la/profile_image/'

const Profile= ()=> {
    const {loadDetail,userInfo}=useUserInfo()
    const [activityList,setActivityList]=useState<any[]>([])
    const getLogin = async() => {
        Taro.cloud
            .callFunction({
                name: "login",
                data: {}
            })
            .then((res:any) => {
                const db = Taro.cloud.database()
                db.collection('user')
                .where({_openid:res.result.openid})
                .get()
                .then(result=>{
                    if(!result.data.length){
                        db.collection('user').add({
                            data:{...res.result.event.userInfo,imgUrl:profileImgUrl+'default.jpeg',name:"达人新手"},
                            success:getLogin,
                            fail:err=>console.log(err)
                        })
                    }else{
                        saveToken(result.data[0]._id as string,loadDetail)
                    }
                })

            })
    }

    const goto=(page:string,item?:any)=>{
        Taro.navigateTo({
            url:page,
            success:()=>{
                Taro.eventCenter.trigger('activityPage',item)
            }
        })
    }

    useEffect(()=>{
        Taro.hideHomeButton()
    },[])

    useEffect(()=>{
        const db = Taro.cloud.database()
        db.collection('activity').get().then((res:any)=>{
            setActivityList(res.data)
        })
    },[])

    const toSetting=useCallback(()=>{
        Taro.navigateTo({ url: '/pages/profile/setting/index' })
    },[])

    // const bindPhoneNumber= async (e:any)=>{
    //     const res = await wxLogin({codeOpenId,codePhone:e.detail.code,...userData})
    //     saveToken(res,async ()=>{
    //         const userInfo = await userBasic()
    //         setUserInfo(userInfo)
    //         console.log('user',userInfo)
    //
    //     })
    // }
    // const login = () =>{
    //     Taro.login({
    //         success: function (res) {
    //             if (res.code) {
    //                 setCodeOpenId(res.code)
    //             } else {
    //                 console.log('登录失败！' + res.errMsg)
    //             }
    //         }
    //     })
    //     Taro.getUserProfile({
    //         desc: '用于完善会员资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
    //         success: (res) => {
    //             // 开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    //             setUserData({encryptedData:res.encryptedData,iv:res.iv})
    //         }
    //     })
    // }

    return (
        <View className="profile-page-container" >
            <Header title={'我的'}/>
            {userInfo?
                <div className="profile-login-button" >
                <View style={{display:"flex",alignItems:"center"}}>
                    <img alt="" src={userInfo.imgUrl} className="profile-login-button-img"/>
                    <span>{userInfo.name}</span>
                </View>
                <IconFont name={'settings1'} fontClassName="iconfont" classPrefix='icon' size={36} onClick={toSetting}/>
                </div>
                :<div className="profile-login-button" onClick={getLogin} >
                    <View style={{display:"flex",alignItems:"center"}}>
                        <img alt="" src={empty} className="profile-login-button-empty-img"/>
                        <Button style={{border:0,padding:8,fontFamily:"Gill Sans",backgroundColor:"transparent"}}
                                // openType={'getPhoneNumber'} onGetPhoneNumber={bindPhoneNumber}
                        >点击登录</Button>
                    </View>
            </div>}
            {/*<View className={'detail'}>*/}
            {/*    <View className={'item'} onClick={getLogin}>*/}
            {/*        <span className={'count'}>1.6k</span>*/}
            {/*        <span className={'label'}>关注</span>*/}
            {/*    </View>*/}
            {/*    <View className={'item'}>*/}
            {/*        <span className={'count'}>128</span>*/}
            {/*        <span className={'label'}>粉丝</span>*/}
            {/*    </View>*/}
            {/*    <View className={'item'}>*/}
            {/*        <span className={'count'}>42</span>*/}
            {/*        <span className={'label'}>历史活动</span>*/}
            {/*    </View>*/}
            {/*</View>*/}
            <View className='nav-box'>
                <View className='wallet'>
                    <span style={{fontSize:16,fontWeight:500}}>我的钱包</span>
                    <span style={{display:"flex",alignItems:"center",fontSize:12}}>
                        立即进入
                        <IconFont name={'right1'} fontClassName="iconfont" classPrefix='icon' size={10}/>
                    </span>
                </View>
                <View className='nav'>
                    <View className={'item'}>
                        <img alt="" src={order} className='icon-order'/>
                        <span className={'label'}>订单</span>
                    </View>
                    <View className={'item'}>
                        <img alt="" src={comment} className='icon'/>
                        <span className={'label'}>评价</span>
                    </View>
                    <View className={'item'}>
                        <img alt="" src={star} className='icon'/>
                        <span className={'label'}>达人入驻</span>
                    </View><View className={'item'}>
                    <img alt="" src={merchant} className='icon'/>
                    <span className={'label'}>商家入驻</span>
                </View>
                </View>
            </View>
            <View className='activity-box-container'>
                <img alt="" src={nav6} className="activity-title"/>
                {userInfo?<ScrollView scrollY style={{height:400}} >
                        {activityList.map((item:any)=>
                            <View className='activity-item' onClick={()=>goto(`/pages/activity/index?${item._id}`,item)}>
                                <View className='activity-row'>
                                    <View className='activity-image'>
                                        <img alt="" src={imgUrl + item.imgName +'.jpg' } className={'image'}/>
                                        <View className={'image-tag'}>报名中</View>
                                    </View>
                                    <View className='activity-content'>
                                        <View className='content-title'>
                                            {item.title}
                                        </View>
                                        <View className='content-date'>
                                            <IconFont size={13} fontClassName="iconfont" classPrefix='icon' name="clock" style={{marginRight:5}}/>
                                            {moment(item.start).format('HH:mm ddd DD/MM/YYYY')}
                                        </View>
                                        <View className='content-address'>
                                            <View className='icon'>
                                                <IconFont size={13}  fontClassName="iconfont" classPrefix='icon' name="address" style={{marginRight:5}}/>
                                            </View>
                                            <span>{item.address}</span>
                                        </View>
                                        <View className='content-organizer'>
                                            <img alt="" src={profile} className='profile-img'/>
                                            {item.organizer}
                                        </View>
                                    </View>
                                </View>
                            </View>)}
                </ScrollView>:
                    <View style={{height:50,color:"#aaa",display:"flex",justifyContent:"center",alignItems:"center",fontSize:14}}>请先完成登录哦~</View>}
            </View>

            {/*<HomeTab style={{margin:'0 10px'}}/>*/}
        </View>
    )
}

export default Profile
