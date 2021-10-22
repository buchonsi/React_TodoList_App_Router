import React from 'react';

const divStyle = {
  margin: '0 auto', 
  marginTop: '4rem',
  width: '512px'
};

const About = () => {
  return (
    <div style={divStyle}>
      <h2>TodoList App 소개</h2>
      <p>
        안녕하세요, 저는 Redux와 React-Router를 적용한 TodoList App입니다.
      </p>
    </div>
  );
};
export default About;