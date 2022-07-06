import currencyData from "./currencyData.js"

const UI = {
    //selector
    selector(){
        const firstInputEle = document.querySelector("#firstInput");
        const secondInputEle = document.querySelector("#secondInput");
        const firstSelectEle = document.querySelector("#firstSelector");
        const secondSelectEle = document.querySelector("#secondSelector");
        const firstOutEle = document.querySelector("#firstOut");
        const secondOutEle = document.querySelector("#secondOut");


        return {
            firstInputEle,
            secondInputEle,
            firstSelectEle,
            secondSelectEle,
            firstOutEle,
            secondOutEle
        }

    },

    //initialization
    init(){
        const {firstInputEle, secondInputEle} = this.selector();
        firstInputEle.addEventListener("keyup", async e=>{
            const firstInput= firstInputEle.value;
            
            //send data to API server
            // const d = await currencyData.getCurrency(); 
            // console.log(d);           
        })
        secondInputEle.addEventListener("keyup", e=>{
            const secondInput= secondInputEle.value;
            
            //send data to API server
            
        })
    },
}


export default UI;

