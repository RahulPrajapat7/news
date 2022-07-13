import { getByTitle } from '@testing-library/react'
import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {
      let {title,description,imgUrl,newsUrl}=this.props;
    return (
      <div>
     <div  className="card" >
  <img src={!imgUrl?"https://static01.nyt.com/images/2022/03/21/world/live-blog-20220321-china-eastern-airlines-crash-header-PROMO/merlin_204228846_46a881ca-dad6-4e9c-a4d2-c32dba58350c-articleLarge.jpg":imgUrl}  className="card-img-top" alt="..."/>
  <div  className="card-body">
    <h5  className="card-title">{title}.....</h5>
    <p  className="card-text">{description}.....</p>
    <a href={newsUrl}  target="_blank" className="btn btn-sm btn-primary">read more</a>
  </div>
</div>
      </div>
    )
  }
}
