
const mongoose = require('mongoose')


const dbURI = 'mongodb+srv://backend_admin:backend_admin@backenddeploy.o5rod.mongodb.net/node-test?retryWrites=true&w=majority'

mongoose.connect(dbURI,{
    useNewUrlParser:true,
    useFindAndModify:true,
    useUnifiedTopology:true,
    useCreateIndex:true
})
.then(res =>{
    console.log("DB connected")
})
.catch(err =>{
    console.log('DB not connected')
})