const {default:mongoose}=require("mongoose")

const dbConnect=()=>{
try{
    const conn=mongoose.connect(process.env.MONGODB_URL)
    console.log("database connection succesfull")
}
catch(error)
{
    console.log("database connection error")
}
};

module.exports=dbConnect;