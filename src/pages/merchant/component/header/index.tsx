import {View} from '@tarojs/components'
import './index.less'
import profile from "../../../../assets/index/profile.png";
import {IconFont} from "@nutui/icons-react-taro";
import address from "../../../../assets/common/address.png";
import share from "../../../../assets/common/share.png";
import contact from "../../../../assets/common/contact.png";

const Index=()=> {
    return (
        <section className={'merchant-header'}>
            <View className={'header-background'}/>
            <View className={'header-content'}>
                <View className={'header-profile'}>
                    <img alt="" src={profile} className='profile-img'/>
                    <View>
                        <span className={'profile-name'}>宇宙探索编辑部</span>
                        <View style={{display:"flex",justifyContent:"space-between",width:170}}>
                                <span className={'rate'}>
                                    <IconFont name={'star-fill'} size={12} className={'star-icon'}/>
                                    <IconFont name={'star-fill'} size={12} className={'star-icon'}/>
                                    <IconFont name={'star-fill'} size={12} className={'star-icon'}/>
                                    <IconFont name={'star-fill'} size={12} className={'star-icon'}/>
                                    <IconFont name={'star-fill'} size={12} className={'star-icon'}/>
                                    <span className={'rate-text'}>4.9</span>
                                </span>
                            <span className={'people-count'}>
                                    233人想去
                                </span>
                        </View>
                    </View>
                </View>
                <View className={'header-address'}>
                    <img alt="" src={address} className={'address-icon'}/>
                    <span className={'address-content'}>广州市海珠区新港中路217号</span>
                    <img alt="" src={share} className={'share-icon'}/>
                    <img alt="" src={contact} className={'contact-icon'}/>
                </View>
            </View>
        </section>
    )
}
export default Index;
