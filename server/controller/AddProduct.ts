import { Request, Response } from 'express';
import Product from '../model/products'; 

export const AddProduct = async (req: Request, res: Response) => {
  try {
    console.log('entered ')
    const { title, description, category, price, year, location, owners } = req.body;
    const images = req.files as Express.Multer.File[];

    const imagePaths = images.map(file => file.filename);

    const product = new Product({
      title,
      description,
      category,
      price,
      year,
      location,
      owners,
      images: imagePaths,
    });

    console.log('nice',product)
    await product.save();

    res.status(201).json({ message: 'Product added successfully', product });
  } catch (error) {
    res.status(500).json({ message: 'Error adding product', error });
  }
};