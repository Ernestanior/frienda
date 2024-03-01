import {useEffect} from 'react'
import Taro from '@tarojs/taro'
import {ScrollView, View} from '@tarojs/components'
import empty from '@/assets/profile/image.png'

import './index.less'
import {Button} from "@nutui/nutui-react-taro";
import useStore from "../../store/store";
import {IconFont} from "@nutui/icons-react-taro";
import order from "@/assets/profile/nav/order.png";
import merchant from "@/assets/profile/nav/merchant.png";
import star from "@/assets/profile/nav/star.png";
import comment from "@/assets/profile/nav/comment.png";
import nav6 from "@/assets/nav/nav6.png";
import demo4 from "../../assets/index/demo4.png";
import profile from "../../assets/index/profile.png";
const statusBarHeight:any=Taro.getSystemInfoSync().statusBarHeight

const User= ()=> {
    const {setUserInfo,userInfo}=useStore()
    const getLogin = async() => {
        Taro.cloud
            .callFunction({
                name: "login",
                data: {}
            })
            .then((res:any) => {
                console.log('login',res)
                const db = Taro.cloud.database()
                db.collection('user').add({
                    data:res.result.event.userInfo,
                    success:res=>console.log(res),
                    fail:err=>console.log(err)
                })
                setUserInfo(res.result.event.userInfo)
            })
        Taro.getUserProfile({
            desc: '用于完善会员资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
            success: (res) => {
                console.log('user',res)
            }
        })
        // const db = Taro.cloud.database()
        // const res = await db.collection('test').get()
        // console.log('reaa',res)
        // db.collection('test').add({
        //     data:{
        //         name:'ppp',age:999
        //     },
        //     success:res=>console.log(res),
        //     fail:err=>console.log(err)
        // })
    }

    const onReturn=()=>{
        Taro.navigateBack()
    }
    const goto=(page:string)=>{
        Taro.navigateTo({url:page})
    }

    useEffect(()=>{
        Taro.hideHomeButton()
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
            <View className={'header'} style={{marginTop:statusBarHeight}}>
                <IconFont name={'back'} fontClassName="iconfont" classPrefix='icon' size={16} onClick={onReturn}/>
                我的
                <View style={{width:15}}/>
            </View>
            {userInfo?<div className="profile-login-button" >
                <img alt="" src={empty} className="profile-login-button-img"/>
                <span>打卡小新人</span>
            </div>:<div className="profile-login-button" onClick={getLogin} >
                <img alt="" src={empty} className="profile-login-button-img"/>
                <Button style={{border:0,padding:8,fontFamily:"Gill Sans",backgroundColor:"transparent"}}
                        // openType={'getPhoneNumber'} onGetPhoneNumber={bindPhoneNumber}
                >点击登录</Button>
            </div>}
            <View className={'detail'}>
                <View className={'item'} onClick={getLogin}>
                    <span className={'count'}>1.6k</span>
                    <span className={'label'}>关注</span>
                </View>
                <View className={'item'}>
                    <span className={'count'}>128</span>
                    <span className={'label'}>粉丝</span>
                </View>
                <View className={'item'}>
                    <span className={'count'}>42</span>
                    <span className={'label'}>历史活动</span>
                </View>
            </View>
            <View className='nav-box'>
                <View className='wallet'>
                    <span style={{fontSize:14,fontWeight:500}}>我的钱包</span>
                    <span style={{display:"flex",alignItems:"center",fontSize:10}}>
                        立即进入
                        <IconFont name={'right1'} fontClassName="iconfont" classPrefix='icon' size={10} onClick={onReturn}/>
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
            <View className='activity-box'>
                <img alt="" src={nav6} className="activity-title"/>
                <ScrollView scrollX scrollWithAnimation>
                    <View style={{display:"flex"}}>
                        <View className='activity-item' onClick={()=>goto('/pages/activity/index')}>
                            <View className='activity-row'>
                                <View className='activity-image'>
                                    <img alt="" src={demo4} className={'image'}/>
                                    <View className={'image-tag'}>报名中</View>
                                </View>
                                <View className='activity-content'>
                                    <View className='content-title'>
                                        摄影 | 黑龙潭风铃节 打卡小冰岛
                                    </View>
                                    <View className='content-date'>
                                        <IconFont size={13} fontClassName="iconfont" classPrefix='icon' name="clock" style={{marginRight:5}}/>
                                        20:30-22:30 周一 06.12
                                    </View>
                                    <View className='content-address'>
                                        <IconFont size={13} fontClassName="iconfont" classPrefix='icon' name="address" style={{marginRight:5}}/>
                                        11km 景天320足球公园
                                    </View>
                                    <View className='content-organizer'>
                                        <img alt="" src={profile} className='profile-img'/>
                                        Floyd Miles
                                    </View>
                                </View>
                            </View>

                        </View>
                        <View className='activity-item' onClick={()=>goto('/pages/activity/index')}>
                            <View className='activity-row'>
                                <View className='activity-image'>
                                    <img alt="" src={demo4} className={'image'}/>
                                    <View className={'image-tag'}>报名中</View>
                                </View>
                                <View className='activity-content'>
                                    <View className='content-title'>
                                        摄影 | 黑龙潭风铃节 打卡小冰岛
                                    </View>
                                    <View className='content-date'>
                                        <IconFont size={13} fontClassName="iconfont" classPrefix='icon' name="clock" style={{marginRight:5}}/>
                                        20:30-22:30 周一 06.12
                                    </View>
                                    <View className='content-address'>
                                        <IconFont size={13} fontClassName="iconfont" classPrefix='icon' name="address" style={{marginRight:5}}/>
                                        11km 景天320足球公园
                                    </View>
                                    <View className='content-organizer'>
                                        <img alt="" src={profile} className='profile-img'/>
                                        Floyd Miles
                                    </View>
                                </View>
                            </View>

                        </View>
                        <View className='activity-item' onClick={()=>goto('/pages/activity/index')}>
                            <View className='activity-row'>
                                <View className='activity-image'>
                                    <img alt="" src={demo4} className={'image'}/>
                                    <View className={'image-tag'}>报名中</View>
                                </View>
                                <View className='activity-content'>
                                    <View className='content-title'>
                                        摄影 | 黑龙潭风铃节 打卡小冰岛
                                    </View>
                                    <View className='content-date'>
                                        <IconFont size={13} fontClassName="iconfont" classPrefix='icon' name="clock" style={{marginRight:5}}/>
                                        20:30-22:30 周一 06.12
                                    </View>
                                    <View className='content-address'>
                                        <IconFont size={13} fontClassName="iconfont" classPrefix='icon' name="address" style={{marginRight:5}}/>
                                        11km 景天320足球公园
                                    </View>
                                    <View className='content-organizer'>
                                        <img alt="" src={profile} className='profile-img'/>
                                        Floyd Miles
                                    </View>
                                </View>
                            </View>

                        </View>
                    </View>
                </ScrollView>
            </View>

            {/*<HomeTab style={{margin:'0 10px'}}/>*/}
        </View>
    )
}

export default User
