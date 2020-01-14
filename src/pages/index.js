import React from "react"
import { Link } from "gatsby"

const Home = () => {
  return (
    <div style={{ color: `purple`, fontSize: `72px` }}>
      <Link to="/contact/">Contact</Link>
      <h1> Hello Gatsby!</h1>
      <p>What a world.</p>{" "}
      <img src="https://source.unsplash.com/random/400x200" alt="" />
      <button class="primary-button">Click me</button>
    </div>
  )
}

export default Home
