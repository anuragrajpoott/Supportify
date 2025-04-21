import React, { useEffect, useState } from 'react'
import { ClimbingBoxLoader } from 'react-spinners'

const Loader = () => {

  const [quote, setQuote] = useState("")

  useEffect(() => {

    (async () => {

      try {
        const res = await fetch("https://zenquotes.io/api/random")

        console.log(res)

        setQuote(res[0].q)
      } catch (error) {
        console.log("Could not fetch Categories.", error)
      }

    })()
  }, [])
  return (
    <div>
      <ClimbingBoxLoader />
      <div>{quote}</div>
    </div>
  )
}

export default Loader
