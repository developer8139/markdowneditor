const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 9874;

app.use(cors());
app.use(express.json());



app.listen(PORT, 'localhost', function() {
    console.log(`Listening on port ${PORT}`)
})