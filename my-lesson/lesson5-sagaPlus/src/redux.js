const mapState = (state, keys) => (
  keys.reduce((pre, cur) => (
    {
      ...pre,
      [cur]: state[cur],
    }
  ), {})
)

const mapDispatch = (actions, keys) => (
  keys.reduce((pre, cur) => (
    {
      ...pre,
      [cur]: actions[cur],
    }
  ), {})
)

export {
  mapState,
  mapDispatch,
}
