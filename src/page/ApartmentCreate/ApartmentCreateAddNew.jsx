import React, { useState } from 'react';
import { Form, Input, Button, message, Steps, Upload, Checkbox, Select, Space, List } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const { Step } = Steps;

const ApartmentCreateAddNew = () => {
    const [current, setCurrent] = useState(0);
    const [form] = Form.useForm();
    const [apartmentData, setApartmentData] = useState({
        price: '',
        idCard: '',
        incomeTaxDoc: '',
        creditApplicationDoc: '',
        newFacility: '',
        images: [],
        facilities: [],
        name: '',
        location: '',
        description: '',
        floorType: '',
        unitPrice: '',
        unitTerms: '',
        thumbnail: null,
        unitName: '',
        units: [],
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

    // Handle File Change for Thumbnail and Images
    const handleFileChange = (info, type) => {
        if (type === 'thumbnail') {
            setApartmentData((prev) => ({
                ...prev,
                thumbnail: info.fileList[0],
            }));
        } else if (type === 'images') {
            setApartmentData((prev) => ({
                ...prev,
                images: info.fileList,
            }));
        }
    };

    // Facilities Change
    const handleFacilitiesChange = (checkedValues) => {
        setApartmentData((prev) => ({
            ...prev,
            facilities: checkedValues,
        }));
    };

    // Handle Add Facility
    const handleAddFacility = () => {
        if (apartmentData.newFacility) {
            setApartmentData((prev) => ({
                ...prev,
                facilities: [...prev.facilities, apartmentData.newFacility],
                newFacility: '', // Clear the input after adding the facility
            }));
        } else {
            message.error('Please enter a facility!');
        }
    };

    // Handle Unit Name Addition
    const handleAddUnit = () => {
        if (apartmentData.unitName) {
            setApartmentData((prev) => ({
                ...prev,
                units: [...prev.units, `${apartmentData.unitName} ${prev.units.length + 1}`],
                unitName: '', // Clear the unit name field
            }));
        } else {
            message.error('Please enter a unit name!');
        }
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
                    <div className='border border-[#39ceec] rounded-lg p-5'>
                        {/* Form Submission Fee */}
                        <Form.Item label="Form Submission Fee" required>
                            <Input
                                value={apartmentData.price}
                                onChange={(e) => handleInputChange('price', e.target.value)}
                                className='py-2'
                                placeholder="Form submission fee"
                            />
                        </Form.Item>

                        {/* Submit Income Tax Doc */}
                        <Form.Item label="Submit Income Tax Doc" required>
                            <div className="flex items-center gap-6">
                                <label className="flex cursor-pointer items-center gap-2 text-xl" htmlFor="submitIncomeTaxDocYes">
                                    <input
                                        type="radio"
                                        id="submitIncomeTaxDocYes"
                                        name="submitIncomeTaxDoc"
                                        value="yes"
                                        onChange={(e) => handleInputChange('incomeTaxDoc', e.target.value)} // Update the state
                                    />
                                    Yes
                                </label>
                                <label className="flex cursor-pointer items-center gap-2 text-xl" htmlFor="submitIncomeTaxDocNo">
                                    <input
                                        type="radio"
                                        id="submitIncomeTaxDocNo"
                                        name="submitIncomeTaxDoc"
                                        value="no"
                                        onChange={(e) => handleInputChange('incomeTaxDoc', e.target.value)} // Update the state
                                    />
                                    No
                                </label>
                            </div>
                        </Form.Item>

                        {/* Submit ID Card */}
                        <Form.Item label="Submit ID Card" required>
                            <div className="flex items-center gap-6">
                                <label className="flex cursor-pointer items-center gap-2 text-xl" htmlFor="submitIdCardYes">
                                    <input
                                        type="radio"
                                        id="submitIdCardYes"
                                        name="submitIdCard"
                                        value="yes"
                                        onChange={(e) => handleInputChange('idCard', e.target.value)} // Update the state
                                    />
                                    Yes
                                </label>
                                <label className="flex cursor-pointer items-center gap-2 text-xl" htmlFor="submitIdCardNo">
                                    <input
                                        type="radio"
                                        id="submitIdCardNo"
                                        name="submitIdCard"
                                        value="no"
                                        onChange={(e) => handleInputChange('idCard', e.target.value)} // Update the state
                                    />
                                    No
                                </label>
                            </div>
                        </Form.Item>

                        {/* Submit Credit Application Doc */}
                        <Form.Item label="Submit Credit Application Doc" required>
                            <div className="flex items-center gap-6">
                                <label className="flex cursor-pointer items-center gap-2 text-xl" htmlFor="submitCreditApplicationDocYes">
                                    <input
                                        type="radio"
                                        id="submitCreditApplicationDocYes"
                                        name="submitCreditApplicationDoc"
                                        value="yes"
                                        onChange={(e) => handleInputChange('creditApplicationDoc', e.target.value)} // Update the state
                                    />
                                    Yes
                                </label>
                                <label className="flex cursor-pointer items-center gap-2 text-xl" htmlFor="submitCreditApplicationDocNo">
                                    <input
                                        type="radio"
                                        id="submitCreditApplicationDocNo"
                                        name="submitCreditApplicationDoc"
                                        value="no"
                                        onChange={(e) => handleInputChange('creditApplicationDoc', e.target.value)} // Update the state
                                    />
                                    No
                                </label>
                            </div>
                        </Form.Item>
                    </div>
                )}

                {/* Step 2: Description & Price */}
                {current === 1 && (
                    <div className='border border-[#39ceec] rounded-lg p-5'>
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

                        <Form.Item label="Apartment Description" required>
                            <Input.TextArea
                                value={apartmentData.description}
                                onChange={(e) => handleInputChange('description', e.target.value)}
                                rows={4}
                                placeholder="Enter description of the apartment"
                            />
                        </Form.Item>

                        <Form.Item label="Unit Price" required>
                            <Input
                                value={apartmentData.unitPrice}
                                onChange={(e) => handleInputChange('unitPrice', e.target.value)}
                                placeholder="Enter unit price"
                                type="number"
                            />
                        </Form.Item>

                        <Form.Item label="Unit Terms" required>
                            <Select
                                value={apartmentData.unitTerms}
                                onChange={(value) => handleInputChange('unitTerms', value)}
                                placeholder="Select unit terms"
                            >
                                <Select.Option value="rent">Rent</Select.Option>
                                <Select.Option value="sale">Sale</Select.Option>
                            </Select>
                        </Form.Item>

                        <Form.Item label="Floor Type" required>
                            <Input
                                value={apartmentData.floorType}
                                onChange={(e) => handleInputChange('floorType', e.target.value)}
                                placeholder="Enter floor type (e.g., 1st floor)"
                            />
                        </Form.Item>
                    </div>
                )}

                {/* Step 3: Facilities */}
                {current === 2 && (
                    <div>
                        <Form.Item label="Facilities" required>
                            <Checkbox.Group
                                options={['1 Kitchen room', '1 Bedroom', '1 Living room']}
                                value={apartmentData.facilities}
                                onChange={handleFacilitiesChange}
                            />
                        </Form.Item>
                    </div>
                )}

                {/* Step 4: Images */}
                {current === 3 && (
                    <div className='border border-[#39ceec] rounded-lg p-5'>
                        <Form.Item label="Upload Thumbnail" required>
                            <Upload
                                fileList={apartmentData.thumbnail ? [apartmentData.thumbnail] : []}
                                beforeUpload={() => false}
                                onChange={(info) => handleFileChange(info, 'thumbnail')}
                                maxCount={1}
                                showUploadList={{ showRemoveIcon: true }}
                            >
                                <Button icon={<UploadOutlined />}>Upload Thumbnail</Button>
                            </Upload>
                            <p>File format: .jpeg, .png & Max file size: 25 MB</p>
                        </Form.Item>

                        <Form.Item label="Upload Apartment Images" required>
                            <Upload
                                fileList={apartmentData.images}
                                beforeUpload={() => false}
                                onChange={(info) => handleFileChange(info, 'images')}
                                maxCount={5}
                                showUploadList={{ showRemoveIcon: true }}
                                accept=".jpg,.jpeg,.png"
                            >
                                <Button icon={<UploadOutlined />}>Upload Apartment Images</Button>
                            </Upload>
                            <p>File format: .jpeg, .png & Max file size: 25 MB</p>
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
                            <p><strong>Price:</strong> {apartmentData.unitPrice}</p>
                            <p><strong>Facilities:</strong> {apartmentData.facilities.join(', ')}</p>
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
