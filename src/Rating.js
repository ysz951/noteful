import React from 'react';
import PropTypes from 'prop-types';


export default function Rating(props) {
  const stars = [0,0,0,0,0]
    .map((_, i) => i < props.value
      ? <span key={i}>&#9733;</span>
      : <span key={i}>&#9734;</span>
    );
  return (
    <div className="rating">
      {stars}
    </div>
  );
}

// Rating.propTypes = {
//   value: (props, propName, componentName) => {
//     const prop = props[propName];
//     if (typeof prop!= 'number') {
//         return new Error(`${propName} is required in ${componentName}. Validation Failed`);
//     }
//   } 
// };