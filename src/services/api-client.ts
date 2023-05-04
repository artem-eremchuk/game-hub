import axios from "axios";

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '48a86c8482f5416fb52d85bb705e99ee'
  }
})