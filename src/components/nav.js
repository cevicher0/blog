import React from "react"
import { Link } from "gatsby"

const Nav = () => {
  return (
    <nav className="nav">
      <Link to={`/`}>Home</Link>
      <Link to={`about`}>About</Link>
      <Link to={`contact`}>Contact</Link>
    </nav>
  )
}

export default Nav
