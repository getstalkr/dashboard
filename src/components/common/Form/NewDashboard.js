import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ErrorMessage from '../ErrorMessage';
import LoadingButton from '../LoadingButton';

import {addCellChangeForm} from '../../../actions';

class NewDashBoardForm extends Component {

  constructor (props) {

    super(props)

    this._onSubmit = this._onSubmit.bind(this)

    this._changeTeam = this._changeTeam.bind(this)
    this._changeProject = this._changeProject.bind(this)
    this._changeTravisApiKey = this._changeTravisApiKey.bind(this)
  }
  render () {

    let {error} = this.props

    return (

      <form className='form' onSubmit={this._onSubmit}>

        {error ? <ErrorMessage error={error} /> : null}

        <div className='form__field-wrapper'>

          <input
            className='form__field-input'
            type='text'
            id='team'
            value={this.props.data.team}
            placeholder='getstalkr'
            onChange={this._changeTeam}
            autoCorrect='off'
            autoCapitalize='off'
            spellCheck='false' />

          <label className='form__field-label' htmlFor='team'>
            Team
          </label>

        </div>

        <div className='form__field-wrapper'>
          <input
            className='form__field-input'
            id='project'
            type='text'
            value={this.props.data.project}
            placeholder='espinosa'
            onChange={this._changeProject} />
          <label className='form__field-label' htmlFor='project'>
            Project
          </label>
        </div>

        <div className='form__field-wrapper'>
          <input
            className='form__field-input'
            id='travisApiKey'
            type='text'
            value={this.props.data.travisApiKey}
            placeholder='770713b7ff6732d20fb1'
            onChange={this._changeTravisApiKey} />
          <label className='form__field-label' htmlFor='travisApiKey'>
            Travis API Key
          </label>
        </div>

        <div className='form__submit-btn-wrapper'>

          { this.props.currentlySending
            ? ( <LoadingButton /> )
            : (
                <button className='form__submit-btn' type='submit'>
                  {this.props.btnText}
                </button>
              )
          }

        </div>

      </form>
    )
  }

  _changeTeam (event) {
    this._emitChange({...this.props.data, team: event.target.value})
  }

  _changeProject (event) {
    this._emitChange({...this.props.data, project: event.target.value})
  }

  _changeTravisApiKey (event) {
    this._emitChange({...this.props.data, travisApiKey: event.target.value})
  }

  _emitChange (newFormState) {
    this.props.dispatch(addCellChangeForm(newFormState))
  }

  _onSubmit (event) {
    event.preventDefault()
    this.props.onSubmit(
      this.props.data.team,
      this.props.data.project,
      this.props.data.travisApiKey)
  }
}

NewDashBoardForm.propTypes = {
  dispatch: PropTypes.func,
  data: PropTypes.object,
  onSubmit: PropTypes.func,
  signingChangeForm: PropTypes.func,
  btnText: PropTypes.string,
  error: PropTypes.string,
  currentlySending: PropTypes.bool
}

export default NewDashBoardForm
