import {View} from '@tarojs/components'
import './index.less'
// @ts-ignore
import Title from "@/common/title";
import {useCallback, useState} from "react";
import Taro from "@tarojs/taro";
import moment from "moment";
import address from '@/assets/common/address1.png'
import calendar from '@/assets/common/calendar.png'
import copy from '@/assets/common/copy.png'
import navigation from '@/assets/common/navigation.png'
import {IconFont} from "@nutui/icons-react-taro";
import {imgUrl} from "../index/components/activityList";
export interface IActivityDetail {
    title:string;
    address:string;
    desc:string;
    start:number;
    tag:string[];
    end:number;
    imgUrl:string;
    maxNum:string;
    organizer:string;
    participant:any[];
    imgName:string;
}
export default function Index () {
    const [data,setData]=useState<IActivityDetail>()
    const [collect,setCollect]=useState<boolean>(false)
    const onCollect=useCallback(()=>{
        setCollect(!collect)
    },[collect])

    const toComment=()=>{
        Taro.navigateTo({url:'/pages/comment/index'})
    }
    Taro.eventCenter.on('activityPage',(res)=>{
        setData(res)
    })

    return (
        <>
            {data && <View className='activity-container' style={{background:`#eee url(${imgUrl + data.imgName +'.jpg' }) no-repeat `,backgroundSize:'contain',}}>
                <section className={'activity-header'}>
                    {/*<View className={'header-background'}>*/}
                    {/*    <View className={'plate-1'}/>*/}
                    {/*    <View className={'plate-2'}/>*/}
                    {/*    <View className={'plate-3'}/>*/}
                    {/*</View>*/}
                    <View className={'header-content'}>
                        <View className={'header-title'}>
                            <View className={'title'}>{data.title}</View>
                            <View className={'row'}>
                                {data.tag && data.tag.map((item)=><div className={'tag'}>{item}</div>)}
                            </View>
                        </View>
                        <View className={'content'}>
                            <View className={'row'}>
                                <img alt='' className={'header-icon'} src={calendar}/>
                                <View style={{display:"flex",flexDirection:"column"}}>
                                    <span className={'content-date'}>活动开始：{moment(data.start).format('HH:mm ddd DD/MM/YYYY')}</span>
                                    <span className={'content-date'}>活动结束：{moment(data.end).format('HH:mm ddd DD/MM/YYYY')}</span>
                                </View>
                            </View>
                            <View className={'row'}>
                                <View style={{width:30}}>
                                    <img alt='' className={'header-icon'} src={address}/>
                                </View>
                                <span className={'content-text'}>{data.address}</span>
                                <View style={{width:30}}>
                                    <img alt='' className={'header-icon-bigger'} src={navigation}/>
                                </View>
                            </View>
                            <View className={'row'}>
                                <img alt='' className={'header-icon'} src={copy}/>
                                <span className={'content-text'}>退款政策</span>
                                <IconFont size={13} fontClassName="iconfont" classPrefix='icon' name="right" style={{marginRight:5}}/>
                            </View>
                        </View>
                    </View>
                </section>
                <View className={'participant-container'} >
                    <View className={'participant-header'}>
                        <span className={'title'}>当前参与 {data.participant?.length}/{data.maxNum}</span>
                        <span className={'desc'}>剩{parseInt(data.maxNum)-data.participant?.length}个名额</span>
                    </View>
                </View>
                <View className={'merchant-main'} >
                    <Title text={'活动详情'}/>
                    <span className={'merchant-main-content'}>
                        {data.desc}
                    </span>
                </View>
            </View>}
            <View className={'activity-bottom'} >
                <View className={'collect'} onClick={onCollect}>
                    <IconFont name={'favor'} fontClassName="iconfont" classPrefix='icon' size={16} />
                    收藏
                </View>
                <View className={'collect'} onClick={onCollect}>
                    <IconFont name={'share'} fontClassName="iconfont" classPrefix='icon' size={14}/>
                    分享
                </View>
                <View className={'collect'} onClick={onCollect}>
                    <IconFont name={'service'} fontClassName="iconfont" classPrefix='icon' size={16} />
                    客服
                </View>
                <View className={'btn'} onClick={toComment}>加入房间</View>
            </View>

        </>

    )
}
