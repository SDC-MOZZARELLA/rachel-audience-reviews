import React from 'react';
import ReactDOM from 'react-dom';
import AudReviewList from './Components/FakeAudReviews.jsx';
// import data from '';

class App extends React.Component {
  constructor(prop) {
    super(prop);
    this.state = {
      topSix: [],
      showMore: [],
      zoom: false
    };
    this.getAudienceReviews = this.getAudienceReviews.bind(this);
  }

  onReview() {
    this.setState({
      zoom: !this.state.zoom
    });
  }
  offReview() {
    this.setState({
      zoom: this.state.zoom
    });
  }

  getAudienceReviews() {
    fetch('/api/audienceReviews')
      .then(list => list.json())
      // .then(returned => console.log(returned));  // returns 100 length array
      .then(returned => this.setState({ topSix : returned.slice(0,6) }))
  }

  // getMoreReviews() {
  //   fetch('/api/audienceReviews')
  //     .then(list => list.json())
  //     // .then(returned => console.log(returned));  // returns 100 length array
  //     .then(returned => this.setState({ showMore : returned}))
  // }

  componentDidMount() {
    this.getAudienceReviews()
  }

  render () {
    // var style = {
    //   box-shadow: 1px -2px 8px 0px black;
    // }

    return (
      <div>
        <h1 className="audReviewsHeader"></h1>
          <div className="audReviewMain">
            <AudReviewList list={this.state.topSix} />
          </div>
      </div>
    )
  }

}

ReactDOM.render(<App />, document.getElementById("app"));