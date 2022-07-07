import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imgUrl, newsUrl } = this.props;
    return (
      <div
        className="card my-3 col-lg-4 d-flex align-items-stretch"
        style={{ width: "18rem" }}
      >
        <img
          src={
            imgUrl
              ? imgUrl
              : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxoTRV9ewdC0vfCHtVvf3twU6xs66_1OA2Cw&usqp=CAU"
          }
          className="card-img-top"
          alt="img for news"
        />
        <div className="card-body">
          <h5 className="card-title">{title ? title : ""}</h5>
          <p className="card-text">
            {description ? description.substr(0, 150) : ""}
          </p>
          <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn-primary">
            Read more
          </a>
        </div>
      </div>
    );
  }
}

export default NewsItem;
