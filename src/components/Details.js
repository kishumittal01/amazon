import React from 'react'
import './Details.css'
import { useStateValue } from './StateProvider';
import DetailsProduct from './DetailsProduct';

function Details() {
  
    const [{ basket }, dispatch] = useStateValue();

    return (
    <div>
        <div className="checkout_item">
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
    </div>
  )
}

export default Details
