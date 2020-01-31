import React, { Component } from 'react';
import "./UploadImage.css";

class UploadImage extends Component {

  render() {
    return ();

  }

} 
    
export default UploadImage;    
    
   /* constructor(props) {
      super(props);
      this.state = {
          picture: '',
          file: '',
          imagePreviewUrl: ''z
        };

       // this.loadPicture = this.loadPicture.bind(this);
    }
/*
  
    componentDidMount() {
      let {imagePreviewUrl} = this.state;
    
      this.props.picture(this.state);
      let $imagePreview = null;
      if (imagePreviewUrl) {
        $imagePreview = (<img src={imagePreviewUrl} />);
      } else {
        $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
      }


    }
  
    loadPicture(e) {
      e.preventDefault();

      const {file} = this.state;
      const {onSubmit} = this.props;

      onSubmit(file);
    }
  */
/*readURL(input) 
 {
     document.getElementById("bannerImg").style.display = "block";
 
     if (input.files && input.files[0]) {
         var reader = new FileReader();
 
         reader.onload = function (e) {
             document.getElementById('bannerImg').src =  e.target.result;
         }
 
         reader.readAsDataURL(input.files[0]);
     }
 }

 getBase64Image(img) {
  var canvas = document.createElement("canvas");
  canvas.width = img.width;
  canvas.height = img.height;

  var ctx = canvas.getContext("2d");
  ctx.drawImage(img, 0, 0);

  var dataURL = canvas.toDataURL("image/png");

  return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
}


    handleImageChange(e) {
      e.preventDefault();
  
      let reader = new FileReader();
      let file = e.target.files[0];

      
  
      reader.onloadend = () => {
        this.setState({
          file: file,
          imagePreviewUrl: reader.result
        });
      }

       this.setState({picture: this.refs.picture.value});

      reader.readAsDataURL(file)
    }
  
    render() {


     /* let {imagePreviewUrl} = this.state;
    
      this.props.picture(this.state);
      let $imagePreview = null;
      if (imagePreviewUrl) {
        $imagePreview = (<img src={imagePreviewUrl} />);
      } else {
        $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
      }*/
     /* send(){
        const method = "POST";
        const body = new FormData(this.form);
        fetch("https://httpbin.org/post", {method, body})
        .then(res => res.json())
        .then(data => alert(JSON.stringify(data, null)));
      }
    
      render() {
      return (
        <div>
            <form  onSubmit={this.loadPicture}>
            <input className="fileInput" type="file" id="picture" name="picture" ref="picture" value={this.state.picture} picture={this.props.picture(this.state.imagePreviewUrl)} multiple accept=".jpg, .jpeg, .png" onChange={(e)=>this.handleImageChange(e)}  required/>
            </form>
          <div className="imgPreview">
           
          </div>
        </div>
      )
    }
  }
    
export default UploadImage;*/