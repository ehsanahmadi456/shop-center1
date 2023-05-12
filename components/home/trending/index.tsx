import { useState } from 'react'
import Card from "@/components/card";
import { BasicButton, Heading3, Heading5 } from "@/mui/customize";
import SwiperBox from "../swiper";
import Products from "@/data/products.json";
import { IProducts } from '@/models/cart';

interface IProps {
  from: string
}

const TrendingProducts = ({ from }: IProps) => {

  const typeFilter: string[] = ['Women', 'Men', 'Kid']
  const [category, setCategory] = useState<string>('')

  const filteredList: IProducts[] = category ? Products.filter(item => item.category === category.toLowerCase()) : Products

  return (
    <div className={`container mx-auto ${from !== 'home' && 'mb-24'}`}>
      <div className={`flex justify-between items-center ${from === 'home' ? 'mt-8' : 'mt-11'} mb-6`}>
        {from === 'home' ?
          <Heading3
            className="text-light-300 cursor-default">
            <span className="text-red-dark-100">Trending</span> Products
          </Heading3> :
          <Heading5 className="text-light-200">Related Product</Heading5>

        }
        {from === 'home' &&
          <div className="flex gap-3">
            {typeFilter.map((item, idx) =>
              <BasicButton
                key={idx}
                variant="text"
                className={`text-light-200 ${category === item ? 'bg-[#fef5f6]' : ''}`}
                onClick={() => setCategory(prevState => prevState === item ? '' : item)}
              >{item}</BasicButton>
            )}
          </div>
        }
      </div>
      <SwiperBox>
        {filteredList.map(product =>
          <Card item={{ ...product, showOnSale: true }} key={product.id} />
        )}
      </SwiperBox>
    </div>
  )
}

export default TrendingProducts;