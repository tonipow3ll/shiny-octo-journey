import axios from "axios";

const API = {
    getTideData: function() {
        return axios.get(`https://www.worldtides.info/api/v2?heights&extremes&date=today&lat=33.768321&lon=-118.195617&days=3&key=${process.env.REACT_APP_API}
        `);
    }
}

export default API;