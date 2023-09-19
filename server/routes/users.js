import { createUser, login } from "../controllers/auth.js";
import express from 'express';
const router = express.Router();

router.post('/signup', createUser)
router.post('/login', login);

export default router