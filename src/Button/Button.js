import React from 'react';
import styled from 'styled-components';


const StyledButton = styled.button` 
    backgroundColor: 'white',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer'
`;

function Button () {
    return (
        <StyledButton>Switch Name</StyledButton>
    )
}

export default Button