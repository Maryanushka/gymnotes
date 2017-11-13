const express = require('express');
const app = express();

app.use(express.static('./server/static'));
app.use(express.static('./client/dist/'));

app.listen(8080, () => {
    console.log('Server is running on http://localhost:8080 or http://127.0.0.1:8080');
});
