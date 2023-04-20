import React from 'react'
import { useStateValue } from './StateProvider';


function DetailsProduct( { id, title, image, price, rating }) {
    
    const [{ basket }, dispatch] = useStateValue();
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
            <div className="detailProduct">
                    <h2 className="detailProduct_title">{title}</h2>
                    <img src={image} alt="" className="detailProduct_image" />
                    <div className="detailProduct_info">
                        <p className="detailProduct_info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, corporis.</p>
                        <p className="detailProduct_price">
                            <strong>{price}</strong>
                        </p>
                        <div className="product_rating">
                            {Array(rating).fill().map((_, i) => (
                                <p>🌟</p>
                            ))}
                            </div>
                            <img src={image} alt="" />
                            <button onClick={addToBasket} className='productButton'>Add to Basket</button>
                    </div>
            </div>
        </div>
    
  )
}

export default DetailsProduct
