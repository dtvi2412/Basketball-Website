const initialState = {
    courses: [],
    dataSkill: [],

}
const couresReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'DATA_FIREBASE':
            state.courses = action.data;
            return {...state };
        case 'DATA_FIREBASE_SKILL':
            state.dataSkill = action.data;
            return {...state };
        default:
            return {...state };
    }

}
export default couresReducer;