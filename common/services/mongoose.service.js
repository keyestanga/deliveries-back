const mongoose = require('mongoose');

let count = 0;

const options = {
    autoIndex:false,
    useNewUrlParser:true,
    useUnifiedTopology:true
}

// admin de mongodb "actiuhumaMongodb" psw "1234567890" db "rlp"
// usuario "actiuhuma" psw "rlpdatabase"  db"rlp"

const connectWithRetry = ()=>{
    console.log('Mongo connection with retry');
    mongoose.set('strictQuery',true);
    mongoose.connect('mongodb://actiuhuma:rlpdatabase@127.0.0.1:27017/rlp',options)
    .then(()=>{
        console.log('Mongo is connected 🟢');

    }).catch(error=>{
        console.log('Mongo connection unsuccessful, retry after 5 seconds. ', ++count);
        console.log('Mongo connection error 🔴: ', error);
        setTimeout(connectWithRetry, 5000);
    })
}

connectWithRetry();

exports.mongoose = mongoose;
