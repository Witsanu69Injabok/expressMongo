const mongoose = require('mongoose');

const connectDB = async ()=> {
    try {
        await mongoose.connect(
            'mongodb://127.0.0.1:27017/db1'
        );
        console.log('MongoDB Connected...');
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

module.exports = connectDB;