let date = document.getElementById("dateId");
let cityName = document.getElementById("cityNameId");
let searchInput  =document.getElementById("SearchInputId");

var firstDay = new Date().getDay();

var secondDay = firstDay + 1 ;

var thirdDay = firstDay + 2 ;

if (firstDay == 0 && secondDay == 1 && thirdDay == 2){
    dayName1 = 'Sunday'
    dayName2 = 'Monday'
    dayName3 = 'Tuesday'
}
else if(firstDay == 1  && secondDay == 2 && thirdDay == 3){
    dayName1 = 'Monday'
    dayName2 = 'Tuesday'
    dayName3 = 'Wednesday'
}
else if(firstDay == 2 && secondDay == 3 && thirdDay == 4){
    dayName1 = 'Tuesday'
    dayName2 = 'Wednesday'
    dayName3 = 'Thursday'
}
else if(firstDay == 3 && secondDay == 4 && thirdDay == 5){
    dayName1 = 'Wednesday'
    dayName2 = 'Thursday'
    dayName3 = 'Friday'
}
else if(firstDay == 4  && secondDay == 5 && thirdDay == 6){
    dayName1 = 'Thursday'
    dayName2 = 'Friday'
    dayName3 = 'Saturday'
}
else if(firstDay == 5 && secondDay == 6 && thirdDay == 0){
    dayName1 = 'Friday'
    dayName2 = 'Saturday'
    dayName3 = 'Sunday'
}
else if ( firstDay == 6 && secondDay == 1 && thirdDay == 0){
    dayName1 = 'Saturday'
    dayName2 = 'Sunday'
    dayName3 = 'Monday'
}



let allData;

async function getData(userWord){

    var reponse= await fetch(`https://api.weatherapi.com/v1/forecast.json?key=f8526968ee4643859de162156211109&q=${userWord}&days=3`);

    allData = await reponse.json()

    console.log(allData)

    displayData()

}

getData('tokyo')


// function mainfunc(userWord){


//     let http = new XMLHttpRequest();

//     http.open( "GET" , `http://api.weatherapi.com/v1/forecast.json?key=f8526968ee4643859de162156211109&q=${userWord}&days=3` )

//     http.send();

//     http.addEventListener("readystatechange" , test);

//     function test(){
//         if( http.readyState == 4 && http.status == 200){
//             allData = JSON.parse(http.response)
//             displayData()
//         }
//     }


// }




function displayData(){

    

    let data = 
        `<div class="col-md-4 col-sm-4 mb-3">
            <div class="p-4 dayBG">
                <div class="line position-relative pb-3 d-flex justify-content-between">
                    <span>${dayName1}</span>
                    <span>${allData.location.localtime}</span>
                </div>
                <h1>${allData.location.name}</h1>
                <h2>${allData.current.temp_c + "&#x2103"}</h2>
                <img src="https:${allData.current.condition.icon}">
                <small class="d-block pb-2 blue">${allData.current.condition.text}</small>
                <span class="me-2 iconsColor"><i class="fas fa-umbrella"></i> ${allData.current.humidity+"%"}</span>
                <span class="me-2 iconsColor"><i class="fas fa-wind"></i> ${allData.current.wind_mph}</span>
                <span class="iconsColor"><i class="far fa-compass"></i> ${allData.current.wind_dir}</span>
            </div>
        </div>
        `

        hasala = ``;

        for(var i = 2 ; i < allData.forecast.forecastday.length ; i++){

            hasala += `
            <div class="col-md-4 col-sm-4 text-center mb-3">
                <div class="p-4 day1">
                    <div class="line position-relative pb-3 d-flex justify-content-center">
                        <span>${dayName2}</span>
                    </div>
                    <img src="https:${allData.forecast.forecastday[1].day.condition.icon}">
                    <h2>${allData.forecast.forecastday[1].day.maxtemp_c + "&#x2103"}</h2>
                    <h3 class="iconsColor">${allData.forecast.forecastday[1].day.mintemp_c + "&#730"}</h3>
                    <small class="blue">${allData.forecast.forecastday[1].day.condition.text}</small>
                </div>
            </div>

            <div class="col-md-4 col-sm-4 text-center mb-3">
                <div class="p-4 day2">
                    <div class="line position-relative pb-3 d-flex justify-content-center">
                        <span>${dayName3}</span>
                    </div>
                    <img src="https:${allData.forecast.forecastday[2].day.condition.icon}">
                    <h2>${allData.forecast.forecastday[2].day.maxtemp_c + "&#x2103"}</h2>
                    <h3 class="iconsColor">${allData.forecast.forecastday[2].day.mintemp_c + "&#730"}</h3>
                    <small class="blue">${allData.forecast.forecastday[2].day.condition.text}</small>
                </div>
            </div>
            `
        }

        

    document.getElementById("main").innerHTML = data + hasala;
}

mainfunc("cairo")



$(window).scroll(function(){
    


    let scrollVal = $(window).scrollTop()


    if( scrollVal > 20){

    $(".navbar").removeClass("py-3")
    

    }
    else{

        $(".navbar").addClass("py-3")


    }

    

})