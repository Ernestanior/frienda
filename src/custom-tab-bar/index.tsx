import './index.less'
import {View} from "@tarojs/components";
import match from "@/assets/index/match.png";
import mine from "@/assets/index/mine.png";
import mineFill from "@/assets/index/mine-fill.png";
import planet from "@/assets/index/planet.png";
import planetFill from "@/assets/index/planet-fill.png";

import {useCallback} from "react";
import Taro from "@tarojs/taro";
import useStore from "../store/store";

const Index=({style}:any)=> {
    const {tab,setTab}=useStore()
    const onSwitchTab=useCallback((url:string)=>{
        setTab(url)
        if (url==='home'){
            Taro.switchTab({url:'/pages/index/index'})
        }
        else if (url==='mine'){
            Taro.switchTab({url:'/pages/profile/index'})
        }
        else if (url==='match'){
            Taro.switchTab({url:'/pages/match/index'})
        }

    },[])
    return (
        <View className={'home-tab'} style={style}>
            <View className={'tab-item'} onTap={()=>onSwitchTab('home')}>
                {tab==='home'?<img alt="" src={planetFill} className={'planet-img'}/>:
                    <img alt="" src={planet} className={'planet-img'} />
                }<View className={'tab-text'} style={tab==="home"?{color:"#000"}:{}}>首页</View>
            </View>
            <View className={'tab-center-item'} onTap={()=>onSwitchTab('match')}>
                <img alt="" src={match} className={'match-img'}/>
                <View className={'tab-text'} style={tab==="match"?{color:"#000"}:{}}>配对</View>
            </View>
            <View className={'tab-item'} onTap={()=>onSwitchTab('mine')} >
                {tab==='mine'?<img alt="" src={mineFill} className={'mine-img'}/>:
                    <img alt="" src={mine} className={'mine-img'} />
                }
                <View className={'tab-text'} style={tab==="mine"?{color:"#000"}:{}}>我的</View>
            </View>
        </View>
    )
}
export default Index;
