import Head from 'next/head'
import Jumbotron from '../components/jumbotron'
import Profile from '../components/profile'
import Works from '../components/works'
import Links from '../components/links'

export default function IndexPage() {
  return (
    <div>
      <Head>
        <title>cordx.net</title>
      </Head>
      <Jumbotron />
      <div className="container flex mx-auto my-4 justify-between flex-wrap px-4">
        <div className="w-full px-4 mb-4 lg:w-1/2">
          <Profile />
        </div>
        <div className="w-full px-4 mb-4 lg:w-1/2">
          <Works />
        </div>
        <div className="w-full px-4 mb-4 lg:w-1/2">
          <Links />
        </div>
      </div>
    </div>
  )
}
