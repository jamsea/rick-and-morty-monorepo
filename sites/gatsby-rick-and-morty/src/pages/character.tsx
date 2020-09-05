import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import SEO from "../components/seo"

const CharacterPage = ({ data }) => (
  <>
    <SEO title="Character Page" />
    <h1>{data.rickAndMorty.characters.results[0].name}</h1>
    <img src={data.rickAndMorty.characters.results[0].image} />
  </>
)

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
