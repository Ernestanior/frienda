import image from '@/assets/common/ellipse.png'
 interface IProps{
     text:string
 }

const Index=({text}:IProps)=> {

    return (
        <span style={styles.titleContainer}>
            <img alt="" src={image} style={styles.icon}/>
            {text}
        </span>
    )
}
export default Index;

const styles:any={
    titleContainer:{
        position:'relative',
        width: 'fit-content',
        fontSize:13,
        fontWeight:700
    },
    icon:{
        position: 'absolute',
        top:-4,
        right:-6,
        width:14,
        height:14
    }
}
