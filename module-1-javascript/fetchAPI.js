// async function getUsers(){
//     let response = await fetch("https://jsonplaceholder.typicode.com/users/1");

//     let user = await response.json();

//     console.log("Name: ", user.name);
//     console.log("Email: ", user.email);
//     console.log("City: ",user.address.city);
// }

// getUsers();

function getPosts(){
    fetch("https://jsonplaceholder.typicode.com/postsasa/1")
    .then((response)=>{
        console.log("Response Received");

        if(!response.ok){
            throw new Error("HTTP Error: " + response.status + "Http errorMessage: " + response.message);
        }

        return response.json();
    })
    .then((data)=>{
        console.log("SUCCESS");
        console.log("Title: ",data.title);
        console.log("Body: ",data.body);
    })
    .catch((error)=>{
        console.log("Error: ", error.message);
    })
    .finally(()=>{
        console.log("API Call completed");
    })
}

getPosts();