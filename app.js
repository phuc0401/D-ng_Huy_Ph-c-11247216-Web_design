let introparagraph = document.querySelector("#Intro p") ;
introparagraph.textContent = "This is fake";



let errorMSG = document.createElement("p");
errorMSG.textContent = "This field is required";
errorMSG.style.color = "yellow"; 


let form = document.querySelector("#house-form");
form.appendChild(errorMSG);


let btn = document.querrySelector("#summit");
btn.addEventListener("Click", function(Event){
    console.log("Button clicked ! " );
    console.log("Event.target") ; 
});





async function greet(){
    return " Hello ! " ;
}

greet(),
then(res) => console.log(res);