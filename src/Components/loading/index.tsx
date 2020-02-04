import React from 'react';
import { GridLoader } from 'react-spinners';
import styled from 'styled-components';


const Loader = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    
`

const Loading = () => {
    return (
    <Loader>
        <GridLoader/>
    </Loader>
    );
}

export default Loading;