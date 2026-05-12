import axios from "axios";

const serviceKey = "91fe0d3b8880778baf5685addabf13edecbf40e7dc6ab57374f188ed61ac4276"; 

export const getArrivalsCongestion = (terno) => {
    
    const proxy = "https://cors-anywhere.herokuapp.com/";
    const targetUrl = "http://apis.data.go.kr/B551177/StatusOfArrivals/getArrivalsCongestion";

    return axios.get(`${proxy}${targetUrl}`, {
        params: {
            serviceKey: serviceKey,
            numOfRows: '10',
            pageNo: '1',
            terno: terno,
            airport: 'ICN',
            type: 'json'
        }
    });
};