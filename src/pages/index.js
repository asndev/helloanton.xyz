import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const linkStyle = {
  fontSize: `0.8rem`,
  fontWeight: `bold`,
  margin: `0 5px`,
};

const colors = [
  "#009933", "#006699", "#33cccc", "#99cc00", "#f60", "crimson", "darkolivegreen",
  "lightseagreen", "deepskyblue", "midnightblue", "darkviolet", "darkslategray",
];

const getColor = () => {
  return colors[Math.floor(Math.random() * colors.length)];
};

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
      <p style={{marginTop: `10px`}}>
        <a style={{...linkStyle, color: getColor()}} href="https://www.instagram.com/helloanton.xyz/" target="_blank">INSTAGRAM</a>
        <a style={{...linkStyle, color: getColor()}} href="https://twitter.com/asndev" target="_blank">TWITTER</a>
        <a style={{...linkStyle, color: getColor()}} href="https://www.linkedin.com/in/antonstepan/" target="_blank">LINKEDIN</a>
        <a style={{...linkStyle, color: getColor()}} href="https://www.facebook.com/anton.stepan" target="_blank">FACEBOOK</a>
        <a style={{...linkStyle, color: getColor()}} href="https://github.com/asndev" target="_blank">GITHUB</a>
      </p>
    </div>
  </Layout>
)

export default IndexPage
