import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout pageTitle="404: Not Found">
    <SEO title="404: Not found" />

    <section className="bg-white text-neutral border-b py-8">
      <div className="container max-w-lg mx-auto mt-5">
        <div className="mx-5 sm:mx-auto">
          <StaticImage
            src="../images/undraw_not_found.svg"
            alt="not found image"
            quality={95}
          />
        </div>

        <p className="mt-5 mx-5 sm:mx-auto text-center text-sm text-gray-500">
          You just hit a route that doesn&#39;t exist... the sadness.
        </p>
      </div>
    </section>
  </Layout>
)

export default NotFoundPage
