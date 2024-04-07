const express = require('express');
const path = require('path');

const app = express();

app.use('/public', express.static(path.join(__dirname, 'public')));

app.get('/aaa', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/crawler', (req, res) => {
    const users = [
        {
            id: 1,
            name: 'Truong Duy',
        },
    ];

    res.json(users)
});

app.listen(8080, () => {
    console.log('Server is listening on port 8080');
});
