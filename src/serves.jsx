
import axios from "axios";

export function doPosts (url){
    return axios.get('https://jsonplaceholder.typicode.com' + url).then((respons) => {
        return respons.data
    })
}

// export function doPosts (url){
//     return axios.get({'https://jsonplaceholder.typicode.com',
//     params:{
//         _limit=5
//     }
// }).then((respons) => {
//         return respons.data
//     })
// }    