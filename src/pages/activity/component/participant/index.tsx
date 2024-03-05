import {View} from '@tarojs/components'
import './index.less'

interface IProps{
    maxNum:string;
    participant:any[];
}
const Index=({maxNum='10',participant=[]}:IProps)=> {

    return (
        <View className={'participant-container'} >
            <View className={'participant-header'}>
                <span className={'title'}>当前参与 {participant.length}/{maxNum}</span>
                <span className={'desc'}>剩{parseInt(maxNum)-participant.length}个名额</span>
            </View>
            {/*<View className={'participant-content'}>*/}
            {/*    <img alt="" src={profile} className='profile-img'/>*/}
            {/*    <img alt="" src={profile} className='profile-img'/>*/}
            {/*    <img alt="" src={profile} className='profile-img'/>*/}
            {/*    <img alt="" src={profile} className='profile-img'/>*/}
            {/*    <img alt="" src={profile} className='profile-img'/>*/}
            {/*</View>*/}
        </View>
    )
}
export default Index;
