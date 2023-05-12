import { Request } from "express";

export const analyticRequest = async(valuesAnalytics, req: Request) => {

    const analytics = req.headers;
    
    //const so = JSON.parse(analytics['sec-ch-ua-platform'].toString());
    const browser = analytics['sec-ch-ua'];
    
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

    //console.log(browser.indexOf('Mozila') > 0);
    console.log(analytics.referer);
    console.log(analytics.host);
    console.log(analytics.origin);
    console.log(analytics.location);
    console.log(analytics.allow);
    console.log(analytics["user-agent"]);
    console.log(analytics.tk);


    return valuesAnalytics;

}