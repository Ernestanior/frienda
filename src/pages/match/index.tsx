import { View } from '@tarojs/components'
import './index.less'
import { Range, ConfigProvider, Switch } from '@nutui/nutui-react-taro';
import Taro from "@tarojs/taro";
import { useCallback } from "react";
import game from '@/assets/match/game.png';
import beauty from '@/assets/match/beauty.png';
import gym from '@/assets/match/gym.png';
import massage from '@/assets/match/massage.png';
import movie from '@/assets/match/movie.png';
import outdoor from '@/assets/match/outdoor.png';

const statusBarHeight: any = Taro.getSystemInfoSync().statusBarHeight

const Index = () => {

    const onBooking = useCallback(() => {
        Taro.navigateTo({ url: '/pages/orderDetail/index' })
    }, [])

    return (
        <View className={'match-container'}>
            <View className={'header'} style={{ marginTop: statusBarHeight ,display:"flex",justifyContent:"center"}}>
                配对
            </View>
            <View className='match-box' >
                <View className={'match-cell'}>
                    <View className={'cell-title'}>距离</View>
                    <ConfigProvider theme={customizeTheme}>
                        <Range className={'cell-content'} defaultValue={40} onEnd={(val) => console.log(`${val}`)}
                               maxDescription={'km'}
                               minDescription={null}
                               currentDescription={(value) => value}
                               marks={{
                                   0: 0,
                                   100: 100,
                               }}
                               button={<View className={'dot-out'}>
                                   <View className={'dot-in'}/>
                               </View>} />
                    </ConfigProvider>
                </View>
                <View className={'match-cell'}>
                    <View className={'cell-title'}>人数</View>
                    <ConfigProvider theme={customizeTheme}>
                        <Range className={'cell-content'} defaultValue={40} onEnd={(val) => console.log(`${val}`)}
                               maxDescription={null}
                               minDescription={null}
                               marks={{
                                   0: 0,
                                   100: 100,
                               }}
                               button={<View className={'dot-out'}>
                                   <View className={'dot-in'}></View>
                               </View>} />
                    </ConfigProvider>
                </View>
                <View className={'match-item'}>
                    <View>是否速拼</View>
                    <Switch defaultChecked style={{'--nutui-switch-open-background-color': '#ffc402'} as any} />
                </View>
            </View>
            <View className='match-second-box' >
                <View className='type'>
                    <img alt='' className={'type-image'} src={game} />
                    <View>休闲娱乐</View>
                </View>
                <View className='type'>
                    <img alt='' className={'type-image'} src={beauty} />
                    <View>丽人呵护</View>
                </View>
                <View className='type'>
                    <img alt='' className={'type-image'} src={gym} />
                    <View>运动健身</View>
                </View>
                <View className='type'>
                    <img alt='' className={'type-image'} src={outdoor} />
                    <View>轻奢户外</View>
                </View>
                <View className='type'>
                    <img alt='' className={'type-image'} src={massage} style={{ width: 40, height: 40, marginBottom: 10 }} />
                    <View>按摩/会所</View>
                </View>
                <View className='type'>
                    <img alt='' className={'type-image'} src={movie} />
                    <View>电影/演出</View>
                </View>
            </View>
            <View className={'btn'} onTap={onBooking}>开始配对</View>


        </View>
    )
}
export default Index;

const customizeTheme = {
    nutuiRangeButtonBorder: '1px solid rgba(52,96,250,1)',
    nutuiRangeActiveColor:
        'linear-gradient(315deg, rgb(255,186,45) 0%,rgb(255,229,166) 100%)',
    // nutuiRangeInactiveColor: 'rgb(255,245,225)',
    nutuiRangeInactiveColor: 'rgb(255,229,166)',
    nutuiRangeMargin: '20px',
    nutuiRangeHeight: '5px',
}
