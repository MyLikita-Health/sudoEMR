import React, { Component } from 'react';
import { url } from '../../utils/helpers';

export default class ImageUpload extends Component {
  state = {
    uploading: false,
    imagePreviewUrl: '',
    file: '',
  };

  onChange = (e) => {
    let reader = new FileReader();
    const file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result,
      });
    };

    reader.readAsDataURL(file);

    console.log(file);
  };

  submitImage = (e) => {
    e.preventDefault();
    this.setState({ uploading: true });
    const formData = new FormData();
    formData.append(this.state.file);
    fetch(`${url}/image-upload`, {
      method: 'POST',
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      body: formData,
    })
      .then((res) => res.json())
      .then((image) => {
        this.setState({
          uploading: false,
          image,
        });
      });
  };

  addImage = () => {
    const data = this.state.imagePreviewUrl.split(',')[1];
    let raw = window.atob(data);
    let rawLength = raw.length;
    let array = new Uint8Array(new ArrayBuffer(rawLength));
    for (let i = 0; i < rawLength; i++) {
      array[i] = raw.charCodeAt(i);
    }
    let img = [];
    for (let i = 0; i < rawLength; i++) {
      img.push(array[i]);
    }

    this.props.addImage(img);
  };

  removeImage = () => {
    this.setState({ image: {} });
  };

  render() {
    const { imagePreviewUrl } = this.state;

    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = (
        <img
          alt="Patient passport "
          src={imagePreviewUrl}
          style={{ borderRadius: 20 }}
          height="150px"
          width="150px"
        />
      );
    } else {
      $imagePreview = <div className="previewText">Select an Image</div>;
    }

    return (
      <div>
        <div className="imgPreview">{$imagePreview}</div>
        <input className="fileInput" type="file" onChange={this.onChange} />
        {/* {JSON.stringify(this.state)} */}
      </div>
    );
  }
}
