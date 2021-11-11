const express= require('express');

const app = express();

const PORT = 5000;

app.listen(PORT, () => console.log(`SERVER LISTENING ON POST ${PORT}`));

app.get('/', (req,res) => {
  res.send("hello");
})