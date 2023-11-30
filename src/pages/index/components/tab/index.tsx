import './index.less'
import {View} from "@tarojs/components";
import {IconFont} from "@nutui/icons-react-taro";
import match from "../../../../assets/index/match2.png";
import mine from "../../../../assets/index/mine.png";
import mineFill from "../../../../assets/index/mine-fill.png";
import {useState} from "react";



const Index=()=> {
    const [tab,setTab]=useState<string>('home')
    return (
        <View className={'home-tab'}>
            <View className={'tab-item'} onTap={()=>setTab('home')}>
                <IconFont size={20} fontClassName="iconfont" classPrefix='icon' name='planet' className={'home-img'} style={tab==="home"&&{color:"#f2ac3c"}}/>
                <View className={'tab-text'} style={tab==="home"?{color:"#000"}:{}}>首页</View>
            </View>
            <View className={'tab-center-item'} onTap={()=>setTab('match')}>
                <View className='match-icon'>
                    <img alt="" src={match} className={'match-img'}/>
                </View>
                <View className={'tab-text'} style={tab==="match"?{color:"#000"}:{}}>配对</View>
            </View>
            <View className={'tab-item'} onTap={()=>setTab('mine')}>
                {tab==='mine'?<img alt="" src={mineFill} className={'mine-fill-img'}/>:
                    <img alt="" src={mine} className={'mine-img'} />
                }
                <View className={'tab-text'} style={tab==="mine"?{color:"#000"}:{}}>我的</View>
            </View>
        </View>
    )
}
export default Index;
