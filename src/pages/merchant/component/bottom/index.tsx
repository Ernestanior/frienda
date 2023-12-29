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
        <View className={'merchant-bottom'} >
            <View className={'collect'} onClick={onCollect}>
                    {collect?<IconFont name={'favorfill'} size={16} fontClassName="iconfont" classPrefix='icon' style={{color:"#ffc227"}}/>
                    :<IconFont name={'favor'} size={16} fontClassName="iconfont" classPrefix='icon'/>}
                    收藏
            </View>
            <View className={'btn'} onClick={toComment}>写评价</View>
        </View>
    )
}
export default Index;
