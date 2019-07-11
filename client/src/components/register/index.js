import React, { useState } from 'react'
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import { Form, Input, Row, Col, Button, Upload, Icon, message } from 'antd';

const userRegisterMutation = gql`
mutation userRegister($username: String!, $password: String!,$avatar:String!) {
    userRegister(username: $username, password: $password,avatar:$avatar) {
      username
      password
      avatar
    }
  }`

const Register = (props) => {

  const [lodding, setLodding] = useState(false);
  const [imageUrl, setImageUrl] = useState('');
  const {
    form: { getFieldDecorator, validateFields }
  } = props;



  const getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
  }

  const handleSubmit = (userRegister, event) => {
    event.preventDefault();
    validateFields((err, values) => {
      if (!err) {
        let { username, password, avatar } = values;

        //Mutations -> actions ->callback success lodding error
        userRegister({ variables: { username: username, password: password, avatar: avatar[0].response.file } });
      }
    });
  }

  const beforeUpload = async file => {
    const isJPG = file.type === 'image/jpeg';
    if (!isJPG) {
      message.error('You can only upload JPG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('Image must smaller than 2MB!');
    }
    return isJPG && isLt2M;
  };

  const handleChange = async (info) => {
    console.log(info);
    if (info.file.status === 'uploading') {
      setLodding(true);
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, imageUrl =>
        setImageUrl(imageUrl),
        setLodding(false),
      );
    }
  }

  const uploadButton = (
    <div>
      <Icon type="plus" />
      <div className="ant-upload-text">Upload</div>
    </div>
  );

  const normFile = (e) => {

    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  }

  return (
    <Mutation mutation={userRegisterMutation}>
      {(userRegister, { loading, error, data }) => {
        return (
          <div>
            {loading && "lodding"}
            {error && <p>Error :( Please try again</p>}
            <Form layout="vertical" onSubmit={handleSubmit.bind(this, userRegister)}>
              <Row>
                <Col span={12}>
                  <Form.Item label="">
                    {
                      getFieldDecorator('username', { rules: [{ required: true, message: 'Please input your username!' }] })
                        (<Input type="text" placeholder="First Name" style={{ width: "288px" }} />)
                    }
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item label="" >
                    {getFieldDecorator('password', { rules: [{ required: true, message: 'Please input your password!' }] })(<Input type="password" placeholder="Last Name" style={{ width: "288px" }} />)}
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item label="" >
                    {getFieldDecorator('avatar', {
                      valuePropName: 'fileList',
                      getValueFromEvent: normFile,
                      rules: [{ required: true, message: 'Please input your avatar!' }]
                    })(
                      <Upload
                        name="file"
                        listType="picture-card"
                        className="avatar-uploader"
                        showUploadList={false}
                        action="http://localhost:4000/upload"
                        beforeUpload={beforeUpload}
                        onChange={handleChange}
                      >
                        {imageUrl ? <img src={imageUrl} alt="avatar" /> : uploadButton}
                      </Upload>
                    )}
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item label="" >
                    <Button type="primary" htmlType="submit">Register</Button>
                  </Form.Item>
                </Col>
              </Row>
            </Form>
          </div>
        )
      }}
    </Mutation>
  )
}

export default Form.create({ name: 'userRegister_Form' })(Register);