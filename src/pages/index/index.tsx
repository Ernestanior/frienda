import './index.less'
import {View} from "@tarojs/components";
import TopSection from './components/top'
import CircleSection from './components/circle'
import ActivitySection from './components/activity'
import RoomList from './components/RoomList'
// import HomeTab from '../../common/tab'
import {useState} from "react";
import MerchantList from "./components/merchantList";


const Index =()=> {
    const [nav,setNav]=useState<number>(0)

    return (
        <View className={'index-container'}>
            <TopSection nav={nav} onChangeNav={(nav)=>setNav(nav)}/>
            <CircleSection/>
            {nav?<MerchantList/>:<>
                <ActivitySection/>
                <RoomList/>
            </>}
            {/*<HomeTab/>*/}
            <View style={{height:60}}></View>
        </View>
    )
}
export default Index
