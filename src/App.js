import React from 'react';
import { Cards, Charts, CountryPicker } from './Components'
import { fetchData, countries } from './api'
import styles from './App.module.css'
class App extends React.Component {
    state = { 
        data :{},
        country:"",
     }

    async componentDidMount(){
        const fetchedData = await fetchData()
        this.setState({data:fetchedData,})
    }

    handleCountryChange = async(country) => {
        const fetchedData = await fetchData(country)
        this.setState({country:country, data:fetchedData,})
    }

    render() {
        const { data, country } = this.state
        return (
            <div className={styles.container}>
                <Cards data={data}/>
                <CountryPicker handleCountryChange={this.handleCountryChange}/>
                <Charts data={data} country={country}/>
            </div>
        );
    }
}

export default App;