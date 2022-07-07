import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults:0
    };
  }

  async componentDidMount() {
    // console.log("cmd");
    let url =
      "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=e46da36b3e7a41978250d7fe6b5b6740&page=1&pageSize=18";
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({ 
        articles: parsedData.articles,
        totalResults: parsedData.totalResults,
     });
  }
  handlePrevClick = async () => {
    // console.log("previous");
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=e46da36b3e7a41978250d7fe6b5b6740&page=${this.state.page - 1}&pageSize=18`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      page: this.state.page - 1,
    });
  };

  handleNextClick = async () => {
    // console.log("Next");

    if(this.state.page + 1 > Math.ceil(this.state.totalResults/ 18)) {

    }
    else {

        let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=e46da36b3e7a41978250d7fe6b5b6740&page=${this.state.page + 1}&pageSize=18`;
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({
            articles: parsedData.articles,
            page: this.state.page + 1,
        });
    }
  };

  render() {
    return (
      <>
        <div className="container my-3">
          <h2 className="my-3">News - Top headline</h2>
          <div className="row">
            {this.state.articles.map((ele) => {
              return (
                <div className="col-md-4" key={ele.url}>
                  <NewsItem
                    title={ele.title}
                    description={ele.description}
                    imgUrl={ele.urlToImage}
                    newsUrl={ele.url}
                  />
                </div>
              );
            })}
            ;
          </div>
          <div className="container d-flex justify-content-between my-3">
            <button
              disabled={this.state.page <= 1}
              type="button"
              className="btn btn-dark"
              onClick={this.handlePrevClick}
            >
              &larr; Previous
            </button>
            <button
              type="button"
              className="btn btn-dark"
              onClick={this.handleNextClick}
            >
              Next &rarr;
            </button>
          </div>

          {/* <div className="row">
                <div className="col-md-4">
                    <NewsItem />
                </div>
                <div className="col-md-4">
                    <NewsItem />
                </div>
                <div className="col-md-4">
                    <NewsItem />
                </div>
            </div> */}
        </div>
      </>
    );
  }
}

export default News;
