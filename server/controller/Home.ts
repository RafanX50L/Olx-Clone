import { Request, Response } from "express";
import Product from "../model/products";

export const fetchProducts = async (req: Request, res: Response) => {
    try {
        const products = await Product.find();
        res.status(200).json({ products: products, message: "Done transaction" });
    } catch (error: unknown) {
        
        if (error instanceof Error) {
            res.status(500).json({ message: "Failed to fetch products", error: error.message });
        } else {

            res.status(500).json({ message: "Failed to fetch products", error: "Unknown error" });
        }
    }
};

export const findProduct = async (req: Request, res: Response) => {
    const {id} = req.params;
    try {
        const product = await Product.findById(id);
        res.status(200).json({ product: product, message: "Done transaction" });
    } catch (error: unknown) {
        
        if (error instanceof Error) {
            res.status(500).json({ message: "Failed to fetch product", error: error.message });
        } else {

            res.status(500).json({ message: "Failed to fetch product", error: "Unknown error" });
        }
    }
};

