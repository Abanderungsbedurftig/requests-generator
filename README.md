## GET and POST requests generator
### description
The script has three functions:
- sending n-number of GET requests `getReq()`;
- sending POST requests according to the data from the file `/data/data.js` `postReq()`;
- sending n-number of POST requests `postReqEncoded()` (Content-Type: application/x-www-form-urlencoded).

You need to change the settings in the files `/data/data.js`
Example `/data/data.js`:
```
    module.exports.config = {
        url: [URL_FOR_REQUEST],
        count: 1,  
        interval: 1000  
}
```