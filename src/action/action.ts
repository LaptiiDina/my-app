import { Action, Character, Dispatch, Episod } from "../types/types"

export const putEpisods = (episods: Array<Episod>): Action => ({
    type: 'putEpisods',
    payload: episods
})
export const putCharacters = (characters: Array<Character>): Action => ({
    type: 'putCharacters',
    payload: characters
})
export const fetchGetCharacters = () => {
    return (dispatch: Dispatch) => {
        fetch('https://www.breakingbadapi.com/api/characters')
            .then(response => {
                if (response.ok) {
                    console.log(response);

                    return response.json()
                }
                else {
                    throw new Error('' + response.status);
                }
            })
            .then(data => {
                localStorage.setItem('characters', JSON.stringify(data))

                dispatch(putCharacters(data));
            })
    }
}
export const fetchGetEpisodes = () => {
    return (dispatch: Dispatch) => {
        fetch('https://www.breakingbadapi.com/api/episodes')
            .then(response => {
                if (response.ok) {
                    console.log(response);

                    return response.json()
                }
                else {
                    throw new Error('' + response.status);
                }
            })
            .then(data => {
                localStorage.setItem('episods', JSON.stringify(data))

                dispatch(putEpisods(data));

            })

    }
}
