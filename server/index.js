const express = require('express')
const path = require('path');
const app = express()
const PORT = process.env.PORT || 3001;

app.use(express.static(path.resolve(__dirname, '../client/build')));


app.get('/api', (req, res) => {
    res.json({ message: "Hello from server Pardhu!" });
});

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})
