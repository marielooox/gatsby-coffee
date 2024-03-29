import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { MdPlayForWork } from "react-icons/md";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    < MdPlayForWork />
  </Layout>
)

export default IndexPage
