import { View } from '@tarojs/components'
import './index.less'
import demo4 from "../../assets/index/demo4.png";
import {IconFont} from "@nutui/icons-react-taro";
import profile from "../../assets/index/profile.png";
import home from "../../assets/common/home.png";
import Taro from "@tarojs/taro";
import {useCallback} from "react";

const statusBarHeight:any=Taro.getSystemInfoSync().statusBarHeight

const Index =()=>{

    const onReturn=()=>{
        Taro.navigateBack()
    }
    const onBooking=useCallback(()=>{
        Taro.navigateTo({url:'/pages/orderDetail/index'})

    },[])

        return (
            <View className={'pay-container'}>
                <View className={'header'} style={{marginTop:statusBarHeight}}>
                    <IconFont name={'back'} fontClassName="iconfont" classPrefix='icon' size={16} onClick={onReturn}/>
                    活动报名
                    <View style={{width:15}}/>
                </View>
                <View className='pay-box' >
                    <View className='merchant'>
                        <img alt="" src={home} className={'merchant-icon'}/>
                        宇宙探索编辑部
                    </View>
                    <View className='pay-row'>
                        <View className='pay-image'>
                            <img alt="" src={demo4} className={'image'}/>
                        </View>
                        <View className='pay-content'>
                            <View className='content-title'>
                                摄影 | 黑龙潭风铃节 打卡小冰岛
                            </View>
                            <View className='content-date'>
                                <IconFont size={13} fontClassName="iconfont" classPrefix='icon' name="clock" style={{marginRight:5}}/>
                                20:30-22:30 周一 06.12
                            </View>
                            <View className='content-address'>
                                <IconFont size={13} fontClassName="iconfont" classPrefix='icon' name="address" style={{marginRight:5}}/>
                                11km 景天320足球公园
                            </View>
                            <View className='content-organizer'>
                                <img alt="" src={profile} className='profile-img'/>
                                Floyd Miles
                            </View>
                        </View>
                    </View>
                </View>
                <View className='pay-box' >
                    <View className='pay-row' style={{paddingBottom:10,marginBottom:10,borderBottom:"1px solid #eee"}}>
                        <View >抵用券</View>
                        <View className='pay-row-right-side'>
                            暂无可用
                            <IconFont size={13} fontClassName="iconfont" classPrefix='icon' name="right1" style={{marginRight:5}}/>
                        </View>
                    </View>
                    <View className='pay-row'>
                        <View >预付定金</View>
                        <View className='pay-row-right-side'>
                            <span>合计</span>
                            <span className={'orange'}>￥99.00</span>
                            <IconFont size={13} fontClassName="iconfont" classPrefix='icon' name="right1" style={{marginRight:5}}/>
                        </View>
                    </View>
                    <View className='price-detail'>
                        <View className='pay-row'>
                            <View>拼场价格</View>
                            <View>1人 x ￥99</View>
                        </View>
                        <View style={{fontSize:10,display:"flex",justifyContent:"flex-end",marginTop:20,paddingRight:10}}>
                            <span>实付金额</span>
                            <span className={'orange'}>￥108.00</span>
                        </View>
                    </View>
                </View>
                <View className='pay-box' >
                    <View className='pay-row' style={{paddingBottom:10,marginBottom:10,borderBottom:"1px solid #eee"}}>
                        <View >参与人称呼 （可非实名）</View>
                        <View className='pay-row-right-side'>
                            请输入
                        </View>
                    </View>
                    <View className='pay-row' style={{paddingBottom:10,marginBottom:10,borderBottom:"1px solid #eee"}}>
                        <View >联系电话（可非实名）</View>
                        <View className='pay-row-right-side'>
                            请输入联系电话
                        </View>
                    </View>
                    <View className='pay-row' >
                        <View >社交媒体（link）</View>
                        <View className='pay-row-right-side'>
                            非必填项
                        </View>
                    </View>
                </View>
                <View className={'btn'} onTap={onBooking}>去报名</View>


            </View>
        )
}
export default Index;
