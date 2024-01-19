import './index.less'
import {View} from "@tarojs/components";
import TopSection from './components/top'
import CircleSection from './components/circle'
import ActivitySection from './components/activity'
import RoomList from './components/RoomList'
// import HomeTab from '../../common/tab'
import {useCallback, useState} from "react";
import MerchantList from "./components/merchantList";
import Taro from "@tarojs/taro";


const Index =()=> {
    const [nav,setNav]=useState<number>(0)
    const onPublish=useCallback(()=>{
        Taro.navigateTo({url:'/pages/index/createActivity'})
    },[])
    return (
        <View className={'index-container'}>
            <TopSection nav={nav} onChangeNav={(nav)=>setNav(nav)}/>
            <CircleSection/>
            {nav?<MerchantList/>:<>
                <ActivitySection/>
                <RoomList/>
            </>}
            {/*<HomeTab/>*/}
            <View className={'publish-btn'} onClick={onPublish}>
               <span style={{fontSize:18,marginRight:5}}>+</span> 发布
            </View>
            <View style={{height:60}}></View>
        </View>
    )
}
export default Index
