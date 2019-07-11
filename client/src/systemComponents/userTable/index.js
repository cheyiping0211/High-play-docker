import React, { useState } from "react";
import TablePage from "../tablePage";
import { Button } from "antd";
import "./style.less";
import { compose } from "redux";
import gql from "graphql-tag";
import { graphql } from 'react-apollo';
import ActionsUser from "../actionsUser"
/*** 
 * setModalTitle -> 文字 create update
 * setBannerType -> api create update
 * getBanner get all->bannerList
 * removeBanner delete row->banner
 * crateBanner create row->banner
 * updateBanner update row->banner Int! id
 * setModalFlag -> 显示 true false
 * setUserId -> id -> update
 * setUserImage ->image -> update
 */

const UserTable = props => {
  const [modalFlag, setModalFlag] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [userId, setUserId] = useState('');
  const [userImage, setUserImage] = useState('');
  const [columns] = useState([
    {
      title: 'username',
      dataIndex: 'username',
      key: 'username'
    },
    {
      title: 'avatar',
      dataIndex: 'avatar',
      key: 'avatar',
      render: (text, record) => {
        if (text) {
          return <div className="userTable-image"><img src={'http://localhost:3000/images/uploads/' + text} alt="userImage" /></div>
        }
      }
    },
    {
      title: 'Actions',
      key: 'id',
      dataIndex: 'id',
      render: (text, record) => (
        <div className="userTable-actions">
          <Button type="primary" shape="circle" icon="edit" onClick={onBannerEdit.bind(this, record)} />
          <Button type="primary" shape="circle" icon="delete" onClick={onUserDelete.bind(this, text)} />
        </div>
      ),
    },
  ]);
  const { createUser,removeUser,updateUser } = props;
  const { userAll,refetch } = props.data;
  
  const onRefetchUser = () => {
    refetch();
  }

  const onBannerEdit = (item) => {
    let { id, image } = item;
    setUserId(id);
    setModalFlag(true);
    setUserImage(image);
    setModalTitle('update Banner');
  }

  const onUserDelete = async (id) => {
    if (!id) return;

    const deleteResponse = await removeUser({ variables: { id: id } });

    if (deleteResponse) {
      onRefetchUser();
    }
  }

  const onModalClose = () => {
    setModalFlag(false)
  }

  const onModalShow = (title = '') => {
    setModalFlag(true);
    setModalTitle(title);
    setUserId('');
    setUserImage('');
  }

  const userTables = () => {
    return (
      <TablePage rowKey={"id"} dataSource={userAll} columns={columns} />
    )
  }
  const onActionsFormUser = async (formData) =>{

    if (!formData)  return;
    let actionFormType = modalTitle === 'create User' ? true : false;
    //true create false update
    if (actionFormType) {
      const createResopnse = await createUser({ variables: formData });
      if (createResopnse) {
        onRefetchUser();
        onModalClose();
      }
    } else {
      formData.id = userId;
      const updateResopnse = updateUser({ variables:formData })
      if (updateResopnse) {
        onRefetchUser();
        onModalClose();
      }
    }
  }

  return (
    <div className="userTable">
      <div className="userTable-create">
        <Button type="primary" onClick={onModalShow.bind(this, 'create User')}>Create User</Button>
      </div>
      {userTables()}
      <ActionsUser actionsFormUser={onActionsFormUser} modalTitle={modalTitle} modalFlag={modalFlag} modalClose={onModalClose} userId={userId} userImage={userImage} />
    </div>
  )
}

export default compose(
  graphql(gql`
  query userAll{
    userAll{
      id
      username
      avatar
    }
  }`),
  graphql(gql`
  mutation userRemove($id: Int!) {
    userRemove(id: $id) {
      id
    }
  }`, { name: 'removeUser' }),
  graphql(gql`
  mutation userRegister($username: String!,$password: String!,$avatar: String!) {
    userRegister(username: $username,password: $password,avatar: $avatar) {
      id
    }
  }`, { name: 'createUser' }),
  graphql(gql`
  mutation userUpdate($id:Int!,$username: String!,$password: String!,$avatar: String!){
    userUpdate(id:$id,username: $username,password: $password,avatar: $avatar){
      id
    }
  }`, { name: 'updateUser' }),

)(UserTable);