import mongoose  from "mongoose";


const connectionToDb = async() =>{
    try{
    const { connection } = await mongoose.connect(
        "mongodb+srv://adminpw:admin123@lmspw.rjvxc1n.mongodb.net/s?retryWrites=true&w=majority"
    );
    if(connection){
        console.log(`Connected to Db:${connection.host}`);
    }
}catch(e){
    console.log(e);
    process.exit(1);
}
}

export default connectionToDb;