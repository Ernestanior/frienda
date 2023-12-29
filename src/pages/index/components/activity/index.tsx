import { View} from '@tarojs/components'
import './index.less'
import demo1 from "../../../../assets/index/demo1.jpg";
import {IconFont} from "@nutui/icons-react-taro";
import profile from "../../../../assets/index/profile.png";
import demo2 from "../../../../assets/index/demo2.png";
import Taro from "@tarojs/taro";
const Index=()=> {
    // const goto=(page:string)=>{
    //     Taro.navigateTo({url:page})
    // }
    const toActivity=()=>{
        Taro.navigateTo({url:'/pages/activity/index'})
    }
    return (
        <View className={'activity-section'} onClick={toActivity}>
            <View className={'main-section'}>
                <img alt="" src={demo1} className={'demo1-img'}/>
                <View className={'main-content'}>
                    <View className={'activity-row'}>
                        <View className={'content-title'}>
                            官方推荐活动 · 上海
                            <View className={'content-tag'}>
                                官方
                            </View>
                        </View>
                        <View className={'content-link'}>
                            进入圈子
                            <IconFont size={12} fontClassName="iconfont" classPrefix='icon' name="right" />
                        </View>
                    </View>
                    <View className={'content-scale'}>
                        345位成员 · 260场活动
                    </View>
                    <View className={'content-bullet'}>
                        <View className={'bullet-item'}>
                            <img alt="" src={profile} className={'bullet-profile-img'}/>
                            <View className={'bullet-text'}>@米咕咕 欢迎新入的朋友</View>
                        </View>
                        <View className={'bullet-item'}>
                            <img alt="" src={profile} className={'bullet-profile-img'}/>
                            <View className={'bullet-text'}>@米咕咕 欢迎新入的朋友</View>
                        </View>
                        <View className={'bullet-item'}>
                            <img alt="" src={profile} className={'bullet-profile-img'}/>
                            <View className={'bullet-text'}>@米咕咕 欢迎新入的朋友</View>
                        </View>
                    </View>
                </View>
            </View>
            <View className={'secondary-section'}>
                <View className={'secondary-tag'}>
                    <IconFont size={12} fontClassName="iconfont" classPrefix='icon' name="dot-circle" style={{marginRight:5}}/>
                    下一个活动
                </View>
                <View className={'activity-row'} >
                    <img alt="" src={demo2} className={'secondary-img'}/>
                    <View className={'secondary-content'}>
                        <View className={'content-title'}>
                            周一嚎叫 | 5人制欢乐皮卡pick up pick up ！！！
                        </View>
                        <View className={'content-date'}>
                            周一 09月12日 08：30 · 地址公园旁边
                        </View>
                    </View>
                </View>
            </View>
        </View>

    )
}
export default Index;
