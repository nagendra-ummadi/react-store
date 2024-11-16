
function ProductCard({image,title,price,rating, description}){

    return(
        <div className="product-card">
            <img src={image} alt="Product Item" />
            <h4>{title}</h4>
            {/* <p>{description}</p> */}
            <h3>${price}</h3>
            <h4>rating {rating.rate}</h4>
            <button type="submit">Add to Cart</button>

        </div>

    )
}

export default ProductCard