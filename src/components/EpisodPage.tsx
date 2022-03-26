import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Episod, State } from '../types/types';
const Conteiner = styled.div`
display:flex;
background-color:#CCCCCC;
flex-direction:column;
height:1400px;
`
const Text = styled.p`

margin:1% 0 0 5%;
color:black;
font-size:1.5em;
`

const Episods = ({ id, season, setName }: { id: string, season: string, setName: React.Dispatch<React.SetStateAction<string>> }) => {
    const episods = useSelector<State, Array<Episod>>(state => state.episods)
    //i need id and season for quick filter
    const ourSeason = episods.filter(e => e.season === season);
    const ourEpisod = ourSeason.filter(e => e.episode_id === id);
    return (

        <Conteiner>
            <Text>{`title:  ${ourEpisod[0].title}`}</Text>
            <Text>{`date:  ${ourEpisod[0].air_date}`}</Text>
            <Text>characters:</Text>
            {ourEpisod[0].characters?.map((c, index) =>
                <Link to='/characters' onClick={() => { setName(c) }}><li style={{ margin: '1% 0 0 5%' }} key={index}>{c + ' '}</li></Link>
            )}
            <Link to='/'><button style={{ width: '100%', height: '30px', margin: '20px 0 0 0', cursor: 'pointer', color: 'light-' }}>Back</button></Link>
        </Conteiner>
    )
}

export default Episods
