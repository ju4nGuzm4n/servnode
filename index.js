const express = require('express')

const app = express();

app.get('/', (req,res) => {
console.log(req.headers.host);

    var fecha = Date();

    console.log(fecha);

    res.json({ status: 'live',
                fecha: fecha,
            cliente:req.headers.host  });
});

app.listen(8080,'0.0.0.0');

console.log('ejecutandose on http://0.0.0.0:8080');