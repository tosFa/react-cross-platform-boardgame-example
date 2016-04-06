export const mapStateToProps = (state, ownProps) => {
  return {
    name: (state.player.position === ownProps.position) ? state.player.name : null
  }
}