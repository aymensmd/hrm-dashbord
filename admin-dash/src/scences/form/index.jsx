import React, { useState } from 'react';
import { Button, DatePicker, Form, Input, Radio } from 'antd';
import { useTheme } from '@mui/system';

const { TextArea } = Input;

const normFile = (e) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};

const EmployeeForm = () => {
  const [componentDisabled, setComponentDisabled] = useState(true);
  const theme = useTheme(); // Use the useTheme hook from @mui/system

  const onFinish = (values) => {
    console.log('Received values:', values);
  };

  return (
    <Form
      labelCol={{
        span: 4,
      }}
      wrapperCol={{
        span: 14,
      }}
      layout="horizontal"
      onFinish={onFinish}
      initialValues={{
        dateNaissance: null,
        // ... other initial values
      }}
    >
      {/* Personal Information */}
      <Form.Item
        label={<span style={{ color: theme.palette.text.primary }}>Nom</span>}
        name="nom"
        rules={[{ required: true, message: 'Please enter your last name!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label={<span style={{ color: theme.palette.text.primary }}>Prénom</span>}
        name="prenom"
        rules={[{ required: true, message: 'Please enter your first name!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label={<span style={{ color: theme.palette.text.primary }}>Date de naissance</span>}
        name="dateNaissance"
        rules={[{ required: true, message: 'Please select the date of birth!' }]}
      >
        <DatePicker style={{ width: '100%' }} />
      </Form.Item>
      <Form.Item
        label={<span style={{ color: theme.palette.text.primary }}>Sexe</span>}
        name="sexe"
        rules={[{ required: true, message: 'Please select your gender!' }]}
      >
        <Radio.Group >
          <Radio style={{ color: theme.palette.text.primary  }} value="male">Male</Radio>
          <Radio style={{ color: theme.palette.text.primary  }} value="female">Female</Radio>
        </Radio.Group>
      </Form.Item>
      {/* ... Other personal information fields ... */}

      {/* Professional Information */}
      <Form.Item
        label={<span style={{ color: theme.palette.text.primary }}>Fonction</span>}
        name="fonction"
        rules={[{ required: true, message: 'Please enter your position!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label={<span style={{ color: theme.palette.text.primary }}>Département</span>}
        name="departement"
        rules={[{ required: true, message: 'Please enter your department!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label={<span style={{ color: theme.palette.text.primary }}>Date d'embauche</span>}
        name="dateEmbauche"
        rules={[{ required: true, message: 'Please select the date of hire!' }]}
      >
        <DatePicker style={{ width: '100%' }} />
      </Form.Item>
      {/* ... Other professional information fields ... */}

      {/* Contact Information */}
      <Form.Item
        label={<span style={{ color: theme.palette.text.primary }}>Numéro de téléphone</span>}
        name="telephone"
        rules={[{ required: true, message: 'Please enter your phone number!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label={<span style={{ color: theme.palette.text.primary }}>Adresse e-mail</span>}
        name="email"
        rules={[
          { required: true, type: 'email', message: 'Please enter a valid email address!' },
        ]}
      >
        <Input />
      </Form.Item>
      {/* ... Other contact information fields ... */}

      <Form.Item wrapperCol={{ offset: 4, span: 14 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default EmployeeForm;
