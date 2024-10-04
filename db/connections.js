import  mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config()
export const connectDB = async () => {
    try {
      await mongoose.connect(process.env.MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log('MongoDB connected successfully');
    } catch (err) {
      console.log('Error connecting to MongoDB:', err.message);
      process.exit(1);
    }
  };
