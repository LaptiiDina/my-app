import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Character, State } from '../types/types';
const Conteiner = styled.div`
display:flex;
background-color:#CCCCCC;
height:1400px;
flex-direction:column;
`
const ConteinerText = styled.div`
position:relative;
align-self: center;
margin-top:30px;
`
const Text = styled.p`

margin:1% 0 0 20%;
color:black;
font-size:1.5em;
width: 330px;
`
const Photo = styled.img`
margin-top:15px;
height:300px;
width: 230px;
align-self: center;
`
const ConteinerButton = styled.div`
width: 430px;
margin-right:20px;
align-self: center;
`
const CharactersPage = ({ name }: { name: string }) => {
    const characters = useSelector<State, Array<Character>>(state => state.characters);
    const ourCharacter = characters.filter(c => c.name === name)
    // in episodsPage i have  full name that's why i find character by name


    if (ourCharacter.length !== 0) {
        return (
            <>
                <Conteiner>
                    <Photo src={`${ourCharacter[0].img}`} alt={ourCharacter[0].nickname} />
                    <ConteinerText>
                        <Text>{`id of character: ${ourCharacter[0].char_id}`}</Text>
                        <Text>{`name: ${ourCharacter[0].name}`}</Text>
                        <Text>{`nickname: ${ourCharacter[0].nickname}`}</Text>
                        <Text>{`birthday: ${ourCharacter[0].birthday}`}</Text>
                        <Text>{`status: ${ourCharacter[0].status}`}</Text>
                        {ourCharacter[0].occupation.map((o, index) =>
                            <>
                                <Text>occupation:</Text>
                                <Text> <li style={{ margin: '1% 0 0 5%' }} key={index}>{o + ' '}</li></Text>
                            </>
                        )}
                        <Link to='/episodPage'><button style={{ width: '50%', height: '30px', margin: '40px 0 0 0', cursor: 'pointer' }}>Back to episod page</button></Link>
                        <Link to='/'><button style={{ width: '50%', height: '30px', margin: '40px 0 0 0', cursor: 'pointer' }}>Back to main page</button></Link>
                    </ConteinerText>

                </Conteiner>


            </>
        )
    }
//there are no data about many people, the project has a check through postman
    return (
        <Conteiner>
            
               <ConteinerText>
                
                No information about this character
                </ConteinerText>
                <ConteinerButton>
                <Link to='/episodPage'><button style={{ width: '50%', height: '30px', margin: '40px 0 0 0', cursor: 'pointer' }}>Back to episod page</button></Link>
                <Link to='/'><button style={{ width: '50%', height: '30px', margin: '40px 0 0 0', cursor: 'pointer' }}>Back to main page</button></Link>
                </ConteinerButton>
           
        </Conteiner>
    )
}
export default CharactersPage
