'use client';
import { useEffect, useState } from 'react';
import Layout from '../../components/Layout';
import { useAppDispatch, useAppSelector } from '../../store';
import { findProduct } from '../../store/product/api';
import { redirect } from 'next/navigation';
import { isValidArray } from '../../utils/valid';
import Loader from '../../components/Loader';
import ProductTable from '../../components/product/ProductTable';
import ProductGrid from '@/components/product/ProductGrid';
import Header from '@/components/Header';
import EmptyMessage from '@/components/EmptyMessage';

const Dashboard: React.FC = () => {
  const dispatch = useAppDispatch();
  const { data, isLoading } = useAppSelector((state) => state.product);
  const { token } = useAppSelector((state) => state.auth);
  const [isGridView, setIsGridView] = useState<boolean>(true);

  useEffect(() => {
    if (token) {
      dispatch(findProduct({})).unwrap().catch((error) => { });
    }
  }, []);

  useEffect(() => {
    if (!token) {
      redirect('/');
    }
  }, [token]);




  return (
    token ? <Layout>
      <Header />
      <div className='text-center mt-4'>
        <h2 className='text-3xl font-semibold mb-4'>Welcome to Dashboard!</h2>
      </div>


      <div className="border-gray-200 dark:border-gray-700 flex justify-end pb-4">
        <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400 rounded-md border-2 ">
          <li className={`p-1 rounded-sm ${isGridView ? "bg-slate-500/[.2]" : ""}`} onClick={() => setIsGridView(true)}>

            <svg className="w-4 h-4 m-1 text-black " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
              <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
            </svg>

          </li>
          <li className={`p-1 rounded-sm ${isGridView ? "" : "bg-slate-500/[.2]"}`} onClick={() => setIsGridView(false)}>

            <svg className="w-4 h-4 m-1" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 487.3 487.3" >

              <path d="M487.2,69.7c0,12.9-10.5,23.4-23.4,23.4h-322c-12.9,0-23.4-10.5-23.4-23.4s10.5-23.4,23.4-23.4h322.1
			C476.8,46.4,487.2,56.8,487.2,69.7z M463.9,162.3H141.8c-12.9,0-23.4,10.5-23.4,23.4s10.5,23.4,23.4,23.4h322.1
			c12.9,0,23.4-10.5,23.4-23.4C487.2,172.8,476.8,162.3,463.9,162.3z M463.9,278.3H141.8c-12.9,0-23.4,10.5-23.4,23.4
			s10.5,23.4,23.4,23.4h322.1c12.9,0,23.4-10.5,23.4-23.4C487.2,288.8,476.8,278.3,463.9,278.3z M463.9,394.3H141.8
			c-12.9,0-23.4,10.5-23.4,23.4s10.5,23.4,23.4,23.4h322.1c12.9,0,23.4-10.5,23.4-23.4C487.2,404.8,476.8,394.3,463.9,394.3z
			 M38.9,30.8C17.4,30.8,0,48.2,0,69.7s17.4,39,38.9,39s38.9-17.5,38.9-39S60.4,30.8,38.9,30.8z M38.9,146.8
			C17.4,146.8,0,164.2,0,185.7s17.4,38.9,38.9,38.9s38.9-17.4,38.9-38.9S60.4,146.8,38.9,146.8z M38.9,262.8
			C17.4,262.8,0,280.2,0,301.7s17.4,38.9,38.9,38.9s38.9-17.4,38.9-38.9S60.4,262.8,38.9,262.8z M38.9,378.7
			C17.4,378.7,0,396.1,0,417.6s17.4,38.9,38.9,38.9s38.9-17.4,38.9-38.9C77.8,396.2,60.4,378.7,38.9,378.7z"/>

            </svg>
          </li>

        </ul>
      </div>

      {isLoading ? (
        <Loader />
      ) : ((isValidArray(data) ? data : []).length > 0 ? (isGridView === true) ? <ProductGrid data={isValidArray(data) ? data : []} /> : <ProductTable data={isValidArray(data) ? data : []} /> : <EmptyMessage message='Product not found.' />
      )}
    </Layout> : <></>
  );
};

export default Dashboard;
