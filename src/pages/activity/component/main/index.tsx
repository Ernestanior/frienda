import {View} from '@tarojs/components'
import './index.less'
// @ts-ignore
import Title from "@/common/title";

interface IProps{
    desc:string;
}
const Index=({desc}:IProps)=> {
    return (
        <View className={'merchant-main'} >
            <Title text={'活动详情'}/>
            <span className={'merchant-main-content'}>
                {desc}
            </span>
        </View>
    )
}
export default Index;
