import app from "./server";
import mongoose from "mongoose";

mongoose.connect(
  process.env.MONGODB_ENDPOINT || "",
  {},
  () => {
    console.log("connected to database");
  }
);

app.listen(3000, () => {
  console.log("Hello");
});
