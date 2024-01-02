import { View } from '@tarojs/components'
import './index.less'
import {IconFont} from "@nutui/icons-react-taro";
import {Range, Cell, ConfigProvider} from '@nutui/nutui-react-taro';
import Taro from "@tarojs/taro";
import {useCallback} from "react";

const statusBarHeight:any=Taro.getSystemInfoSync().statusBarHeight

const Index =()=>{

    const onReturn=()=>{
        Taro.navigateBack()
    }
    const onBooking=useCallback(()=>{
        Taro.navigateTo({url:'/pages/orderDetail/index'})

    },[])

        return (
            <View className={'match-container'}>
                <View className={'header'} style={{marginTop:statusBarHeight}}>
                    <IconFont name={'back'} fontClassName="iconfont" classPrefix='icon' size={16} onClick={onReturn}/>
                    配对
                    <View style={{width:15}}/>
                </View>
                <View className='match-box' >
                    <View>
                        <View>距离</View>
                        <Cell className={'match-cell'}>
                            <ConfigProvider theme={customizeTheme}>
                                <Range defaultValue={40} onEnd={(val) => console.log(`${val}`)}
                                       maxDescription={null}
                                       minDescription={null}
                                       marks={{
                                           0:0,
                                           100:100,
                                       }}
                                       button={<View className={'dot-out'}>
                                           <View className={'dot-in'}></View>
                                       </View>}/>
                            </ConfigProvider>
                        </Cell>
                    </View>
                </View>

                <View className={'btn'} onTap={onBooking}>去报名</View>


            </View>
        )
}
export default Index;

const customizeTheme = {nutuiRangeButtonBorder: '1px solid rgba(52,96,250,1)',
    nutuiRangeActiveColor:
        'linear-gradient(315deg, rgb(255,186,45) 0%,rgb(255,229,166) 100%)',
    // nutuiRangeInactiveColor: 'rgb(255,245,225)',
    nutuiRangeInactiveColor: 'rgb(255,229,166)',
    nutuiRangeMargin: '20px',
    nutuiRangeHeight: '5px',}
