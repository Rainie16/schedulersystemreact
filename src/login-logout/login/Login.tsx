import {connect, useDispatch, useSelector} from "react-redux";
import "./Login.scss"
import {useEffect, useState} from "react";
import {checkLogin, login} from "../../actions/auth.action";
import {Button, Form, Input} from "antd";
import { UserOutlined, LockOutlined } from '@ant-design/icons';

const Login = () => {

    const userState = useSelector((state:any)=>state?.user);

    const [user, setUser] = useState({
        username:'',
        password:'',
    });
    
    const onFinish = (values: any) => {
        console.log('Received values of form: ', values);
        setUser(values);
    };


    useEffect(()=>{
       dispatch(login(user));
    }, [user])

    useEffect(() => {
        const task = async() =>{
            if(userState?.isLogin){
                await dispatch1(checkLogin());
            }
        }
        task();

    },[userState?.isLogin])

    const dispatch = useDispatch();
    const dispatch1 = useDispatch();

    // const clickHandler = () => {
    // }

    return (
        <Form
            name="normal_login"
            className="login-form"
            initialValues={{ remember: true }}
            onFinish={onFinish}
        >
            <Form.Item
                name="username"
                rules={[{ required: true, message: 'Please input your Username!' }]}
            >
                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
            </Form.Item>
            <Form.Item
                name="password"
                rules={[{ required: true, message: 'Please input your Password!' }]}
            >
                <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Password"
                />
            </Form.Item>
            {/*<Form.Item>*/}
            {/*    <Form.Item name="remember" valuePropName="checked" noStyle>*/}
            {/*        <Checkbox>Remember me</Checkbox>*/}
            {/*    </Form.Item>*/}

            {/*    <a className="login-form-forgot" href="">*/}
            {/*        Forgot password*/}
            {/*    </a>*/}
            {/*</Form.Item>*/}

            <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button">
                    Log in
                </Button>
                {/*Or <a href="">register now!</a>*/}
            </Form.Item>
        </Form>
    );
};

export default connect()(Login);