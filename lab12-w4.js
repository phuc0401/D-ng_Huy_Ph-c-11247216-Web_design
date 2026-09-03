//lab1
// Write a for loop that filters the array by a condition.

const students = [
   {id: 1, name: "math", score: 10},
   {id: 2, name: "math", score: 9},
   {id: 3, name: "math", score: 8},
   {id: 4, name: "math", score: 7},
   {id: 5, name: "math", score: 4},
]

let fliter = []
for (let i = 0; i < 5; i++){
    if (students[i].score > 7){
        fliter.push(students[i].score)
    }
}
console.log(fliter)

//Write a function that sums a numeric field across all objects

function score_sum(arr){
    let sum = 0;
    for (let i = 0; i < arr.length; i++){
        if( arr[i].score > 7){
            sum+=  arr[i].score;
        }
    }
    return sum;
}

console.log(score_sum(students));

// Write a function that finds the object with the largest value of a field, using a for loop
function largest_value(inp){
    let largest = inp[0];
    for (let i = 0; i < inp.length ; i++){
        if(inp[i].score > largest.score){
            largest = inp[i];

        }
           

    }
    return largest;
}
console.log(largest_value(students));

//Finished early? Convert one function to an arrow function.
//const largest_value = (inp) => {
    //let largest = inp[0];

    //for (let i = 0; i < inp.length; i++) {
        //if (inp[i].score > largest.score) {
           // largest = inp[i];
       // }
   // }

   // return largest;
//};

//console.log(largest_value(students));

//lab2
let form = document.querySelector("#houseForm")
form.addEventListener("submit", function(event){event.preventDefault();

let bedrooms = document.querySelector("#Bedrooms1").value;
let oldmassage = document.querySelector("p");
if(oldmassage){
    oldmassage.remove();
}



if (bedrooms === "" || Number(bedrooms) <= 0){
    let error = document.createElement("p");
    error.textContent = "The number must be positive";
    error.style.color = "red";
    form.appendChild(error);
} else{
    let message = document.createElement("p");
    message.textContent = "Ready to submit";
    message.style.color = "green";
    form.appendChild(message);

}
});

//goi api
fetch("https://jsonplaceholder.typicode.com/users")
    .then (function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);

    })
    .catch(function(error){
        console.error("something went wrong: ", error);
    })

// cach lay data
async function greet(){
    return " Hello ! " ;
}
async function layDuLieu(url){
    const response = await fetch(url);
    const data = await response.json();
    return data ;
}

layDuLieu("https://jsonplaceholder.typicode.com/users")
    .then(function(data){
        console.log(data);
    });


// gọi api
async function fetchUsers(url){
    try{
        const response = await fetch (url);
        const user1 = await response.json();
        let tablebody = document.querySelector("#userTable");

        user1.forEach(user =>{
            const row = document.createElement("tr");
            row.innerHTML = `
               <td>${user.id}</td>
               <td>${user.name}</td>
               <td>${user.address}</td>
            <td>${user.email}</td>
            <td>${user.phone}</td>`;
            


            tablebody.appendChild(row);
        });
    }catch (error){
        console.error("Loi khi gọi api", error)
    }
}
fetchUsers("https://jsonplaceholder.typicode.com/users");



