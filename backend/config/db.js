const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      use,
    });

    console.log(` Mongodb connected  ${conn.connection.host}`);
  } catch (e) {
    console.log(`error: ${error.message}`);
    process.exit();
  }
};

export default connectDB;
