const rp = require('request-promise');
const {data, config} = require('../data/data');

const getEncodedData = data => {
    let dt = new URLSearchParams();
    Object.keys(data).forEach(key => {
        dt.append(key, data[key]);
    });
    return dt.toString();
}

const sendRequest = (options, count) => {
    if(count){
        const interval = config.interval || 1000;
        let int = setInterval(() => {
            rp(options)
                .then(res => console.log(res))
                .catch(err => console.log(err)); 
        }, interval);
        setTimeout(() => clearInterval(int), interval*(count + 1)); 
    }else{
        rp(options)
            .then(res => console.log(res))
            .catch(err => console.log(err)); 
    } 
}

module.exports = {

        getReq: () => {
            let count = config.count || 1;
            const options = {
                method: 'GET',
                url: config.url || 'http://localhost:3000'
            };
            sendRequest(options, count);
        },

        postReq: () => {
            if(data.length){
                data.forEach(item => {
                    const options = {
                        method: 'POST',
                        url: config.url,
                        body: item,
                        json: true
                    };
                    sendRequest(options);
                });
            }
        },

        postReqEncoded: () => {
            if(data.length){
                let count = config.count || 1;
                const options = {
                    method: 'POST',
                    url: config.url,
                    form: getEncodedData(data[0])
                };
                sendRequest(options, count);
            }
        }

}
