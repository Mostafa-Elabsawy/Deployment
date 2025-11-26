import mongoose from "mongoose";
export const connectDB = async () =>
{ 
    return mongoose
      .connect(
        "mongodb+srv://mostafaelabsawy:NbgIIBUeJKqXvQH7@cluster0.9vk1zzw.mongodb.net/nti_gig"
      )
      .then(() => {
        console.log("DB connected success");
      })
      .catch((error) => {
        console.log("DB connection failed", error.message);
      });
}