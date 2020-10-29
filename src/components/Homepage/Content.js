import React from 'react';
import image1 from '../../assests/image1.PNG';

class Content extends React.Component {
  // constructor(props: Props) {
  //   super(props);

  // }

  render() {
    return (
      <div>
        <img src={image1} style={{width: '75%'}}/>
      </div>
    );
  }
}

export default Content;
