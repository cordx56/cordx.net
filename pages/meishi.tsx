import Icon from '../components/meishi/icon'
import Profile from '../components/meishi/profile'
import Links from '../components/meishi/links'

export default function IndexPage() {
  return(
    <div className="container flex flex-wrap justify-center items-center mx-auto min-h-screen">
        <div className="w-full sm:w-1/3">
          <Icon />
        </div>
        <div className="w-full sm:w-2/3 p-4">
          <Profile />
          <Links />
        </div>
      </div>
  )
}
