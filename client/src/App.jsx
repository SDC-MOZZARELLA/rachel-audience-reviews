import React from 'react';
import AudReviewList from './Components/FakeAudReviews.jsx';
import { AppWrapper, TitleBackground, Title, ReviewWrapper, ReviewList, MainButtonContainer, MainButton, ARGlobalStyle } from './Components/Stylesheet.jsx';


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

    fetch('http://localhost:8100/api/audienceReviews')
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
      <>
      <ARGlobalStyle />
      <AppWrapper>
        <TitleBackground><Title>AUDIENCE REVIEWS FOR <em> &nbsp;{noSpaceTitle}</em></Title></TitleBackground>
        <ReviewWrapper>
          <ReviewList>
          {this.state.isLoaded ?
            <AudReviewList someReviews={this.state.expanded ? this.state.movieReviews : this.state.topFour}/> : null}
          </ReviewList>
        </ReviewWrapper>
        <MainButtonContainer><MainButton onClick={this.expandCollapse}>{this.state.text}</MainButton></MainButtonContainer>
      </AppWrapper>
      </>
    )
  }

}

export default App;

