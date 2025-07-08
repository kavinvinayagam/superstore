import express from 'express';
import { connect, Schema, model } from 'mongoose';

const app = express();

// Connect to MongoDB
connect('mongodb://localhost:27017/mydb')
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log(err));

const UserSchema = new Schema({
    name: String,
    age: Number
});

const UserModel = model("User", UserSchema);
app.get("/getUsers", async (req, res) => {
    try {
        const users = await UserModel.find();
        res.json(users);
    } catch (error) {
        res.status(500).send(error);
    }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
