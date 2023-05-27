import { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchAllProjectsThunk } from "../../store/thunks";
import AllProjectsView from "./allProjectsView";

class AllProjectsContainer extends Component {
  componentDidMount() {
    console.log(this.props);
    this.props.fetchAllProjects();
  }

  render() {
    return (
     
      <AllProjectsView allProjects={this.props.allProjects} />
    )
  }
}

// Map state to props;
const mapState = (state) => {
  return {
    allProjects: state.allProjects,
  };
};

// Map dispatch to props;
const mapDispatch = (dispatch) => {
  return {
    fetchAllProjects: () => dispatch(fetchAllProjectsThunk()),
  };
};

// Export our store-connected container by default;
export default connect(mapState, mapDispatch)(AllProjectsContainer);