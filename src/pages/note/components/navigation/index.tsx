import {View} from '@tarojs/components'


import './index.less'
import Taro from "@tarojs/taro";
const Index=()=> {
    const goto=(page:string)=>{
        Taro.navigateTo({url:page})
    }
    return (
            <View className='navigation-container'>
                <View className='navigation-item' onClick={()=>goto('a')}>
                    {/*<img alt="" src={image1} className={'navigation-image'}/>*/}
                    <div className={'navigation-text'}>剧本库</div>
                </View>
                <View className='navigation-item'>
                    {/*<img alt="" src={image2} className={'navigation-image'}/>*/}
                    <div className={'navigation-text'}>剧本榜</div>
                </View>
                <View className='navigation-item'>
                    {/*<img alt="" src={image3} className={'navigation-image'}/>*/}
                    <div className={'navigation-text'}>同城店</div>
                </View>
                <View className='navigation-item' onClick={()=>goto('/pages/noteList/index')}>
                    {/*<img alt="" src={image4} className={'navigation-image'}/>*/}
                    <div className={'navigation-text'}>组局</div>
                </View>
            </View>
    )
}
export default Index;
