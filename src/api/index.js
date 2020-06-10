import axios from 'axios'

const url = 'https://covid19.mathdro.id/api'

// export const fetchData = () => {
//     return fetch(url)
//      .then(data => data.json())
//         .then(response => response)
//         .catch((error) => console.log(error))
// }

export const fetchData = async (country) => {
    
    let modifiedURL= url
    
    if(country){
        modifiedURL = `${url}/countries/${country}`
    }
    
    try{
        const { data : { confirmed, deaths, recovered, lastUpdate}} = await axios.get(modifiedURL);
        return  { confirmed, deaths, recovered, lastUpdate}
    }
    catch(error){
        console.log(error)
    }
}

export const fetchDailyData = async () =>{
    try{
        // const  {data}  = await fetch(`${url}/daily`).then(data => data.json())
        const  { data }  = await axios.get(`${url}/daily`)
        const modifiedData = data.map( dailyData => ({
            confirmed : dailyData.confirmed.total,
            deaths : dailyData.deaths.total,
            date: dailyData.reportDate,
        }))
        return modifiedData
    }
    catch(err){
        console.log(err)
    }
}

export const countries = async () => {
    try{
        const { data : { countries } } = await axios.get(`${url}/countries`)
        // console.log(data)
        return countries.map((country) => country.name)
    }
    catch(err){
        console.log(err)
    }
}