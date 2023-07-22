import axios from 'axios'
console.log(process.env.REACT_APP_YT_API_KEY)
const request = axios.create({
   baseURL: 'https://youtube.googleapis.com/youtube/v3/',
   params: {
      key: 'AIzaSyAPCOS-MtJ0QltWF3Ek_Wb61kGCxcohVAI',
   },
})

export default request