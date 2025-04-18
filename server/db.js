// import { MongoClient } from "mongodb";

// // ✅ Correct MongoDB Atlas connection string
// const uri =
//   "mongodb://adilftdev:PHDVo0LetmVhuSFi@ac-abcde-shard-00-00.cluster0.mongodb.net:27017,ac-abcde-shard-00-01.cluster0.mongodb.net:27017,ac-abcde-shard-00-02.cluster0.mongodb.net:27017/ecommerceapp?ssl=true&replicaSet=atlas-xyz-shard-0&authSource=admin&retryWrites=true&w=majority";

// // ✅ Prevent multiple connections
// let client = null;
// let db = null;

// export async function connectDB() {
//   try {
//     // ✅ Use existing connection if available
//     if (db) {
//       console.log("✅ Using cached MongoDB connection");
//       return db;
//     }

//     // ✅ Connect to MongoDB
//     client = new MongoClient(uri);
//     await client.connect();
//     db = client.db("ecommerceapp");

//     console.log("✅ Connected to MongoDB Atlas");
//     return db;
//   } catch (error) {
//     console.error("❌ MongoDB Connection Error:", error.message);
//     return null;
//   }
// }
