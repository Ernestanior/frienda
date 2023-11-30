import { Swiper } from '@nutui/nutui-react-taro';
import './index.less'

const list = [
    'https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg',
    'https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg',
    'https://storage.360buyimg.com/jdc-article/welcomenutui.jpg',
    'https://storage.360buyimg.com/jdc-article/fristfabu.jpg',
]


const Index=()=> {
    return (
            <Swiper
                defaultValue={0}
                loop
                autoplay
                height={100}
            >
                {list.map((item, index) => {
                    return (
                        <Swiper.Item key={item} >
                            <img style={{width:300,height:100}} src={item} onClick={() => console.log(index)} alt="" />
                        </Swiper.Item>
                    )
                })}
            </Swiper>
    )
}
export default Index;
