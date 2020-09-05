import React from "react"
import { graphql, PageProps } from "gatsby"
import Img from "gatsby-image"
import SEO from "../components/seo"

import { Query } from "../graphqlTypes"

const CharacterPage = ({ data }: PageProps<Query>) => {
  const results = data.rickAndMorty?.characters?.results || [
    { name: "", image: "" },
  ]
  const { name, image } = results[0]

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
      characters(page: 1, filter: { name: "poopy" }) {
        results {
          name
          image
        }
      }
    }
  }
`

export default CharacterPage
