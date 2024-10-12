function Product({productChild}) {
    return (
        <div className="product">
            <h3>{productChild.name}</h3>
            <p>Pret: {productChild.price}</p>
        </div>
    )
}

export default Product