import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUserRequest } from '@actions/user'
import cookies from '@utils/cookies';


export default function UserInfo() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUserRequest(cookies.get('uname')));
    }, [dispatch])

    const userInfo = useSelector(state => state.get('user'));
    const userName = userInfo.getIn(['data', 'name']);
    const phone = userInfo.getIn(['data', 'phone']);

    return <div>{userName} 的电话是: {phone}</div>
}
