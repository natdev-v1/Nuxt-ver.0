import createApi from './createApi'
import Auth from './apiRegister/Auth'
export default ({ app }, inject) => {
    inject('apiService', () =>{
      const  createApi = createApi()
      return {
          ...Auth(createApi)
      }
    } )
  }