import {View} from '@tarojs/components'
import './index.less'
import address from '@/assets/common/address1.png'
import calendar from '@/assets/common/calendar.png'
import copy from '@/assets/common/copy.png'
import navigation from '@/assets/common/navigation.png'
import {IconFont} from "@nutui/icons-react-taro";
import moment from "moment/moment";

const Index=({data})=> {
    return (
        data && <section className={'activity-header'}>
            <View className={'header-background'}>
                <View className={'plate-1'}/>
                <View className={'plate-2'}/>
                <View className={'plate-3'}/>
            </View>
            <View className={'header-content'}>
                <View className={'title'}>{data.title}</View>
                <View className={'row'}>
                    <div className={'tag'}>户外</div>
                    <div className={'tag'}>运动</div>
                    <div className={'tag'}>徒步</div>
                </View>
                <View className={'content'}>
                    <View className={'row'}>
                        <img alt='' className={'header-icon'} src={calendar}/>
                        <View style={{display:"flex",flexDirection:"column"}}>
                            <span className={'content-text'}>活动开始：{moment(data.start).format('HH:mm ddd DD/MM/YYYY')}</span>
                            <span className={'content-text'}>活动结束：{moment(data.end).format('HH:mm ddd DD/MM/YYYY')}</span>
                        </View>
                   </View>
                    <View className={'row'}>
                        <img alt='' className={'header-icon'} src={address}/>
                        <span className={'content-text'}>{data.address}</span>
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
