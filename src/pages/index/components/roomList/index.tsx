import {View} from '@tarojs/components'
import demo4 from '../../../../assets/index/demo4.png'
import profile from '../../../../assets/index/profile.png'

import './index.less'
import {IconFont} from "@nutui/icons-react-taro";
import Taro from "@tarojs/taro";
import {useEffect, useState} from "react";
import moment from "moment";


const Index=()=> {
    const [roomList,setRoomList]=useState<any[]>([])
    const [reload,setReload]=useState<boolean>(false)

    const goto=(page:string)=>{
        Taro.navigateTo({url:page})
    }

    useEffect(()=>{
        setReload(false)
        const db = Taro.cloud.database()
        db.collection('room').get().then((res:any)=>{
            setRoomList(res.data)
        })
    },[reload])

    return (
            <View className='room-container'>
                {roomList.map((item:any)=>
                    <View className='room-box' onClick={()=>goto('/pages/activity/index')}>
                        <View className='room-row'>
                            <View className='room-image'>
                                <img alt="" src={demo4} className={'image'}/>
                                <View className={'image-tag'}>报名中</View>
                            </View>
                            <View className='room-content'>
                                <View className='content-title'>
                                    {item.title}
                                </View>
                                <View className='content-date'>
                                    <IconFont size={13} fontClassName="iconfont" classPrefix='icon' name="clock" style={{marginRight:5}}/>
                                    {moment(item.start).format('HH:mm ddd DD/MM/YYYY')}
                                </View>
                                <View className='content-address'>
                                    <IconFont size={13} fontClassName="iconfont" classPrefix='icon' name="address" style={{marginRight:5}}/>
                                    {item.address}
                                </View>
                                <View className='content-organizer'>
                                    <img alt="" src={profile} className='profile-img'/>
                                    {item.organizer}
                                </View>
                            </View>
                        </View>
                        <View className='join'>
                            <View className='people'>
                                <View className='people-list'>
                                    <img alt="" src={profile} className='profile-img'/>
                                    <img alt="" src={profile} className='profile-img'/>
                                    <img alt="" src={profile} className='profile-img'/>
                                    <img alt="" src={profile} className='profile-img'/>
                                </View>
                                20人已加入
                            </View>
                            <View className='join-btn' onClick={()=>goto('/pages/pay/index')}>
                                立即上车
                            </View>
                        </View>
                    </View>)}
                <View className='room-box' onClick={()=>goto('/pages/activity/index')}>
                    <View className='room-row'>
                        <View className='room-image'>
                            <img alt="" src={demo4} className={'image'}/>
                            <View className={'image-tag'}>报名中</View>
                        </View>
                        <View className='room-content'>
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
                    <View className='join'>
                        <View className='people'>
                            <View className='people-list'>
                                <img alt="" src={profile} className='profile-img'/>
                                <img alt="" src={profile} className='profile-img'/>
                                <img alt="" src={profile} className='profile-img'/>
                                <img alt="" src={profile} className='profile-img'/>
                            </View>
                            20人已加入
                        </View>
                        <View className='join-btn' onClick={()=>goto('/pages/pay/index')}>
                            立即上车
                        </View>
                    </View>

                </View>
                <View className='room-box' onClick={()=>goto('/pages/activity/index')} >
                    <View className='room-row'>
                        <View className='room-image'>
                            <img alt="" src={demo4} className={'image'}/>
                            <View className={'image-tag'}>报名中</View>
                        </View>
                        <View className='room-content'>
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
                    <View className='join'>
                        <View className='people'>
                            <View className='people-list'>
                                <img alt="" src={profile} className='profile-img'/>
                                <img alt="" src={profile} className='profile-img'/>
                                <img alt="" src={profile} className='profile-img'/>
                                <img alt="" src={profile} className='profile-img'/>
                            </View>
                            20人已加入
                        </View>
                        <View className='join-btn' onClick={()=>goto('/pages/pay/index')}>
                            立即上车
                        </View>
                    </View>

                </View>
                <View className='room-box' onClick={()=>goto('/pages/activity/index')}>
                    <View className='room-row'>
                        <View className='room-image'>
                            <img alt="" src={demo4} className={'image'}/>
                            <View className={'image-tag'}>报名中</View>
                        </View>
                        <View className='room-content'>
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
                    <View className='join'>
                        <View className='people'>
                            <View className='people-list'>
                                <img alt="" src={profile} className='profile-img'/>
                                <img alt="" src={profile} className='profile-img'/>
                                <img alt="" src={profile} className='profile-img'/>
                                <img alt="" src={profile} className='profile-img'/>
                            </View>
                            20人已加入
                        </View>
                        <View className='join-btn' onClick={()=>goto('/pages/pay/index')}>
                            立即上车
                        </View>
                    </View>

                </View>

            </View>
    )
}
export default Index;
