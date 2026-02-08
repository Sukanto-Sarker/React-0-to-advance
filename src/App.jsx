import React from 'react'
import AboutMe from './AboutMe'

export default function App() {
  return (
    <>
    <AboutMe  name="SUKANTO SARKER"
    src="https://img.freepik.com/free-photo/portrait-confident-young-businessman-with-his-arms-crossed_23-2148176206.jpg?semt=ais_hybrid&w=740&q=80" 
    exp={20}
    tec={9}
    />

    <AboutMe  name="Ridoy Ahmed"
    src="https://images.unsplash.com/photo-1615109398623-88346a601842?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fHww" 
    exp={30}
    tec={7}
    />

    <AboutMe  name="Robin Miah"
    src="https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcm0zMjgtMzY2LXRvbmctMDhfMS5qcGc.jpg" 
    exp={50}
    tec={3}
    />
    </>
  )
}
