import React from 'react';
import { ReactComponent as MapIco} from '../assets/SVG/map-marker.svg';
import onScroll from '../utils/onScroll';

class Section extends React.Component {
  constructor(props) {
    super(props)
    this.boxLeft = React.createRef();
    this.boxRight = React.createRef();
  }
  componentDidMount () {
    const leftElem = this.boxLeft.current;
    const rightElem = this.boxRight.current;
    onScroll(leftElem, 'left');
    onScroll(rightElem, 'right');
  }
  render() {
    return (
      <div>
      <section id={this.props.id} className={`section section-${this.props.id} section--${this.props.id}`}>
        <div className={`section-wrapper section-wrapper--${this.props.id}`}>
          <div id="random-id" ref={this.boxLeft} className="section-wrapper__left no-opacity">
            <img src={this.props.sectionSign} alt={this.props.id} className={`section-img--sign ${this.props.customClass}`}/>
              <div className="section-wrapper__left__paragraph">
                <p>{this.props.description}</p>
              </div>
            <div className="section-wrapper__left__bottom">
              <MapIco className={`section-img--ico section-img--ico--${this.props.id}`}/>
              <p>{this.props.address}</p>
            </div>
          </div>
          <div ref={this.boxRight} className="section-wrapper__right no-opacity">
          <img src={this.props.sectionImg} alt={this.props.id} className="section-img"/>
          </div>
        </div>
      </section>
    </div>
    )
  }
}

export default Section;

/*
<div id={`${this.props.id}-wrapper__left`} className="section-wrapper__left no-opacity">
<div id={`${this.props.id}-wrapper__right`} className="section-wrapper__right no-opacity">
*/