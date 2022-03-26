import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { fetchGetCharacters, fetchGetEpisodes } from '../action/action';
import { Episod, State } from '../types/types';
import MainePageEpisods from './MainePageEpisods';
const Episods = styled.div`
display inline-block;
width: 200px;
height:200px;
background-color:gray;
margin-left:55px;
margin-top:10px;
color:white;
`

const Back = styled.button`
width: 100%;
height:70px;
margin-top:100px;
cursor:pointer;

`

const MainPage = ({ setId, setSeason }: { setId: React.Dispatch<React.SetStateAction<string>>, setSeason: React.Dispatch<React.SetStateAction<string>> }) => {

    const [state, setState] = useState<Array<number>>([1, 2, 3, 4, 5]);
    const [count, setCount] = useState<number>(0);

    let episods = useSelector<State, Array<Episod>>(state => state.episods)

    const dispatch = useDispatch();
//check state is Empty or not
    if (!episods[0]) {
        dispatch(fetchGetEpisodes())
        dispatch(fetchGetCharacters())
    }
    const countEpisods = Array.from(new Set(episods.map(e => e.season?.trim())))
    const allSeasons = [];
   for (let index = 0; index < countEpisods.length; index++) {
    allSeasons.push(episods.filter(episod => episod.season === countEpisods[index]))
       
   }
    
    if (count) {
        return (
            <>
                <MainePageEpisods state={state} setCount={setCount} count={count} />
                {allSeasons[count - 1].map((episods, index) => (
                    <Episods
                        key={index}
                    >

                        {setSeason(episods.season!)}
                        <Link to='/episodPage'> <button style={{ cursor: "pointer" }} onClick={() => { setId(episods.episode_id!) }} >{episods.title}</button></Link>
                        <p> {episods.air_date}</p>

                    </Episods>
                ))
                }
                <Back onClick={() => { setCount(0) }}>Back</Back>
            </>)
    }

    if (episods[0] && !count) {
        return (<>
            <MainePageEpisods state={state} setCount={setCount} count={count} />
        </>)
    }
    //if state empty i waight result of fetches
    return (
        <>

        </>
    )


}

export default MainPage