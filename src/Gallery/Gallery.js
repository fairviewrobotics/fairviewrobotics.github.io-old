import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from "react-bootstrap";
import BackgroundImage from "../BackgroundImage/BackgroundImage";

import './Gallery.css';

import Slideshow from "./Slideshow";

import intro5 from '../images/intro/5.jpg';

// TODO add routes
// TODO refactor

export default class Gallery extends Component {

  static propTypes = {
    galleries: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      images: PropTypes.arrayOf(PropTypes.shape({
        src: PropTypes.string.isRequired,
        thumbnail: PropTypes.string.isRequired
      })).isRequired
    })).isRequired
  };

  state = {
    currentGallery: this.props.galleries[0].name,
    currentImage: null
  };

  getCurrentGallery = () =>
    this.props.galleries.find(gallery => gallery.name === this.state.currentGallery);

  getImages = () =>
    this.getCurrentGallery().images;


  changeGallery = name =>
    this.setState({ currentGallery: name });

  fullscreenImageAt = index =>
    this.setState({ currentImage: index });

  exitSlideshow = () =>
    this.setState({ currentImage: null });

  getNextImage = nextImage => {
    // TODO: refactor
    if (nextImage >= 1) {
      if (this.state.currentImage + nextImage >= this.getImages().length) {
        return this.state.currentImage + nextImage - this.getImages().length ;
      }

      return this.state.currentImage + nextImage;
    } else if (nextImage <= -1) {
      if (this.state.currentImage + nextImage < 0) {
        return this.getImages().length + nextImage;
      }

      return this.state.currentImage + nextImage;
    } else {
      return nextImage;
    }
  };

  handlePreviousImage = () =>
    this.setState({ currentImage: this.getNextImage(-1) });

  handleNextImage = () =>
    this.setState({ currentImage: this.getNextImage(1) });

  render() {
    let slideShow = null;

    if (this.state.currentImage !== null) {
      const {src} = this.getCurrentGallery().images[this.state.currentImage];

      slideShow = <Slideshow src={src} alt={this.state.currentGallery} onPreviousImage={this.handlePreviousImage} onNextImage={this.handleNextImage} onExit={this.exitSlideshow}/>
    }

    // TODO: extract out of jsx
    return (
      <div>
        <BackgroundImage src={intro5}/>
        {slideShow}
        <h1 className="page-title">gallery</h1>

        <div className="gallery-outer">
          <div className="gallery-header">
            {
              this.props.galleries.map(gallery => {

                const ifCurrentGalleryStyle = gallery.name === this.state.currentGallery ? 'selected' : '';

                return (
                  <Button key={gallery.name} id="gallery-button" className={ifCurrentGalleryStyle} onClick={() => this.changeGallery(gallery.name)}>
                    {gallery.name}
                  </Button>
                )
              })
            }
          </div>
          <div className="gallery-content">
            {
              this.props.galleries
                .map(gallery => {
                  if (gallery.name === this.state.currentGallery) {
                    return gallery.images.map((image, index) => (
                      <div key={image.thumbnail} className="image-thumb-outer">
                        <img className="image-thumb" height="87.5px" width="auto" src={image.thumbnail} onClick={() => this.fullscreenImageAt(index)} />
                      </div>
                    ));
                  }

                  return null;
                })
            }
          </div>
        </div>
      </div>
    );
  }
}
