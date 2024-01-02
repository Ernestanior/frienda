import {View} from '@tarojs/components'
import './index.less'
import Header from "./component/header";
import Nav from "./component/participant";
import Main from "./component/main";
import Bottom from "./component/bottom";

export default function Index () {

    return (
        <>
            <View className='activity-container' style={{background:"#eee url('https://pic.ziyuan.wang/user/guest/2024/01/u1_c4e1bf35f9d6b.jpg') no-repeat",backgroundSize:"contain",}}>
                <Header/>
                <Nav/>
                <Main/>
            </View>
            <Bottom/>

        </>

    )
}
