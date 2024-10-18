import { connect } from "mongoose";
import { config } from "dotenv";

config();

const URL: string =
  "mongodb+srv://tsenoosaruulod:7r0GipQsY41AMhXu@cluster0.mn7or.mongodb.net/";

export const connectDatabase = async () => {
  try {
    await connect(URL);
  } catch (error) {
    console.log("Database holbohod aldaa garlaa");
  }
};
