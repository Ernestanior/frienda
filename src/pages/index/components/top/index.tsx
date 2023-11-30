import {View} from '@tarojs/components'
import {Picker} from '@nutui/nutui-react-taro'
import './index.less'
import Taro from "@tarojs/taro";
import nav1 from "../../../../assets/index/nav1.png";
import nav2 from "../../../../assets/index/nav2.png";
import logoImg from "../../../../assets/index/logo.png";
import {IconFont} from "@nutui/icons-react-taro";
import friend from "../../../../assets/index/friend.png";
import {useState} from "react";

const statusBarHeight:any=Taro.getSystemInfoSync().statusBarHeight
const cityList: {value:string,text:string }[]=[{value:'上海',text:'上海'},
    {value:'北京',text:'北京'},{value:'深圳',text:'深圳'},
    {value:'香港',text:'香港'},{value:'新加坡',text:'新加坡'}]
const Index=()=> {
    const [nav,setNav]=useState<number>(0)
    const [pickerVisible,setPickerVisible]=useState<boolean>(false)
    const [city,setCity]=useState<string>('上海')

    const onPickerConfirm=(e)=>{
        setCity(e[0].value)
        setPickerVisible(false)
    }
    return (
        <View className={'top-section'} style={{paddingTop:statusBarHeight+44}}>
            <View className={'nav-bar'} >
                {!nav?<img alt="" src={nav1} className={'navigation-image-one'}/>:<View onTap={()=>setNav(0)}>达人/俱乐部</View>}
                {nav?<img alt="" src={nav2} className={'navigation-image-two'}/>:<View onTap={()=>setNav(1)}>商家</View>}
            </View>
            <View style={{display:"flex",position:"relative"}}>
                <View>
                    <View style={{display:"flex",alignItems:"center",width:"68vw"}}>
                        <img alt="" src={logoImg} className={'logo-image'}/>
                        <View onTap={()=>setPickerVisible(true)} className={'city-btn'}>
                            {city}
                            <IconFont size={12} fontClassName="iconfont" classPrefix='icon' name="caret-right"/>
                        </View>
                        <Picker visible={pickerVisible} options={cityList} onConfirm={onPickerConfirm} onClose={()=>setPickerVisible(false)}/>
                    </View>
                    <View className={'logo-text'}>有趣的灵魂，无处不在</View>

                </View>
                <img alt="" src={friend} className={'friend-img'}/>
                <View className={'search-bar'}>
                    <IconFont size={20} fontClassName="iconfont" classPrefix='icon' name="search" style={{marginRight:5}}/>
                    请输入搜索内容...
                </View>
            </View>
        </View>

    )
}
export default Index;
