const divi1 = document.createElement("div");
divi1.setAttribute("class","container-fluid");
divi1.setAttribute("id","containerFluid");
const divi2 = document.createElement("div");
divi2.setAttribute("class","container-fluid");
const navBar = document.createElement("h1");
navBar.setAttribute("class","text-center");
navBar.style.color = "white";
navBar.setAttribute("id","title");
navBar.innerHTML = "REST COUNTRY WEATHER DATA";

const para = document.createElement("p");
para.setAttribute("class","describe");
para.setAttribute("id","description");
para.innerHTML = "If We want Fetch data from Rest Country API and get the data and display the using Bootstrap Cards afterthat we want to click the button get the particular country Weather Details using Openweather API";
divi2.append(navBar,para);


const divi3 = document.createElement("div");
divi3.setAttribute("class","container");
divi3.setAttribute("id","containerSet")
const divi4 = document.createElement("div");
divi4.setAttribute("class","row");
divi4.setAttribute("id","setRow")

divi3.append(divi4);

const getDataFromDOM = async () =>{
  
  let res = await fetch ('https://restcountries.com/v3.1/all');
  let data = await res.json();
  // console.log(data);

  data.forEach(details => {
  
    // console.log(details.name.common);
    // console.log(details.capital);
    // console.log(details.flags.png);
    // console.log(details.region);
    // console.log(details.cca3)
    // console.log(details.latlng[0],details.latlng[1]);
    // console.log(details.name.nativeName);
    // console.log(details.population);
  
    const divi5 = document.createElement("div");
    divi5.setAttribute("class","col-sm-6 col-md-4 col-lg-4 col-xl-4");
    divi5.setAttribute("id","colList");

const divi6 = document.createElement("div");
divi6.setAttribute("class","card h-100");
divi6.setAttribute("id","cardSet")

const divi7 = document.createElement("div");
divi7.setAttribute("class","card-header");
const head5 = document.createElement("h5");
head5.setAttribute("class","card-title");
head5.setAttribute("id","cardTitle");
head5.innerHTML = details.name.common;
divi7.append(head5);


const divi8 = document.createElement("div");
divi8.setAttribute("class","card-body");
divi8.setAttribute("id","cardBody");
divi8.innerHTML = `<img class="card-img-top" src= ${details.flags.png} height = '90' width='200'>`;

const para1 = document.createElement("p");
para1.setAttribute("class","card-text");
para1.setAttribute("id","capitalName");
para1.innerHTML = `Capital : ${details.capital}`;
divi8.append(para1);

const para2 = document.createElement("div");
para2.setAttribute("class","card-text");
para2.setAttribute("id","regionName");
para2.innerHTML = `Region : ${details.region}`;

const para3 = document.createElement("p");
para3.setAttribute("class","card-text");
para3.setAttribute("id","latitudeName");
para3.innerHTML = `Latitude : ${details.latlng[0]}`;

const para4 = document.createElement("p");
para4.setAttribute("class","card-text");
para4.setAttribute("id","longitudeName");
para4.innerHTML = `Longitude : ${details.latlng[1]}`;

const para5 = document.createElement("p");
para5.setAttribute("class","card-text");
para5.setAttribute("id","countryCodeName");
para5.innerHTML = `Country Code : ${details.cca3}`

const populationT = document.createElement("div");
populationT.setAttribute("class","card-text");
populationT.innerHTML = `Population : ${details.population}`;

divi8.append(para2,para3,para4,para5,populationT);

const buttonT = document.createElement("button");
buttonT.setAttribute("class","btn btn-primary");
buttonT.setAttribute("id","countryDetails");
buttonT.setAttribute("type","submit");


buttonT.addEventListener('click',weatherDataDetails);

buttonT.innerHTML ="Click For Weather";

async function weatherDataDetails(){
 
  let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${details.latlng[0]}&lon=${details.latlng[1]}&appid=762073fa932bab43afbdcd859ffd1b7a`);
  let dataInfo = await response.json();


  // console.log(dataInfo);
  // console.log(details.name.common);
  // console.log(details.capital);
  // console.log(details.flags.png);
  // console.log(dataInfo.weather[0].description)
  // console.log(dataInfo.main.temp);
  // console.log(dataInfo.wind.speed);
  // console.log(dataInfo.wind.deg);


const divi10 = document.createElement("div");
divi10.setAttribute("class","popup col-xl-4");
divi10.setAttribute("id","popup");

const divi11 = document.createElement("div");
divi11.setAttribute("class","popup-box");
const buttonTag1 = document.createElement("button");
buttonTag1.setAttribute("type","button");
buttonTag1.setAttribute("class","button");
buttonTag1.innerHTML = "&times";
buttonTag1.addEventListener('click',()=>{
  divi10.style.display = "none";
})
divi11.append(buttonTag1);

  
const divi12 = document.createElement("div");
divi12.setAttribute("class","popup-card");
divi12.setAttribute("id","cardSet")

const divi13 = document.createElement("div");
divi13.setAttribute("class","popup-header");
const head5T = document.createElement("h5");
head5T.setAttribute("class","popup-title");
head5T.setAttribute("id","cardTitle1");
head5T.innerHTML = details.name.common;

divi13.append(head5T);


const divi14 = document.createElement("div");
divi14.setAttribute("class","popup-body");
divi14.setAttribute("id","cardBody");
divi14.innerHTML = `<img class="image" src= ${details.flags.png} height = '90' width='200'>`;


  const para6 = document.createElement("p");
  para6.setAttribute("class","text-center");
  para6.setAttribute("id","capitalName");
  para6.innerHTML = `Capital : ${details.capital}`;
  divi14.append(para6);
 
  const para7 = document.createElement("p");
  para7.setAttribute("class","text-center");
  para7.setAttribute("id","weatherDetails");
  para7.innerHTML = `Weather Description : ${dataInfo.weather[0].description}`;
  
  const para8 = document.createElement("p");
  para8.setAttribute("class","text-center");
  para8.setAttribute("id","temperature");
  para8.innerHTML = `Temperature : ${dataInfo.main.temp}`;
  
  const para9 = document.createElement("p");
  para9.setAttribute("class","text-center");
  para9.setAttribute("id","windDeg");
  para9.innerHTML = `Wind Deg : ${dataInfo.wind.deg}`;
  
  const para10 = document.createElement("p");
  para10.setAttribute("class","text-center");
  para10.setAttribute("id","windSpeed");
  para10.innerHTML = `Wind Speed : ${dataInfo.wind.speed}`
    

let cont = document.getElementById("containerFluid");

divi14.append(para7,para8,para9,para10);
divi12.append(divi13,divi14);
divi11.append(divi12);
divi10.append(divi11);
cont.append(divi10);
 
}



divi8.append(buttonT)
divi6.append(divi7,divi8);
divi5.append(divi6);
divi4.append(divi5);
divi1.append(divi2,divi3);
document.body.append(divi1);

});


}
document.addEventListener('DOMContentLoaded',getDataFromDOM)
















