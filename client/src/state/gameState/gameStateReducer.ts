const testString = `You followed your conscience in the hope that others would follow theirs. 
You didn’t do it for a reward, or a pat on the head. The universe never tells us if we did right or wrong. 
It’s more important to try and help people, and to know that you did. 
More important that someone else’s life gets better, then for you to feel good about yourself. 
You never know the effect you might have on someone, not really. 
Maybe one cruel thing you said haunts them forever. 
Maybe one moment of kindness gives them comfort or courage. Maybe you said the one thing they needed to hear. 
It doesn’t matter if you ever know. You just have to try.`;

export interface GameState {
    gameId: string;
    quote: string;
}

export const initialState: GameState = {
    gameId: 'test-game-id-123',
    quote: testString,
};

const gameStateReducer = (state = initialState, action: any): GameState => {
    switch (action.type) {
    }
    return initialState;
};

export default gameStateReducer;
