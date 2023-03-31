import axios from 'axios'
const api='https://jsonplaceholder.typicode.com'

const serviceUser = async (idUser:string="1")=>{
    const  users= await axios.get(`${api}/users`)
    const  OnlyUser= await axios.get(`${api}/users/${idUser}`)
    return{
        OnlyUser:OnlyUser.data,
        getUsers:users.data
    }
}

  
  export default serviceUser