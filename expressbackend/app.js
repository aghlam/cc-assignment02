const express = require('express')
var request = require('request')
const app = express()
const port = 5000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/getcafebyid/:id', (req, res) => {

    var cafe_id = req.params.id

    request('https://xdhg51t95l.execute-api.ap-southeast-2.amazonaws.com/dev/cafe/' + cafe_id, 
        function (error, response, body) {
            if (!error && response.statusCode == 200) {
                console.log(body) // Print object
                res.send(body);
            }
        })

})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})