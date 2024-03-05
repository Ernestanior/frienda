import {View} from '@tarojs/components'
import {IconFont} from "@nutui/icons-react-taro";
import './index.less'
import Taro from "@tarojs/taro";
import createImage from "@/assets/createActivity/createImage.png";
import createActivityFont from "@/assets/createActivity/createActivity.png";
import {
    Button,
    Cell,
    ConfigProvider,
    DatePicker,
    Form,
    Input, InputNumber,
    Picker,
    Range, TextArea,
    Toast,
    Uploader
} from "@nutui/nutui-react-taro";
import {useState} from "react";
import { ArrowRight } from '@nutui/icons-react-taro';
import useStore from "../../../../store/store";

const statusBarHeight:any=Taro.getSystemInfoSync().statusBarHeight

const Index =({onJump}:any)=> {
    const {setActivityParams}=useStore()
    // const [loading,setLoading]=useState<boolean>(false)
    const [type,setType]=useState<string>('户外')
    const [img,setImg]=useState<any>()
    const [fileId,setFileId]=useState<string>('')
    const [startDate,setStartDate]=useState<any>('2022/05/10 10:10')
    const [startVisible,setStartVisible]=useState<boolean>(false)
    const [endDate,setEndDate]=useState<any>('')
    const [endVisible,setEndVisible]=useState<boolean>(false)
    const [errMsg,setErrMsg]=useState<string>('')
    const onStartSelect=(values)=>{
        const datelist= values.map((item:any)=>item.value)
        const date = datelist.slice(0, 3).join('/');
        const time = datelist.slice(3).join(':');
        setStartDate(`${date  } ${  time}`)
    }
    const onEndSelect=(values)=>{
        const datelist= values.map((item:any)=>item.value)
        const date = datelist.slice(0, 3).join('/');
        const time = datelist.slice(3).join(':');
        setEndDate(`${date  } ${  time}`)
    }
    const onReturn=()=>{
        Taro.navigateBack()
    }
    const onSubmit=(res)=>{
        if (!res){
            setErrMsg('请填写全部选项')
            // Toast.show('text',{title:'请填写全部选项',type:'text',size:'small'})
            return
        }
        if (!img.length){
            setErrMsg('需上传图片')
            // Toast.show('text',{title:'需上传图片',type:'text',size:'small'})
            return
        }
        const {title,address,maxNum,type,desc}=res
        if (title && address && endDate && desc){
            const start = +new Date(startDate)
            const end = +new Date(endDate)
            if(end-start>0){
                setActivityParams({title,type,address,maxNum:maxNum || 1,start,end,fileId,desc,imgUrl:img[0].url})
                onJump()
            }else{
                setErrMsg('开始时间必须早于结束时间')
                // Toast.show('text',{title:'开始时间必须早于结束时间',type:'text',size:'small'})
            }
        }else{
            setErrMsg('请填写全部选项')
            // Toast.show('text',{title:'请填写全部选项',type:'text',size:'small'})
            return
        }
    }

    const onUpload=(_,options)=>{
        const imgDetail={
            url:options.taroFilePath,
            status: 'success',
            type:'image'
        }
        setImg([imgDetail])
        // setLoading(true)
        Taro.cloud.uploadFile({
            cloudPath: 'activity_image/test2.jpg',
            filePath: options.taroFilePath, // 文件路径
            success: res => {
                // get resource ID
                // setLoading(false)
                setFileId(res.fileID)
            },
            fail: err => {
                // handle error
                console.error(err)
            }
        })

    }
    return (
        <View className='create-activity-basic-container' style={{paddingTop:statusBarHeight+10}}>
            {/*<Loading visible={loading} text={'图片核实中'}/>*/}
            <Toast id={'text'}/>
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
                    <Range defaultValue={25} onEnd={(val) => console.log(`${val}`)}
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
            <View className={'box'}>
                <View className={'left'}>
                    <span className={'box-title'}>活动封面</span>
                    <span className={'box-desc'}>1. 图片上传比例3:4</span>
                    <span className={'box-desc'}>2. 精美活动海报有助于吸引用户关注，提高报名率。</span>
                </View>
                <View className={'right'}>
                    <Uploader
                        style={{'--nutui-uploader-preview-tips-background':'transparent'} as any}
                        value={img}
                        beforeXhrUpload={onUpload}
                    />
                </View>
            </View>
            <View className={'form'}>
                <span className={'form-title'}>活动信息</span>
                <Form onFinish={onSubmit}>
                    <View className={'form-row'}>
                        <View className={'form-label'}>活动名</View>
                        <Form.Item name="title">
                            <Input placeholder="请输入活动名" type="text"  style={{fontSize:14}}/>
                        </Form.Item>
                    </View>
                    <View className={'form-row'}>
                        <View className={'form-label'}>活动类型</View>
                        <Form.Item
                            name="type"
                            trigger="onConfirm"
                            getValueFromEvent={(...args) => args[1]}
                            onClick={(_, ref: any) => {
                                ref.open()
                            }}
                        >
                            <Picker options={pickerOptions} onConfirm={(res:any)=>setType(res[0].value)}>
                                {() => {
                                    return (
                                        <Cell
                                            style={{fontSize:14,marginLeft:-14}}
                                            title={type}
                                            extra={<ArrowRight style={{fontSize:14}}/>}
                                            align="center"
                                        />
                                    )
                                }}
                            </Picker>
                        </Form.Item>
                    </View>
                    <View className={'form-row'}>
                        <View className={'form-label'}>地点</View>
                        <Form.Item name="address">
                            <Input placeholder="活动地点" type="text"  style={{fontSize:14}}/>
                        </Form.Item>
                    </View>
                    <View className={'form-row'}>
                        <View className={'form-label'}>活动人数</View>
                        <Form.Item name="maxNum">
                            <InputNumber placeholder="发起人不计入活动票数"  defaultValue={1} min={0} style={{fontSize:14}}/>
                        </Form.Item>
                    </View>

                    <View className={'form-row'}>
                        <View className={'form-label'}>开始时间</View>
                        <View onClick={()=>setStartVisible(true)}
                            style={{fontSize:14,flex:1,display:"flex",alignItems:"center",justifyContent:"space-between"}}><View style={{flex:1}}>{startDate}</View><ArrowRight style={{fontSize:12,color:"#666"}}/></View>
                    </View>
                    <View className={'form-row'}>
                        <View className={'form-label'}>结束时间</View>
                        <View onClick={()=>setEndVisible(true)}
                              style={{fontSize:14,flex:1,display:"flex",alignItems:"center",justifyContent:"space-between"}}><View style={{flex:1}}>{endDate}</View><ArrowRight style={{fontSize:12,color:"#666"}}/></View>
                    </View>
                    <View style={{marginTop:10}}>
                        <View style={{fontSize:14,marginLeft:18}}>活动简介</View>
                        <Form.Item name="desc" >
                            <TextArea style={{fontSize:14,border:"1px solid #eee",borderRadius:10,padding:10}}/>
                        </Form.Item>
                    </View>
                    {!!errMsg && <View style={{marginLeft:18,fontSize:10,color:"red"}}>*{errMsg}</View>}

                    <Form.Item name="startDate">
                        <DatePicker
                            startDate={new Date()}
                            visible={startVisible}
                            type="datetime"
                            onClose={() => setStartVisible(false)}
                            onConfirm={onStartSelect}
                        />
                    </Form.Item>
                    <Form.Item name="endDate">
                        <DatePicker
                            startDate={new Date(startDate)}
                            visible={endVisible}
                            type="datetime"
                            onClose={() => setEndVisible(false)}
                            onConfirm={onEndSelect}
                        />
                    </Form.Item>

                    <View style={{display:"flex",justifyContent:"center",width:"100%"}}>
                        <Button className='join-btn' formType="submit" type="primary" >
                            <span style={{fontWeight:650,fontFamily:"Arial"}}>下一步</span>
                        </Button>
                    </View>
                </Form>
            </View>
        </View>
    )
}
export default Index

const pickerOptions=[{value:'户外',text:'户外'},{value:'室内',text:'室内'}]
const customizeTheme = {nutuiRangeButtonBorder: '1px solid rgba(52,96,250,1)',
    nutuiRangeActiveColor:
        'linear-gradient(315deg, rgb(255,186,45) 0%,rgb(255,229,166) 100%)',
    // nutuiRangeInactiveColor: 'rgb(255,245,225)',
    nutuiRangeInactiveColor: 'rgb(228,236,236)',
    nutuiRangeMargin: '20px',
    nutuiRangeHeight: '5px',}
