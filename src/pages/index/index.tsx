import './index.less'
import {View} from "@tarojs/components";
import TopSection from './components/top'
// import CircleSection from './components/circle'
import ActivitySection from './components/activity'
import ActivityList from './components/ActivityList'
// import HomeTab from '../../common/tab'
import {useCallback, useState} from "react";
import MerchantList from "./components/merchantList";
import Taro from "@tarojs/taro";
import useUserInfo from "../../hooks/useUserInfo";
import useStore from "../../store/store";


const Index =()=> {
    const [nav,setNav]=useState<number>(0)
    const {setTab}=useStore()
    const {userInfo}=useUserInfo()
    const onPublish=useCallback(()=>{
        if (userInfo){
            Taro.navigateTo({url:'/pages/createActivity/index'})
        }else{
            Taro.switchTab({url:'/pages/profile/index'})
            setTab('mine')
        }
    },[])
    return (
        <View className={'index-container'}>
            <TopSection nav={nav} onChangeNav={(nav)=>setNav(nav)}/>
            {/*<CircleSection/>*/}
            {nav?<MerchantList/>:<>
                <ActivitySection/>
                <ActivityList/>
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
