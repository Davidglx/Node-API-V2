const express = require('express');
const app = express();



app.get("/", (req, res) => {
    res.send('Hello MODE API')
})
app.listen(3000, () => {
    console.log("Node API app is running in port 3000")
})