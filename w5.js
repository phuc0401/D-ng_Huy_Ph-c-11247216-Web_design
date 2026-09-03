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
               <td>${user.address.city}</td>
            <td>${user.email}</td>
            <td>${user.phone}</td>`;
            


            tablebody.appendChild(row);
        });
    }catch (error){
        console.error("Loi khi gọi api", error)
    }
}
fetchUsers("https://jsonplaceholder.typicode.com/users");