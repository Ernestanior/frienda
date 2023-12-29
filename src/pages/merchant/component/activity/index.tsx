import {View} from '@tarojs/components'
import './index.less'
// @ts-ignore
import Title from "@/common/title";
import demo4 from "../../../../assets/index/demo4.png";
import {IconFont} from "@nutui/icons-react-taro";
import profile from "../../../../assets/index/profile.png";


const Index=()=> {

    return (
        <View className={'merchant-activity'} >
            <Title text={'活动'}/>
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
                        <View className='people'>
                            <View className='people-list'>
                                <img alt="" src={profile} className='profile-img'/>
                                <img alt="" src={profile} className='profile-img'/>
                                <img alt="" src={profile} className='profile-img'/>
                                <img alt="" src={profile} className='profile-img'/>
                            </View>
                            20人已加入
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
                        <View className='people'>
                            <View className='people-list'>
                                <img alt="" src={profile} className='profile-img'/>
                                <img alt="" src={profile} className='profile-img'/>
                                <img alt="" src={profile} className='profile-img'/>
                                <img alt="" src={profile} className='profile-img'/>
                            </View>
                            20人已加入
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
                        <View className='people'>
                            <View className='people-list'>
                                <img alt="" src={profile} className='profile-img'/>
                                <img alt="" src={profile} className='profile-img'/>
                                <img alt="" src={profile} className='profile-img'/>
                                <img alt="" src={profile} className='profile-img'/>
                            </View>
                            20人已加入
                        </View>
                    </View>
                </View>


            </View>

        </View>
    )
}
export default Index;
