import { create } from 'apisauce'
export default (url,reqHearder)=>{
    const api = create({
        baseURL:url,
        ...reqHearder
      })

      return {
          post:async (endPont,params)=>{
           let res = await api.post(endPont,params)
           return  res
          },
          get:async (endPont,params)=>{
            let res = await api.get(endPont,params)
            return  res
           }
      }
}