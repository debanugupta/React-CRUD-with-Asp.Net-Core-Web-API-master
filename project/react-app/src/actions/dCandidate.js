import api from "./api";

export const ACTION_TYPES = {
    CREATE: 'CREATE',
    UPDATE: 'UPDATE',
    DELETE: 'DELETE',
    FETCH_ALL: 'FETCH_ALL'
}

const formateData = data => ({
    ...data,
    age: parseInt(data.age ? data.age : 0)
})

export const fetchall = () => dispatch =>{
    api.dCandidate().fetchall()
        .then(response => {
            console.log(response);
            dispatch({
                type:ACTION_TYPES.FETCH_ALL,
                payload: response.data
            })  
        })
        .catch(err => console.log(err))
}

export const create = (data, onSeccess) => dispatch =>{
    data = formateData(data)
    api.dCandidate().create(data)
        .then(res => {
            dispatch({
                type: ACTION_TYPES.CREATE,
                payload: res.data
            })
            onSeccess()
        })
        .catch(err => console.log(err))
}

export const update = (id, data, onSeccess) => dispatch =>{
    data = formateData(data)
    api.dCandidate().update(id, data)
        .then(res => {
            dispatch({
                type: ACTION_TYPES.UPDATE,
                payload: { id, ...data }
            })
            onSeccess()
        })
        .catch(err => console.log(err))
}

export const Delete = (id, onSeccess) => dispatch =>{
    api.dCandidate().delete(id)
        .then(res => {
            dispatch({
                type: ACTION_TYPES.DELETE,
                payload: id
            })
            onSeccess()
        })
        .catch(err => console.log(err))
}
