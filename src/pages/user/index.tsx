import {View} from '@tarojs/components'
import './index.less'
import {IconFont} from "@nutui/icons-react-taro";
import Taro from "@tarojs/taro";
import qq from '@/assets/profile/qq.jpeg'
import nav3 from "../../assets/nav/nav3.png";
import nav4 from "../../assets/nav/nav4.png";
import nav5 from "../../assets/nav/nav5.png";
import {useCallback, useState} from "react";
import Title from "../../common/title";
import demo4 from "../../assets/index/demo4.png";
import profile from "../../assets/index/profile.png";

const statusBarHeight:any=Taro.getSystemInfoSync().statusBarHeight

export default function Index () {
    const [nav,setNav]=useState<number>(3)

    const jumpTo=useCallback((nav:number)=>{
        setNav(nav)
        const selector=nav===3?'.user-main':nav===4?'.user-activity':'.user-comment'
        Taro.pageScrollTo({selector})
    },[nav])


    const onReturn=()=>{
        Taro.navigateBack()
    }

    return (
        <>
            <View className='user-container'>
                <View className={'top-container'}>
                    <View className={'header'} style={{marginTop:statusBarHeight}}>
                        <IconFont name={'back'} fontClassName="iconfont" classPrefix='icon' size={16} onClick={onReturn}/>
                    </View>
                    <View className={'user-detail'}>
                        <View className={'profile'} >
                            <img alt="" src={qq}  className="profile-img"/>
                            <View >JD SKI</View>
                        </View>
                        <View className={'column'}>
                            <View className={'number'}>32</View>
                            <View className={'text'}>组织活动</View>
                        </View>
                        <View className={'column'}>
                            <View className={'number'}>320</View>
                            <View className={'text'}>收藏量</View>
                        </View>
                        <View className={'icon'}>
                            <IconFont name={'share'} fontClassName="iconfont" classPrefix='icon' size={26} />
                            <IconFont name={'favor'} fontClassName="iconfont" classPrefix='icon' size={26} />
                        </View>
                    </View>
                    <View className={'tag-list'}>
                        <div className={'tag'}>户外</div>
                        <div className={'tag'}>运动</div>
                        <div className={'tag'}>徒步</div>
                    </View>
                    <View className={'desc'}>
                        阳光宅男，擅长骑马涉猎，网球，躲猫猫，飞盘，徒步，野外运动，希望和大家玩得开心
                    </View>
                </View>
                <View className={'content-container'}>
                    <View className={'nav-bar'} >
                        <View className={'nav-item'}>
                            {nav===3?<img alt="" src={nav3} className={'navigation-image-three'}/>:<View onTap={()=>jumpTo(3)}>主页</View>}
                        </View>
                        <View className={'nav-item'}>
                            {nav===4?<img alt="" src={nav4} className={'navigation-image-four'}/>:<View onTap={()=>jumpTo(4)}>活动</View>}
                        </View>
                        <View className={'nav-item'}>
                            {nav===5?<img alt="" src={nav5} className={'navigation-image-five'}/>:<View onTap={()=>jumpTo(5)}>评价</View>}
                        </View>
                    </View>
                    <View className={'user-main'} >
                        <span className={'merchant-main-content'}>
                            我们专注提高各种高质量走心作品主打硬核机制，专业dm每个月更新爆款剧本，带来更多全新体验上车请提前咨询！！
                        </span>
                    </View>
                    <View className={'user-activity'} >
                        <Title text={'活动'}/>
                        <View className='room-box' >
                            <View className='room-row'>
                                <View className='room-image'>
                                    <img alt="" src={demo4} className={'image'}/>
                                    <View className={'image-tag'}>报名中</View>
                                </View>
                                <View className='room-content'>
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
                                    <View className='people'>
                                        <View className='people-list'>
                                            <img alt="" src={profile} className='profile-img'/>
                                            <img alt="" src={profile} className='profile-img'/>
                                            <img alt="" src={profile} className='profile-img'/>
                                            <img alt="" src={profile} className='profile-img'/>
                                        </View>
                                        20人已加入
                                    </View>
                                </View>
                            </View>


                        </View>
                        <View className='room-box' >
                            <View className='room-row'>
                                <View className='room-image'>
                                    <img alt="" src={demo4} className={'image'}/>
                                    <View className={'image-tag'}>报名中</View>
                                </View>
                                <View className='room-content'>
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
                                    <View className='people'>
                                        <View className='people-list'>
                                            <img alt="" src={profile} className='profile-img'/>
                                            <img alt="" src={profile} className='profile-img'/>
                                            <img alt="" src={profile} className='profile-img'/>
                                            <img alt="" src={profile} className='profile-img'/>
                                        </View>
                                        20人已加入
                                    </View>
                                </View>
                            </View>


                        </View>
                        <View className='room-box' >
                            <View className='room-row'>
                                <View className='room-image'>
                                    <img alt="" src={demo4} className={'image'}/>
                                    <View className={'image-tag'}>报名中</View>
                                </View>
                                <View className='room-content'>
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
                                    <View className='people'>
                                        <View className='people-list'>
                                            <img alt="" src={profile} className='profile-img'/>
                                            <img alt="" src={profile} className='profile-img'/>
                                            <img alt="" src={profile} className='profile-img'/>
                                            <img alt="" src={profile} className='profile-img'/>
                                        </View>
                                        20人已加入
                                    </View>
                                </View>
                            </View>


                        </View>

                    </View>
                    <View className={'user-comment'} >
                        <Title text={'评论'}/>
                        <View className={'comment-box'}>
                            <View className={'comment-header'}>
                                <View style={{display:"flex"}}>
                                    <img alt="" src={profile} className='profile-img'/>
                                    <View className={'profile'}>
                        <span className={'profile-name'}>
                            Judy
                        </span>
                                        <span className={'rate'}>
                            <IconFont name={'star-fill'} size={10} className={'star-icon'}/>
                            <IconFont name={'star-fill'} size={10} className={'star-icon'}/>
                            <IconFont name={'star-fill'} size={10} className={'star-icon'}/>
                            <IconFont name={'star-fill'} size={10} className={'star-icon'}/>
                            <IconFont name={'star-fill'} size={10} className={'star-icon'}/>
                        </span>
                                    </View>
                                </View>
                                <span className={'date'}>2023-12-21</span>
                            </View>
                            <View className={'comment-content'}>
                                非常好！我很喜欢！
                            </View>

                        </View>
                        <View className={'comment-box'}>
                            <View className={'comment-header'}>
                                <View style={{display:"flex"}}>
                                    <img alt="" src={profile} className='profile-img'/>
                                    <View className={'profile'}>
                        <span className={'profile-name'}>
                            Judy
                        </span>
                                        <span className={'rate'}>
                            <IconFont name={'star-fill'} size={10} className={'star-icon'}/>
                            <IconFont name={'star-fill'} size={10} className={'star-icon'}/>
                            <IconFont name={'star-fill'} size={10} className={'star-icon'}/>
                            <IconFont name={'star-fill'} size={10} className={'star-icon'}/>
                            <IconFont name={'star-fill'} size={10} className={'star-icon'}/>
                        </span>
                                    </View>
                                </View>
                                <span className={'date'}>2023-12-21</span>
                            </View>
                            <View className={'comment-content'}>
                                非常好！我很喜欢！
                            </View>

                        </View>
                        <View className={'comment-box'}>
                            <View className={'comment-header'}>
                                <View style={{display:"flex"}}>
                                    <img alt="" src={profile} className='profile-img'/>
                                    <View className={'profile'}>
                        <span className={'profile-name'}>
                            Judy
                        </span>
                                        <span className={'rate'}>
                            <IconFont name={'star-fill'} size={10} className={'star-icon'}/>
                            <IconFont name={'star-fill'} size={10} className={'star-icon'}/>
                            <IconFont name={'star-fill'} size={10} className={'star-icon'}/>
                            <IconFont name={'star-fill'} size={10} className={'star-icon'}/>
                            <IconFont name={'star-fill'} size={10} className={'star-icon'}/>
                        </span>
                                    </View>
                                </View>
                                <span className={'date'}>2023-12-21</span>
                            </View>
                            <View className={'comment-content'}>
                                非常好！我很喜欢！
                            </View>

                        </View>
                        <View className={'comment-box'}>
                            <View className={'comment-header'}>
                                <View style={{display:"flex"}}>
                                    <img alt="" src={profile} className='profile-img'/>
                                    <View className={'profile'}>
                        <span className={'profile-name'}>
                            Judy
                        </span>
                                        <span className={'rate'}>
                            <IconFont name={'star-fill'} size={10} className={'star-icon'}/>
                            <IconFont name={'star-fill'} size={10} className={'star-icon'}/>
                            <IconFont name={'star-fill'} size={10} className={'star-icon'}/>
                            <IconFont name={'star-fill'} size={10} className={'star-icon'}/>
                            <IconFont name={'star-fill'} size={10} className={'star-icon'}/>
                        </span>
                                    </View>
                                </View>
                                <span className={'date'}>2023-12-21</span>
                            </View>
                            <View className={'comment-content'}>
                                非常好！我很喜欢！
                            </View>

                        </View>
                    </View>

                </View>



            </View>

        </>

    )
}
