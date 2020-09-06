import * as React from "react"
import { useEffect, useState } from "react"
import { PageProps } from "gatsby"
import { graphql } from "gatsby"
import queryString from "query-string"
import SEO from "../components/seo"

const CharacterPage = ({ location }: PageProps) => {
  const [name, setName] = useState("")
  const [imageUrl, setImageUrl] = useState("")

  useEffect(() => {
    const queriedCharacter = queryString.parse(location.search)
    console.log("queriedCharacter", queriedCharacter)
    const searchString = queriedCharacter.q
    console.log("character", searchString)

    const query = `
        query {
          characters(page: 1, filter: { name: "${searchString}" }) {
          results {
            name
            image
          }
        }
      }
    `

    const url = "https://rickandmortyapi.com/graphql"

    const requestHeaders: HeadersInit = new Headers()
    requestHeaders.set("Content-Type", "application/json")
    console.log("query: ", query)
    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: query }),
    })
      .then(res => res.json())
      .then(r => {
        console.log(r.data.characters.results[0].name)
        setName(r.data.characters.results[0].name)
        setImageUrl(r.data.characters.results[0].image)
      })
      .catch(console.error)
  }, [])

  return (
    <>
      <h1>{name}</h1>
      <img src={imageUrl} />
    </>
  )
}

export default CharacterPage
