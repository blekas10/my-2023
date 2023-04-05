import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import ProductCard from '../../components/product-component';

import { useEffect, useState } from 'react';
import { initMongoose } from '../../lib/mongoose';
import { findAllProducts } from './api/products';
import Footer from 'components/Footer';
import Layout from 'components/Layout';

const inter = Inter({ subsets: ['latin'] });

export default function Home({products}) {

  const [phrase, setPhrase] = useState([]);

  const categoriesNames = [...new Set(products.map(p => p.category))];


  if (phrase) {
    products = products.filter(p => p.name.toLowerCase().includes(phrase))
  }

  return (
    <>
    
      <Layout>
        <div className='mx-5'>
          <input value={phrase} onChange={e => setPhrase(e.target.value)} type="text" placeholder="Search for products..." className='bg-grey-100 w-full py-2 px-4 rounded-xl'></input>

          <div>
              {categoriesNames.map(categoryName => (
                <div className='text-xl text-bold text-center' key={categoryName}>
                  {products.find(p => p.category === categoryName) && (
                    <div>
                      <h2 className='capitalize'>{categoryName}</h2>
                      <div className='bg-blue-100 py-4'></div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                          {products.filter(p  => p.category === categoryName).map(productInfo =>(
                            <div key={productInfo._id}>
                                <ProductCard {...productInfo}></ProductCard>
                            </div>

                          ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
          </div>

          <div className='bg-blue-100 py-4'></div>

          {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {products.map(product => (
                <div key={product._id} className="max-w-sm rounded overflow-hidden shadow-lg">
                    <img src={`/${product.image}`} alt="" className="w-full"></img>
                    <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{product.name}</div>
                    <p className="text-gray-700 text-base">{product.description}</p>
                    <p className="text-gray-700 text-base">Amount: {product.amount}</p>
                    <p className="text-gray-700 text-base">Category: {product.category}</p>
                    </div>
                    <div className='flex justify-evenly text-center py-4'>
                    <button className='bg-gray-300 p-2'>Prideti i krepseli</button>
                    <div className='p-2 text-xl'>{product.price}e</div>
                    </div>
                </div>
                ))}
          </div> */}
          
        </div>
      </Layout>
      
      <Footer></Footer>
    </>
  )
}


export async function getServerSideProps() {
  await initMongoose();
  const products = await findAllProducts();
  return {
    props: {
      products: JSON.parse(JSON.stringify(products)),
    }
  };
}