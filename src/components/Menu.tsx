import { ProductMockApi } from '@/mock/products'
import { useState } from 'react'

type ProductsListParams = {
  data: typeof ProductMockApi.products
}

export default function Menu(props: ProductsListParams) {
  const [productVisibility, setProductVisibility] = useState<{
    [key: string]: boolean
  }>(
    props.data.reduce((acc, product) => {
      acc[product.productId] = false
      return acc
    }, {}),
  )

  const toggleProductVisibility = (productId: string) => {
    setProductVisibility((prevState) => ({
      ...prevState,
      [productId]: !prevState[productId],
    }))
  }

  return (
    <div className="bg-bg-bannerTwo bg-center bg-cover h-[800px] mt-[90px]">
      <div className="flex items-center justify-center ">
        <ul className="w-full">
          {props.data?.map((product) => (
            <li key={product.productId}>
              <div className="grid items-center justify-center mt-16">
                <button
                  onClick={() => toggleProductVisibility(product.productId)}
                  className="text-white"
                >
                  {product.title}
                </button>
                <div className="border-t border-[#CC0D03] my-2 max-w-[300px]" />
              </div>
              {productVisibility[product.productId] && (
                <ul className="space-y-[40px] mt-[20px]">
                  {product.productsList.map((productList) => (
                    <li key={productList.productId}>
                      <div className="flex flex-row justify-around items-center">
                        <img
                          src={productList.img}
                          alt="#"
                          className="w-[40px] h-[40px] rounded-full object-cover"
                        />
                        <h1 className="text-white">{productList.name}</h1>
                        <span className="text-[#FFD200]">
                          {productList.price}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
