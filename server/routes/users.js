import { createUser } from "../controllers/auth.js";
import express from 'express';
const router = express.Router();

router.post('/signup', createUser)

export default router