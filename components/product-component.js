import { useContext } from "react";
import { ProductsContext } from "./ProductsContext";

export default function ProductCard({_id, image, amount, name, description, category, price}) {
    const {setSelectedProducts} = useContext(ProductsContext);
    function addProduct(_id){
        setSelectedProducts(prev => [...prev, _id]);
    }
    return(
         <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img src={`/${image}`} alt="" className="w-full"></img>
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{name}</div>
                    <p className="text-gray-700 text-base">{description}</p>
                    <p className="text-gray-700 text-base">Amount: {amount}</p>
                    <p className="text-gray-700 text-base">Category: {category}</p>
                </div>
                <div className='flex justify-evenly text-center py-4'>
                    <button onClick={() => addProduct(_id)} className='bg-gray-300 p-2'>Prideti i krepseli</button>
                <div className='p-2 text-xl'>{price}e</div>
            </div>
         </div>
    );
}