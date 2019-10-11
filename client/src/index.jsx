import React from 'react';
import ReactDOM from 'react-dom';
import AudReviewList from './Components/FakeAudReviews.jsx';
// import data from '';

class App extends React.Component {
  constructor(prop) {
    super(prop);
    this.state = {
      audReviews: '',
      topSix: ["1","2","3","4","5","6"],
      newReview: ''
    }
    this.getAudienceReviews = this.getAudienceReviews.bind(this);
  }

  getAudienceReviews() {
    fetch('/api/audienceReviews')
      .then(list => list.json())
      .then(reviews => this.setState({ topSix : reviews}))
  }



  componentDidMount() {
    this.getAudienceReviews()
  }

  render () {
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