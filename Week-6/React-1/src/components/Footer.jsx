function Footer() {
  return (
    <>
      <footer className="bg-pink-600 text-white mt-10 border-t-4 border-pink-400 shadow-2xl">

        <div className="flex flex-col md:flex-row justify-around items-center gap-8 p-10">

          {/* Home Link */}
          <section className="text-center">
            <h2 className="text-2xl font-bold mb-4 font-serif">
              🏠 Navigation
            </h2>

            <ul className="space-y-3 text-sm font-semibold">
              <li className="hover:text-amber-200 hover:scale-105 transition-all duration-300 cursor-pointer">
                Home
              </li>
            </ul>
          </section>

          {/* Contact Info */}
          <section className="text-center">
            <h2 className="text-2xl font-bold mb-4 font-serif">
              📞 Contact Info
            </h2>

            <ul className="space-y-3 text-sm font-semibold text-pink-100">
              <li>
                📧 24eg106c63@anurag.edu.in
              </li>

              <li>
                📱 +91 9640182567
              </li>

              <li>
                📍 Hyderabad, India
              </li>
            </ul>
          </section>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-pink-400 text-center py-4 text-sm text-pink-100">
          © {new Date().getFullYear()} Employee Manager. All rights reserved.
        </div>

      </footer>
    </>
  )
}

export default Footer