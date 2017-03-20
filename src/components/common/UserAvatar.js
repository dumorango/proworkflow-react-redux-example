/**
 * Created by dumorango on 19/03/17.
 */

import React, {PropTypes} from 'react';
import ContactAvatar from '../contacts/ContactAvatar';

const style = {margin: 5};

const UserAvatar = ({user}) => {
  return (
    <ContactAvatar image={user.image}/>
  );
};

UserAvatar.propTypes = {
  user: PropTypes.object.isRequired
};

export default UserAvatar;
