import { View} from '@tarojs/components'
import './index.less'
import {IconFont} from "@nutui/icons-react-taro";
import Taro from "@tarojs/taro";

const statusBarHeight:any=Taro.getSystemInfoSync().statusBarHeight

interface IProps{
    title:string
}
const Header= ({title}:IProps)=> {
    const onReturn=()=>{
        Taro.navigateBack()
    }
    return (
        <View className={'header'} style={{marginTop:statusBarHeight}}>
            <IconFont name={'back'} fontClassName="iconfont" classPrefix='icon' size={22} onClick={onReturn}/>
            {title}
            <View style={{width:42}}/>
        </View>
    )
}

export default Header
