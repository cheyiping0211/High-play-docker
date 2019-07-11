import React, { useState, useEffect } from 'react'
import { Form, Modal, Row, Upload, Icon, message, Input } from 'antd';
import "./style.less";

const ActionsUser = (props) => {

  const [lodding, setLodding] = useState(false);
  const [imageUrl, setImageUrl] = useState('');
  const {
    modalFlag,
    modalTitle,
    modalClose,
    userImage,
    actionsFormUser,
    form: { getFieldDecorator, validateFields }
  } = props;

  useEffect(() => {
    getuserImage();
  })

  const getuserImage = () => {
    if (userImage) {
      setImageUrl(`http://localhost:3000/images/uploads/${userImage}`);
    }
  }
  const getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    validateFields((err, values) => {
      if (!err) {
        let { username, password, avatar } = values;

        actionsFormUser({ username: username, password: password, avatar: avatar[0].response.file });
      }
    });
  }

  const beforeUpload = async file => {
    const isJPG = file.type === 'image/jpeg' || file.type === 'image/jpg';
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

  const handleCancel = () => {
    modalClose();
  }

  return (

    <Modal
      title={modalTitle}
      onOk={handleSubmit}
      onCancel={handleCancel}
      visible={modalFlag}>
      <div>

        <Form layout="vertical" >
          <Row>
            <Form.Item label="username" >
              {getFieldDecorator('username', {
                rules: [{ required: true, message: 'Please input your username!' }]
              })(
                <Input />
              )}
            </Form.Item>
          </Row>
          <Row>
            <Form.Item label="password" >
              {getFieldDecorator('password', {
                rules: [{ required: true, message: 'Please input your password!' }]
              })(
                <Input type="password" />
              )}
            </Form.Item>
          </Row>
          <Row>
            <Form.Item label="avatar" >
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
                  action="http://localhost:3000/upload"
                  beforeUpload={beforeUpload}
                  onChange={handleChange}
                >
                  {imageUrl ? <div> <img src={imageUrl} className="actions-userImage" alt="userImage" /> </div> : uploadButton}
                </Upload>
              )}
            </Form.Item>
          </Row>
        </Form>
      </div>
    </Modal>
  )
}

export default Form.create({ name: 'actionsUser_Form' })(ActionsUser);