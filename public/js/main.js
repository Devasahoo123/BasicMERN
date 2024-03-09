const submitBtn = document.getElementById( "submitBtn" );
const cityName = document.getElementById("cityname");
const city_name = document.getElementById("city_name");
const temp = document.getElementById("temp");
const temp_status = document.getElementById("temp_status");
const getInfo = async(event)=>{
    event.preventDefault();  //prevents page from reloading after form submission
    let cityVal=cityName.value;

    if(cityVal===""){
        city_name.innerText ="Please enter a valid City Name";
    }else{
        try{
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=e97ff2fe3e941e13ecf37ca3a4b02ec0`;
            const res=await fetch(url);
            const data = await res.json();
            const arrData = [data];

            city_name.innerText=`${arrData[0].name}, ${arrData[0].sys.country}`;
            temp.innerHTML=`<span>${arrData[0].main.temp}</span>°C`;
            // temp_status.innerText=arrData[0].weather[0].main;

            const tempMood = arrData[0].weather[0].main;
            // condition to check sunny or cloudy
            if(tempMood == "Clear"){
                temp_status.innerHTML="<i class ='fas fa-sun' style='color: #eccc68;'></i>";
            } else if(tempMood=="Clouds") {
                temp_status.innerHTML="<i class='fa fa-cloud' style='color : #f1f2f6;'></i> ";
            }
            else if(tempMood=="Rain"){
                temp_status.innerHTML="<i class='fas fa-cloud-rain'style='color:#a4b0be; ></i>";
            }
            else{
                temp_status.innerHTML="<i class='fas fa-cloud'style='color:#757c8a;'></i>";
            }
            

        }
        catch{
           city_name.innerText="Plz enter the city name properly"; 
        }
    }
}
submitBtn.addEventListener( 'click', getInfo);