import {View} from '@tarojs/components'
import profile from '@/assets/index/profile.png'

import './index.less'
import Taro from "@tarojs/taro";
import {useEffect, useState} from "react";
import moment from "moment";
import home from "../../assets/common/home.png";
import {IconFont} from "@nutui/icons-react-taro";

const statusBarHeight: any = Taro.getSystemInfoSync().statusBarHeight

export const imgUrl = 'https://6672-frienda-console-6gm7dno861930126-1323669219.tcb.qcloud.la/activity_image/'

const Index=()=> {
    const [activityList,setActivityList]=useState<any[]>([])
    const [reload,setReload]=useState<boolean>(false)
    const goto=(page:string,item?:any)=>{
        Taro.navigateTo({
            url:page,
            success:()=>{
                Taro.eventCenter.trigger('activityPage',item)
            }
        })
    }
    const onReturn=()=>{
        Taro.navigateBack()
    }

    useEffect(()=>{
        setReload(false)
        const db = Taro.cloud.database()
        db.collection('activity').get().then((res:any)=>{
            const content = res.data || []
            setActivityList(content)
            // const fileIds = content.map(item=>item.fileId)
            // console.log('fileIds',fileIds)
            // Taro.cloud.getTempFileURL({
            //     fileList:fileIds,
            //     success: res => {
            //         // get temp file URL
            //         const fileList= res.fileList.map(item=>item.tempFileURL)
            //         console.log('fileList',fileList)
            //
            //         setActivityList(content.map((item,index)=>({...item,imgUrl:fileList[index]})
            //         ))
            //     },
            // })
        })
    },[reload])

    return (
            <View className='match-result-container'>
                <View className={'header'} style={{ marginTop: statusBarHeight }}>
                    <IconFont name={'back'} fontClassName="iconfont" classPrefix='icon' size={16} onClick={onReturn}/>
                    配对结果
                    <View style={{width:15}}/>
                </View>
                {activityList.map((item:any)=>
                    <View className='activity-box' onClick={()=>goto(`/pages/orderDetail/index?${item._id}`,item)}>
                        <View className='merchant'>
                            <img alt="" src={home} className={'merchant-icon'}/>
                            宇宙探索编辑部
                        </View>
                        <View className='activity-row'>
                            <View className='activity-image'>
                                <img alt="" src={imgUrl + item.imgName +'.jpg' } className={'image'}/>
                                <View className={'image-tag'}>报名中</View>
                            </View>
                            <View className='activity-content'>
                                <View className='content-title'>
                                    {item.title}
                                </View>
                                <View className={'content-type'}>
                                    <div className={'tag'}>户外</div>
                                    <div className={'tag'}>运动</div>
                                    <div className={'tag'}>徒步</div>
                                </View>
                                <View className='content-date'>
                                    356 收藏 · 678 已参与
                                </View>
                                <View className='content-address'>
                                    场次：2
                                </View>
                            </View>
                        </View>
                        <View className='join'>
                            <View className={'time'}>
                                {moment(item.start).format('HH:mm ddd DD/MM/YYYY')}
                            </View>

                            <View className='people'>
                                <View className='people-list'>
                                    <img alt="" src={profile} className='profile-img'/>
                                    <img alt="" src={profile} className='profile-img'/>
                                    <img alt="" src={profile} className='profile-img'/>
                                    <img alt="" src={profile} className='profile-img'/>
                                </View>
                                差{item.participant?.length || 1}人
                            </View>

                        </View>
                    </View>)}
            </View>
    )
}
export default Index;
