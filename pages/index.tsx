import Head from 'next/head'
import Jumbotron from '../components/jumbotron'
import Profile from '../components/profile'
import Works from '../components/works'
import Links from '../components/links'
import Footer from '../components/footer'

import '@fortawesome/fontawesome-svg-core/styles.css'
import { config } from '@fortawesome/fontawesome-svg-core'
config.autoAddCss = false

export default function IndexPage() {
  return (
    <div>
      <Head>
        <title>cordx.net</title>
        <meta name="description" content="cordx56&amp;#39;s webpage" />
        <script data-ad-client="ca-pub-5242596516386874" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
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
      <Footer />
    </div>
  )
}
