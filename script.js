// TODO: add code here
window.addEventListener("load", function(){
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){
        response.json().then(function(json){
            console.log(json)
            let astronautDesign = document.getElementById("container")
            let i=0
        
            while (i< JSON.length){
                
                astronautDesign.innerHTML= 
                `
                <div class="astronaut">
                    <div class="bio">
                        <h3>${json[i].firstName} ${json[i].lastName}</h3>
                        <ul>
                            <li>Hours in space: ${json[i].hoursInSpace}</li>
                            <li>Active: ${json[i].active}</li>
                            <li>Skills: ${json[i].skills}</li> 
                        </ul>
                    </div>
                    <img class="avatar" src="images/${json[i].picture}">
                </div>
                `



                i++
            }




        })

     

    })



})
console.log(getElementsByClassName("bio"))