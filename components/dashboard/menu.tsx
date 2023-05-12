import { SubTitle2 } from "@/mui/customize";
import { Badge } from "@mui/material";
import { Dispatch, SetStateAction } from "react";

interface IProps {
  setItem: Dispatch<SetStateAction<string>>
  item: string
  setLogout: Dispatch<SetStateAction<boolean>>
}
const Menu = ({ item, setItem, setLogout }: IProps) => {
  return (
    <>
      <div className="bg-dark-50 w-full max-w-[300px] h-full">
        <div className="py-7 flex">
          {item === 'Profile' &&
            <div className="w-1 h-14 bg-red-dark-100 rounded-r-lg"></div>
          }
          <div className="h-14 flex items-center gap-3 px-6 cursor-pointer w-full" onClick={() => setItem('Profile')}>
            <div className="bg-dark-100 rounded-full w-12 h-12 flex justify-center items-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.1205 13.53C12.1005 13.53 12.0705 13.53 12.0505 13.53C12.0205 13.53 11.9805 13.53 11.9505 13.53C9.68047 13.46 7.98047 11.69 7.98047 9.51C7.98047 7.29 9.79047 5.48 12.0105 5.48C14.2305 5.48 16.0405 7.29 16.0405 9.51C16.0305 11.7 14.3205 13.46 12.1505 13.53C12.1305 13.53 12.1305 13.53 12.1205 13.53ZM12.0005 6.97C10.6005 6.97 9.47047 8.11 9.47047 9.5C9.47047 10.87 10.5405 11.98 11.9005 12.03C11.9305 12.02 12.0305 12.02 12.1305 12.03C13.4705 11.96 14.5205 10.86 14.5305 9.5C14.5305 8.11 13.4005 6.97 12.0005 6.97Z" fill="#7F7F7F" />
                <path d="M11.9998 22.75C9.30984 22.75 6.73984 21.75 4.74984 19.93C4.56984 19.77 4.48984 19.53 4.50984 19.3C4.63984 18.11 5.37984 17 6.60984 16.18C9.58984 14.2 14.4198 14.2 17.3898 16.18C18.6198 17.01 19.3598 18.11 19.4898 19.3C19.5198 19.54 19.4298 19.77 19.2498 19.93C17.2598 21.75 14.6898 22.75 11.9998 22.75ZM6.07984 19.1C7.73984 20.49 9.82984 21.25 11.9998 21.25C14.1698 21.25 16.2598 20.49 17.9198 19.1C17.7398 18.49 17.2598 17.9 16.5498 17.42C14.0898 15.78 9.91984 15.78 7.43984 17.42C6.72984 17.9 6.25984 18.49 6.07984 19.1Z" fill="#7F7F7F" />
                <path d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z" fill="#7F7F7F" />
              </svg>
            </div>
            <SubTitle2 className="text-light-200">My Profile</SubTitle2>
          </div>
        </div>
        <div className="py-3 flex">
          {item === 'Orders' &&
            <div className="w-1 h-14 bg-red-dark-100 rounded-r-lg"></div>
          }
          <div className="h-14 flex items-center gap-3 px-5 cursor-pointer w-full" onClick={() => setItem('Orders')}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.5 8.62999C16.09 8.62999 15.75 8.28999 15.75 7.87999V6.49999C15.75 5.44999 15.3 4.42999 14.52 3.71999C13.73 2.99999 12.71 2.66999 11.63 2.76999C9.83 2.93999 8.25 4.77999 8.25 6.69999V7.66999C8.25 8.07999 7.91 8.41999 7.5 8.41999C7.09 8.41999 6.75 8.07999 6.75 7.66999V6.68999C6.75 3.99999 8.92 1.51999 11.49 1.26999C12.99 1.12999 14.43 1.59999 15.53 2.60999C16.62 3.59999 17.25 5.01999 17.25 6.49999V7.87999C17.25 8.28999 16.91 8.62999 16.5 8.62999Z" fill="#7F7F7F" />
              <path d="M14.9998 22.75H8.99982C4.37982 22.75 3.51982 20.6 3.29982 18.51L2.54982 12.52C2.43982 11.44 2.39982 9.89 3.44982 8.73C4.34982 7.73 5.83982 7.25 7.99982 7.25H15.9998C18.1698 7.25 19.6598 7.74 20.5498 8.73C21.5898 9.89 21.5598 11.44 21.4498 12.5L20.6998 18.51C20.4798 20.6 19.6198 22.75 14.9998 22.75ZM7.99982 8.75C6.30982 8.75 5.14982 9.08 4.55982 9.74C4.06982 10.28 3.90982 11.11 4.03982 12.35L4.78982 18.34C4.95982 19.94 5.39982 21.26 8.99982 21.26H14.9998C18.5998 21.26 19.0398 19.95 19.2098 18.36L19.9598 12.35C20.0898 11.13 19.9298 10.3 19.4398 9.75C18.8498 9.08 17.6898 8.75 15.9998 8.75H7.99982Z" fill="#7F7F7F" />
              <path d="M15.4202 13.15C14.8602 13.15 14.4102 12.7 14.4102 12.15C14.4102 11.6 14.8602 11.15 15.4102 11.15C15.9602 11.15 16.4102 11.6 16.4102 12.15C16.4102 12.7 15.9702 13.15 15.4202 13.15Z" fill="#7F7F7F" />
              <path d="M8.42016 13.15C7.86016 13.15 7.41016 12.7 7.41016 12.15C7.41016 11.6 7.86016 11.15 8.41016 11.15C8.96016 11.15 9.41016 11.6 9.41016 12.15C9.41016 12.7 8.97016 13.15 8.42016 13.15Z" fill="#7F7F7F" />
            </svg>
            <SubTitle2 className="text-light-200">My Orders</SubTitle2>
          </div>
        </div>
        <div className="py-3 flex">
          {item === 'Favorites' &&
            <div className="w-1 h-14 bg-red-dark-100 rounded-r-lg"></div>
          }
          <div className="h-14 flex items-center gap-3 px-5 cursor-pointer w-full" onClick={() => setItem('Favorites')}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 21.65C11.69 21.65 11.39 21.61 11.14 21.52C7.32 20.21 1.25 15.56 1.25 8.69001C1.25 5.19001 4.08 2.35001 7.56 2.35001C9.25 2.35001 10.83 3.01001 12 4.19001C13.17 3.01001 14.75 2.35001 16.44 2.35001C19.92 2.35001 22.75 5.20001 22.75 8.69001C22.75 15.57 16.68 20.21 12.86 21.52C12.61 21.61 12.31 21.65 12 21.65ZM7.56 3.85001C4.91 3.85001 2.75 6.02001 2.75 8.69001C2.75 15.52 9.32 19.32 11.63 20.11C11.81 20.17 12.2 20.17 12.38 20.11C14.68 19.32 21.26 15.53 21.26 8.69001C21.26 6.02001 19.1 3.85001 16.45 3.85001C14.93 3.85001 13.52 4.56001 12.61 5.79001C12.33 6.17001 11.69 6.17001 11.41 5.79001C10.48 4.55001 9.08 3.85001 7.56 3.85001Z" fill="#7F7F7F" />
            </svg>
            <SubTitle2 className="text-light-200">My Favorites</SubTitle2>
          </div>
        </div>
        <div className="py-3 flex">
          {item === 'Messages' &&
            <div className="w-1 h-14 bg-red-dark-100 rounded-r-lg"></div>
          }
          <div className="h-14 flex items-center gap-3 px-5 cursor-pointer w-full" onClick={() => setItem('Messages')}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.0199 20.53C9.68987 20.53 7.35987 20.16 5.14987 19.42C4.30987 19.13 3.66987 18.54 3.38987 17.77C3.09987 17 3.19987 16.15 3.65987 15.39L4.80987 13.48C5.04987 13.08 5.26987 12.28 5.26987 11.81V8.92001C5.26987 5.20001 8.29987 2.17001 12.0199 2.17001C15.7399 2.17001 18.7699 5.20001 18.7699 8.92001V11.81C18.7699 12.27 18.9899 13.08 19.2299 13.49L20.3699 15.39C20.7999 16.11 20.8799 16.98 20.5899 17.77C20.2999 18.56 19.6699 19.16 18.8799 19.42C16.6799 20.16 14.3499 20.53 12.0199 20.53ZM12.0199 3.67001C9.12987 3.67001 6.76987 6.02001 6.76987 8.92001V11.81C6.76987 12.54 6.46987 13.62 6.09987 14.25L4.94987 16.16C4.72987 16.53 4.66987 16.92 4.79987 17.25C4.91987 17.59 5.21987 17.85 5.62987 17.99C9.80987 19.39 14.2399 19.39 18.4199 17.99C18.7799 17.87 19.0599 17.6 19.1899 17.24C19.3199 16.88 19.2899 16.49 19.0899 16.16L17.9399 14.25C17.5599 13.6 17.2699 12.53 17.2699 11.8V8.92001C17.2699 6.02001 14.9199 3.67001 12.0199 3.67001Z" fill="#7F7F7F" />
              <path d="M13.8796 3.93999C13.8096 3.93999 13.7396 3.92999 13.6696 3.90999C13.3796 3.82999 13.0996 3.76999 12.8296 3.72999C11.9796 3.61999 11.1596 3.67999 10.3896 3.90999C10.1096 3.99999 9.80963 3.90999 9.61963 3.69999C9.42963 3.48999 9.36963 3.18999 9.47963 2.91999C9.88963 1.86999 10.8896 1.17999 12.0296 1.17999C13.1696 1.17999 14.1696 1.85999 14.5796 2.91999C14.6796 3.18999 14.6296 3.48999 14.4396 3.69999C14.2896 3.85999 14.0796 3.93999 13.8796 3.93999Z" fill="#7F7F7F" />
              <path d="M12.0195 22.81C11.0295 22.81 10.0695 22.41 9.36953 21.71C8.66953 21.01 8.26953 20.05 8.26953 19.06H9.76953C9.76953 19.65 10.0095 20.23 10.4295 20.65C10.8495 21.07 11.4295 21.31 12.0195 21.31C13.2595 21.31 14.2695 20.3 14.2695 19.06H15.7695C15.7695 21.13 14.0895 22.81 12.0195 22.81Z" fill="#7F7F7F" />
            </svg>
            <SubTitle2 className="text-light-200">Messages</SubTitle2>
            <Badge badgeContent={2} color="primary" className="ml-auto mr-4" />
          </div>
        </div>
        <div className="py-3 flex">
          <div className="h-14 flex items-center gap-3 px-5 cursor-pointer w-full" onClick={() => setLogout(true)}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.4399 15.37C17.2499 15.37 17.0599 15.3 16.9099 15.15C16.6199 14.86 16.6199 14.38 16.9099 14.09L18.9399 12.06L16.9099 10.03C16.6199 9.74 16.6199 9.26 16.9099 8.97C17.1999 8.68 17.6799 8.68 17.9699 8.97L20.5299 11.53C20.8199 11.82 20.8199 12.3 20.5299 12.59L17.9699 15.15C17.8199 15.3 17.6299 15.37 17.4399 15.37Z" fill="#7F7F7F" />
              <path d="M19.9298 12.81H9.75977C9.34977 12.81 9.00977 12.47 9.00977 12.06C9.00977 11.65 9.34977 11.31 9.75977 11.31H19.9298C20.3398 11.31 20.6798 11.65 20.6798 12.06C20.6798 12.47 20.3398 12.81 19.9298 12.81Z" fill="#7F7F7F" />
              <path d="M11.7598 20.75C6.60977 20.75 3.00977 17.15 3.00977 12C3.00977 6.85 6.60977 3.25 11.7598 3.25C12.1698 3.25 12.5098 3.59 12.5098 4C12.5098 4.41 12.1698 4.75 11.7598 4.75C7.48977 4.75 4.50977 7.73 4.50977 12C4.50977 16.27 7.48977 19.25 11.7598 19.25C12.1698 19.25 12.5098 19.59 12.5098 20C12.5098 20.41 12.1698 20.75 11.7598 20.75Z" fill="#7F7F7F" />
            </svg>
            <SubTitle2 className="text-light-200">Log out</SubTitle2>
          </div>
        </div>
      </div>
    </>
  )
}

export default Menu;