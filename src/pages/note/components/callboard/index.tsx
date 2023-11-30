import {View} from '@tarojs/components'

import './index.less'
import {NoticeBar} from "@nutui/nutui-react-taro";
const Index=()=> {
    const boardList = ['同城有123场等你来玩哟','《妖歌曼舞》10月30日 14:00 极限等1','《妖妖灵》12月19日 21:00 极限等2']
    return (
            <View className='callboard-container'>
                <View className='callboard-label'>同城组局</View>
                <NoticeBar
                    height={25}
                    className={'callboard'}
                    direction="vertical"
                    wrap={false}
                    list={boardList}
                    speed={10}
                    duration={2000}
                />
            </View>
    )
}
export default Index;
