import React from 'react';
import { useHistory } from "react-router-dom";
import { Form, Input, Button, Checkbox } from 'antd';
import { login } from '../../request/user';

const layout = {
    labelCol: {
        span: 4,
    },
    wrapperCol: {
        span: 16,
    },
};
const tailLayout = {
    wrapperCol: {
        offset: 4,
        span: 16,
    },
};

export default function Login() {
    const history = useHistory();
    const onFinish = values => {
        login(values).then((res) => {
            if (res.status === 200 && res.data.code === 0) {
                history.push('/');
            }
        })
    };

    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div className="login">
            <Form
                {...layout}
                name="basic"
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <Form.Item
                    label="用户名"
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: '请输入您的用户名!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="密码"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: '请输入您的密码!',
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                    <Checkbox>记住我</Checkbox>
                </Form.Item>

                <Form.Item {...tailLayout}>
                    <Button type="primary" className="submit-btn" htmlType="submit">
                        登录
                    </Button>
                </Form.Item>
            </Form>
        </div>

    );
}