import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404 Stránka nenalezena" />
    <section className="page404">
      <div className="content">
        <h1>404 Stránka nenalezena</h1>
        <p>Je nám líto. Hledaná stránka neexistuje. Vraťte se prosím zpět na úvodní stránku.</p>
        <Link className="link" to="/" ><i className="fa fa-chevron-left" aria-hidden="true"></i> Zpět na úvod</Link>
      </div>
    </section>
  </Layout>
)

export default NotFoundPage
