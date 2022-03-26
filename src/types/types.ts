export interface State {
episods:Array<Episod>,
characters:Array<Character>
}
export interface Action{
    type:string, 
    payload:any
}

export type Dispatch = ( action:Action) => void;

export interface Episod {

    "episode_id"?: string,
    "title"?: string,
    "season"?: string,
    "air_date"?: string,
    "characters"?: string[],
    "episode"?: string,
    "series"?: string

}

export interface Character {
 "char_id": string,
        "name": string,
        "birthday": string,
        "occupation": string[],
        "img": string,
        "status": string,
        "nickname": string
}


