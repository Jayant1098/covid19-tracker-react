import React from 'react';
import { Cards, Charts, CountryPicker } from './Components'
import { fetchData } from './api'
import styles from './App.module.css'
class App extends React.Component {
    state = {  }

    async componentDidMount(){
        const data = await fetchData()
        console.log(data)
    }
    render() {
        return (
            <div className={styles.container}>
                <Cards />
                <CountryPicker />
                <Charts />
            </div>
        );
    }
}

export default App;