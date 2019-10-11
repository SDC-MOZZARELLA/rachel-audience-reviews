import React from 'react';

var AudReviewList = (props) => (
  <div className="recentReviews">
    <h3 className="reviewLabel">Audience Reviews</h3>
    <div className="recentList">
      {props.list.map((review) =>
        <div className="singleReview">
          <div className="rateAndDate">
            <div className="sRStars">
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star"></span>
              <span className="fa fa-star"></span>
            </div>
            <div className="sRDate">Sep 28, 2019</div>
          </div>
          <div className="sRText">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet nisl purus in mollis nunc sed.</div>
          <span className="iconAndName"><img src="https://d2a5cgar23scu2.cloudfront.net/static/images/redesign/actor.default.tmb.gif"></img>
          <span className="SRUser">Audience reviewer #{review}</span>
          </span>
        </div>
      )}
    </div>
    <div className="viewMore">
      <button>View more reviews</button>
    </div>
  </div>
)

export default AudReviewList;

