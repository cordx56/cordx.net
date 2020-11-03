import Profile from '../components/meishi/profile'

export default function IndexPage() {
  return(
    <div className="container flex flex-wrap justify-center items-center mx-auto min-h-screen">
        <div className="w-full sm:w-1/3">
          icon
          {/*<icon />*/}
        </div>
        <div className="w-full sm:w-2/3 p-4">
          <Profile />
          {/*<links />*/}
        </div>
      </div>
  )
}
