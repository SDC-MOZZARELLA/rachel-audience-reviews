import React from 'react';



var AudReviewList = (props) => {
  // star element
  var rating = function(element) {
    var stars = [];
    for (var i = 0; i < 5; i++) {
      if (i < element.reviewRating) {
          stars.push(<span className="fa fa-star checked"></span>)
      } else {
          stars.push(<span className="fa fa-star"></span>)
      }
    }
    return stars;
  }

  return (
  <div className="recentReviews">
    <h3 className="reviewLabel">Audience Reviews</h3>
    <div className="recentList">
      {props.list.map((review) =>
        <div className="singleReview">
          <div className="rateAndDate">
            <div className="sRStars">
              {rating(review).map((star) => star)}
            </div>
            <div className="sRDate">{review.reviewDate}</div>
          </div>
          <div className="sRText">{review.reviewText}</div>
          <span className="iconAndName"><img src="https://krillin-audience-reviews.s3.us-west-1.amazonaws.com/AR_avatar.gif"></img>
          <span className="SRUser">{review.reviewerName}</span>
          </span>
        </div>
      )}
    </div>
    <div>
      <button>Show More</button>
    </div>
  </div>
  )
}

export default AudReviewList;

