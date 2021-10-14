import React, { useState, useEffect } from "react";
import {BlogList} from './Constant';
import "./App.css";

function BlogDetail(props) {

 const [blogDetail, setBlogDetail] = useState({});

 useEffect(() => {
   const blogID = parseInt(props.match.params.blogid);
   const index = BlogList.findIndex((blog) => blog.blogID === blogID);
   if (index !== -1){
     setBlogDetail(BlogList[index])
   }
 }, []);

  return (
   <div className="container mt-5">
     <div className="row">
       <div className="card">
         {
           Object.keys(blogDetail).length > 0 && <>
           <p>{`#${blogDetail.blogID}`}</p>
           <p>{blogDetail.blogName}</p>
           <p>{blogDetail.blogDetail}</p>
           <p>{blogDetail.blogURL}</p>
           </>
         }
         {
           Object.keys(blogDetail).length === 0 &&
           <p>We're sorry, Cound't find Blog</p>
         }
       </div>
     </div>
   </div>
 );
}

export default BlogDetail;