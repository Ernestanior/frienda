import {View} from '@tarojs/components'
import './index.less'
// @ts-ignore
import Title from "@/common/title";


const Index=()=> {

    return (
        <View className={'merchant-main'} >
            <Title text={'主页'}/>
            <span className={'merchant-main-content'}>
                我们专注提高各种高质量走心作品主打硬核机制，专业dm每个月更新爆款剧本，带来更多全新体验上车请提前咨询！！
            </span>
        </View>
    )
}
export default Index;
