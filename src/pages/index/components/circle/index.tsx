import {View} from '@tarojs/components'
import './index.less'
import hot from "../../../../assets/index/hot.png";
import shop from "../../../../assets/index/shop.png";
const Index=()=> {
    return (
        <View className={'circle-section'}>
            <View className={'circle-item'}>
                <img alt="" src={hot} className={'circle-img'}/>
                最火圈子
            </View>
            <View className={'circle-item'}>
                <img alt="" src={shop} className={'circle-img'}/>
                Time
            </View>
            <View className={'circle-item'}>
                <img alt="" src={shop} className={'circle-img'}/>
                星月
            </View>
            <View className={'circle-item'}>
                <img alt="" src={shop} className={'circle-img'}/>
                玛卡巴卡
            </View>
            <View className={'circle-item'}>
                <img alt="" src={shop} className={'circle-img'}/>
                666
            </View>
        </View>
    )
}
export default Index;
