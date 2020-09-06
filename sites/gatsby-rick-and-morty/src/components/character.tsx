import * as React from "react"
import { PageProps } from "gatsby"
import { graphql } from "gatsby"
import SEO from "./seo"
import { Query } from "../graphqlTypes"

const CharacterPage = ({ data }: PageProps<Query>) => {
  return (
    <>
      <h1>{data.rickAndMorty.character?.name}</h1>
      <img src={data.rickAndMorty.character?.image} />
    </>
  )
}

export const query = graphql`
  query CharacterPageQuery($id: ID!) {
    rickAndMorty {
      character(id: $id) {
        name
        image
      }
    }
  }
`

export default CharacterPage
