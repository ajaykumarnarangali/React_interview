import { useState, useEffect } from 'react'
import Card from '../components/Pagination/Card';

function Pagination() {

  const API_URL = 'https://dummyjson.com/products?limit=150';
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetchProducts();
  }, [])

  const fetchProducts = async () => {
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setProducts(data.products);
    } catch (error) {
      console.log(error);
    }
  }

  const PAGE_SIZE = 10;
  const TOTAL_PRODUCTS = products?.length;
  const NO_OF_PAGES = Math.ceil(TOTAL_PRODUCTS / PAGE_SIZE);
  const start = (currentPage - 1) * PAGE_SIZE;
  const end = start + PAGE_SIZE;

  return (
    <div className='w-full h-screen bg-green-200 p-10 flex flex-col'>
      <div className='flex-1 overflow-y-scroll'>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 p-2">
          {
            products.length > 0 &&
            products.slice(start, end).map((product, index) => (
              <Card key={index} product={product} />
            ))
          }
        </div>
      </div>
      <div className='p-3 flex justify-center'>
        <div className='flex gap-4'>
          <button className='w-12 border rounded-lg bg-white p-3 font-bold'
            onClick={() => {
              if (currentPage > 1) {
                setCurrentPage(prev => prev - 1);
              }
            }}
          >
            ←
          </button>
          {
            [...Array(NO_OF_PAGES)].map((_, index) => (
              <button key={index} className={`w-12 border rounded-lg bg-white p-3 font-bold ${currentPage==index+1 ? "bg-blue-400":""}`}
                onClick={() => { setCurrentPage(index + 1) }}>
                {index + 1}
              </button>
            ))
          }
          <button className='w-12 border rounded-lg bg-white p-3 font-bold'
            onClick={() => {
              if (currentPage < NO_OF_PAGES) {
                setCurrentPage(prev => prev + 1);
              }
            }}
          >
            →
          </button>
        </div>
      </div>
    </div>
  )
}

export default Pagination