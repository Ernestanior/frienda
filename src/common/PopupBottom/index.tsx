
import {Popup} from "@nutui/nutui-react-taro";


const Index=({visible,onClose,content}:any)=> {

    return (
        <Popup visible={ visible } position="bottom" onClose={ onClose } style={{borderRadius:20}} >
            {content}
        </Popup>
    )
}
export default Index;

