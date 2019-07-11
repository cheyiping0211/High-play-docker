import React, { useState } from "react";
import TablePage from "../tablePage";
import { Button } from "antd";
import "./style.less";
import { Query, Mutation } from "react-apollo";
import gql from "graphql-tag";
import ActionsBanner from "../actionsBanner";
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
 */

const getMusic = gql`
query musicAll{
  musicAll{
    id
    link
    artist
    name
    image
  }
}`

const removeBanner = gql`
mutation bannerRemove($id: Int!) {
  bannerRemove(id: $id) {
    image
  }
}`

const createBanner = gql`
mutation bannerCreate($image: String!) {
  bannerCreate(image: $image) {
    image
  }
}`

const updateBanner = gql`
mutation bannerUpdate($id:Int!,$image:String!){
  bannerUpdate(id:$id,image:$image){
    id
  }
}`

const MusicTable = props => {
  const [modalFlag, setModalFlag] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [bannerId, setBannerId] = useState('');
  const [bannerImage, setBannerImage] = useState('');
  const [bannerType, setBannerType] = useState(createBanner);
  const [columns] = useState([
    {
      title: 'link',
      dataIndex: 'link',
      key: 'link',
     
    },
    {
      title: 'artist',
      dataIndex: 'artist',
      key: 'artist',
    },
    {
      title: 'name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'image',
      dataIndex: 'image',
      key: 'image',
      render: (text, record) => {
        if (text) {
          return <div className="musicTable-image"><img src={text} alt="musicImage" /></div>
        }
      }
    },
    {
      title: 'Actions',
      key: 'id',
      dataIndex: 'id',
      render: (text, record) => (
        <div className="musicTable-actions">
          <Mutation mutation={removeBanner}>
            {(removeBanner, { loading, error, data }) => {
              return (
                <div>
                  <Button type="primary" shape="circle" icon="edit" onClick={onBannerEdit.bind(this, record)} />
                  <Button type="primary" shape="circle" icon="delete" onClick={onBannerDelete.bind(this, text, removeBanner)} />
                </div>
              )
            }}
          </Mutation>
        </div>
      ),
    },
  ])

  const onBannerEdit = (item) => {
    let { id, image } = item;
    setBannerId(id);
    setBannerType(updateBanner);
    setModalFlag(true);
    setBannerImage(image);
    setModalTitle('update Banner');
  }

  const onBannerDelete = (id, removeBanner) => {
    removeBanner({ variables: { id: id } });
  }

  const onModalClose = () => {
    setModalFlag(false)
  }

  const onModalShow = (title = '') => {
    setModalFlag(true);
    setModalTitle(title);
    setBannerId('');
    setBannerImage('');
    setBannerType(createBanner);
  }

  return (
    <div className="musicTable">
      <div className="musicTable-create">
        <Button type="primary" onClick={onModalShow.bind(this, 'create Banner')}>Create Banner</Button>
      </div>
      <Query query={getMusic}>
        {({ loading, error, data }) => {
          if (error) { return <div> Data Fetch Error: <pre>{error.message}</pre></div> }

          if (loading) { return <div>lodding</div> }
          let { musicAll } = data;
          return (
            <TablePage rowKey={"id"} dataSource={musicAll} columns={columns} />
          )
        }}
      </Query>
      <ActionsBanner bannerType={bannerType} modalTitle={modalTitle} modalFlag={modalFlag} modalClose={onModalClose} bannerId={bannerId} bannerImage={bannerImage} />
    </div>
  )
}

export default MusicTable;