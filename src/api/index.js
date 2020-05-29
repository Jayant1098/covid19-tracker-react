import axios from 'axios'

const url = 'https://covid19.mathdro.id/api'

// export const fetchData = () => {
//     return fetch(url)
//      .then(data => data.json())
//         .then(response => response)
//         .catch((error) => console.log(error))
// }

export const fetchData = async () => {
    try{
        const response = await axios.get(url);
        return response
    }
    catch(error){
        console.log(error)
    }
}