import React, { Component } from 'react';
import VerificationCode from './VerificationCode';

class Dashboard extends Component {

  render() {
    return (
      <article>
        <section className='text-section'>
          <VerificationCode secret={localStorage.stalkr_secret} />
        </section>
      </article>
    )
  }
}

export default Dashboard
