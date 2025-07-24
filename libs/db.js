import mongoose from 'mongoose';

const ConnectedDB=async ()=>{
    try{
        await mongoose.connect(process.env.MongoURL);
        console.log('DB connection is established');
    }
    catch(error){
        console.error('error was happend durring coonectionDB',error);
    }
};

export default ConnectedDB;