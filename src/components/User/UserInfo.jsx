import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUserRequest } from '../../redux/actions/user'

export default function UserInfo() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUserRequest('abc'))
    }, [dispatch])

    const userInfo = useSelector(state => state.get('user'));
    const userName = userInfo.getIn(['data', 'name']);
    const phone = userInfo.getIn(['data', 'phone']);

    return <div>{userName} 的电话是: {phone}</div>
}
