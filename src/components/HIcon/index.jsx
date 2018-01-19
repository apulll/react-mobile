import React from 'react';
import "assets/svg/edit.svg";
import "assets/svg/save.svg";

 const HIcon = ({ type, className = '', size = 'md', ...restProps }) => (
     <svg
       className={`am-icon am-icon-${type} am-icon-${size} ${className}`}
       {...restProps}
     >
       {/*<use xlinkHref={type} /> {/* svg-sprite-loader@0.3.x */}*/}
       <use xlinkHref={`#${type}`} /> {/* svg-sprite-loader@latest */}
     </svg>
 );

 export default HIcon;