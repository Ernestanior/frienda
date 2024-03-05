import './index.less'
import {View} from "@tarojs/components";
import {IconFont} from "@nutui/icons-react-taro";
import match from "@/assets/index/match2.png";
import {useCallback} from "react";
import Taro from "@tarojs/taro";
import useStore from "../../store/store";

const Index=({style}:any)=> {
    const {tab,setTab}=useStore()
    const onSwitchTab=useCallback((url:string)=>{
        setTab(url)
        if (url==='home'){
            // Taro.redirectTo({url:'/pages/index/index'})
            Taro.switchTab({url:'/pages/index/index'})

        }
        else if (url==='mine'){
            // Taro.redirectTo({url:'/pages/user/index'})
            Taro.switchTab({url:'/pages/user/index'})
        }

    },[])
    return (
        <View className={'home-tab'} style={style}>
            <View className={'tab-item'} onTap={()=>onSwitchTab('home')}>
                <IconFont size={20} fontClassName="iconfont" classPrefix='icon' name='planet' className={'home-img'} style={tab==="home"&&{color:"#f2ac3c"}}/>
                <View className={'tab-text'} style={tab==="home"?{color:"#000"}:{}}>首页</View>
            </View>
            <View className={'tab-center-item'} onTap={()=>setTab('match')}>
                <View className='match-icon'>
                    <img alt="" src={match} className={'match-img'}/>
                </View>
                <View className={'tab-text'} style={tab==="match"?{color:"#000"}:{}}>配对</View>
            </View>
            <View className={'tab-item'} onTap={()=>onSwitchTab('mine')} >
                <IconFont size={20} fontClassName="iconfont" classPrefix='icon' name='mine' className={'home-img'} style={tab==="mine"&&{color:"#f2ac3c"}}/>
                <View className={'tab-text'} style={tab==="mine"?{color:"#000"}:{}}>我的</View>
            </View>
        </View>
    )
}
export default Index;
