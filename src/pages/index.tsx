import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"
import Carousel from "../components/carousel"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout pageTitle="">
    <SEO title="Home" />

    <div className="container w-full mx-auto overflow-hidden mb-10">
      <Carousel />
    </div>

    
  </Layout>
)

export default IndexPage
