import {View, Textarea} from '@tarojs/components'
import {IconFont} from "@nutui/icons-react-taro";
import './index.less'
import Taro from "@tarojs/taro";

const statusBarHeight:any=Taro.getSystemInfoSync().statusBarHeight

const Index =()=> {

    const onReturn=()=>{
        Taro.navigateBack()
    }
    return (
        <View className='create-activity-container' style={{paddingTop:statusBarHeight}}>
            <View className={'header'} style={{marginTop:statusBarHeight}}>
                <IconFont name={'back'} fontClassName="iconfont" classPrefix='icon' size={16} onClick={onReturn}/>
                创建活动
                <View style={{width:15}}/>
            </View>
        </View>
    )
}
export default Index
