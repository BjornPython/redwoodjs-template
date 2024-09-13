import { Metadata } from '@redwoodjs/web'

import { Card } from 'src/base-ui/components/ui/card'

const HomePage = () => {
  return (
    <>
      <Metadata title="Home" description="Home page" />

      <h1>HomePage</h1>
      <p>
        Find me in <code>./web/src/pages/HomePage/HomePage.tsx</code>
      </p>
      <p>
        My default route is named <code>home</code>, link to me with `
        <Card>hello</Card>
      </p>
    </>
  )
}

export default HomePage
