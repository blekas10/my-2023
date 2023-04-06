import BillingForm from "components/BillingForm";
import Footer from "components/Footer";
import Layout from "components/Layout";
import { ProductsContext } from "components/ProductsContext";
import { useContext, useEffect, useState } from "react";

export default function CheckoutPage() {
    const {selectedProducts, setSelectedProducts} = useContext(ProductsContext);
    const [productsInfos, setProductsInfos] = useState([]);
    useEffect(() =>{
        if(selectedProducts.length > 0) {
            const uniqIds = [... new Set(selectedProducts)];
            fetch('/api/products?ids='+ uniqIds.join(','))
            .then(response => response.json())
            .then(json => setProductsInfos(json))
        }
    },[selectedProducts]);

    function moreOfthisProduct(id){
        setSelectedProducts(prev => [...prev,id])
    };

    function lessOfthisProduct(id){
        const pos = selectedProducts.indexOf(id);
        if (pos !== -1) {
            setSelectedProducts( prev => {
                return prev.filter((value, index) => index !== pos)
            })
             
        }
    };

    const deliveryPrice = 5;

    let subTotal = 0;

    if (selectedProducts?.length) {
        for (let id of selectedProducts) {
          const productInfo = productsInfos.find((p) => p._id === id);
          if (productInfo) {
            const price = productInfo.price;
            subTotal = subTotal + price;
          }
        }
    };

    const total = subTotal + deliveryPrice;
    
    return (
        <>
            <Layout>
                {!productsInfos.length && (
                    <div>no products in shoping cart</div>
                )}
                {productsInfos.length > 0 && productsInfos.map( productInfo => (
                    <div className="flex align-center mb-5" key={productInfo._id}>
                        <div>
                            <img src={productInfo.image} className="w-24" alt=''></img>
                        </div>
                        <div >
                            <h3 className="font-bold text-lg">{productInfo.name}</h3>
                            <p className="text-sm">{productInfo.description}</p>
                            <div className="flex">
                                <div className="grow">
                                    ${productInfo.price}
                                </div>
                                <div>
                                    <button onClick={() => lessOfthisProduct(productInfo._id)} className="border px-2">-</button>
                                    <span className="mx-2">
                                      {selectedProducts.filter(id => id === productInfo._id).length}
                                    </span>
                                    <button onClick={() => moreOfthisProduct(productInfo._id)} className="border px-2">+</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                
                <div className="mt-8">
                    <div className="flex my-3">
                        <h3 className="grow font-bold text-gray-400">Subtotal:</h3>
                        <h3 className="font-bold">{subTotal}</h3>
                    </div>
                    <div className="flex my-3">
                        <h3 className="grow font-bold text-gray-400">Delivery:</h3>
                        <h3 className="font-bold">{deliveryPrice}</h3>
                    </div>
                    <div className="flex my-3 border-t pt-3 border-dashed border-emerald-500">
                        <h3 className="grow font-bold text-gray-400">Total:</h3>
                        <h3 className="font-bold">{total}</h3>
                    </div>
                </div>
                <BillingForm></BillingForm>
                <button type="submit" className="bg-emerald-500 px-5 py-2 rounded-xl font-bold text-white w-full my-4 shadow-emerald-300 shadow-lg">Pay ${total}</button>
            </Layout>
            
            
            <Footer></Footer>
        </>
    );
}