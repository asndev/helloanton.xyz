import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Hello Anton" keywords={[`antonstepan`,]} />
    <h1>Hello people</h1>
    <p>How's it going?</p>
  </Layout>
)

export default IndexPage
