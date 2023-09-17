import axios from 'axios'

export const GET_KONTAK_LIST = "GET_KONTAK_LIST";
export const ADD_KONTAK = "ADD_KONTAK";
export const DELETE_KONTAK = "DELETE_KONTAK";
export const DETAIL_KONTAK = "DETAIL_KONTAK";
export const UPDATE_KONTAK = "UPDATE_KONTAK";

export const getKontakList = (dispatch) => {
    //loading
    dispatch({
        type: GET_KONTAK_LIST,
        payload: {
            loading: true,
            data: false,
            errorMessage: false
        }
    })

    axios({
        method: 'GET',
        url: "http://localhost:3000/kontaks",
        timeout: 120000
    })
        .then((response) => {
            dispatch({
                type: GET_KONTAK_LIST,
                payload: {
                    loading: false,
                    data: response.data,
                    errorMessage: false
                }
            })
        })
        .catch((error) => {
            dispatch({
                type: GET_KONTAK_LIST,
                payload: {
                    loading: false,
                    data: false,
                    errorMessage: error.message
                }
            })
        })
}

export const addKontak = (dispatch, data) => {
    //loading
    dispatch({
        type: ADD_KONTAK,
        payload: {
            loading: true,
            data: false,
            errorMessage: false
        }
    })

    axios({
        method: 'POST',
        url: "http://localhost:3000/kontaks",
        timeout: 120000,
        data: data
    })
        .then((response) => {
            dispatch({
                type: ADD_KONTAK,
                payload: {
                    loading: false,
                    data: response.data,
                    errorMessage: false
                }
            })
        })
        .catch((error) => {
            dispatch({
                type: ADD_KONTAK,
                payload: {
                    loading: false,
                    data: false,
                    errorMessage: error.message
                }
            })
        })
}

export const deleteKontak = (dispatch, id) => {
    console.log("2. Masuk Action");
    //loading
    dispatch({
        type: DELETE_KONTAK,
        payload: {
            loading: true,
            data: false,
            errorMessage: false
        }
    })

    axios({
        method: 'DELETE',
        url: "http://localhost:3000/kontaks/"+id,
        timeout: 120000,
    })
        .then((response) => {
            console.log("3. Berhasil Delete : ", response);
            dispatch({
                type: DELETE_KONTAK,
                payload: {
                    loading: false,
                    data: response.data,
                    errorMessage: false
                }
            })
        })
        .catch((error) => {
            console.log("3. Gagal Delete : ", error.message);
            dispatch({
                type: DELETE_KONTAK,
                payload: {
                    loading: false,
                    data: false,
                    errorMessage: error.message
                }
            })
        })
}

export const detailKontak = (dispatch, data) => {
    dispatch({
        type: DETAIL_KONTAK,
        payload: {
            data: data
        }
    })
}

export const updateKontak = (dispatch, data) => {
    console.log("2. Masuk Action");
    //loading
    dispatch({
        type: UPDATE_KONTAK,
        payload: {
            loading: true,
            data: false,
            errorMessage: false
        }
    })

    axios({
        method: 'PUT',
        url: "http://localhost:3000/kontaks/"+data.id,
        timeout: 120000,
        data: data
    })
        .then((response) => {
            console.log("3. Berhasil Update : ", response);
            dispatch({
                type: UPDATE_KONTAK,
                payload: {
                    loading: false,
                    data: response.data,
                    errorMessage: false
                }
            })
        })
        .catch((error) => {
            console.log("3. Gagal Update : ", error.message);
            dispatch({
                type: UPDATE_KONTAK,
                payload: {
                    loading: false,
                    data: false,
                    errorMessage: error.message
                }
            })
        })
}