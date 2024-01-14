import { Product } from '@/store/product/api/interface';
import Header from '../Header';
import 'react-toastify/dist/ReactToastify.css';
import { isValidArray } from '@/utils/valid';

interface IProps {
  product: Product;
}

const ProductGridItem: React.FC<IProps> = ({ product }) => {
  return (
    <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
      <a href="#">
        <img src={product?.image} alt="Product-img" className="h-80 w-72 object-cover rounded-t-xl" />
        <div className="px-4 py-3 w-72">
          <span className="text-gray-400 mr-3 uppercase text-xs">{product?.category}</span>
          <p className="text-lg font-bold text-black truncate block capitalize">{product?.title}</p>
          <p className="text-xs line-clamp-3 text-gray-400">{product?.description}</p>
          <div className="flex items-center my-2">
            <svg className="w-4 h-4 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <p className="ms-2 text-sm text-gray-600">{product?.rating.rate}</p>
            <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
            <p className="text-sm text-gray-600">{product?.rating.count} reviews</p>
          </div>
          <div className="flex items-center">
            <p className="text-lg font-semibold text-black cursor-auto">&#8377; {product?.price}</p>
          </div>
        </div>
      </a>
    </div>
  );
};

export default ProductGridItem;
