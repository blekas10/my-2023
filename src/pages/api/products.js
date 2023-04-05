import {initMongoose} from 'lib/mongoose.js';
import Product from 'models/product';

export async function findAllProducts() {
    return Product.find().exec();
}

export default async function handle(req, res){
    await initMongoose();
   res.json( await findAllProducts());
   
}