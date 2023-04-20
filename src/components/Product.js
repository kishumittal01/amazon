import React from 'react';
import "./Product.css";
import { useStateValue } from './StateProvider';
import { Link } from 'react-router-dom';

function Product({ id, title, image, price, rating }) {
    
    const [{ basket }, dispatch] = useStateValue();
    //console.log('this is the basket')


    const addToBasket = () => {
        //dispatch item into data layer
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
                
            }
        })
    }
    return (
    <div>  
      <div className='product'> 
        
        <div className="product_info">
          <p>{title}</p>
          <p className='product_price'>
              <small>₹</small>
              <strong>{price}</strong>
          </p>
        </div>
        <div className="product_rating">
          {Array(rating).fill().map((_, i) => (
              <p>🌟</p>
          ))}
        </div>
        <img src={image} alt="" />
        
        </div>
        <button onClick={addToBasket} className='productButton'>Add to Basket</button>
      </div>
  )
}

export default Product
