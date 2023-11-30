import { useEffect } from 'react'
import { useDidShow, useDidHide } from '@tarojs/taro'
// 全局样式
import './app.less'
import {userBasic} from "./store/network";
import {getTokenSync} from "./store/token";
import useStore from "./store/store";
import './assets/font/iconfont.css';
function App(props) {
  const {setUserInfo,userInfo}=useStore()
  const token = getTokenSync()
  // 可以使用所有的 React Hooks
  useEffect(()=>{
    if (token && !userInfo){
      userBasic().then(res=>{
        setUserInfo(res)
      })
    }
  },[token])

  // 对应 onShow
  useDidShow(() => {})

  // 对应 onHide
  useDidHide(() => {})

  return props.children
}

export default App
