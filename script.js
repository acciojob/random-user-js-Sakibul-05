//your code here
let userImage = document.getElementById("userImg");
let userName = document.getElementById("userName");
let aditionalInfo = document.getElementById("info");
let ageBtn = document.getElementById("age");
let emailBtn = document.getElementById("email");
let phBtn = document.getElementById("ph");
let fetchDataBtn = document.getElementById("getUser");
//fetching data from API and displaying it on the webpage using async function

let baseUrl = "https://randomuser.me/api/";
async function getData(){
    let response = await fetch(baseUrl);
    let mockResponseOne = await response.json();
    console.log(mockResponseOne.results[0]);
    //changing userName
    const fullName = `${mockResponseOne.results[0].name.first} ${mockResponseOne.results[0].name.last}`;
	userName.innerText = fullName;

    // console.log(data.results[0].picture.large);
    //changing userImage
    userImage.src = `${mockResponseOne.results[0].picture.large}`

    aditionalInfo.innerText = "";
    ageBtn.addEventListener("click", (e)=>{
        // console.log("Age: ",data.results[0].dob.age);
        aditionalInfo.innerText = `${mockResponseOne.results[0].dob.age}`
    })
    emailBtn.addEventListener("click", ()=>{
        // console.log(data.results[0].email);
        aditionalInfo.innerText = `${mockResponseOne.results[0].email}`
    })
    phBtn.addEventListener("click",()=>{
        // console.log(data.results[0].phone);
        aditionalInfo.innerText = `${mockResponseOne.results[0].phone}`;
    })
    
}
fetchDataBtn.addEventListener("click", getData);