import React from 'react';
import { GridLoader } from 'react-spinners';
import styled from 'styled-components';


const Loader = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 40vh;
`

const Loading = (props: any) => {
    console.log(props)
    return (
    <Loader>
        <GridLoader
        />
    </Loader>
    );
}

export default Loading;