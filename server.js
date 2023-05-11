import express from 'express';

let app = express()
app.get('/', (request, response) => {

   return response.send('HI I am Akshay from my Server');


});


  app.listen(1111, () => {
    console.log('App is listening on port 1111');
  });



  




