import React, {useEffect, useState} from 'react';

import moment from 'moment';
import {connect, useDispatch, useSelector} from "react-redux";
import {Button, DatePicker, Form, Input} from "antd";
import {addInterview} from "../../actions/interview.action";
import {Interview} from "../../shared/models/interview";
import {RouteComponentProps} from "react-router-dom";

type SizeType = Parameters<typeof Form>[0]['size'];

const validateMessages = {
    required: '${label} is required!',
}

const AddInterview = (props: RouteComponentProps) => {

    const userNameState = useSelector((state:any)=>state?.user)
    console.log('userNameState:', userNameState);

    const [interview, setInterview] = useState({
        appointment: new Date(),
        candidate: '',
        scheduler:'',
        phone: '',
        email: '',
        comments: '',
        resume:'',
        status: 'pending',
    })

    console.log('new Date()', new Date());

    const onFinish = (values:any) =>{
        console.log("onfinish values", values);
        setInterview(values);
        console.log('interview:', interview);
    }

    const dispatch = useDispatch();

    useEffect(()=>{
        const task = async ()=> {
            if(interview?.candidate)
                await dispatch(addInterview(interview))
        }
        task();
    }, [interview.candidate])

    function onChange(value:any, dateString:string) {
        console.log('Selected Time: ', value);
        console.log('Formatted Selected Time: ', dateString);
        interview.appointment = value;
    }

    function onOk(value:any) {
        console.log('onOk: ', value);
    }

    const [componentSize, setComponentSize] = useState<SizeType | 'default'>('default');
    const onFormLayoutChange = ({ size }: { size: SizeType }) => {
        setComponentSize(size);
    };

    const disableDate = (current: any) => {
        return current && current < moment().endOf('day');
    };

    const validateMessages = {
        required: '${label} is required!',
        types: {
            email: '${label} is not a valid email!',
            number: '${label} is not a valid number!',
        },
        number: {
            range: '${label} must be between ${min} and ${max}',
        },
    };

    return (
        <>
            <h2>Add New Interview</h2>
            <Form
                name="add-new-interview"
                labelCol={{ span: 4 }}
                wrapperCol={{ span: 14 }}
                layout="horizontal"
                initialValues={{ size: componentSize }}
                onValuesChange={onFormLayoutChange}
                size={componentSize as SizeType}
                validateMessages={validateMessages}
                onFinish={onFinish}
            >
                <Form.Item name="appointment" label="Time" rules={[{ required: true }]}>
                    <DatePicker
                        showTime
                        onChange={onChange}
                        onOk={onOk}
                        disabledDate={disableDate}
                        format="yyyy-MM-DD HH:mm"
                    />
                </Form.Item>
                <Form.Item name="candidate" label="Candidate" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item  name="scheduler" label="Scheduler">
                    <Input defaultValue={userNameState?.user?.user?.username} readOnly={true}/>
                </Form.Item>
                <Form.Item name="phone" label="Phone" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item name="email" label="Email" rules={[{ type: 'email' }]}>
                    <Input />
                </Form.Item>
                <Form.Item name="comments" label="Comments">
                    <Input />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">Add</Button><Button onClick={()=>props.history.push('/appointments')}>Cancel</Button>
                </Form.Item>
            </Form>
        </>
    );
};

export default connect()(AddInterview);