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
    setSelectedProduct(productId === selectedProduct ? null : productId)
  }

  return (
    <div
      className="bg-bg-bannerTwo bg-center bg-cover h-[800px] mt-[90px]"
      id="menu"
    >
      <div className="flex items-center justify-center ">
        <ul className="w-full">
          {props.data?.map((product) => (
            <li key={product.productId}>
              <div className="grid items-center justify-center mt-16">
                <button
                  onClick={() => toggleProductVisibility(product.productId)}
                  className={`w-[400px] text-white hover:border-[#CC0D03] hover:border-b hover:inline-block ${selectedProduct === product.productId ? 'border-b border-[#CC0D03]' : ''}`}
                >
                  {product.title}
                </button>
              </div>
              {selectedProduct === product.productId && (
                <ul className="space-y-[40px] mt-[20px] overflow-auto scrollbar-hide">
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
                          {formatPrice(productList.price)}
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
