import express from 'express';
import configViewEngine from './configs/viewEngine';
const app = express();
const port = 8080;
const path = require('path');
configViewEngine(app);
app.get('/', (req, res)=>{
  //res.sendFile('/',path.join(__dirname,'./index.html'));
  res.render('index.ejs');
})

app.listen(port,() => {
  console.log(`Example app listening at ${port}`);
})
