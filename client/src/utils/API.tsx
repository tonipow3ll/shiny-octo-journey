import axios from "axios";

const API = {
    getTideData: function() {
        return axios.get(`https://www.worldtides.info/api/v2?heights&extremes&date=today&lat=33.768321&lon=-118.195617&days=1&key=${process.env.REACT_APP_API}
        `);
    },
    getTideByLoc: function(lat: any, lon: any) {
        return axios.get(`https://www.worldtides.info/api/v2?heights&extremes&date=today&lat=${lat}&lon=${lon}&days=1&key=${process.env.REACT_APP_API}
        `);
    },
    sendLocInfo: function() {
        return axios.post(``)
    }
}





export default API;