
import {Radio, View} from '@tarojs/components'
import {Button} from "@nutui/nutui-react-taro";
// import male from '@/assets/gender/male.png';
// import female from '@/assets/gender/female.png'
import './index.less'
import {useState} from "react";
const Gender= ()=> {
    const [selected,setSelected]=useState<boolean>(false)
    return (
        <View className="gender-selector-container" >
            <View className="gender-selector-content">
                <View className="gender-selector-item">
                    {/*<img style={{width:90,height:90,marginBottom:10}} src={male} alt="" />*/}
                    <Radio checked={!selected}  onClick={()=>setSelected(false)}></Radio>
                </View>
                <View className="gender-selector-item">
                    {/*<img style={{width:90,height:90,marginBottom:10}} src={female} alt="" />*/}
                    <Radio checked={selected} onClick={()=>setSelected(true)} ></Radio>
                </View>
            </View>
            <Button className="gender-selector-btn">确认</Button>
        </View>
    )
}

export default Gender
