
module.exports = (data) => ({
    "isBase64Encoded": false,
    "statusCode": 200,
    "statusDescription": "200 OK",
    "headers": {
        "Access-Control-Allow-Origin": "*",
        "Set-cookie": "cookies",
        "Content-Type": "application/json"
    },
    "body": JSON.stringify({
        data: data
    })
});
