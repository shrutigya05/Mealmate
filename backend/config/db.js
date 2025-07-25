import mongoose from "mongoose";

export const connectDB=async ()=>{
    await mongoose.connect('mongodb+srv://Mealmate:Mealmate@cluster0.cfwbyva.mongodb.net/food-del')
    .then(()=>console.log("DB connected"))
}