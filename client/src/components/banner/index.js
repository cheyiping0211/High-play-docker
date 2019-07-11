import React, { useState } from "react";
import { Carousel } from 'antd';
import { Query } from "react-apollo";
import gql from "graphql-tag";
import "./style.less"
/*** 
 *　gql ->get Home Banner Data 
*/
const getBanner = gql`
query bannerAll{
  bannerAll{
    image
  }
}`

const Banner = props => {

    return (
        <div  className="banner">
        <Query query={getBanner}>
        {({ loading, error, data }) => {
          if (error) {
            return <div> Data Fetch Error: <pre>{error.message}</pre></div> }

          if (loading) {
          return <div>lodding</div> }

          let {bannerAll} = data;

          return (
               <Carousel
                  autoplay={true}>
                   {
                     bannerAll.map((item,index)=>{
                     return  <a className="banner-image" herf="javascript:void(0)" key={index}><img src={`http://localhost:3000/images/uploads/${item.image}`} alt="banenrImage"/> </a>
                     })
                   }
               </Carousel>
                    )
             }}
            </Query>
         </div>
       )};

export default Banner;