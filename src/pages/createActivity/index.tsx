import './index.less'
import {useState} from "react";
import Basic from "./components/basic";
import More from "./components/more";

const Index =()=> {
    const [step,setStep]=useState<number>(0)
    return (
        step?<More onJump={()=>setStep(0)}/>:<Basic onJump={()=>setStep(1)}/>
    )
}
export default Index

