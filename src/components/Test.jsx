import React, { useState, useEffect } from 'react';
import { Button } from 'antd';

export default function Test() {
    const [hidden, setHidden] = useState(true);

    useEffect(() => {
        return () => {
            console.log('可卸载:: Test')
        }
    })

    
    return (
        <div>test 挂载</div>
    );
}