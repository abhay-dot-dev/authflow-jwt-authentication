import { Router } from "express";
import { verifyToken } from "../middleware/authMiddleware.js";
import { getProducts } from "../controllers/productController.js";
import { loginUser, registerUser } from "../controllers/authController.js";

const router = Router();

router.post('/login', loginUser)
router.post('/register', registerUser)
router.get('/products', verifyToken, getProducts);

export default router;