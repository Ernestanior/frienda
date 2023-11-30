import {useMemo, useState} from 'react'
import Taro, { useDidShow } from '@tarojs/taro'
import {View} from '@tarojs/components'
import type CustomTabBar from '../../custom-tab-bar'
import {userBasic, wxLogin} from "../../store/network";
// import {saveToken} from "../../store/token";
import folder from '@/assets/profile/folder.png'
import empty from '@/assets/profile/image.png'
import message from '@/assets/profile/message.png'
import order from '@/assets/profile/order.png'
import right from '@/assets/profile/right.png'
import crown from '@/assets/profile/crown.png'
import discover from '@/assets/profile/discover.png'
import './index.less'
import {Button} from "@nutui/nutui-react-taro";
import {saveToken} from "../../store/token";
import useStore from "../../store/store";

const User= ()=> {
    const {setUserInfo,userInfo}=useStore()
    const page = useMemo(() => Taro.getCurrentInstance().page, [])
    const [codeOpenId,setCodeOpenId]=useState<string>('')
    const [userData,setUserData]=useState<any>({})
    useDidShow(() => {
        const tabbar = Taro.getTabBar<CustomTabBar>(page)
        tabbar?.setSelected(3)
    })

    const bindPhoneNumber= async (e:any)=>{
        const res = await wxLogin({codeOpenId,codePhone:e.detail.code,...userData})
        saveToken(res,async ()=>{
            const userInfo = await userBasic()
            setUserInfo(userInfo)
        })
    }
    const login = () =>{
        Taro.login({
            success: function (res) {
                if (res.code) {
                    setCodeOpenId(res.code)
                } else {
                    console.log('登录失败！' + res.errMsg)
                }
            }
        })
        Taro.getUserProfile({
            desc: '用于完善会员资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
            success: (res) => {
                // 开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
                setUserData({encryptedData:res.encryptedData,iv:res.iv})
            }
        })
    }

    return (
        <View className="profile-page-container" >
            {userInfo?<div className="profile-login-button" >
                <img alt="" src={empty} className="profile-login-button-img"/>
                <span style={{marginLeft:10}}>{userInfo.name}</span>
            </div>:<div className="profile-login-button" onClick={login} >
                <img alt="" src={empty} className="profile-login-button-img"/>
                <Button style={{border:0,padding:8,fontFamily:"Gill Sans"}} openType={'getPhoneNumber'} onGetPhoneNumber={bindPhoneNumber}>点击登录</Button>
            </div>}
            <View className="profile-box" >
                <div className="profile-item-container" >
                    <div className="profile-item-text">
                        <img alt="" src={message} className="profile-item-icon"/>
                        消息
                    </div>
                    <img alt="" src={right} className="profile-item-right-icon"/>
                </div>
                <div className="profile-item-container" >
                    <div className="profile-item-text">
                        <img alt="" src={order} className="profile-item-icon"/>
                        订单
                    </div>
                    <img alt="" src={right} className="profile-item-right-icon"/>
                </div>
                <div className="profile-item-container" >
                    <div className="profile-item-text">
                        <img alt="" src={folder} className="profile-item-icon"/>
                        我的收藏
                    </div>
                    <img alt="" src={right} className="profile-item-right-icon"/>
                </div>
                <div className="profile-item-container" >
                    <div className="profile-item-text">
                        <img alt="" src={crown} className="profile-item-icon"/>
                        成就
                    </div>
                    <img alt="" src={right} className="profile-item-right-icon"/>
                </div>
            </View>
            <View className="profile-box" >
                <div className="profile-item-container" >
                    <div className="profile-item-text">
                        <img alt="" src={discover} className="profile-item-icon"/>
                        关于我们
                    </div>
                    <img alt="" src={right} className="profile-item-right-icon"/>
                </div>
            </View>
        </View>
    )
}

export default User
