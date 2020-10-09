import React, { useState, useEffect } from 'react';
import { Table, Button, Modal, DatePicker, Form, Input, message} from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { fetchGenerateRequest, postCreateRequest } from '@actions/generate'
import './index.less';

export default function GenerateLink() {
    const dispatch = useDispatch();
    const [visible, setVisible] = useState(false);
    const [current, setCurrent] = useState(1);
    const [pageSize] = useState(10);
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

    useEffect(() => {
        loadData(current, pageSize)
    }, [dispatch, current, pageSize])


    const loadData = (page, size) => {
        dispatch(fetchGenerateRequest({page, size}));
    }

    const openModal = () => {
        setVisible(true);
    }

    const OperatetHeader = () => {
        return <Button type="primary" onClick={openModal}>生成链接</Button>
    }

    const handleOk = () => {
        form.validateFields().then((values) => {
            dispatch(postCreateRequest(values))
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
    }

    const generate = useSelector(state => state.get('generate'));
    const count = generate.getIn(['data', 'count']);
    const list = generate.getIn(['data', 'list']);

    return (
        <div className="panel">
            <Table
                rowKey="id"
                dataSource={list ? list.toJS() : []}
                columns={columns}
                title={() => <OperatetHeader />}
                pagination={{current, pageSize, total: count}}
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
