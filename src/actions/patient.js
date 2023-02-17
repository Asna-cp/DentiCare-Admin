import * as api from '../api';

//Actions Creators

export const allpatient = () => async (dispatch) => {
    try {
        const { data } = await api.allpatients();
        dispatch({ type: "FETCH_ALL", payload: data });

    } catch (error) {
        console.log(error.message);
    }
};