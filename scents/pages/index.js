import React from 'react';
import  {client}  from '../lib/client.js'

// Importing COMPONENTS //
import { Main } from '../components/index.js'

const Home = ({products}) => {

  return (
    <div className="body">
      <Main products={products}/>
    </div>
  )
}

export const getServerSideProps = async () => {
  const query = `*[_type == "product"]`
  const products = await client.fetch(query)

  return {
    props: {products}
  }
}

export default Home