import React from 'react';

export const Layout = (props) => ( 


<div
       style={{
         display: "flex",
         justifyContent: "center",
         alignItems: "center"
       }}
     >
      {props.children}
     </div>
     
)
