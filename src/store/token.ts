import Taro from "@tarojs/taro";

const key1 = 'token';

export const getTokenSync = () => {
     return Taro.getStorageSync(key1)
}
export const saveToken = (token: string,callback) => {
    return Taro.setStorage({key:key1, data:token,success:callback})
}
export const saveTokenSync = (token: string) => {
    return Taro.setStorageSync(key1, token);
}
export const removeToken = (callback) => {
    return Taro.removeStorage({key:key1,success:callback})
}
