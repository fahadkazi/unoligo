import React, {Component} from 'react';
import { connect } from 'react-redux'
import * as actions from './actions'

class UserManagement extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  componentDidMount() {
    this.props.getUsers()
  }

  showUsers() {
    if(this.props.userManagementReducer.getUsersData && this.props.userManagementReducer.getUsersData.length > 0) {
      return this.props.userManagementReducer.getUsersData.map((user, i) => (
        <li key={`user-${i}`}>{user.name}</li>
      ))
    }
  }


  render() {
    return (
      <ul>{this.showUsers()}</ul>
    )
  }
}

function mapStateToProps({ userManagementReducer }) {
  return { userManagementReducer }
}

export default connect(
  mapStateToProps,
  actions
)(UserManagement)