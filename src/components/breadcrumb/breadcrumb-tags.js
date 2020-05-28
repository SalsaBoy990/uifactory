// eslint-disable-next-line no-unused-vars
import React from "react"
import { Link } from "gatsby"

import BreadCrumbStyles from "./breadcrumb.module.css"

export default ({ children }) => (
  <nav aria-label="breadcrumb">
    <ol className={`breadcrumb p0 m0 mbhalf min-size ${BreadCrumbStyles.breadcrumbBg}`}>
      <li className="breadcrumb-item no-list-image">
        <Link to="/">Főoldal</Link>
      </li>
      <li className="breadcrumb-item no-list-image">
        <Link to="/cimkek/">Címkék</Link>
      </li>
      <li className="breadcrumb-item no-list-image active" aria-current="page">
        {children}
      </li>
    </ol>
  </nav>
)