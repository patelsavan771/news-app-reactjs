import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';



export class News extends Component {
  static propTypes = {
    country: PropTypes.string,
    apiKey: PropTypes.string,
    category: PropTypes.string,
    pageSize: PropTypes.number,
  }

  static defaultProps = {
    country: "in",
    apiKey: "e46da36b3e7a41978250d7fe6b5b6740",
    category: "general",
    pageSize: "8",
  }

  capitalFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0,
    };
    document.title = `${this.capitalFirstLetter(this.props.category)} - NewsApp`;
  }

  displayNews = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&pageSize=${this.props.pageSize}&page=${this.state.page}`;

      // this.setState({
      //     loading: true,
      // });
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData);
      this.setState({
          articles: parsedData.articles,
          totalResults: parsedData.totalResults,
          // loading: false,
      });
  }

  async componentDidMount() {
      this.displayNews();
  }

  handlePrevClick = async () => {
      this.setState({
        page: this.state.page - 1,
      }, this.displayNews);
      // this.displayNews();  problem in which displayNews execute before state was updated.
  };

  handleNextClick = async () => {
      this.setState({
          page: this.state.page + 1,
      }, this.displayNews);
      // this.displayNews();  problem in which displayNews execute before state was updated.
  };

  fetchMoreData = async () => {
    this.setState({
      page: this.state.page + 1
    }, async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&pageSize=${this.props.pageSize}&page=${this.state.page}`;

      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData);
      this.setState({
        articles: this.state.articles.concat(parsedData.articles),
        totalResults: parsedData.totalResults,
      });
    });
  }


  render() {
    return (
      <>
        <div className="container my-3">
          <h2 className="my-3">{this.capitalFirstLetter(this.props.category)} - Top headlines</h2>
          {this.state.loading && <Spinner />}

          <InfiniteScroll
            dataLength={this.state.articles.length}
            next={this.fetchMoreData}
            hasMore={this.state.articles.length !== this.state.totalResults}
            loader={<Spinner />}
          >
          <div className="container">

            <div className="row">
                {this.state.articles.map((ele) => {
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
            </div>
          </div>

          </InfiniteScroll>
          {/* <div className="container d-flex justify-content-between my-3">
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
          </div> */}
        </div>
      </>
    )
  }
}


export default News;
