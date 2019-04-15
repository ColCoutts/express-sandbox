// const express = require('express');
// const app = express();


// const urlLogger = (request, response, next) => {
//     //run middleware code here
//     console.log('Request URL: ', request.url);
//     //move on next middleware function or next route handler
//     next();
// }; 

// const timeLogger = (request, response, next) => {
//     console.log('Datetime: ', new Date(Date.now()).toString());
//     next();
// };

// app.use(urlLogger, timeLogger);
// app.use(express.static('public'));

// app.get('/', (request, response) => {
//     response.send('Hello World');
// });

// app.get('/sunsets', (request, response) => {
//     response.sendFile('');
// })

// app.get('/json', (request, response) => {
//     response.status(200).json({ 'name': 'Robbie'});
// });

// app.listen(3000, () => {
//     console.log('Express intro running on localhost:3000')
// });

const server = require('./app');
const requestHandler = require('./requestHandler');
const router = require('./router');

const handle = {};

handle['/earthday'] = requestHandler.writeTxt;
handle['/hello'] = requestHandler.writeJson;

server.start(router.route, handle);
