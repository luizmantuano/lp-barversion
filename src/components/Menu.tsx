import { ProductMockApi } from '@/mock/products'
import { useState } from 'react'

type ProductsListParams = {
  data: typeof ProductMockApi.products
}

// Função para formatar o preço como moeda
function formatPrice(price: number): string {
  return price.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })
}

export default function Menu(props: ProductsListParams) {
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null)

  const toggleProductVisibility = (productId: number) => {
    setSelectedProduct(productId)
  }

  return (
    <div
      className="bg-bg-bannerTwo bg-center bg-cover h-[800px] mt-[90px]"
      id="menu"
    >
      <div className="flex items-center justify-center">
        <ul className="w-full md:flex md:justify-center md:ml-[350px]">
          {props.data?.map((product) => (
            <li key={product.productId} className="mt-16">
              <div className="flex items-center justify-center">
                <button
                  onClick={() => toggleProductVisibility(product.productId)}
                  className={`w-[200px] text-white hover:border-[#CC0D03] hover:border-b hover:inline-block md:flex md:justify-center ${
                    selectedProduct === product.productId
                      ? 'border-b border-[#CC0D03]'
                      : ''
                  }`}
                >
                  {product.title}
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex items-center justify-center mt-8">
        {props.data?.map((product) => (
          <div
            key={product.productId}
            className={`${
              selectedProduct === product.productId ? 'block' : 'hidden'
            } w-full md:w-auto md:ml-[350px]`}
          >
            <ul className="space-y-[40px] mt-[20px] overflow-auto scrollbar-hide">
              {product.productsList.map((productList) => (
                <li key={productList.productId}>
                  <div className="flex flex-row justify-around items-center md:space-x-[100px]">
                    <img
                      src={productList.img}
                      alt="#"
                      className="w-[40px] h-[40px] rounded-full object-cover"
                    />
                    <h1 className="text-white">{productList.name}</h1>
                    <span className="text-[#FFD200]">
                      {formatPrice(productList.price)}
                    </span>
                  </div>
                  <span className="text-white flex items-center justify-center block md:hidden">
                    ------------------------------------------------------------
                  </span>
                  <span className="text-white hidden md:block">
                    -----------------------------------------------------------------
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
