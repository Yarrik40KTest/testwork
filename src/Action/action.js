export const select = (task) =>{
    return{
        type:"TASK_SELECTED",
        payload: task
    }
};

export const add = (task) =>{
    return{
        type:"TASK_ADD",
        payload: {task}
    }
};

export const action = () =>{
    return{
        type:"ACTIONS",
        payload: true
    }
};

export const noaction = () =>{
    return{
        type:"ACTIONS",
        payload:false
    }
};

export const requestTest = () => {
    return { type: 'API_CALL_REQUEST' }
};

export const requestTestSuccess = (data) => {
    return { type: 'REQUESTED_SUCCEEDED', url: data.message }
};

export const requestTestError = () => {
    return { type: 'REQUESTED_FAILED' }
};