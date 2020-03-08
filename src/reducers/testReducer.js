export default function testReducer(state = {
    testArray: [],
    user: {
        username: '',
        password: ''
    }
}, action) {
    console.log(action);
    switch(action.type) {

        case 'INCREASE_COUNT':
            console.log("Current state.testArray length %s", state.testArray.length);
            console.log("Updating state.testArray length to %s", state.testArray.length + 1);
            return Object.assign({}, state, { testArray: state.testArray.concat(state.testArray.length + 1) });

        default:
            console.log("Initial state.testArray length: %s", state.testArray.length);
            return state;
    }
};