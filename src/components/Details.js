import React from 'react'
import './Details.css'
import { useStateValue } from './StateProvider';
import DetailsProduct from './DetailsProduct';

function Details({ id, title, image, price, rating }) {
  
    const [{ basket }, dispatch] = useStateValue();

    

    return (
        <div className='product'> 
            {basket.map(item => (
                    <DetailsProduct
                    id = {item.id}
                    title = {item.title}
                    image = {item.image}
                    price = {item.price}
                    rating = {item.rating}
                    />
              ))}
        </div>
  )
}

export default Details
