import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Hello Anton" keywords={[`antonstepan`,]} />
    <div style={{
      alignItems: `center`,
      display: `flex`,
      flexDirection: `column`,
    }}>
      <h1 style={{
        color: 'black'
      }}>Anton Stepan</h1>
      <span>How's it going?</span>
    </div>
  </Layout>
)

export default IndexPage
