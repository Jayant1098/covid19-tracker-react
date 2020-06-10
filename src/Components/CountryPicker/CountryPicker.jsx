import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core'

import styles from './CountryPicker.module.css'

import { countries } from '../../api'

const CountryPicker = ({handleCountryChange}) => {

    const [ fetchedCoutries, setFetchedCountries ] = useState([])

    useEffect( () => {
        
        const getCountries = async () => {
            // const data = await countries()
            // console.log(data)
            setFetchedCountries(await countries())
        }
        
        getCountries()
    },[setFetchedCountries])

    return (
        <FormControl>
            <NativeSelect onChange={(e) => handleCountryChange(e.target.value)}>
                <option value="global">Global</option>
                {fetchedCoutries.map( country => <option key={country} value={country}>{country}</option>
                )}
            </NativeSelect>
        </FormControl>
    );
}

export default CountryPicker;