import {View} from '@tarojs/components'
import './index.less'
import {IconFont} from "@nutui/icons-react-taro";
import {useCallback, useState} from "react";
import Taro from "@tarojs/taro";


const Index=()=> {
    const [collect,setCollect]=useState<boolean>(false)

    const onCollect=useCallback(()=>{
        console.log(collect)
        setCollect(!collect)
    },[collect])

    const toComment=()=>{
        Taro.navigateTo({url:'/pages/comment/index'})
    }
    return (
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
    )
}
export default Index;
