import React from 'react'
import styled from 'styled-components';
import { FcOpenedFolder } from 'react-icons/fc';
const Conteiner = styled.div`
display:flex;
align-items:start;
justify-content:space-around;

`
const Folder = styled.div`
margin-left:10px;
font-size:5em;
cursor:pointer;
`
const Text = styled.div`
margin-left:10px;
font-size:0.2em
`
const MainePageEpisods = ({ state, setCount, count }: { state: Array<number>, setCount: React.Dispatch<React.SetStateAction<number>>, count: number }) => {

    if (count) {

        return (
            //i change state, that's why i want send new state in props
            <Conteiner>
                
                {state.filter(n => n !== count).map((n, index) => (
                    <Folder key={index}> <FcOpenedFolder onClick={() => { setCount(n) }} /><Text>{`${n}season`}</Text></Folder>

                ))}
            </Conteiner>
        )
    }
    return (
        <Conteiner>
            {state.map((n, index) => (
                <Folder key={index}> <FcOpenedFolder onClick={() => { setCount(n) }} /><Text>{`${n}season`}</Text></Folder>

            ))}
        </Conteiner>
    )
}

export default MainePageEpisods
