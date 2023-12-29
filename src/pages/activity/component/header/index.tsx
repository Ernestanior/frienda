import {View} from '@tarojs/components'
import './index.less'
import address from '@/assets/common/address1.png'
import calendar from '@/assets/common/calendar.png'
import copy from '@/assets/common/copy.png'
import navigation from '@/assets/common/navigation.png'
import {IconFont} from "@nutui/icons-react-taro";
const Index=()=> {
    return (
        <section className={'activity-header'}>
            <View className={'header-background'}>
                <View className={'plate-1'}/>
                <View className={'plate-2'}/>
                <View className={'plate-3'}/>
            </View>
            <View className={'header-content'}>
                <View className={'title'}>11.25周六三界碑13公里环穿</View>
                <View className={'row'}>
                    <div className={'tag'}>户外</div>
                    <div className={'tag'}>运动</div>
                    <div className={'tag'}>徒步</div>
                </View>
                <View className={'content'}>
                    <View className={'row'}>
                        <img alt='' className={'header-icon'} src={calendar}/>
                        <span className={'content-text'}>活动时间：08：00-18：00周六 11.25</span>
                    </View>
                    <View className={'row'}>
                        <img alt='' className={'header-icon'} src={address}/>
                        <span className={'content-text'}>694.5km 积水潭[地铁站]</span>
                        <img alt='' className={'header-icon-bigger'} src={navigation}/>
                    </View>
                    <View className={'row'}>
                        <img alt='' className={'header-icon'} src={copy}/>
                        <span className={'content-text'}>退款政策</span>
                        <IconFont size={13} fontClassName="iconfont" classPrefix='icon' name="right" style={{marginRight:5}}/>
                    </View>
                </View>
            </View>
        </section>
    )
}
export default Index;
