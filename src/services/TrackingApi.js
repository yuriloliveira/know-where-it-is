import cheerio from 'cheerio';

export const CORREIOS_TRACKING_API_URL = 'https://www2.correios.com.br/sistemas/rastreamento/resultado_semcontent.cfm';
export default {
  getCorreiosTrackingByCode: (code, successCallback, errorCallback) => {
    if (!code) {
      return;
    }

    var XHR = new XMLHttpRequest();
    var FD  = new FormData();
  
    // Push our data into our FormData object
    for(name in data) {
      FD.append(name, data[name]);
    }
  
    // Define what happens on successful data submission
    new Promise(XHR.addEventListener('load', successCallback);
  
    // Define what happens in case of error
    XHR.addEventListener('error', errorCallback);
  
    // Set up our request
    XHR.open('POST', 'https://www2.correios.com.br/sistemas/rastreamento/resultado_semcontent.cfm');
  
    // Send our FormData object; HTTP headers are set automatically
    XHR.send(FD);
  }
};