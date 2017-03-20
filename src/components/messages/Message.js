/**
 * Created by dumorango on 19/03/17.
 */

import React, {PropTypes} from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import {blue500, red500, greenA200} from 'material-ui/styles/colors';

const iconStyles = {
  marginRight: 24
};
const Message = ({message, remove}) => {
  function removeMessage(event) {
    event.preventDefault();
    remove(message);
  }
  return (
    <Card style={{ borderRadius: 10, marginBottom: 30 }}>
      <CardHeader
        title={`${message.authorname} - ${message.authortype}`}
        subtitle={message.projecttitle}
        avatar={message.authorimage}
      />
      <CardTitle style={{ fontSize: 13, marginLeft: 25 }} title={message.title} subtitle="" />
      <CardActions style={{float: 'right'}}>
        <FlatButton label="Reply" icon={<FontIcon  className="material-icons" style={{fontSize: 15}}>reply</FontIcon>}/>
        <FlatButton label="Delete" onClick={removeMessage} icon={<FontIcon className="material-icons" style={{fontSize: 15}}>delete</FontIcon>}/>
      </CardActions>
      <CardText style={{ marginLeft: 50 }}>
        {message.content}
      </CardText>
    </Card>
  );
};

Message.propTypes = {
  message: PropTypes.object.isRequired,
  remove: PropTypes.func.isRequired
};

export default Message;
