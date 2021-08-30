const app = require('./app');
require('dotenv').config();

require('./connections/db')
const PORT = process.env.PORT || 4500

app.listen(PORT,()=>{
    console.log(`server is up on ${PORT}`)
})

