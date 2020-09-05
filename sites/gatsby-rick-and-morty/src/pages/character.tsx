import React from "react"
import { graphql, PageProps } from "gatsby"
import Img from "gatsby-image"
import SEO from "../components/seo"

import { Query } from "../graphqlTypes"

const CharacterPage = ({ data }: PageProps<Query>) => {
  const results = data.rickAndMorty?.characters?.results ?? []

  if (results.length === 0) {
    return <></>
  }
  const character = results[0]
  const { name = "", image = "" } = character

  return (
    <>
      <SEO title="Character Page" />
      <h1>{name}</h1>
      <img src={image} />
    </>
  )
}

export const query = graphql`
  query CharacterPageQuery {
    rickAndMorty {
      characters(page: 1, filter: { name: "rick" }) {
        results {
          name
          image
        }
      }
    }
  }
`

export default CharacterPage
