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

    <section className="bg-white text-neutral border-b py-8">
      <div className="container max-w-5xl mx-auto mt-5">
        <div className="flex flex-wrap">
          <div className="w-5/6 sm:w-1/2 p-6">
            <h3 className="text-3xl font-bold leading-none">About ME</h3>
            <p className="mt-5">
                I am a fullstack software developer from Nairobi, Kenya. 
                My preferred software solutions stack is Flutter, Firebase/Firestore, NodeJS, and Angular (or ReactJS). 
                I am also proficient working with Java, Groovy/Grails, Android, NativeScript, MYSQL, 
                PostgreSQL, NoSQL (MongoDB and CouchDB), BigQuery, JavaScript, JQuery, JSON, and XML. 
                Addittionally, I have integrated several external APIs such as Safaricom, Twilio, Stripe, Cheddargetter, etc.
            </p>
            <p className="mt-5">
              I studied BSc. Computer Science at Kenyatta University. 
              My hobbies include watching football, light reading, and listening to music.
            </p>
          </div>
          <div className="w-full sm:w-1/2 p-6 mt-6">
            <div className="avatar">
              <div className="mb-8 rounded-btn w-96 ring ring-primary ring-offset-2">
                <StaticImage
                  src="../images/profile-photo.jpg"
                  alt="profile image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default IndexPage
