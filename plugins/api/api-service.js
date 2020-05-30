import createApi from './createApi'
import Auth from './apiRegister/Auth'
export default ({ app }, inject) => {
    inject('apiService', () =>{
      const  api = createApi('http://baiwadev.thddns.net:9440/CTBackend')
      return {
          ...Auth(api)
      }
    } )
  }