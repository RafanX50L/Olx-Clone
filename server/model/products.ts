import mongoose, { Document, Schema } from 'mongoose';

interface IProduct extends Document {
  title: string;
  description: string;
  category: string;
  price: number;
  year: number;
  location: string;
  owners: string;
  images: string[];
  createdAt: Date;
  updatedAt: Date;
}


const productSchema: Schema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    category: {
      type: String,
      required: true,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
    },
    year: {
      type: Number,
      required: true,
    },
    location: {
      type: String,
      required: true,
      trim: true,
    },
    owners: {
      type: String,
      required: true,
      enum: ['1st', '2nd', '3rd', '4th', '4+'], 
    },
    images: {
      type: [String], 
      required: true,
    },
  },
  {
    timestamps: true,
  }
);


const Product = mongoose.model<IProduct>('Product', productSchema);
export default Product;