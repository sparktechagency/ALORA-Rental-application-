import React, { useState } from 'react';
import { Form, Input, Button, message, Steps, Upload, Checkbox } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const { Step } = Steps;

const ApartmentCreateAddNew = () => {
    const [current, setCurrent] = useState(0);
    const [form] = Form.useForm();
    const [apartmentData, setApartmentData] = useState({
        name: '',
        location: '',
        description: '',
        price: '',
        facilities: [],
        images: [],
    });

    // Handle Step Change
    const next = () => {
        setCurrent(current + 1);
    };

    const prev = () => {
        setCurrent(current - 1);
    };

    // Handle Form Submit
    const onSubmit = () => {
        // Here you can handle the form data and submit it to an API or do any other action.
        console.log('Form Submitted', apartmentData);
        message.success('Apartment created successfully!');
    };

    // Handle Input Change for Each Step
    const handleInputChange = (key, value) => {
        setApartmentData((prev) => ({
            ...prev,
            [key]: value,
        }));
    };

    // Handle Image Upload
    const handleImageUpload = ({ fileList }) => {
        setApartmentData((prev) => ({
            ...prev,
            images: fileList,
        }));
    };

    // Facilities Change
    const handleFacilitiesChange = (checkedValues) => {
        setApartmentData((prev) => ({
            ...prev,
            facilities: checkedValues,
        }));
    };

    return (
        <div className="apartment-create-container" style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
            <Steps current={current} onChange={setCurrent} style={{ marginBottom: '20px' }}>
                <Step title="Apartment Info" />
                <Step title="Description & Price" />
                <Step title="Facilities" />
                <Step title="Images" />
                <Step title="Review & Submit" />
            </Steps>

            <Form form={form} layout="vertical" onFinish={onSubmit}>
                {/* Step 1: Apartment Info */}
                {current === 0 && (
                    <div>
                        <Form.Item label="Apartment Name" required>
                            <Input
                                value={apartmentData.name}
                                onChange={(e) => handleInputChange('name', e.target.value)}
                                placeholder="Enter apartment name"
                            />
                        </Form.Item>
                        <Form.Item label="Location" required>
                            <Input
                                value={apartmentData.location}
                                onChange={(e) => handleInputChange('location', e.target.value)}
                                placeholder="Enter location"
                            />
                        </Form.Item>
                    </div>
                )}

                {/* Step 2: Description & Price */}
                {current === 1 && (
                    <div>
                        <Form.Item label="Description" required>
                            <Input.TextArea
                                value={apartmentData.description}
                                onChange={(e) => handleInputChange('description', e.target.value)}
                                placeholder="Enter description of the apartment"
                                rows={4}
                            />
                        </Form.Item>
                        <Form.Item label="Price" required>
                            <Input
                                type="number"
                                value={apartmentData.price}
                                onChange={(e) => handleInputChange('price', e.target.value)}
                                placeholder="Enter price"
                            />
                        </Form.Item>
                    </div>
                )}

                {/* Step 3: Facilities */}
                {current === 2 && (
                    <div>
                        <Form.Item label="Facilities" required>
                            <Checkbox.Group
                                options={[
                                    { label: '1-3 Bedrooms', value: '1-3 Bedrooms' },
                                    { label: '4-6 Bedrooms', value: '4-6 Bedrooms' },
                                    { label: 'Parking', value: 'Parking' },
                                    { label: 'Garden', value: 'Garden' },
                                    { label: 'Balcony', value: 'Balcony' },
                                ]}
                                value={apartmentData.facilities}
                                onChange={handleFacilitiesChange}
                            />
                        </Form.Item>
                    </div>
                )}

                {/* Step 4: Image Upload */}
                {current === 3 && (
                    <div>
                        <Form.Item label="Upload Apartment Images" required>
                            <Upload
                                listType="picture-card"
                                fileList={apartmentData.images}
                                onChange={handleImageUpload}
                                action="/upload.do"
                                maxCount={5}
                            >
                                <UploadOutlined />
                                <div>Upload</div>
                            </Upload>
                        </Form.Item>
                    </div>
                )}

                {/* Step 5: Review & Submit */}
                {current === 4 && (
                    <div>
                        <h3>Review your details</h3>
                        <div>
                            <p><strong>Apartment Name:</strong> {apartmentData.name}</p>
                            <p><strong>Location:</strong> {apartmentData.location}</p>
                            <p><strong>Description:</strong> {apartmentData.description}</p>
                            <p><strong>Price:</strong> {apartmentData.price}</p>
                            <p><strong>Facilities:</strong> {apartmentData.facilities.join(', ')}</p>
                            <div>
                                <strong>Images:</strong>
                                <div style={{ display: 'flex', gap: '10px' }}>
                                    {apartmentData.images.map((file) => (
                                        <img key={file.uid} src={file.url} alt="uploaded" style={{ width: '100px', height: '100px' }} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Navigation buttons */}
                <div style={{ marginTop: '20px', textAlign: 'center' }}>
                    <Button type="default" onClick={prev} disabled={current === 0}>
                        Previous
                    </Button>
                    <Button type="primary" onClick={next} style={{ marginLeft: '10px' }}>
                        {current === 4 ? 'Submit' : 'Next'}
                    </Button>
                </div>
            </Form>
        </div>
    );
};

export default ApartmentCreateAddNew;
