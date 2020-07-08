import React from 'react';
import '../styles/components/tour.scss';
import { TiArrowSortedDown } from "react-icons/ti";
import { AiFillCloseCircle } from "react-icons/ai";

class Tour extends React.Component {
state = {
  showInfo: false
};
handleInfo = () => {
  this.setState({
    showInfo: !this.state.showInfo
  });
};

  render() {
    const {id, city, img, name, info} = this.props.tour;
    const {removeTour} = this.props;
    return(
      <article className="tour">
        <div className="img-container">
        <img src={img}
         alt="" />
         <span className="close-btn" onClick={() => {removeTour(id);
        }}>
          <AiFillCloseCircle />
         </span>
        </div>
        <div className="tour-info">
          <h3>{city}</h3>
          <h4>{name}</h4>
          <h5>
            info{""}
            <span onClick={this.handleInfo}>
              <TiArrowSortedDown />
            </span>
          </h5>
          {
            this.state.showInfo && <p>{info}</p>
          }
        </div>
      </article>
    )
  }
}

export default Tour;

//<i className="fas fa-caret-square-down" />

