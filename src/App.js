import React from 'react';
import PropTypes from 'prop-types';

const App = () => {
  const profiles = [
    { name: 'Taro', age: 10 },
    { name: 'Hanako', age: 5 },
    { name: 'NoName' },
  ];

  return (
    <React.Fragment>
      {
        profiles.map((profile, index) => {
          return <User key={index} name={profile.name} age={profile.age} />;
        })
      }
    </React.Fragment>
  );
};

const User = props => <div>Hi, I am {props.name}, and {props.age} years old!</div>;

User.defaultProps = {
  age: 1,
};

export default App;
