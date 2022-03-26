import { reducer } from "./reducer";


it('check add episod', () => {
    const exampleEpisod = {
        "episode_id": "1",
        "title": "Pilot",
        "season": "1",
        "air_date": "01-20-2008",
        "characters": ["Walter White", "Jesse Pinkman", "Skyler White", "Hank Schrader", "Marie Schrader"],
        "episode": "1",
        "series": "Breaking Bad"
    }
    let newState = reducer({ episods: [], characters: [] }, { type: 'putEpisods', payload: [exampleEpisod] });
    expect(newState.episods.length).toBe(1);
    expect(newState.episods[0].episode_id).toBe('1');
    expect(newState.episods[0].title).toBe("Pilot");
})


it('check add character', () => {
    const exampleCharacter = {
        "char_id": '1',
        "name": "Walter White",
        "birthday": '09-07-1958',
        "occupation": ["High School Chemistry Teacher", "Meth King Pin"],
        "img": "https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_walter-white-lg.jpg",
        "status": "Presumed dead",
        "nickname": "Heisenberg"
    }
    let newState = reducer({ episods: [], characters: [] }, { type: 'putCharacters', payload: [exampleCharacter] });
    expect(newState.characters.length).toBe(1);
    expect(newState.characters[0].char_id).toBe('1');
    expect(newState.characters[0].nickname).toBe("Heisenberg");
})

it('check for status change', () => {
   
    let newState = reducer({ episods: [], characters: [] }, { type: 'all ', payload:{}});
    expect(newState.characters.length).toBe(0);
    expect(newState.episods.length).toBe(0);
})


