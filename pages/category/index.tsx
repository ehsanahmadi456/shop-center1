import { useState } from 'react';

import Filters from "@/components/category/filters";
import ListCart from "@/components/category/listCart";
import Layout from "@/components/layout";
import { IProducts } from '@/models/cart';
import Products from '@/data/products.json';
import { SelectChangeEvent } from '@mui/material';
import { handleDiscount } from '@/helper';

const index = () => {

  const [page, setPage] = useState<number>(1);
  const [sort, setSort] = useState<string>('Popular');
  const [listProducts, setListProducts] = useState<IProducts[]>(Products.slice((page * 9) - 6, page * 9))
  const [progress, setProgress] = useState<number[]>([200, 500]);
  const [displayValue, setDisplayValue] = useState<number>(7)
  const [listSize, setListSize] = useState({
    
    FreeSize: true, XS: false, S: false, M: true, L: false, XL: false,
  });
  const [listSleeve, setListSleeve] = useState({
    Sleeveless: true, 'Short Sleeve': false, 'Long Sleeve': true, 'Half Sleeve': false,
  });
  const [listBrand, setListBrand] = useState({
    'H&M': true, Adidas: false, Defacto: true, Fendi: true,
    Prada: false, Nike: false, MANGO: true,
  });

  const changeProgress = (event: Event, newValue: number | number[]) => setProgress(newValue as number[]);
  const changePagination = (event: React.ChangeEvent<unknown>, value: number) => {
    setListProducts(Products.slice((value * 9) - 6, value * 9))
    setPage(value)
  }
  const changeSort = (event: SelectChangeEvent) => setSort(event.target.value as string);
  const filterProducts = () => {
    setListProducts(listProducts.filter(item => {
      item.discount && console.log(typeof handleDiscount(item.price, item?.discount))
      const withDiscount = item.discount ? handleDiscount(item.price, item?.discount) : item.price
      return withDiscount > progress[0] && withDiscount < progress[1]
    }))
  }
  const changeCheckbox = (event: React.ChangeEvent<HTMLInputElement>, type: string) =>
    type === 'brand' ?
      setListBrand({ ...listBrand, [event.target.name]: event.target.checked, }) :
      type === 'size' ?
        setListSize({ ...listSize, [event.target.name]: event.target.checked, }) :
        type === 'sleeve' &&
        setListSleeve({ ...listSleeve, [event.target.name]: event.target.checked, });

  return (
    <Layout title='Category'>
      <div className='container mx-auto flex flex-row items-start justify-between my-12'>
        <Filters
          progress={progress}
          listBrand={listBrand}
          filterProducts={filterProducts}
          changeProgress={changeProgress}
          changeCheckbox={changeCheckbox}
          displayValue={displayValue}
          listSize={listSize}
          listSleeve={listSleeve}
        />
        <ListCart
          page={page}
          sort={sort}
          listProducts={listProducts}
          changeSort={changeSort}
          changePagination={changePagination}
        />
      </div>
    </Layout >
  )
}

export default index