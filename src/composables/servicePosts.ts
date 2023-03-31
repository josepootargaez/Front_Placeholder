import axios from 'axios'
const api='https://jsonplaceholder.typicode.com'
const servicePost=  async (idpost:string="1")=>{
    const  posts= await axios.get(`${api}/posts`)
    const  OnlyPost= await axios.get(`${api}/posts/${idpost}`)
    return {
        getPosts:posts.data,
        getOnlyPost:OnlyPost.data
    }
}



  
  export default servicePost