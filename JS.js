const btnElement=document.getElementById("btn");
const bName=document.getElementById("Bname");


const apiKey="hRXylKeyI2u6AWH8m5OFFA==d42D0N0tzM679SMz";

const option={
    method: "GET",
    headers:{
        "X-Api-Key": apiKey,
    },
}
const gender="neutral";
const apiURL="https://api.api-ninjas.com/v1/babynames?gender="+gender;

async function GetName(){
    try {
        bName.innerText="Updating...";
    btnElement.disabled = true;
    btnElement.innerText="Loding...";
    const response=await fetch(apiURL, option)
    const data=await response.json();
    btnElement.disabled = false;
    btnElement.innerText="Tell Me Name ";
    bName.innerText=data;
   // console.log(data)
    } catch (error) {
        bName.innerText="an error occurred while try later ";
        btnElement.disabled = false;
    btnElement.innerText="Tell Me Name ";
    }
    
}

btnElement.addEventListener("click",GetName)