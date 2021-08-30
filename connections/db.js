const mongoose = require('mongoose');
mongoose.connect(process.env.URL,{
    useUnifiedTopology:true,
    useNewUrlParser:true,
    useFindAndModify:true
})