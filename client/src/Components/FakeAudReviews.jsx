import React from 'react';
import styled from 'styled-components';
import SinglePost from './SinglePost.jsx';

var AudReviewList = (props) => {
  return (
    <>
      {props.someReviews.map((review) =>
        <SinglePost item={review}/>
      )}
    </>
  )
}

export default AudReviewList;