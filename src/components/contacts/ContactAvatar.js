/**
 * Created by dumorango on 19/03/17.
 */

import React, {PropTypes} from 'react';
import Avatar from 'material-ui/Avatar';

const style = {
  margin: 5
};

const ContactAvatar = ({image}) => {
  style.display = image ? 'inline-flex' : 'none';
  return (
    <Avatar
      src={image || ''}
      size={50}
      style={style}
    />
  );
};

ContactAvatar.propTypes = {
  image: PropTypes.string.isRequired
};

export default ContactAvatar;
