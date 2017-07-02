import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import NewDashboardForm from './common/Form/NewDashboard';

import select from '../helpers/select'

import {addCellRequest} from '../actions';

class NewDashboard extends Component {

  constructor (props) {
    super(props)

    this._submit = this._submit.bind(this)
  }

  render () {

    let {dispatch} = this.props
    let {formState, currentlySending, error} = this.props.data.addCell

    console.log(this.props.data.addCell)

    return (
      <div className='form-page__wrapper'>
        <div className='form-page__form-wrapper'>
          <div className='form-page__form-header'>
            <h2 className='form-page__form-heading'>Add a Dashboard</h2>
          </div>
          <NewDashboard data={formState} dispatch={dispatch} history={this.props.history} onSubmit={this._submit} btnText={'Submit'} error={error} currentlySending={currentlySending} />
        </div>
      </div>
    )
  }

  _submit (team, project, travisApiKey) {
    this.props.dispatch(addCellRequest({team, project, travisApiKey}))
  }
}

NewDashboard.propTypes = {
  data: PropTypes.object,
  history: PropTypes.object,
  dispatch: PropTypes.func
}

export default connect(select)(NewDashboard)
