import { View } from '@tarojs/components'
import './index.less'
import demo4 from "../../assets/index/demo4.png";
import {IconFont} from "@nutui/icons-react-taro";
import profile from "../../assets/index/profile.png";
import home from "../../assets/common/home.png";
import Taro from "@tarojs/taro";
import timer from '@/assets/common/timer.png'
import {useCallback} from "react";
const statusBarHeight:any=Taro.getSystemInfoSync().statusBarHeight

const Index =()=>{

    const onReturn=()=>{
        Taro.navigateBack()
    }
    const onInvite=useCallback(()=>{
        Taro.navigateBack({delta:2})

    },[])
        return (
            <View className={'pay-container'}>
                <View className={'header'} style={{marginTop:statusBarHeight}}>
                    <IconFont name={'back'} fontClassName="iconfont" classPrefix='icon' size={16} onClick={onReturn}/>
                    详情
                    <View style={{width:15}}/>
                </View>
                <View className='pay-box' style={{marginTop:statusBarHeight,display:"flex"}}>
                    <img alt="" src={timer} className='timer-img'/>
                    <View>
                        <span style={{fontWeight:600}}>拼场中</span>
                        <span style={{fontSize:11,color:"#bbb"}}>预计10点拼成，拼成后将会短信通知您</span>
                    </View>
                </View>
                <View className='pay-box' >
                    <View className='merchant'>
                        <img alt="" src={home} className={'merchant-icon'}/>
                        宇宙探索编辑部
                    </View>
                    <View className='pay-row'>
                        <View className='pay-image'>
                            <img alt="" src={demo4} className={'image'}/>
                        </View>
                        <View className='pay-content'>
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
                <View className='pay-box' style={{display:"flex",justifyContent:"center"}}>
                    <View style={{display:"flex",fontSize:12,fontWeight:500,alignItems:"center"}}>
                        <View className='people-list'>
                            <img alt="" src={profile} className='profile-img'/>
                            <img alt="" src={profile} className='profile-img'/>
                            <img alt="" src={profile} className='profile-img'/>
                        </View>
                        已有3人，还差
                        <span className='orange' style={{marginLeft:5,marginRight:5}}>3</span>
                         人即可开场
                    </View>
                </View>
                <View className={'btn'} onTap={onInvite}>邀请好友快速上车</View>


            </View>
        )
}
export default Index;
