import mongoose from "mongoose";

const connect = async (): Promise<void> => {
  try {
    if (mongoose.connection.readyState !== 1) {
      await mongoose.connect(process.env.MONGO_URL as string);
      console.log("Mongo Connection successfully established.");
    } else {
      console.log("MongoDB is already connected.");
    }
  } catch (error) {
    console.error("Error connecting to Mongoose:", (error as Error).message);
    throw new Error("Error connecting to Mongoose");
  }
};

export default connect;
