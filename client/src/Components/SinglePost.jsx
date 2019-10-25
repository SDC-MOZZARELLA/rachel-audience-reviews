import React from 'react';
import styled from 'styled-components';

const SReviewContainer = styled.li`
  display: inline-block;
  break-inside: avoid-column;
  page-break-inside: avoid;
  white-space: nowrap;
  max-width: 100%;
  min-width: 100%;
  position: relative;
  margin-bottom: 20px;
  border-radius: 3px;
  height: 100%;
  box-sizing: border-box;
`;

const SingleReview = styled.div`
  white-space: normal;
  display:inline-flex;
  max-width: 100%;
  min-width: 100%;
  flex-flow: column nowrap;
  margin-top: 1em;
  padding: 12px;
  padding-bottom: 2px;
  padding-top: 0px;
  border-radius: 1px;
  border-style: solid;
  border-width: 2px;
  position: relative;
  box-sizing:border-box;
  &::after {
    border-color: transparent black transparent transparent;
    border-width: 0 31px 31px 0;
    top: 33px;
    left: 39px;
    z-index: 0;
    border-style: solid;
    content: '';
    display: block;
    position: relative;
    width: 0;
  }
`;

const RateAndDate = styled.span`

`;

const SRStars = styled.div`
  display: inline;
  flex-flow: wrap;
  margin: 0.5rem;
  flex: 1 1 auto;
  float: left;
  padding-top: 1.0rem;
`;

const Filled = styled.div`
  display: inline;
  color: orange;
`;

const Unfilled = styled.div`
  display: inline;
  color: black;
`;

const SRDate = styled.div`
  display: inline-flex;
  flex-flow: wrap;
  margin: 0.5rem;
  font-family: roboto,Helvetica,Arial,sans-serif;
  flex: 1 1 auto;
  float: right;
  padding-top: 1.0rem;
  color: #757a84;
  font-size: 12px;
`;

const TextAndButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 5px;
`;

const SRText = styled.div`
  display: flex;
  flex-flow: column wrap;
  font-family: sans-serif;
  font-size: 12px;
  color: #2A2C32;
  padding-top: 10px;
  padding-left: 5px;
  padding-right: 5px;
  padding-bottom: 1px;
`;

const ReviewQuote = styled.div`
  display: inline-block;
  margin-bottom: 5px;
  white-space: nowrap;
  page-break-inside: avoid;
  break-inside: avoid-column;
  position: relative;
  z-index: -1;
  top: -15px;
`;

const IconAndName = styled.div`
  display: grid;
  justify-items: right;
  background-color: white;
  grid-template-columns: 1fr auto;
  color: #000000;
  font-size: 16;
  z-index: -1;
  position: absolute;
  left: 95px;
  bottom: -40px;
`;

const Img = styled.img`
  display: block;
  opacity: 0.7;
  margin-right: 15px;
  display: block
  width:50px;
  height: 50px;
  border-radius: 25px;
`;

const SRUser = styled.div`
  display: grid;
  font-size: 20px;
  width: 250x;
  font-family: 'Neusa Next Pro Compact',sans-serif;
  font-weight: normal;
`;

const Badge = styled.div`
  display: block;
  font-family: 'Franklin Gothic FS Book','Helvetica Neue',Helvetica,Arial,sans-serif;
  font-size: 12px;
  width: 105px;
  padding: 2px;
  margin: 1px;
  border-style: solid;
  border-width: 1px;
  border-radius: 3px;
  color: orange;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`
const Button = styled.button`
  display: flex;
  border: none;
  color: black;
  font-weight: 600;
  text-decoration: none;
  font-family: sans-serif;
  font-size: 12px;
  margin-top: 2px;
  outline: none;
  &:hover {
    text-decoration: none;
    cursor: pointer;
  }
`;

const Speech = styled.div`
  &::before {
    border-color: transparent white transparent transparent;
    border-width: 0 27px 27px 0;
    top: -3px;
    left: 55px;
    z-index: 0;
    border-style: solid;
    content: '';
    display: block;
    position: relative;
    width: 0;
  }
`;

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
            stars.push(<Filled><span>★</span></Filled>)
        } else {
            stars.push(<Unfilled><span>★</span></Unfilled>)
        }
      }
      return stars;
    }

    return (
      <SReviewContainer>
        <SingleReview>
          <RateAndDate>
            <SRStars>
              {rating(this.props.item).map((star) => star)}
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
