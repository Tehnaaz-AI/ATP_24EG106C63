function User(props) {

  const { userObj } = props

  return (

    <div className="p-8 rounded-3xl bg-gradient-to-br from-slate-900 via-cyan-900 to-slate-800 text-white shadow-xl transition duration-500 hover:-translate-y-3 hover:scale-105 hover:shadow-cyan-400/40 hover:shadow-2xl border border-cyan-400/20">

      <img
        className="w-32 h-32 object-cover m-auto mb-6 rounded-full ring-4 ring-cyan-400 transition duration-500 hover:scale-110 hover:ring-cyan-300"
        src={userObj.image}
        alt="Image not found"
      />

      <h2 className="text-2xl font-extrabold tracking-wide mb-3 text-cyan-300 hover:text-cyan-200 transition duration-300">
        {userObj.name}
      </h2>

      <p className="text-slate-300 font-medium hover:text-white transition duration-300">
        {userObj.email}
      </p>

    </div>

  )
}

export default User