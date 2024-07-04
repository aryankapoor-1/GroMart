const mongoose = require("mongoose");

const uri = "mongodb://127.0.0.1:27017/estore"

  mongoose.connect(uri, {
    useNewUrlParser: true , useUnifiedTopology: true
})
    .then(() => console.log("___Data-Base Connected___"))
    .catch((err) => console.log("___Data-Base Didin't Connected___", err));
const connectDatabase = (uri) => {
    return (uri);
};

module.exports = connectDatabase;
