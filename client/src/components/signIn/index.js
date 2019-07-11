import React from 'react'
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import { Form,Input,Row,Col,Button } from 'antd';

const userLoginMutation = gql`
    mutation userLogin($username: String!, $password: String!) {
      userLogin(username: $username, password: $password) {
        user {
          id
          username
        }
        token
      }
}`;

const User = (props)  => {

    const {
        form: { getFieldDecorator,validateFields }
      } = props

    const handleSubmit = async (userLogin, event) => {
        event.preventDefault();

        validateFields((err, values) => {
            if (!err) {
                let { username,password } = values;

                //Mutations -> actions ->callback success lodding error
                userLogin({ variables: { username:username,password:password} });
            }
        });
    }

    const onBack = async () => {
        window.alert('登录成功');
    }

    return (
             <Mutation mutation={userLoginMutation}>
              {(userLogin,{loading, error,data})=>{
                  return (
                      <div>
                          {loading && "lodding"}
                          {error && <p>Error :( Please try again</p>}
                          {data && onBack()}
                          <Form layout="vertical" onSubmit={handleSubmit.bind(this,userLogin)}>
                              <Row>
                                  <Col span={12}>
                                      <Form.Item label="">
                                          {
                                              getFieldDecorator('username', { rules: [{ required: true, message: 'Please input your username!' }]})
                                              (<Input type="text" placeholder="First Name" style={{width:"288px"}}/>)
                                          }
                                      </Form.Item>
                                  </Col>
                                  <Col span={12}>
                                      <Form.Item label="" >
                                          {getFieldDecorator('password',{ rules: [{ required: true, message: 'Please input your password!' }]})(<Input type="password" placeholder="Last Name" style={{width:"288px"}}/>)}
                                      </Form.Item>
                                  </Col>

                                  <Col span={12}>
                                      <Form.Item label="" >
                                            <Button type="primary" htmlType="submit">onLogin</Button>
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

export default  Form.create({ name: 'userLogin_Form' })(User);