import {View} from '@tarojs/components'
import './index.less'
import Header from "./component/header";
import Nav from "./component/participant";
import Main from "./component/main";
import Bottom from "./component/bottom";

export default function Index () {

    return (
        <>
            <View className='activity-container' style={{background:"#eee url('../../assets/index/demo1.jpg') no-repeat",backgroundSize:"contain",}}>
                <Header/>
                <Nav/>
                <Main/>
            </View>
            <Bottom/>

        </>

    )
}
