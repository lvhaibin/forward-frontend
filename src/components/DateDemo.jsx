import React, { useState, useEffect } from 'react';
import { DatePicker, message, Button } from 'antd';
import Test from './Test';

export default function DateDemo() {
    const [date, setDate] = useState(null);
    const [visible, setVisible] = useState(true);
    const handleChange = value => {
        message.info(`您选择的日期是: ${value ? value.format('YYYY年MM月DD日') : '未选择'}`);
        setDate(value);
    };

    useEffect(() => {
        return () => {
            console.log('可卸载 DateDemo');
        }
    }, [])

    return (
        <div className="color">
            {console.log('render DateDemo ::::')}
            { visible ? <Test /> : null }
            <Button onClick={() => { setVisible(!visible) }}>DateDemo</Button>
            <DatePicker onChange={handleChange} />
            <div>当前日期：{date ? date.format('YYYY年MM月DD日') : '未选择'}</div>
        </div>
    );
}