import React, { useState, useEffect } from 'react';
import { Table, Button, Modal, DatePicker, Form, Input, message} from 'antd';
import { createExhibition, exhibitionList } from '@request/exhibition';

import './index.less';

export default function GenerateLink() {
    const [visible, setVisible] = useState(false);
    const [current, setCurrent] = useState(1);
    const [pageSize] = useState(10);
    const [data, setData] = useState([]);
    const [total, setTotal] = useState(10);
    const [form] = Form.useForm();

    const columns = [
        {
            title: '展会名称',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: '展会时间',
            dataIndex: 'time',
            key: 'time',
        },
        {
            title: '展会地址',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: '邀请码',
            dataIndex: 'inviteCode',
            key: 'inviteCode',
        },
        {
            title: '创建时间',
            dataIndex: 'created_at',
            key: 'created_at',
        },
    ];

    const loadData = (page, size) => {
        exhibitionList(page, size).then((res) => {
            setTotal(res.count)
            setData(res.list)
        })
    }

    useEffect(() => {
        loadData(current, pageSize);
    },[])

    const openModal = () => {
        setVisible(true);
    }

    const OperatetHeader = () => {
        return <Button type="primary" onClick={openModal}>生成链接</Button>
    }

    const handleOk = () => {
        form.validateFields().then((values) => {
            const { time, name, address } = values;
            createExhibition({ name, address, time: time.format('YYYY/MM/DD') }).then((res)=> {
                message.success({
                    content: '生成成功'
                })
            }).catch(() => {

            })
        }).catch(() => {
            message.warning('请重新检查表单！')
        })
        setVisible(false);
    }

    const handleCancel = () => {
        setVisible(false);
    }

    const tableOnChange = (pagination) => {
        setCurrent(pagination.current);
        loadData(pagination.current, pagination.pageSize);
    }

    return (
        <div className="panel">
            <Table
                rowKey="id"
                dataSource={data}
                columns={columns}
                title={() => <OperatetHeader />}
                pagination={{current, pageSize, total: 20}}
                onChange={tableOnChange}
            />
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
