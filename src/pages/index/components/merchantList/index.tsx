import {View} from '@tarojs/components'
import demo4 from '../../../../assets/index/demo4.png'
import profile from '../../../../assets/index/profile.png'

import './index.less'
import {IconFont} from "@nutui/icons-react-taro";
import Taro from "@tarojs/taro";
const Index=()=> {
    // const goto=(page:string)=>{
    //     Taro.navigateTo({url:page})
    // }
    const toMerchant=()=>{
            Taro.navigateTo({url:'/pages/merchant/index'})
    }
    return (
            <View className='room-container' onClick={toMerchant}>
                <View className='room-box' >
                    <View className='room-row'>
                        <View className='room-image'>
                            <img alt="" src={demo4} className={'image'}/>
                            <View className={'image-tag'}>报名中</View>
                        </View>
                        <View className='room-content'>
                            <View className='content-title'>
                                摄影 | 黑龙潭风铃节 打卡小冰岛
                            </View>
                            <View className='content-date'>
                                <IconFont size={13} fontClassName="iconfont" classPrefix='icon' name="clock" style={{marginRight:5}}/>
                                20:30-22:30 周一 06.12
                            </View>
                            <View className='content-address'>
                                <IconFont size={13} fontClassName="iconfont" classPrefix='icon' name="address" style={{marginRight:5}}/>
                                11km 景天320足球公园
                            </View>
                            <View className='content-organizer'>
                                <img alt="" src={profile} className='profile-img'/>
                                Floyd Miles
                            </View>
                        </View>
                    </View>

                </View>
                <View className='room-box' >
                    <View className='room-row'>
                        <View className='room-image'>
                            <img alt="" src={demo4} className={'image'}/>
                            <View className={'image-tag'}>报名中</View>
                        </View>
                        <View className='room-content'>
                            <View className='content-title'>
                                摄影 | 黑龙潭风铃节 打卡小冰岛
                            </View>
                            <View className='content-date'>
                                <IconFont size={13} fontClassName="iconfont" classPrefix='icon' name="clock" style={{marginRight:5}}/>
                                20:30-22:30 周一 06.12
                            </View>
                            <View className='content-address'>
                                <IconFont size={13} fontClassName="iconfont" classPrefix='icon' name="address" style={{marginRight:5}}/>
                                11km 景天320足球公园
                            </View>
                            <View className='content-organizer'>
                                <img alt="" src={profile} className='profile-img'/>
                                Floyd Miles
                            </View>
                        </View>
                    </View>

                </View>
                <View className='room-box' >
                    <View className='room-row'>
                        <View className='room-image'>
                            <img alt="" src={demo4} className={'image'}/>
                            <View className={'image-tag'}>报名中</View>
                        </View>
                        <View className='room-content'>
                            <View className='content-title'>
                                摄影 | 黑龙潭风铃节 打卡小冰岛
                            </View>
                            <View className='content-date'>
                                <IconFont size={13} fontClassName="iconfont" classPrefix='icon' name="clock" style={{marginRight:5}}/>
                                20:30-22:30 周一 06.12
                            </View>
                            <View className='content-address'>
                                <IconFont size={13} fontClassName="iconfont" classPrefix='icon' name="address" style={{marginRight:5}}/>
                                11km 景天320足球公园
                            </View>
                            <View className='content-organizer'>
                                <img alt="" src={profile} className='profile-img'/>
                                Floyd Miles
                            </View>
                        </View>
                    </View>

                </View>
                <View className='room-box' >
                    <View className='room-row'>
                        <View className='room-image'>
                            <img alt="" src={demo4} className={'image'}/>
                            <View className={'image-tag'}>报名中</View>
                        </View>
                        <View className='room-content'>
                            <View className='content-title'>
                                摄影 | 黑龙潭风铃节 打卡小冰岛
                            </View>
                            <View className='content-date'>
                                <IconFont size={13} fontClassName="iconfont" classPrefix='icon' name="clock" style={{marginRight:5}}/>
                                20:30-22:30 周一 06.12
                            </View>
                            <View className='content-address'>
                                <IconFont size={13} fontClassName="iconfont" classPrefix='icon' name="address" style={{marginRight:5}}/>
                                11km 景天320足球公园
                            </View>
                            <View className='content-organizer'>
                                <img alt="" src={profile} className='profile-img'/>
                                Floyd Miles
                            </View>
                        </View>
                    </View>

                </View>

            </View>
    )
}
export default Index;
