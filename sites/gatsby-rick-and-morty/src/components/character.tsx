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
      <h2>Episodes</h2>
      <ol>
        {data.rickAndMorty.character?.episode?.map(({ name = "" }) => {
          return <li>{name}</li>
        })}
      </ol>
    </>
  )
}

export const query = graphql`
  query CharacterPageQuery($id: ID!) {
    rickAndMorty {
      character(id: $id) {
        name
        image
        episode {
          name
        }
      }
    }
  }
`

export default CharacterPage
