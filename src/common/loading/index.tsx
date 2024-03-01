import {View} from "@tarojs/components";
import {Loading} from "@nutui/nutui-react-taro";
 interface IProps{
     visible:boolean;
     text?:string;
 }

const Index=({visible,text}:IProps)=> {
    return (
        <View style={{
            position:"fixed",
            top:0,
            left:0,
            right:0,
            bottom:0,
            zIndex:9999,
            display:visible?'flex':'none',
        }}>
            <View style={{
                backgroundColor:"#000",
                borderRadius:15,
                width:100,
                height:100,
                opacity:.7,
                display:"flex",
                flexDirection:"column",
                justifyContent:"center",
                alignItems:"center",
                position:"absolute",
                top:"50%",
                left:"50%",
                transform:"translate(-50%,-50%)",

            }}>
                <Loading type='spinner' />
                <span style={{color:"#fff",fontSize:12,marginTop:10}}>{text}</span>
            </View>
        </View>

    )
}
export default Index;


