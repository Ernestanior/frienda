import {View} from '@tarojs/components'
import {IconFont} from "@nutui/icons-react-taro";
import './index.less'
import Taro from "@tarojs/taro";
import createImage from "@/assets/createActivity/createImage.png";
import createActivityFont from "@/assets/createActivity/createActivity.png";
import {Button, Cell, ConfigProvider, Form, Picker, Range, Switch} from "@nutui/nutui-react-taro";
import {useCallback, useState} from "react";
import { ArrowRight } from '@nutui/icons-react-taro';
import useStore from "../../../../store/store";

const statusBarHeight:any=Taro.getSystemInfoSync().statusBarHeight

const Index =({onJump}:any)=> {
    const {activityParams}=useStore()
    const [memberType,setMemberType]=useState<string>('所有人')
    const [candidate,setCandidate]=useState<boolean>()
    const [qrCode,setQrCode]=useState<boolean>()
    const onReturn=()=>{
        Taro.navigateBack()
    }
    const onSubmit=useCallback(()=>{
        const db = Taro.cloud.database()
        db.collection('room').add({
            data:activityParams,
            success:()=>{
                Taro.navigateBack()
            },
            fail:err=>console.log(err)
        })
    },[])
    return (
        <View className='create-activity-more-container' style={{paddingTop:statusBarHeight}}>
            <View className={'header'} >
                <IconFont name={'back'} fontClassName="iconfont" classPrefix='icon' size={16} onClick={onReturn}/>
                创建活动
                <View style={{width:15}}/>
            </View>
            <View className={'img-container'}>
                <img alt="" src={createActivityFont} className={'font-img'}/>
                <img alt="" src={createImage} className={'title-img'}/>
            </View>
            <Cell className={'match-cell'}>
                <ConfigProvider theme={customizeTheme}>
                    <Range defaultValue={68} onEnd={(val) => console.log(`${val}`)}
                           maxDescription={null}
                           minDescription={null}
                           marks={{
                               26:'',
                               69:'',
                           }}
                           button={<View className={'dot-out'}>
                               <View className={'dot-in'}></View>
                           </View>}/>
                    <View className={'progress-text'}>
                        <span>基本信息</span>
                        <span>更多信息</span>
                    </View>
                </ConfigProvider>
            </Cell>
            <View className={'form'}>
                <Form onFinish={(res)=>console.log('res',res)}>
                    <View className={'form-row'}>
                        <View className={'form-label'}>可见成员</View>
                        <Form.Item
                            name="type"
                            trigger="onConfirm"
                            getValueFromEvent={(...args) => args[1]}
                            onClick={(_, ref: any) => {
                                ref.open()
                            }}
                        >
                            <Picker
                                options={memberTypes} onConfirm={(res:any)=>setMemberType(res[0].value)}>
                                {() => {
                                    return (
                                        <Cell
                                            style={{fontSize:12,marginLeft:15}}
                                            title={memberType}
                                            extra={<ArrowRight style={{fontSize:12}}/>}
                                            align="center"
                                        />
                                    )
                                }}
                            </Picker>
                        </Form.Item>
                    </View>
                </Form>
            </View>
            <View className={'form'}>
                <View className={'row'}>
                    <span className={'form-label'}>活动候补</span>
                    <Switch
                        style={{'--nutui-switch-open-background-color':'#f5c360'}}
                        checked={candidate}
                        onChange={(value) => setCandidate(value)}/>
                </View>
                <View className={'desc'}>
                    <span>开启候补: 成员可加入候补排队等候，当有空位时，自动按照排队顺序加入活动。</span>
                    <span>关闭候补: 候补在活动开始前1小时将自动关闭，也可随时通过手动关闭，报名费用将会原路返回至候补成员。</span>
                </View>
            </View>
            <View className={'form'}>
                <span className={'form-title'}>活动信息</span>
                <View className={'form-row'}>
                    <View className={'form-label'}>活动群二维码</View>
                    <Switch
                        style={{'--nutui-switch-open-background-color':'#f5c360'}}
                        checked={qrCode}
                        onChange={(value) => setQrCode(value)}/>
                </View>
                <View className={'form-row'}>
                    <View className={'form-label'}>活动联系方式</View>
                    <ArrowRight style={{fontSize:12}}/>
                </View>
                <View className={'form-row'}>
                    <View className={'form-label'}>成员报名填写项</View>
                    <ArrowRight style={{fontSize:12}}/>
                </View>
            </View>
            <View style={{marginTop:20,display:"flex",justifyContent:"space-between",width:"100%",paddingLeft:20,paddingRight:20,boxSizing:"border-box"}}>
                <Button className='join-btn' onClick={onJump}>
                    <span style={{fontWeight:650,fontFamily:"Arial",fontSize:12}}>上一步</span>
                </Button>
                <Button className='join-btn-primary' type="primary" onClick={onSubmit}>
                    <span style={{fontWeight:650,fontFamily:"Arial",fontSize:12}}>提交</span>
                </Button>
            </View>
        </View>
    )
}
export default Index

const memberTypes=[{value:'所有人',text:'所有人'},{value:'仅自己可见',text:'仅自己可见'},{value:'仅粉丝可见',text:'仅粉丝可见'}]
const customizeTheme = {nutuiRangeButtonBorder: '1px solid rgba(52,96,250,1)',
    nutuiRangeActiveColor:
        'linear-gradient(315deg, rgb(255,186,45) 0%,rgb(255,229,166) 100%)',
    // nutuiRangeInactiveColor: 'rgb(255,245,225)',
    nutuiRangeInactiveColor: 'rgb(228,236,236)',
    nutuiRangeMargin: '20px',
    nutuiRangeHeight: '5px',}
