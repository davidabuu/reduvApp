import {
    GET_LOGS,
    SET_LOADING,
    LOGS_ERROR,
    ADD_LOG,
    DELETE_LOGS,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_LOG,
    SEARCH_LOGS
} from './types';
// Get Logs From Server
export const getLogs = () => async dispatch => {
    try {
        setLoading();
        const res = await fetch('/logs');
        const data = await res.json();
        dispatch({
            type:GET_LOGS,
            payload: data
        });   
    } catch (error) {
        dispatch({
            type: LOGS_ERROR,
            payload: error.response.data
        })
    }
}
//Add New Log
export const addLog = (log) => async dispatch => {
    try {
        setLoading();
        const res = await fetch('/logs', {
            method: 'POST',
            body: JSON.stringify(log),
            headers: {
                'Content-Type':'application/json'
            }
        });
        const data = await res.json();
        dispatch({
            type:ADD_LOG,
            payload: data
        });   
    } catch (error) {
        dispatch({
            type: LOGS_ERROR,
            payload: error.response.data
        })
    }
}

//Set Current Log
export const setCurrent = log => {
    return{
        type:SET_CURRENT,
        payload:log
    }
}
//Clear Current
export const clearCurrent = () => {
    return{
        type:CLEAR_CURRENT
    }
}

//Update Log on Server
export const updateLog = log => async dispatch => {
    try {
        setLoading();
       const res =  await fetch(`/logs/${log.id}`, {
            method: 'PUT',
            body: JSON.stringify(log),
            headers:{
                'Content-Type': 'application/json'
            }
        });
        const data = await res.json();
        dispatch({
            type:UPDATE_LOG,
            payload: data
        });   
    } catch (error) {
        dispatch({
            type: LOGS_ERROR,
            payload: error.response.data
        })
    }
}
//Delete Log From Server
export const deleteLog = (id) => async dispatch => {
    try {
        setLoading();
        await fetch(`/logs/${id}`, {
            method: 'DELETE'
        })
        dispatch({
            type:DELETE_LOGS,
            payload: id
        });   
    } catch (error) {
        dispatch({
            type: LOGS_ERROR,
            payload: error.response.data
        })
    }
}
//Search Log From Server
export const searchLog = text => async dispatch => {
    try {
        setLoading();
       const res =  await fetch(`/logs?q=${text}`)
       const data = await res.json()
        dispatch({
            type:SEARCH_LOGS,
            payload: data
        });   
    } catch (error) {
        dispatch({
            type: LOGS_ERROR,
            payload: error.response.data
        })
    }
}
// Set Loading to true
export const setLoading = () => {
    return{
        type: SET_LOADING
    }
}