import {View} from '@tarojs/components'
import './index.less'
import Taro from "@tarojs/taro";
const Index=()=> {
    const goto=(page:string)=>{
        Taro.navigateTo({url:page})
    }
    return (
        <View className='game-list'>
            <View className='top-note-box' onClick={()=>goto('a')}>
                {/*<Image src={demo} width={70} height={90} />*/}
                <div className={'top-note-text'}>雪乡连环事件真的太惨了</div>
            </View>
        </View>
    )
}
export default Index;
