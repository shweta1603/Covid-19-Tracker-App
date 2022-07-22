// npm install --save axios react-chartjs-2 react-countup
import React, { Component } from 'react'
import './App.css';
import styles from './App.module.css'
import {Cards, Chart, Country} from './components'
import {fetchData} from './api'
import coronaImage from './images/image.jpg'

class App extends React.Component {
  state={
    data:{},
    country:'',
  }
  async componentDidMount(){
    //making request to fetch data after first time rendering the page. fetchData() function is inside api
    const fetchedData = await fetchData();
    //console.log(data)
    this.setState({ data: fetchedData })
  }

  handleCountryChange = async (country) => {
    //fetch the data
    // set the state
    const fetchedData = await fetchData(country);
    console.log(country)
    console.log(fetchedData)
    this.setState({ data: fetchedData, country: country })
  }
  render(){
    const { data, country }= this.state
    return (
      <div className={styles.container}>
        <img className={styles.image} src={coronaImage} alt='COVID-19' />
        <Cards data={data} />
        <Country handleCountryChange={this.handleCountryChange}/>
        <Chart data={data} country={country} />
      </div>
    );
  }
}

export default App;
