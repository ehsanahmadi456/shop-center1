import { useState } from 'react';
import { BasicButton, Body2, Heading3 } from "@/mui/customize";
import Card from "../card";
import Products from "@/data/products.json";
import { IProducts } from '@/models/cart';

interface IProp {
  isAll: boolean,
  listProduct: IProducts[]
}

const OnSaleProducts = () => {

  const [isAll, setIsAll] = useState<boolean>(false)
  const [product, setProduct] = useState<IProducts[]>(isAll ? Products : Products.slice(0, 8))

  const filterProduct = () => {
    setIsAll(!isAll)
    setProduct(!isAll ? Products : Products.slice(0, 8))
  }

  return (
    <>
      <div>
        <div className="bg-[#FFF5F1] pb-10">
          <div className="container m-auto mb-6">
            <div className="flex justify-between items-center py-6">
              <Heading3 className="text-light-300 cursor-default"><span className="text-red-dark-100">On Sale</span> Products</Heading3>
              <BasicButton
                variant={`text`}
                onClick={() => filterProduct()}
                className={`${isAll && 'hover:bg-red-light-300 bg-red-light-200 text-container'} `}
              >
                <Body2 className="text-red-dark-100 cursor-pointer">View All</Body2>
              </BasicButton>
            </div>
            <div className="flex flex-wrap justify-center gap-y-8 gap-x-4">
              {product.map((product: IProducts) =>
                <Card item={product} key={product.id} />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default OnSaleProducts;