import { Router } from "express";
import { login, signup } from "../controller/Auth";
import { AddProduct } from "../controller/AddProduct";
import upload from "../config/multer"; 
import { fetchProducts } from "../controller/Home";

const router = Router();
router.post('/signup', signup);
router.post('/login', login);
router.get('/products', fetchProducts);
router.post('/add_product', upload.array('images', 3), AddProduct); 
export default router;