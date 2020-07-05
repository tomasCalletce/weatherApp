

const data = function(){

    return{
        getData : function(location,uiControll,clear){

            

            let url = `/api?location=${location}`

            fetch(url)
            .then((res)=>{

                 return res.json()
             })
             .then((info)=>{

                 
                  uiControll(info)

                  clear()
             })

        }
    }
}()


const ui = function(){


    return {

        printData : function(dataObj){
            
            let weatherPanel = `      
        
            <div class="top">
            <h1>${dataObj.temp}°</h1> 
            <h3>${dataObj.location}</h3>
        </div>

        <div class="botton">
            <p class="description">${dataObj.description}</p>
            <p>Feels like: <span class="feelsLike">${dataObj.feelsLike}°</span> </p>
        </div>

        `
        
        document.querySelector(".wetherInfo").innerHTML = weatherPanel
        


        },

        clearFields : function(){

            document.getElementById('cityName').value = ""


        }

    }

}()




const main = function(data,ui){

    function control(e){

        let city = document.getElementById('cityName').value

        let res = data.getData(city,ui.printData,ui.clearFields)

       

        
        
        
    }

    function eventListners(){


        document.getElementById('submitter').addEventListener('click',control)

     
       

    }

    

    return{

        start : function(){
            console.log("started")
            eventListners()
        }


    } 


}(data,ui)


main.start()