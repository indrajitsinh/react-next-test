import { Product } from '@/store/product/api/interface';
import { isValidArray } from '@/utils/valid';

import 'react-toastify/dist/ReactToastify.css';
import ProductGridItem from './ProductGridItem';

interface IProps {
  data?: Product[];
}

const ProductGrid: React.FC<IProps> = ({ data }) => {
  return (
    <section id="Projects"
      className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
      {isValidArray(data) && data?.map((product: Product, index: number) => <ProductGridItem key={`grid-item-${index}`} product={product} />)}

    </section>
  );
};

export default ProductGrid;
