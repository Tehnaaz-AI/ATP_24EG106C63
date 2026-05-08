import User from './User.jsx'

function UserList() {

  let users = [
    {
      name: 'Aarav Sharma',
      email: 'aarav.sharma@example.com',
      image: 'https://randomuser.me/api/portraits/men/11.jpg'
    },
    {
      name: 'Vivaan Patel',
      email: 'vivaan.patel@example.com',
      image: 'https://randomuser.me/api/portraits/men/12.jpg'
    },
    {
      name: 'Aditya Singh',
      email: 'aditya.singh@example.com',
      image: 'https://randomuser.me/api/portraits/men/13.jpg'
    },
    {
      name: 'Sai Kumar',
      email: 'sai.kumar@example.com',
      image: 'https://randomuser.me/api/portraits/men/14.jpg'
    },
    {
      name: 'Rohan Reddy',
      email: 'rohan.reddy@example.com',
      image: 'https://randomuser.me/api/portraits/men/15.jpg'
    },
    {
      name: 'Ananya Gupta',
      email: 'ananya.gupta@example.com',
      image: 'https://randomuser.me/api/portraits/women/11.jpg'
    },
    {
      name: 'Isha Verma',
      email: 'isha.verma@example.com',
      image: 'https://randomuser.me/api/portraits/women/12.jpg'
    },
    {
      name: 'Priya Nair',
      email: 'priya.nair@example.com',
      image: 'https://randomuser.me/api/portraits/women/13.jpg'
    },
    {
      name: 'Sneha Das',
      email: 'sneha.das@example.com',
      image: 'https://randomuser.me/api/portraits/women/14.jpg'
    },
    {
      name: 'Kavya Iyer',
      email: 'kavya.iyer@example.com',
      image: 'https://randomuser.me/api/portraits/women/15.jpg'
    }
  ]

  return (
    <>
      <main className="min-h-screen bg-gradient-to-br from-slate-100 via-cyan-50 to-slate-200 py-12">

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-8">

          {users.map((user) => (
            <div
              key={user.email}
              className="bg-white rounded-3xl shadow-lg p-6 transition duration-500 hover:-translate-y-3 hover:shadow-2xl hover:bg-cyan-50"
            >
              <User userObj={user} />
            </div>
          ))}

        </div>

      </main>
    </>
  )
}

export default UserList