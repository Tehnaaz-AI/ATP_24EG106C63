

function Product(props){ // {props:{productObj:{}}}
    
    const { productObj }=props;
    // state
    // return a react element
    return(
        <div className="border-4 shadow-2xl shadow-red-500 rounded-3xl p-3 border-red-400">
            <h2 className="text-2xl text-blue-400">{productObj.title}</h2>
            <p className="font-bold">{productObj.price}</p>
            <p className="font-bold">{productObj.description}</p>
        </div>
    )
}

export default Product