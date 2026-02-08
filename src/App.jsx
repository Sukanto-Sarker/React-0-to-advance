import React from 'react'
import AboutMe from './AboutMe'
import peopleInfo from './peopleInfo'
export default function App() {
  return (
    <>
{peopleInfo.map((person) => (
        <AboutMe
          key={person.id}
          name={person.name}
          src={person.src}
          exp={person.exp}
          tec={person.tec}
        />
      ))}
    </>
  )
}
