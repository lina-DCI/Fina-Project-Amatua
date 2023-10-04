/** Database Set Up **/
import mongoose from "mongoose"
const mongoUser     = process.env.MONGO_USER
const mongoPassword = process.env.MONGO_PASSWORD
const mongoCluster  = process.env.MONGO_CLUSTER
const mongoDatabase = process.env.MONGO_DATABASE

mongoose
    .connect(
        `mongodb+srv://${mongoUser}:${mongoPassword}@${mongoCluster}/${mongoDatabase}?retryWrites=true&w=majority`, 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("MongoDB connected");
    })
    .catch((error) => {
        console.error("MongoDB connection error:", error);
    });


export default mongoose