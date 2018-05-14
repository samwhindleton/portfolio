// react
import React from 'react';


export default class Footer extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      date: ''
    };

    // this.foobar = this.foobar.bind(this);
  };


  componentDidMount () {
    const newDate = new Date().getFullYear();
    this.setState({
      date: newDate
    });
  };


  render () {
    return (
      <div className='footer'>
        <div className='social-media'>
          <a href='https://www.behance.net/samwhindleton' target='_blank'><i className='fab fa-behance'></i></a>

          <a href='https://github.com/samwhindleton' target='_blank'><i className='fab fa-github-alt'></i></a>

          <a href='https://www.linkedin.com/in/samwhindleton' target='_blank'><i className='fab fa-linkedin-in'></i></a>

          <a href='https://medium.com/@samwhindleton' target='_blank'><i className='fab fa-medium-m'></i></a>

          <a href='https://twitter.com/samwhindleton' target='_blank'><i className='fab fa-twitter'></i></a>

          <a href='mailto:samwhindleton@gmail.com' target='_blank'><i className='fas fa-envelope'></i></a>
        </div>
        <div className='copy'>
          &copy; {this.state.date} <a href='https://samwhindleton.com'>Sam Whindleton</a>. All rights reserved.
        </div>
      </div>
    )
  };
};

