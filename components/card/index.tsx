import { Body2, SubTitle1 } from "@/mui/customize";
import { handleDiscount, star } from "@/helper";
import Image from "next/image"
import { IProducts } from "@/models/cart";
import Link from "next/link";

interface IProps {
  item: IProducts,
}

const Card = ({ item }: IProps) => {
  return (
    <div
      className={`
        w-full mx-auto bg-container rounded-lg ${!item?.showOnSale && 'pt-4 px-3 pb-1.5 hover:shadow-md'}
      `}
      style={{ maxWidth: "280px" }}
    >
      <div
        className={`rounded-lg w-full bg-container flex relative cursor-pointer overflow-hidden
         ${item?.showOnSale && 'hover:shadow-md'}`}
      >
        {item.discount && item.showOnSale ?
          <div className="rounded-tr-lg rounded-bl-lg bg-red-light-800 absolute top-0 right-0 py-0.5 px-2">
            <Body2 className="text-container">{item.discount}%</Body2>
          </div>
          : ''
        }
        <Link href={`product/${item.slug}`} className={`w-full h-full ${!item.showOnSale && 'rounded-lg'}`}>
          <Image
            src={item.images[0]}
            alt={item.name}
            width={280}
            height={280}
            className='w-full'
          />
        </Link>
      </div>
      <span className="text-light-100 block my-4">{item.name}</span>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <SubTitle1>
            {
              item.discount ?
                handleDiscount(item.price, item.discount) : item.price
            }$
          </SubTitle1>
          {item.discount ?
            <span className="text-dark-300 line-through">{item.price.toFixed(1)}$</span>
            : ''
          }
        </div>
        <div className="flex gap-1 flex-row-reverse">
          {Array(5).fill({}).map((r, i) => i++ < item.star ? star(true, i) : star(false, i))}
        </div>
      </div>
    </div >
  )
}

export default Card