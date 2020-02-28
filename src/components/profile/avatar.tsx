import React from 'react';
import {Avatar} from 'react-native-elements';

function getFirstLetter(name: string) {
  if (name && name.length > 0) {
    return name.charAt(0);
  }

  return '';
}

interface Props {
  image_url: {uri: string};
  name: string;
  size: 'small' | 'medium' | 'large' | 'xlarge' | undefined;
}

const ContactAvatar = ({image_url, name, size}: Props) => (
  <Avatar
    size={size}
    rounded
    title={getFirstLetter(name)}
    source={image_url}
    activeOpacity={0.7}
  />
);

ContactAvatar.defaultProps = {
  size: 'medium',
};

export default ContactAvatar;
