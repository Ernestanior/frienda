import { View} from '@tarojs/components'

import './index.less'
import {Button, Image, Input} from "@nutui/nutui-react-taro";
import {randomCode} from "../../../../common/utils";
import Taro from "@tarojs/taro";
import {useEffect, useState} from "react";
import Loading from "../../../../common/loading";
import useUserInfo from "../../../../hooks/useUserInfo";
import Header from "../../../../common/header";


const EditDetail= ()=> {
    const [img,setImg]=useState<any>()
    const {userInfo,loadDetail}=useUserInfo()
    const [name,setName]=useState<string>('')
    const [loading,setLoading]=useState<boolean>(false)
    const [imgEditStatus,setImgEditStatus]=useState<boolean>(false)
    const getAvatar=(res)=>{
        setImgEditStatus(true)
        setImg(res.detail.avatarUrl)
    }

    useEffect(()=>{
        setName(userInfo.name)
        setImg(userInfo.imgUrl)
    },[userInfo])
    const onSubmit=()=>{
        const db = Taro.cloud.database()
        if (!img && !name){
            Taro.navigateBack({delta:2,success:loadDetail})
        }
        setLoading(true)
        if (imgEditStatus){
            const code=randomCode()
            const imgUrl = 'profile_image/'+code+'.jpg'
            Taro.cloud.uploadFile({
                cloudPath: imgUrl,
                filePath: img, // 文件路径
                success: () => {
                    db.collection('user').doc(userInfo._id).update({
                        data:{name,imgUrl:'https://6672-frienda-console-6gm7dno861930126-1323669219.tcb.qcloud.la/'+imgUrl},
                        success:()=>{
                            Taro.navigateBack({delta:2,success:loadDetail})
                            setLoading(false)
                        },
                        fail:err=>console.log(err)
                    })
                },
                fail: err => {
                    // handle error
                    console.error(err)
                }
            })
        }else{
            db.collection('user').doc(userInfo._id).update({
                data:{name},
                success:()=>{
                    Taro.navigateBack({delta:2,success:loadDetail})
                    setLoading(false)
                },
                fail:err=>console.log(err)
            })
        }

    }
    return (
        <View className="edit-detail-page-container" >
            <Header title={'个人信息'}/>
            <Loading visible={loading} text={'上传中'}/>

            <View style={{display:"flex",alignItems:"center"}}>
                {/*<Uploader*/}
                {/*    style={{'--nutui-uploader-preview-tips-background':'transparent',marginBottom:20} as any}*/}
                {/*    value={img}*/}
                {/*    beforeXhrUpload={onUpload}*/}
                {/*/>*/}
                <Image src={img} style={{width:150,height:150}}/>
                <Button openType={'chooseAvatar'} onChooseAvatar={getAvatar} className={'upload-btn'}>上传图片</Button>
            </View>
                <Input placeholder={'用户名'} onChange={setName} value={name} style={{border:"1px solid #aaa",borderRadius:10,marginTop:20}}/>
                <View className={'publish-btn'} onClick={onSubmit}>
                    提交修改
                </View>


        </View>
    )
}

export default EditDetail
