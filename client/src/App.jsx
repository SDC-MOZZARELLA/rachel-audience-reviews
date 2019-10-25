import React from 'react';
import styled from 'styled-components';
import AudReviewList from './Components/FakeAudReviews.jsx';

const AppWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  width: 800px;
  padding: 0px;
`;

const TitleBackground = styled.h1`
  display:inline-flex;
  background: #FA320A;
  width: 100%;
  height: 22px;
  align-items: center;
  margin-bottom: 0px;
`;

const Title = styled.div`
  display: flex;
  white-space: nowrap;
  font-size: 24px;
  font-family: Neusa Next Pro Compact Medium, Impact, Arial, sans-serif;



  width: 100%;
  margin-bottom: 10px;
  margin-top: 10px;
  margin-left: 25px;
  margin-right: 60%;
  padding-left: 10px;
  padding-right: 20px;
  background-color: white;
  color: #2A2C32;
`;

const ReviewWrapper = styled.ul`
  display: flex;
  list-style: none;
  flex-direction: column;
  margin-top: 0px;
  padding: 0px;
`;

const ReviewList = styled.div`
  display: inline;
  column-count: 2;
  column-fill: balance;
  column-gap: 50px;
  position: relative;
  width: 100%;
  margin-top: 20px;
`;

const ButtonContainer = styled.span`
  display: inline-block;
  margin: 25px;
  text-align: right;
`;

const Button = styled.button`
  display: flex;
  border: none;
  color: dodgerblue;
  text-decoration: none;
  font-family: Arial,sans-serif;
  font-size: 14px;
  outline: none;
  &:hover {
    text-decoration: none;
    cursor: pointer;
  }
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movieName: '',
      topFour: [],
      movieReviews: [],
      text: 'See all Audience reviews',
      expanded: false,
      isLoaded: false
    };
    this.getAudienceReviews = this.getAudienceReviews.bind(this);
    this.expandCollapse = this.expandCollapse.bind(this);

  }

  getAudienceReviews() {
    var url = this.state.movieName;

    fetch('/api/audienceReviews')
      .then(list => list.json())
      .then(returned => this.setState({
        movieName: returned[Math.floor(Math.random()*100)].reviewMovie,
        movieReviews: returned
      }))
      .then(() => this.setState({
        movieReviews: this.state.movieReviews.filter(review => review.reviewMovie === this.state.movieName)
      }))
      .then(() => this.setState({
        topFour: this.state.movieReviews.slice(0,4)
      }))
      .then(() => this.setState({ isLoaded: true }))
  }

  expandCollapse() {
    this.state.expanded === true ? this.setState({ text: 'See all Audience reviews' }) : this.setState({ text: 'See less Audience reviews' })
    this.setState({ expanded: !this.state.expanded });
  }

  componentDidMount() {
    this.getAudienceReviews()
  }

  render () {
    var noSpaceTitle = this.state.movieName.toUpperCase().replace(/-/g, ' ');

    return (
      <AppWrapper>
        <TitleBackground><Title>AUDIENCE REVIEWS FOR <em> &nbsp;{noSpaceTitle}</em></Title></TitleBackground>
        <ReviewWrapper>
          <ReviewList>
          {this.state.isLoaded ?
            <AudReviewList someReviews={this.state.expanded ? this.state.movieReviews : this.state.topFour}/> : null}
          </ReviewList>
        </ReviewWrapper>
        <ButtonContainer><Button onClick={this.expandCollapse}>{this.state.text}</Button></ButtonContainer>
      </AppWrapper>
    )
  }

}

export default App;

