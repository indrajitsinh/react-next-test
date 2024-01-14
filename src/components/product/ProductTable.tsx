import { Product } from '@/store/product/api/interface';
import Header from '../Header';
import 'react-toastify/dist/ReactToastify.css';
import { isValidArray } from '@/utils/valid';

interface IProps {
  data?: Product[];
}

const ProductTable: React.FC<IProps> = ({ data }) => {
  return (
    <div className='overflow-x-auto pb-10'>
      <table className='min-w-full bg-white border border-gray-300'>
        <thead>
          <tr>
            <th className='py-2 px-4 border-b border-gray-300'>No.</th>
            <th className='py-2 px-4 border-b border-gray-300'>Image</th>
            <th className='py-2 px-4 border-b border-gray-300'>Category</th>
            <th className='py-2 px-4 border-b border-gray-300'>Title</th>
            <th className='py-2 px-4 border-b border-gray-300'>Price</th>
            <th className='py-2 px-4 border-b border-gray-300'>Rating</th>
          </tr>
        </thead>
        <tbody>
          {isValidArray(data) &&
            data?.map((row: Product, rowIndex: number) => (
              <tr key={`table-row-${rowIndex}`}>
                <td className='py-2 px-4 border-b border-gray-300'>
                  {rowIndex + 1}
                </td>
                <td className='py-2 px-4 border-b border-gray-300'>
                  <img
                    className='w-10 h-10'
                    src={row?.image}
                    alt='productImage'
                  ></img>
                </td>
                <td className='py-2 px-4 border-b border-gray-300'>
                  {row?.category}
                </td>
                <td className='py-2 px-4 border-b border-gray-300'>
                  {row?.title}
                </td>
                <td className='py-2 px-4 border-b border-gray-300 text-nowrap'>
                  &#8377; {row?.price}
                </td>
                <td className='py-2 px-4 border-b border-gray-300'>
                  {row?.rating?.rate}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
