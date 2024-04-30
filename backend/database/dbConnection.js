import mongoose from "mongoose";

export const dbConnection = () => {
  console.log(process.env.DB)
  mongoose
    .connect(process.env.DB)
    .then(() => {
      console.log("Connected to database.");
    })
    .catch((err) => {
      console.log(`Some Error occured. ${err}`);
    });
};
