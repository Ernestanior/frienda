import './index.less'
import {View} from "@tarojs/components";
import TopSection from './components/top'
import CircleSection from './components/circle'
import ActivitySection from './components/activity'
import RoomList from './components/RoomList'
import HomeTab from './components/tab'


const Index =()=> {
    return (
        <View className={'index-container'}>
            <TopSection/>
            <CircleSection/>
            <ActivitySection/>
            <RoomList/>
            <HomeTab/>
            <View style={{height:60}}></View>
        </View>
    )
}
export default Index
