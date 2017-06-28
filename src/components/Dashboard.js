import React from 'react';
import VerificationCode from './VerificationCode';

function Dashboard () {
  return (
    <article>
      <section className='text-section'>

        <VerificationCode code = {13} />

      </section>
    </article>
  )
}

export default Dashboard
