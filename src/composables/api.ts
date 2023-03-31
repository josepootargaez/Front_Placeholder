import axios from 'axios'
const api=  async ()=>{
    const api='https://jsonplaceholder.typicode.com'
    const  posts= await axios.get(`${api}/posts`)
    const  users= await axios.get(`${api}/users`)
    return {
        getPosts:posts.data,
        getUsers:users.data
    }
}

export default api