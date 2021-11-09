const mongoose = require ("mongoose");
const  dataSchema = new mongoose.Schema({

username:{
  type : "string",

},
age:{
  type : Number,
}

});
module.exports =mongoose.model('data', dataSchema);
