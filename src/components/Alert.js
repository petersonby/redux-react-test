import React from 'react';

export const Alert = ({ text }) => {
  return <p style={{color: 'red', fontWeight: 'bold'}}>Error! {text}</p>;
}