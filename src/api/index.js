import axios from 'axios'
const url= 'https://covid19.mathdro.id/api'

export const fetchData = async (country) => { 
    let changeableURL = url;
//if country choosen by user, then change the url accordingly by extending county name.
    if(country){
        changeableURL = `${url}/countries/${country}`
    }
    try{
        // destructuring the returned/fetched data from url
        const { data: {confirmed, recovered, deaths, lastUpdate} } = await axios.get(changeableURL);
        const modifiedData = {
            confirmed,          // confirmed: confirmed,
            recovered,
            deaths,
            lastUpdate,
        }
        return modifiedData;    // returning the data we need
    } catch(err){
        console.log(err);
    }
}

export const fetchDailyData = async()=>{
    try{
       const { data } = await axios.get(`${url}/daily`)
       //console.log(data)
        const modifiedData = data.map((dailyData)=>({
        confirmed: dailyData.confirmed.total,
        deaths: dailyData.deaths.total,
        date: dailyData.reportDate,
       }))
       return modifiedData
    }catch(err){
        console.log(err)
    }
}
//fetching all the countries name
export const fetchCountries = async()=>{
    try{
       //const res = await axios.get(`${url}/countries`)
       //console.log(res)
       //https://covid19.mathdro.id/api/countries  - getting countries object which is array of objects so needs destrucring first to get array
       const { data: { countries }} =  await axios.get(`${url}/countries`)
       return countries.map((country) => country.name)
    }catch(err){
        console.log(err)
    }
}