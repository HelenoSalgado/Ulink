import { Request } from "express";
import request from 'request';


export const analyticRequest = async() => {

    //const analytics = req.headers;

let url = `http://ip-api.com/json`
let dados = '';
 

request(url, function (err: any, response: any, body: string) {
    if(err){
        console.log('error:', err);
    } else {
        let ipInfo = JSON.parse(body);
        dados = `?????????? WHERE AM I ?????????
                 -------------------------------
                 IP: ${ipInfo.query}
                 Country: ${ipInfo.country}
                 City: ${ipInfo.city}
                 Region: ${ipInfo.regionName}
                 Lat: ${ipInfo.lat}
                 Lon: ${ipInfo.lon}
                 Organization: ${ipInfo.org}
                 -------------------------------
                 Dev by CP 2019`
        console.log(dados);
    }
 });
   
    
    //const so = JSON.parse(analytics['sec-ch-ua-platform'].toString());
    //const browser = analytics['sec-ch-ua'];
    
    // System Operation
    // if (so === 'Linux') {
    //     valuesAnalytics[0].so.map(so => { 
    //     if(so.name === "Linux"){
    //       return so.value++;
    //     }
    //   });
    // }
    // if (so === 'Android') {
    //     valuesAnalytics[0].so.map(so => { 
    //     if(so.name === "Android"){
    //       return so.value++;
    //     }
    //   });
    // }
    // Incompleto
    // if (so === 'MacOs') {
    //     valuesAnalytics[0].so.map(so => { 
    //     if(so.name === "Android"){
    //       return so.value++;
    //     }
    //   });
    // }
    // Browser
    // if (browser.indexOf('Google Chrome') > 0) {
    //     valuesAnalytics[0].browser.map(b => { 
    //     if(b.name === "Google Chrome"){
    //       return b.value++;
    //     }
    //   });
    // }

    //console.log(analytics["accept-patch"]);
    //console.log(analytics["user-agent"]);

    //return valuesAnalytics;

}
