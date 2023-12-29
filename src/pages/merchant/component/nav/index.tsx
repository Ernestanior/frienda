import {View} from '@tarojs/components'
import './index.less'
import nav3 from "../../../../assets/nav/nav3.png";
import nav4 from "../../../../assets/nav/nav4.png";
import nav5 from "../../../../assets/nav/nav5.png";

const Index=({nav,onChangeNav})=> {

    return (
        <View className={'nav-bar'} >
            <View className={'nav-item'}>
                {nav===3?<img alt="" src={nav3} className={'navigation-image-three'}/>:<View onTap={()=>onChangeNav(3)}>主页</View>}
            </View>
            <View className={'nav-item'}>
                {nav===4?<img alt="" src={nav4} className={'navigation-image-four'}/>:<View onTap={()=>onChangeNav(4)}>活动</View>}
            </View>
            <View className={'nav-item'}>
                {nav===5?<img alt="" src={nav5} className={'navigation-image-five'}/>:<View onTap={()=>onChangeNav(5)}>评价</View>}
            </View>
        </View>
    )
}
export default Index;
