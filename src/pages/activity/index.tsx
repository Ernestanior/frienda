import {View} from '@tarojs/components'
import './index.less'
import Header from "./component/header";
import Nav from "./component/participant";
import Main from "./component/main";
import Bottom from "./component/bottom";
import {useEffect, useState} from "react";
import Taro from "@tarojs/taro";
export interface IActivityDetail {
    title:string;
    address:string;
    desc:string;
    start:number;
    end:number;
    imgUrl:string;
    maxNum:string;
    organizer:string;
    participant:any[];
}
export default function Index () {
    const [data,setData]=useState<IActivityDetail>()
    useEffect(()=>{
        Taro.eventCenter.on('activityPage',(res)=>{
            setData(res)
        })
    },[])
    return (
        <>
            <View className='activity-container' style={{background:"#eee url('https://pic.ziyuan.wang/user/guest/2024/01/u1_c4e1bf35f9d6b.jpg') no-repeat",backgroundSize:"contain",}}>
                <Header data={data}/>
                <Nav maxNum={data?.maxNum || '10'} participant={data?.participant || []}/>
                <Main desc={data?.desc || ''}/>
            </View>
            <Bottom/>

        </>

    )
}
