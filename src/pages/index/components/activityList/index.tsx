import {View} from '@tarojs/components'
import profile from '../../../../assets/index/profile.png'

import './index.less'
import {IconFont} from "@nutui/icons-react-taro";
import Taro, {useDidShow} from "@tarojs/taro";
import {useState} from "react";
import moment from "moment";

export const imgUrl = 'https://6672-frienda-console-6gm7dno861930126-1323669219.tcb.qcloud.la/activity_image/'

const Index=()=> {
    const [activityList,setActivityList]=useState<any[]>([])
    const goto=(page:string,item?:any)=>{
        Taro.navigateTo({
            url:page,
            success:()=>{
                Taro.eventCenter.trigger('activityPage',item)
            }
        })
    }

    useDidShow(()=>{
        const db = Taro.cloud.database()
        db.collection('activity').get().then((res:any)=>{
            const content = res.data || []
            setActivityList(content)
        })
    })

    return (
            <View className='activity-list-container'>
                {activityList.map((item:any)=>
                    <View className='activity-box' onClick={()=>goto(`/pages/activity/index?${item._id}`,item)}>
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
                        <View className='join'>
                            <View className='people'>
                                <View className='people-list'>
                                    <img alt="" src={profile} className='profile-img'/>
                                    <img alt="" src={profile} className='profile-img'/>
                                    <img alt="" src={profile} className='profile-img'/>
                                    <img alt="" src={profile} className='profile-img'/>
                                </View>
                                {item.participant?.length || 1}人已加入
                            </View>
                            <View className='join-btn' onClick={()=>goto('/pages/pay/index')}>
                                立即上车
                            </View>
                        </View>
                    </View>)}
            </View>
    )
}
export default Index;
