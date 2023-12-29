import {View} from '@tarojs/components'
import './index.less'
import profile from "../../../../assets/index/profile.png";

const Index=()=> {

    return (
        <View className={'participant-container'} >
            <View className={'participant-header'}>
                <span className={'title'}>当前参与 15/19</span>
                <span className={'desc'}>仅剩4个名额</span>
            </View>
            <View className={'participant-content'}>
                <img alt="" src={profile} className='profile-img'/>
                <img alt="" src={profile} className='profile-img'/>
                <img alt="" src={profile} className='profile-img'/>
                <img alt="" src={profile} className='profile-img'/>
                <img alt="" src={profile} className='profile-img'/>
            </View>
        </View>
    )
}
export default Index;
