import { Action, State } from "../types/types";

const initialState: State = {
    episods: [],
    characters: []
}

export const reducer = (state: State = initialState, action: Action): State => {
    switch (action.type) {
        case 'putEpisods':
            return { ...state, episods: action.payload }
        case 'putCharacters':
            return { ...state, characters: action.payload }
        default:
            return state
    }
}
