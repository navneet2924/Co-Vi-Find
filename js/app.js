function find() {
    date1 = document.getElementById("date1").value
    date2 = document.getElementById("date2").value
    date3 = document.getElementById("date3").value
    pin1 = document.getElementById("pin").value
    console.log(pin1);
    fetch(`http://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin?pincode=${pin1}&date=${date1}-${date2}-${date3}`)
    .then(res=>res.json())
    .then(result =>{
        let a = result.centers
        for(i=0;i<10;i++){
            document.createElement("centername"+i)
            document.getElementById("centername"+i).innerHTML = a[i].name
            console.log(a[i].name)
            document.getElementById("centeradd"+i).innerHTML = a[i].address
            console.log(a[i].name)
            let b= a[i].sessions[0]
            document.getElementById("age"+i).innerHTML = b.min_age_limit
            document.getElementById("slots"+i).innerHTML = b.available_capacity
            document.getElementById("v"+i).innerHTML = b.vaccine
        }        
    })
    document.getElementById("date1").value = ""
    document.getElementById("date2").value = ""
    document.getElementById("date3").value = ""
    document.getElementById("pin").value = ""
}
function alpha(){
    fetch(`https://services1.arcgis.com/0MSEUqKaxRlEPj5g/arcgis/rest/services/ncov_cases2_v1/FeatureServer/2/query?where=1%3D1&outFields=*&outSR=4326&f=json`)
    .then(res=>res.json())
    .then(result=>{
        document.getElementById("confirm").innerHTML = "Confirmed "+result.features[79].attributes.Confirmed
        document.getElementById("death").innerHTML = "Deaths "+result.features[79].attributes.Deaths
    })
}