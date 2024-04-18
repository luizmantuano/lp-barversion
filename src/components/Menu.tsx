import { ProductMockApi } from '@/mock/products'

type ProductsListParams = {
  data: typeof ProductMockApi.products
}

export default function Menu(props: ProductsListParams) {
  return (
    <div className="bg-bg-bannerTwo bg-center bg-cover h-[800px] mt-[90px]">
      <div className="flex items-center justify-center ">
        <ul className="w-full">
          {props.data?.map((products) => (
            <li key={products.productId}>
              <div className="grid items-center justify-center mt-16">
                <h1 className="text-white">{products.title}</h1>
                <div className="border-t border-[#CC0D03] my-2 max-w-[300px]" />
              </div>
              <ul className="space-y-[40px] mt-[20px]">
                {products.productsList.map((productList) => (
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
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
