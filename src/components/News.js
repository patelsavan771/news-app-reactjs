import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types';


export class News extends Component {
  static propTypes = {
    title: PropTypes.string,
    country: PropTypes.string,
    apiKey: PropTypes.string,
    category: PropTypes.string,
    pageSize: PropTypes.number,
  }

  static defaultProps = {
    title: "General News Headlines",
    country: "in",
    apiKey: "e46da36b3e7a41978250d7fe6b5b6740",
    category: "general",
    pageSize: "8",
  }

  capitalFirst = (string) => {
    return string.charAt(0).toUppercase() + string.slice(1);
  }

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0,
    };
    document.title = `${(this.props.category)} - NewsApp`;
  }
  // baseUrl = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=e46da36b3e7a41978250d7fe6b5b6740&page=1&pageSize=${this.props.pageSize}`;

  async displayNews() {
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&pageSize=${this.props.pageSize}&page=${this.state.page}`;

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
    this.displayNews();
  }

  handlePrevClick = async () => {
    this.setState({
      page: this.state.page - 1,
    });
    this.displayNews();
  };

  handleNextClick = async () => {
    this.setState({
      page: this.state.page + 1,
    });
    this.displayNews();
  };



  render() {
    return (
      <>
        <div className="container my-3">
          <h2 className="my-3">{this.props.category}</h2>
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
                      author={ele.author}
                      date={ele.publishedAt}
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
    )
  }
}


export default News;
