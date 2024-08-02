import { useEffect } from 'react'
import Taro, { useDidShow, useDidHide } from '@tarojs/taro'
// 全局样式
import './app.less'
import '@/assets/font/iconfont.css';
import useUserInfo from "./hooks/useUserInfo";
import {removeToken} from "./store/token";
function App(props) {
  const {loadDetail}=useUserInfo()
  useEffect(()=>{
    Taro.cloud.init()
  },[])

  // 可以使用所有的 React Hooks
  useEffect(()=>{
    Taro.checkSession({
      success:loadDetail,
      fail:()=>{
        console.log('token expire')
        removeToken(loadDetail)
      }
    })
  },[])

  // 对应 onShow
  useDidShow(() => {})

  // 对应 onHide
  useDidHide(() => {})

  return props.children
}

export default App
