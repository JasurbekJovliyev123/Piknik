import { useQuery } from '@tanstack/react-query'
import React from 'react'

const Products = () => {
  // const { isPending, error, data } = useQuery({
  //   queryKey: ['repoData'],
  //   queryFn: () =>
  //     fetch('https://api.piknicuz.com/api/products').then((res) =>
  //       res.json(),
  //     ),
  // })
  // console.log(data);
  
  const { isPending:pending1, error:error1, data:data1 } = useQuery({
    queryKey: ['repoData'],
    queryFn: () =>
      fetch('https://api.piknicuz.com/api/categories').then((res) =>
        res.json(),
      ),
  })
  console.log(data1);
  return (
    <div>Products</div>
  )
}

export default Products