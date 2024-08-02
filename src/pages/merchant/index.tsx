import {useCallback, useMemo, useState} from 'react'
import Taro, { useDidShow } from '@tarojs/taro'
import {View} from '@tarojs/components'
import './index.less'
import Header from "./component/header";
import Nav from "./component/nav";
import Main from "./component/main";
import Activity from "./component/activity";
import Comment from "./component/comment";
import Bottom from "./component/bottom";

export default function Index () {
    const [nav,setNav]=useState<number>(3)
    const page = useMemo(() => Taro.getCurrentInstance().page, [])

    const jumpTo=useCallback((nav:number)=>{
        setNav(nav)
        const selector=nav===3?'.merchant-main':nav===4?'.merchant-activity':'.merchant-comment'
        Taro.pageScrollTo({selector})
    },[nav])
    useDidShow(() => {
        const tabbar = Taro.getTabBar<any>(page)
        tabbar?.setSelected(1)
    })

    return (
        <>
            <View className='merchant-container' style={{background:"#eee url('https://pic.ziyuan.wang/user/guest/2024/01/u1_c4e1bf35f9d6b.jpg') no-repeat",backgroundSize:"contain",}}>
                <Header/>
                <Nav nav={nav} onChangeNav={(nav)=>jumpTo(nav)}/>
                <Main/>
                <Activity/>
                <Comment/>
            </View>
            <Bottom/>

        </>

    )
}
