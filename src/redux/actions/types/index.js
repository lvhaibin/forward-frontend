const keyMirror = require('fbjs/lib/keyMirror');

const user =  {
    FETCH_USER_REQUEST: null,
    FETCH_USER_SUCCESS: null,
    FETCH_USER_FAILURE: null
}

const generate = {
    POST_CREATE_REQUEST: null,
    FETCH_GENERATE_REQUEST: null,
    FETCH_GENERATE_SUCCESS: null,
    FETCH_GENERATE_FAILURE: null
}

const actions = Object.assign({}, user, generate);

export default keyMirror(actions);