//your code here
let userImage = document.getElementById("userImg");
let userName = document.getElementById("userName");
let aditionalInfo = document.getElementById("info");
let ageBtn = document.getElementById("age");
let emailBtn = document.getElementById("email");
let phBtn = document.getElementById("ph");
let fetchDataBtn = document.getElementById("getUser");
//fetching data from API and displaying it on the webpage using async function

let url = "https://randomuser.me/api/";
async function getData(){
    let response = await fetch(url);
    let data = await response.json();
    console.log(data.results[0]);
    //changing userName
    userName.innerText = `${data.results[0].name.first} ${data.results[0].name.last}`

    // console.log(data.results[0].picture.large);
    //changing userImage
    userImage.src = `${data.results[0].picture.large}`

    aditionalInfo.innerText = "";
    ageBtn.addEventListener("click", (e)=>{
        // console.log("Age: ",data.results[0].dob.age);
        aditionalInfo.innerText = `${data.results[0].dob.age}`
    })
    emailBtn.addEventListener("click", ()=>{
        // console.log(data.results[0].email);
        aditionalInfo.innerText = `${data.results[0].email}`
    })
    phBtn.addEventListener("click",()=>{
        // console.log(data.results[0].phone);
        aditionalInfo.innerText = `${data.results[0].phone}`;
    })
    
}
fetchDataBtn.addEventListener("click", getData);