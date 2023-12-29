import {useState} from 'react'
import {View, Textarea} from '@tarojs/components'
import demo1 from '@/assets/index/demo1.jpg'
import {IconFont} from "@nutui/icons-react-taro";
import './index.less'
import Taro from "@tarojs/taro";

const statusBarHeight:any=Taro.getSystemInfoSync().statusBarHeight

const ll = ['','','','','',]
const Index =()=> {
    const [rate,setRate]=useState<number>(5)
    // const [visible,setVisible]=useState<boolean>(false)
    // const onUpload = () => {
    //     Taro.getPrivacySetting({
    //         success:(res)=>{
    //             console.log(res.needAuthorization)
    //             if (res.needAuthorization){
    //                 setVisible(true)
    //             }
    //             else{
    //                 Taro.chooseImage({
    //                     sourceType:['album', 'camera'],
    //                     sizeType: ['original', 'compressed'],
    //                     count:6,
    //                     success:(res)=>{
    //                         console.log(res)
    //                     }})
    //             }
    //         }
    //     })
    // }
    // const toPrivacyPage=()=>{
    //     Taro.openPrivacyContract({success:(e)=>{e}})
    // }
    // const onPrivacy=()=>{
    //     setVisible(false)
    // }

    const onReturn=()=>{
        Taro.navigateBack()
    }
        return (
            <View className='comment-container' style={{paddingTop:statusBarHeight+15}}>
                <View>
                    <View className={'header'}>
                        <IconFont name={'back'} onClick={onReturn} fontClassName="iconfont" classPrefix='icon' size={16}/>
                        评分
                        <View></View>
                    </View>
                    <View className={'title'}>
                        <img alt="" src={demo1} className={'title-img'}/>
                        <span className={'title-content'}>摄影 | 黑龙潭风铃节 打卡小冰岛</span>
                    </View>
                    <View className={'rate-container'}>
                        <span className={'rate-text'}>总体评价:</span>
                        <View className={'rate'} >
                            {ll.map((_,index)=><>
                                <IconFont size={20} name={'star-fill'}  onClick={()=>setRate(index+1)} style={{color:rate>index?"#ffc227":'#ddd'}}/>
                            </>)}
                        </View>
                    </View>
                    <Textarea className={'comment-textarea'} maxlength={3000}/>
                    {/*<View className={'upload-btn'} onClick={onUpload}>上传</View>*/}
                    {/*<PopupBottom onClose={()=>setVisible(false)} visible={visible} content={*/}
                    {/*    <View className={'privacy-content'}>*/}
                    {/*        <View className="title">用户隐私保护指引</View>*/}
                    {/*        <View className="des">*/}
                    {/*            感谢您选择使用xxxx小程序，我们非常重视您的个人信息安全和隐私保护。使用我们的产品前，请您仔细阅读*/}
                    {/*        </View>*/}
                    {/*        <Text onClick={toPrivacyPage} style={{color:"blue"}}>小程序隐私保护指引</Text>*/}
                    {/*        <View>如您同意此隐私保护指引,请点击同意按钮,开始使用此小程序,我们将尽全力保护您的个人信息及合法权益，感谢您的信任！<br /></View>*/}
                    {/*        <View className={'btn-row'}>*/}
                    {/*            <View className={'btn cancel'}>取消</View>*/}
                    {/*            <Button openType={'agreePrivacyAuthorization'} onAgreePrivacyAuthorization={onPrivacy}>同意</Button>*/}
                    {/*        </View>*/}
                    {/*    </View>*/}
                    {/*}/>*/}
                </View>
                <View className={'btn'} >提交</View>
            </View>
        )
}
export default Index
