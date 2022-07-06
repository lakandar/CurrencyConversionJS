import UI from "./UI.js";

const currencyData = {
    currencyName: "",
    id: "",

    async getCurrency(){
        
        // try{
            const response= await fetch(`https://free.currconv.com/api/v7/currencies?apiKey=657d1f8644a842a84949`)
            .then(response => response.json())
	        .then(response => {
                // const {results:{BDT:{currencyName, id},},}= response;
                const {results}= response
                // console.log(results, currencyName)

                for(let i in results){                    
                    const {results:{[i]:{currencyName, id},},}= response;
                    //populate to UI
                    const{firstSelectEle,
                        secondSelectEle,}=UI.selector();
                    // id.sort()
                    firstSelectEle.insertAdjacentHTML("beforeend", `<option>${currencyName}</option>`);
                    secondSelectEle.insertAdjacentHTML("beforeend", `<option>${currencyName}</option>`);
                    // firstSelectEle.createElement("option".value=i);
                    // var option = firstSelectEle.createElement("option");
                    // option.text = "Kiwi";
                    

                    
                }                
            })
	        .catch(err => console.error(err));

            

            // console.log(response)
            // const {currencyName, id} = await response.json();
            // console.log(currencyName, id)
            
            // return{
            //     currencyName,
            //     id
            // }

        // } catch(err){
        //     alert(err);
        // }

    },
}

// const {currencyName, id} = currencyData.getCurrency(); 
// console.log(currencyName, id);

export default currencyData;