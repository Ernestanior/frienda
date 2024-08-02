import useStore from "../store/store";
import {getTokenSync} from "../store/token";
import Taro from "@tarojs/taro";


const useUserInfo=()=>{
    const {userInfo,setUserInfo}=useStore()
    const loadDetail=async ()=>{
        const token = await getTokenSync()
        if (token){
            const db = Taro.cloud.database()
            db.collection('user')
                .where({_id:token})
                .get()
                .then(result=>setUserInfo(result.data[0]))
        }
        else{
            setUserInfo('')
        }
    }
    return {userInfo,loadDetail} as any
}

export default useUserInfo
