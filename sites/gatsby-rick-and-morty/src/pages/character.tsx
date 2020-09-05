import * as React from "react"
import { useEffect } from "react"
import { PageProps } from "gatsby"
import { graphql } from "gatsby"
import queryString from "query-string"
import SEO from "../components/seo"

const CharacterPage = ({ location }: PageProps) => {
  console.log("hi")

  useEffect(() => {
    const queriedCharacter = queryString.parse(location.search)
    console.log("queriedCharacter", queriedCharacter)
    const searchString = queriedCharacter.q
    console.log("character", searchString)

    const query = graphql`
      query CharacterPageQuery {
        rickAndMorty {
          characters(page: 1, filter: { name: $searchString }) {
            results {
              name
              image
            }
          }
        }
      }
    `

    const url = "https://rickandmortyapi.com/graphql"

    const requestHeaders: HeadersInit = new Headers()
    requestHeaders.set("Content-Type", "application/json")
    const response = fetch(url, {
      method: "POST",
      mode: "no-cors",
      headers: requestHeaders,
      body: JSON.stringify({ query }),
    })
      .then(res => res.json())
      .then(console.log)
      .catch(console.error)
  }, [])

  return (
    <>
      <h1></h1>
    </>
  )
}

export default CharacterPage
