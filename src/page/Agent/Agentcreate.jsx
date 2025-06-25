import React, { useState } from 'react';
import { Form, Input, Button, message } from 'antd';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const Agentcreate = () => {
    const [form] = Form.useForm();

    const onFinish = (values) => {
        console.log('Form Values: ', values);
        message.success('Account Created Successfully!');
    };

    return (
        <div className="agent-create-container max-w-xl p-5"  >
            <Link to="/agent" className="flex items-center gap-3 text-2xl font-semibold mb-4"><FaArrowLeft className='text-2xl' /> Create Agent Account</Link>

            <Form
                form={form}
                name="create_agent"
                onFinish={onFinish}
                className='border-2 border-[#39ceec] rounded-lg p-5 bg-white shadow-md'
                layout="vertical"
                initialValues={{
                    remember: true,
                }}
            >
                {/* Agent Name */}
                <Form.Item
                    label="Agent Name"
                    name="agentName"

                    rules={[
                        {
                            required: true,
                            message: 'Please input your Agent Name!',
                        },
                    ]}
                >
                    <Input className='py-3' placeholder="Enter Agent Name" />
                </Form.Item>

                {/* User Email */}
                <Form.Item
                    label="User Email"
                    name="email"
                    rules={[
                        {
                            required: true,
                            type: 'email',
                            message: 'Please input a valid email address!',
                        },
                    ]}
                >
                    <Input className='py-3' placeholder="Enter Email" />
                </Form.Item>

                {/* Phone Number */}
                <Form.Item
                    label="Phone Number"
                    name="phoneNumber"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Phone Number!',
                        },
                    ]}
                >
                    <Input className='py-3' placeholder="Enter Phone Number" />
                </Form.Item>

                {/* Password */}
                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Password!',
                        },
                    ]}
                    hasFeedback
                >
                    <Input.Password className='py-3' placeholder="Enter Password" />
                </Form.Item>

                {/* Confirm Password */}
                <Form.Item
                    label="Confirm Password"
                    name="confirm"
                    dependencies={['password']}
                    rules={[
                        {
                            required: true,
                            message: 'Please confirm your password!',
                        },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                                if (!value || getFieldValue('password') === value) {
                                    return Promise.resolve();
                                }
                                return Promise.reject('The two passwords that you entered do not match!');
                            },
                        }),
                    ]}
                    hasFeedback
                >
                    <Input.Password className='py-3' placeholder="Confirm Password" />
                </Form.Item>

                {/* Create Account Button */}
                <Form.Item>
                    <button className='bg-[#2cb5eb] py-3 text-base px-10 text-white rounded-md' htmlType="submit" block>
                        Create Account
                    </button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default Agentcreate;
