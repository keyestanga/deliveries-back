const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const fileUpload = require('express-fileupload');
const mongoose = require('mongoose')

const app = express();


app.use(fileUpload());
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:false}));


const uri = `mongodb://actiuhumaMongodb:rlpdatabas@127.0.0.1:27017/rlp`;
 
mongoose.set('strictQuery', false);
mongoose.connect(uri)
  .then(db => console.log("🟢 Conectado a la bases datos: " + db.connection.name))
  .catch(err => console.log("🔴 Error en la conexión DB: " + err));  

app.use('/api', require("./users/routes/user.routes"));

app.listen(3000,'localhost',()=>{
    console.log('Server listening on port %s',3000);
})




