import React, { Component } from 'react'

export class Newsitem extends Component {
  render() {
    let {title,description,imageUrl,newsUrl,author,date,source}=this.props;
    return (
      <div className='my-3'>
        <div className="card" >
        <span className='position-absolute top-0  translate=middle badge rounded-pill bg-danger' >{source}</span>
  <img src={!imageUrl?"https://www.nasa.gov/wp-content/uploads/2024/05/europa-clipper.jpg":imageUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}
    </h5>
    <p className="card-text">{description}</p>
    <p className='card-text'><small className='text-muted'>By {!author?"Unknown": author} on {new Date(date).toGMTString()}</small></p>
    <a href={newsUrl} target='' className="btn btn-sm btn-dark">Read More</a>
  </div>
</div>
      </div>
    )
  }
}

export default Newsitem
