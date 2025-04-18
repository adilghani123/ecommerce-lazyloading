// import { connectDB } from "../db"; // Make sure path is correct

// export default defineEventHandler(async (event) => {
//   try {
//     const db = await connectDB();

//     if (!db) {
//       return {
//         statusCode: 500,
//         body: { success: false, message: "Failed to connect to MongoDB" },
//       };
//     }

//     return {
//       statusCode: 200,
//       body: { success: true, message: "Connected to MongoDB successfully!" },
//     };
//   } catch (error) {
//     return {
//       statusCode: 500,
//       body: { success: false, message: `Error: ${error.message}` },
//     };
//   }
// });
