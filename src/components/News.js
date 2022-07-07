import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0,
    };
  }

  // baseUrl = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=e46da36b3e7a41978250d7fe6b5b6740&page=1&pageSize=${this.props.pageSize}`;

  async displayNews(url) {
    this.setState({
      loading: true,
    });
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
  }

  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&pageSize=${this.props.pageSize}&page=1`;
    this.displayNews(url);
  }
  handlePrevClick = async () => {
    // console.log("previous");
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country
      }&category=${this.props.category}&apiKey=${this.props.apiKey}&pageSize=${this.props.pageSize
      }&page=${this.state.page - 1}`;
    this.displayNews(url);
    this.setState({
      page: this.state.page - 1,
    });
  };

  handleNextClick = async () => {
    // console.log("Next");

    if (
      !(
        this.state.page + 1 >
        Math.ceil(this.state.totalResults / this.props.pageSize)
      )
    ) {
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country
        }&category=${this.props.category}&apiKey=${this.props.apiKey}&pageSize=${this.props.pageSize
        }&page=${this.state.page + 1}`;
      this.displayNews(url);
      this.setState({
        page: this.state.page + 1,
      });
    }
  };

  render() {
    return (
      <>
        <div className="container my-3">
          <h2 className="my-3">News - Top headline</h2>
          {this.state.loading && <Spinner />}
          <div className="row">
            {!this.state.loading &&
              this.state.articles.map((ele) => {
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
              disabled={
                this.state.page + 1 >
                Math.ceil(this.state.totalResults / this.props.pageSize)
              }
              type="button"
              className="btn btn-dark"
              onClick={this.handleNextClick}
            >
              Next &rarr;
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default News;
