const express = require('express');
const app = express();
const mercadopago = require('mercadopago');
const bodyParser = require ('body-parser')

mercadopago.configure({
    access_token: 'APP_USR-2392853274649273-060300-15b4adb8d0b92918954774adfece2393-1389989852'
});

app.use(bodyParser.urlencoded({ extended: false}))

//routes
app.get('/checkout', (req, res) => {
    
// Crea un objeto de preferencia
let preference = {
    items: [
      {
        title: "Mi producto",
        unit_price: 100,
        quantity: 1,
      },
    ],
  };
  
  mercadopago.preferences
    .create(preference)
    .then(function (response) {
        console.log(response.body);
        res.send('checkout')
      // En esta instancia deberás asignar el valor dentro de response.body.id por el ID de preferencia solicitado en el siguiente paso
    })
    .catch(function (error) {
      console.log(error);
    });
  
}); 


//server
app.listen(3000, () => {
    console.log('Kwa, Server on port 3000');
});