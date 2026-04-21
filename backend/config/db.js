import mongoose from "mongoose";

export const connectDB=async ()=>{
    await mongoose.connect('mongodb+srv://duamehra123_db_user:8AmVhBcNJi4WI10s@cluster0.qrbqke3.mongodb.net/mealmate')
    .then(()=>console.log("DB connected"))
}
