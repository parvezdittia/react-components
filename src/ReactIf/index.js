import React from 'react';

function ReactIf(props) {

    let output = null;

    if(props.when){
        output = props.children;
    } 

    return output;

}

export default ReactIf;

