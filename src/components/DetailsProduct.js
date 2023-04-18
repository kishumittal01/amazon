import React from 'react'


function DetailsProduct( { id, title, image, price, rating }) {
  return (
    <div>
        <div>
            <div className="detailProduct">
                    <h2 className="detailProduct_title">{title}</h2>
                    <img src={image} alt="" className="detailProduct_image" />
                    <div className="detailProduct_info">
                        <p className="detailProduct_info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, corporis.</p>
                        <p className="detailProduct_price">
                            <strong>{price}</strong>
                        </p>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default DetailsProduct
