// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({ env: cloud.DYNAMIC_CURRENT_ENV }) // 使用当前云环境

// 云函数入口函数
exports.main = async (event, context) => {
    const db = cloud.database()
    const res = db.collection('activity').get()
    // const fileIds = res.map(item=>item.fileId)
    let finalList=[]
    // cloud.getTempFileURL({
    //     fileList:fileIds,
    //     success: res => {
    //         // get temp file URL
    //         const fileList= res.fileList.map(item=>item.tempFileURL)
    //         console.log('fileList',fileList)
    //
    //         finalList = (res.map((item,index)=>({...item,imgUrl:fileList[index]})
    //         ))
    //         return fileIds
    //     },
    // })
    return res

}
