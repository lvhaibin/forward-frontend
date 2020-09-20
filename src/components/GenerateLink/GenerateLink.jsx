import React, { useState } from 'react';
import { Table, Button, Modal, DatePicker, Form, Input, message } from 'antd';
import { createExhibition } from '@request/exhibition';

import './index.less';

export default function GenerateLink() {
    const [visible, SetVisible] = useState(false);
    const [form] = Form.useForm();

    const dataSource = [
        {
            key: 'name',
            name: '展会名称',
            age: 32,
            address: '西湖区湖底公园1号',
        },
        {
            key: '2',
            name: '胡彦祖',
            age: 42,
            address: '西湖区湖底公园1号',
        },
    ];

    const columns = [
        {
            title: '展会名称',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: '展会时间',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: '展会地址',
            dataIndex: 'address',
            key: 'address',
        },
    ];

    const openModal = () => {
        SetVisible(true);
    }

    const OperatetHeader = () => {
        return <Button type="primary" onClick={openModal}>生成链接</Button>
    }

    const handleOk = () => {
        form.validateFields().then((values) => {
            const { time, name, address } = values;
            createExhibition({ name, address, time: time.format('YYYY/MM/DD') }).then((res)=> {
                console.log(res);
                message.success({
                    content: '生成成功'
                })
            }).catch(() => {

            })
            

            console.log(values, ' ====>', time.format('YYYY/MM/DD') )
        }).catch(() => {
            message.warning('请重新检查表单！')
        })
        // SetVisible(false);
    }

    const handleCancel = () => {
        SetVisible(false);
    }

    return (
        <div className="panel">
            <Table dataSource={dataSource} columns={columns} title={() => <OperatetHeader /> } />
            <Modal
                title="生成展会链接"
                visible={visible}
                onOk={handleOk}
                onCancel={handleCancel}
            >
                <Form form={form} name="basic">
                    <Form.Item
                        label="展会名称"
                        name="name"
                        rules={[
                            {
                                required: true,
                                message: '请输入展会名称！',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="展会地址"
                        name="address"
                        rules={[
                            {
                                required: true,
                                message: '请输入展会详细地址！',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="开始时间"
                        name="time"
                        rules={[
                            {
                                required: true,
                                message: '请选择时间!',
                            },
                        ]}
                    >
                        <DatePicker format="YYYY/MM/DD" />
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    );
}
