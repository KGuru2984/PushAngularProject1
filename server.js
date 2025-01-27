const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'browser')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname,'browser','index.html'));
});

const port = process.env.PORT || 4200;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
