import mongoose from "mongoose";
import User from "../models/User.js"

export const getAllUsers = async (req, res) => {
    try {
        const limit = 10;
        const cursor = req.query.cursorId

        let query = {};

        if(cursor) {
            query._id = { $lt: new mongoose.Types.ObjectId(cursor) }
        }

        const users = await User.find(query).sort({_id: -1}).limit(limit).select("-password")

        res.json({
            success: true, users, nextCursor: users.length ? users[users.length - 1]._id : null
        })
    } catch (error) {
        console.log(error.message)
        res.json({
            success : false, message: error.message
        })
    }
}

export const deleteUser = async (req, res) => {
    try {
        const userId = req.params.id
        await User.findByIdAndDelete(userId)
        res.json({
            success: true
        })
    } catch (error) {
        console.log(error.message)
        res.json({
            success: false, message: "Server Error"
        })
    }
}