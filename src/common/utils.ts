
export const randomCode = ()=>{
    const orgStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    let randomPrev = ''
    let randomNext = ''
    for (let i=0;i<5;i++){
        randomPrev+=orgStr.charAt(Math.floor((Math.random()*orgStr.length)))
        randomNext+=orgStr.charAt(Math.floor((Math.random()*orgStr.length)))
    }
    const currentTime = +new Date()
    return randomPrev + currentTime +randomNext
}
