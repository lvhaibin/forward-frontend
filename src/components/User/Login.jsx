import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUserRequest } from '../../redux/actions/user'

export default function Login() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUserRequest('abc'))
    }, [dispatch])

    const state = useSelector(state => state.getIn(['user', 'data']));
    return <div>{state}</div>
}
