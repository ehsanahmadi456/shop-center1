import { useState } from 'react'
import { useRouter } from 'next/router'
import ProductList from '@/data/products.json'
import { AppBar, Tabs, Tab, Box } from '@mui/material'
import { IProducts } from '@/models/cart'

// Components
import Layout from "@/components/layout"
import Product from '@/components/detail/Product'
import Details from '@/components/detail/details'
import Review from '@/components/detail/tabs/review'
import Description from '@/components/detail/tabs/description'
import TrendingProducts from '@/components/home/trending'

function a11yProps(index: number) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const ProductPage = () => {

  const [value, setValue] = useState<number>(0);
  const { query: { slug } } = useRouter()
  const listTabs = [
    { id: 1, title: 'Description' }, { id: 2, title: 'Review' }, { id: 3, title: 'Related Product' }
  ]

  const handleChange = (event: React.SyntheticEvent, newValue: number) => setValue(newValue);
  if (!slug) {
    return (
      <Layout title='Not Defined'>
        <p>Not Defined</p>
      </Layout>
    )
  }

  const product: IProducts | undefined = ProductList.find(item => item.slug === slug)

  return (
    <Layout title='Detail'>
      <div className="container mx-auto flex flex-col justify-center items-center">
        <div className='flex flex-row items-stretch justify-between mt-16'>
          <Product data={product} />
          <Details data={product} />
        </div>
        <Box className="bg-[#ffffff] w-full mt-20" >
          <AppBar
            position="static"
            sx={{ '& .css-1nlllfd-MuiTabs-indicator': { height: 3 } }}
            className="text-[#424242] shadow-none bg-transparent border-0 border-b-[#C3C3CE] border-b border-solid"
          >
            <Tabs
              className='bg-[#ffffff] border-[#C3C3CE]'
              value={value}
              onChange={handleChange}
              indicatorColor="primary"
              textColor="inherit"
              aria-label="full width tabs example"
            >
              {listTabs.map(item =>
                <Tab
                  className="text-light-200 font-bold text-2xl font-poppins capitalize"
                  key={item.id}
                  label={item.title}
                  {...a11yProps(item.id)}
                />
              )}
            </Tabs>
          </AppBar>
          {value === 0 ?
            <Description data={product} /> :
            value === 1 ?
              <Review data={product} /> :
              <TrendingProducts from="detail" />}
        </Box>
      </div>
    </Layout >
  )
}

export default ProductPage