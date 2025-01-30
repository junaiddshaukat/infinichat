import mongoose from 'mongoose'


export const connectDB = async () =>{
  try {
    const con = await mongoose.connect(process.env.DB_URL)
    console.log("📅 Database is Connected : ",con.connection.host);
    
  } catch (error) {
    console.log(`MongoDB Error Connection `, error);
    
  }
}