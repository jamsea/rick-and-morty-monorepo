exports.createPages = async function ({ actions, graphql }) {
  for (let id = 1; id < 500; id++) {
    actions.createPage({
      path: `character/${id}`,
      component: require.resolve(`./src/components/character.tsx`),
      context: { id },
    })
  }
}
