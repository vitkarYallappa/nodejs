import axios from 'axios';


export default axios.create({
    baseURL: 'https://swapi.co/api',
    // headers: {
    //     Authorization: 'Client-ID 317469deab49cbcd9ae10cdcb36d6c5f8c21ec1fa53b56c5a4e6425ff5c5bb3f'
    // }
})