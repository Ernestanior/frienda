import {useMemo, useState} from 'react'
import Taro, { useDidShow } from '@tarojs/taro'
import {View, ScrollView} from '@tarojs/components'
import './index.less'
import type CustomTabBar from '../../custom-tab-bar'
const WEEK=['周日','周一','周二','周三','周四','周五','周六']

export default function Index () {
    const page = useMemo(() => Taro.getCurrentInstance().page, [])
    const [selectedDate,setSelectedDate]=useState<number>(0)
    useDidShow(() => {
        const tabbar = Taro.getTabBar<CustomTabBar>(page)
        tabbar?.setSelected(1)
    })
    const dateList = ['','','','','','','','','','','','','','']
    const date = new Date()
    const currWeekDay = date.getDay()
    return (
        <View className='index'>
            <ScrollView  className='room-container' scrollX={true}  enhanced={true} enableFlex={true} showScrollbar={false} >
                <View className='room-date-container'>
                    {dateList.map((_,index)=>{
                        return <View className='room-date-item' onTap={()=>setSelectedDate(index)} >
                            <View className='room-date-day' style={selectedDate===index?{fontWeight:550}:{}}>{index===0?'今天':index===1?'明天':WEEK[(currWeekDay+index)%7]}</View>
                            <View className={'room-date-time'} style={selectedDate===index?{color:"#000"}:{}}>
                                {(new Date(date.getTime()+24*60*60*1000*index)).getMonth()+1
                                    +'.'
                                    +(new Date(date.getTime()+24*60*60*1000*index)).getDate()}
                            </View>
                            {selectedDate===index&&<View style={{height:2,width:"100%",marginTop:3,backgroundColor:"#000",borderRadius:1}}></View>}
                    </View>
                    })}
                </View>
            </ScrollView>
        </View>
    )
}
