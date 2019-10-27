import React from 'react';
import { SReviewContainer, SingleReview, RateAndDate, SRStars,
  Filled, Unfilled, SRDate, TextAndButtonContainer, SRText, ReviewQuote, IconAndName, Img, SRUser, Badge, ButtonContainer, Button, Speech} from './Stylesheet.jsx';

class SinglePost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
      textPost: this.props.item.reviewText,
      shortPost: this.props.item.reviewText.substring(0, 250),
      userName: this.props.item.reviewerName,
      buttonText: 'Show More'
    }
    this.expandCollapse = this.expandCollapse.bind(this);
  }

  expandCollapse() {
    this.state.expanded === true ? this.setState({ buttonText: 'Show More' }) : this.setState({ buttonText: 'Show Less' })
    this.setState({ expanded: !this.state.expanded });
  }

  render() {
    // star element
    var rating = function (element) {
      var stars = [];
      for (var i = 0; i < 5; i++) {
        if (i < element.reviewRating) {
            stars.push(<Filled key={i}><span>★</span></Filled>)
        } else {
            stars.push(<Unfilled key={i}><span>★</span></Unfilled>)
        }
      }
      return stars;
    }

    return (
      <SReviewContainer>
        <SingleReview>
          <RateAndDate>
            <SRStars>
              {rating(this.props.item).map((star,) => star)}
            </SRStars>
            <SRDate>{this.props.item.reviewDate.slice(0,6) + ", " + this.props.item.reviewDate.slice(6, 11)}</SRDate>
          </RateAndDate>
          <TextAndButtonContainer>
            <SRText>{this.state.expanded ? this.state.textPost : this.state.shortPost+'...'}</SRText>
            <ButtonContainer>
              <Button onClick={this.expandCollapse}>{this.state.buttonText}</Button>
          </ButtonContainer>
          </TextAndButtonContainer>
        </SingleReview>
          <Speech></Speech>
          <ReviewQuote>
            <IconAndName>
              <Img src="https://krillin-audience-reviews.s3.us-west-1.amazonaws.com/AR_avatar.gif"></Img>
              <SRUser>{this.state.userName}<Badge>SUPER REVIEWER</Badge></SRUser>
            </IconAndName>
          </ReviewQuote>
      </SReviewContainer>
    )
  }

}

export default SinglePost;
