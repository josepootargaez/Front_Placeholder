import axios from 'axios'
const api='https://jsonplaceholder.typicode.com'

const serviceUser = async (idPost:string)=>{
    const  comments= await axios.get(`${api}/post/${idPost}/comments`)
    return{
        getComments:comments.data
    }
}

  
  export default serviceUser