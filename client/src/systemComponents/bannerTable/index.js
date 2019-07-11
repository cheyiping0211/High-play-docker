import React, { useState } from "react";
import TablePage from "../tablePage";
import { Button } from "antd";
import "./style.less";
import { compose } from "redux";
import gql from "graphql-tag";
import { graphql } from 'react-apollo';
import ActionsBanner from "../actionsBanner";
import Input from "../Searchinput/input"
/*** 
 * setModalTitle -> 文字 create update
 * setBannerType -> api create update
 * getBanner get all->bannerList
 * removeBanner delete row->banner
 * crateBanner create row->banner
 * updateBanner update row->banner Int! id
 * setModalFlag -> 显示 true false
 * setbannerId -> id -> update
 * setbannerImage ->image -> update
 * refetch　-> 操作Api 后　刷新数据
 */

const BannerTable = props => {
  const [modalFlag, setModalFlag] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [bannerId, setBannerId] = useState('');
  const [bannerImage, setBannerImage] = useState('');
  const [columns] = useState([
    {
      title: 'image',
      dataIndex: 'image',
      key: 'image',
      render: (text, record) => {
        if (text) {
          return <div className="bannerTable-image"><img src={'http://localhost:3000/images/uploads/' + text} alt="bannerImage" /></div>
        }
      }
    },
    {
      title: 'Actions',
      key: 'id',
      dataIndex: 'id',
      render: (text, record) => (
        <div className="bannerTable-actions">
          <Button type="primary" shape="circle" icon="edit" onClick={onBannerEdit.bind(this, record)} />
          <Button type="primary" shape="circle" icon="delete" onClick={onBannerDelete.bind(this, text)} />
        </div>
      ),
    },
  ]);
  const { removeBanner, createBanner, updateBanner } = props;
  //props data 界沟赋值
  const { bannerAll, refetch, startPolling } = props.data;

  const onRefetchBanner = () => {
    refetch();
  }

  const onModalShow = (title = '') => {
    setModalFlag(true);
    setModalTitle(title);
    setBannerId(false);
    setBannerImage(false);
  }

  const onBannerEdit = (item) => {
    let { id, image } = item;
    setBannerId(id);
    setModalFlag(true);
    setBannerImage(image);
    setModalTitle('update Banner');
  }

  const onBannerDelete = async (id) => {
    if (!id) return;

    const deleteResponse = await removeBanner({ variables: { id: id } });

    if (deleteResponse) {
      onRefetchBanner();
    }
  }

  const onModalClose = () => {
    setModalFlag(false)
  }

  const onActionsFormBanner = async (image) => {
    if (!image) return;
    let actionFormType = modalTitle === 'create Banner' ? true : false;
    //true create false update
    if (actionFormType) {
      const createResopnse = await createBanner({ variables: { image: image } });
      if (createResopnse) {
        onRefetchBanner();
        onModalClose();
      }
    } else {
      const updateResopnse = updateBanner({ variables: { id: bannerId, image: image } })
      if (updateResopnse) {
        onRefetchBanner();
        onModalClose();
      }
    }
  }

  return (
    <div className="bannerTable">
        <Input propsData={{type:['type1','type2'],user:[{name:'sss'},{name:'sss2'}]}}/>
    </div>
  )
}

export default compose(
  graphql(gql`
    query bannerAll{
      bannerAll{
        image
        id
      }
  }`),
  graphql(gql`
  mutation bannerRemove($id: Int!) {
    bannerRemove(id: $id) {
      image
    }
  }`, { name: 'removeBanner' }),
  graphql(gql`
  mutation bannerCreate($image: String!) {
    bannerCreate(image: $image) {
      image
    }
  }`, { name: 'createBanner' }),
  graphql(gql`
  mutation bannerUpdate($id:Int!,$image:String!){
    bannerUpdate(id:$id,image:$image){
      id
    }
  }`, { name: 'updateBanner' }),

)(BannerTable);
