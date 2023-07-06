const express = require('express');
const app = express();
const port = 8080;
app.get('/', (req, res)=>{
  res.send('I am John');
})

app.listen(port,() => {
  console.log(`Example app listening at ${port}`);
})