import mongoose from "mongoose";

const connectDB = async () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("Connected to the DB successfully"))
    .catch((err) =>
      console.log(`Error occured while connecting to the DB ${err}`)
    );
  mongoose.connection.on("disconnected", () => {
    console.log("mongoDB disconnected");
  });

  mongoose.connection.on("connected", () => {
    console.log("mongoDB connected");
  });
};

export default connectDB;
