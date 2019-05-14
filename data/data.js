module.exports.data = [
    {mode: 'vote', v: 16713}
]

module.exports.config = {
    url: 'http://ktosomsk.ru/h78.php',  //required for all request
    count: 1,  //number of requests. required for getReq() and postReqEncoded()
    interval: 1000  //requests will be sent at this interval. required for getReq() and postReqEncoded()
}
