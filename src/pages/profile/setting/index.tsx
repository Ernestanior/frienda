import { View} from '@tarojs/components'

import './index.less'
import {IconFont} from "@nutui/icons-react-taro";
import {useCallback} from "react";
import Taro from "@tarojs/taro";
import Header from "../../../common/header";

const Setting= ()=> {

    const toEditDetail=useCallback(()=>{
        Taro.navigateTo({url:'/pages/profile/setting/editDetail/index'})
    },[])

    return (
        <View className="setting-page-container" >
            <Header title={'个人信息'}/>

            <View className="row" onClick={toEditDetail}>
                修改个人信息
                <IconFont size={20} fontClassName="iconfont" classPrefix='icon' name='right1' className={'home-img'}/>
            </View>
        </View>
    )
}

export default Setting
