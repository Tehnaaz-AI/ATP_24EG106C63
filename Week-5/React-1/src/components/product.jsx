function Product(props){ 
    const { productObj } = props;

    return(
        <div className="p-6 border border-cyan-400/30 rounded-3xl shadow-2xl bg-gradient-to-br from-slate-900 via-cyan-950 to-slate-800 text-white transition-all duration-500 hover:scale-105 hover:-translate-y-3 hover:shadow-cyan-500/40 hover:border-cyan-300 cursor-pointer backdrop-blur-lg">
            
            <h2 className="text-2xl font-extrabold text-cyan-300 mb-3 tracking-wide transition-all duration-300 hover:text-white">
                {productObj.title}
            </h2>

            <p className="font-bold text-lg text-emerald-400 mb-3">
                Amount: ₹{productObj.price}
            </p>

            <p className="text-gray-300 leading-relaxed hover:text-gray-100 transition duration-300">
                {productObj.description}
            </p>

            <button className="mt-5 px-5 py-2 bg-cyan-400 text-slate-900 font-bold rounded-xl shadow-lg transition-all duration-300 hover:bg-white hover:text-cyan-700 hover:scale-110">
                Buy Now
            </button>
        </div>
    )
}

export default Product;