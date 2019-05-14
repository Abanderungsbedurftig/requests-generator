module.exports.data = [
    {id: '1', data: '2'}
]

module.exports.config = {
    url: 'http://localhost:3000',  //required for all request
    count: 1,  //number of requests. required for getReq() and postReqEncoded()
    interval: 1000  //requests will be sent at this interval. required for getReq() and postReqEncoded()
}
