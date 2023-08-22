const express = require('express');
const app = express();

app.listen(8888, () => console.log('listening on port 8888'));

app.use((request, response, next) => {
    // response.send('<h1>Hello World!</h1>');
    // response.send('Hello World2!');
    response.send({
    
        message: 'Hello World!'
    });
});