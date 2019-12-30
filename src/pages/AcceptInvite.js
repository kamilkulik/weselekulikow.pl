import React from 'react';
import MailConfirm from '../components/MailConfirm';
import PhoneConfirm from '../components/PhoneConfirm';

const AcceptInvite = () => (
  <div>
    <section id="accept" className="section-accept">
      <p>This is the accept invite section</p>
        <div>
          <MailConfirm />
        </div>
        <div>
          <PhoneConfirm phoneNo="884 947 484‬" name="Wojciecha"/>
          <PhoneConfirm phoneNo="609 851 643‬" name="Eweliny"/>
        </div>
    </section>
  </div>
);

export default AcceptInvite;