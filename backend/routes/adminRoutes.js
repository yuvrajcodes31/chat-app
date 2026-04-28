import express from 'express'
import { protectRoute } from '../middleware/auth.js'
import { deleteUser, getAllUsers } from '../controllers/adminController.js'

const adminRouter = express.Router()

adminRouter.get("/all-users", protectRoute, getAllUsers)
adminRouter.delete("/delete-user/:id", protectRoute, deleteUser)

export default adminRouter