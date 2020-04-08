import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Gallery from "../components/gallery"
import News from "../components/news"
import Pricing from "../components/pricing"
import Insurance from "../components/insurance"
import Header from "../components/header"
import Ordination from "../components/ordination"

const IndexPage = () => (
  <Layout>
    <SEO title="MUDr. Miroslav Urban | Praktický lékař pro dospělé" description="Webové stránky ordinace praktického lékaře v Postoloprtech." />
    <Header />
    <News />
    <Ordination />
    <Pricing />
    <Insurance />
    <Gallery />
  </Layout>
)

export default IndexPage
