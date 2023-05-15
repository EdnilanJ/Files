import React from 'react'
import pic from '../../../pics/addpic.png'
import '../../style_called/uploadpicstyle.css'

const ImgUpload =({
  onChange,
  src
})=>
  <label htmlFor="photo-upload" className="custom-file-upload fas">
    <div className="img-wrap img-upload" >
      <img  src={src}/>
    </div>
    <input id="photo-upload" type="file" onChange={onChange}/> 
  </label>




const Profile =({
  src,
  
})=>
  <div >
      <label className="custom-file-upload fas">
        <div className="img-wrap" >
          <img src={src}/>
        </div>
      </label>
  </div>
     

class UploadPic extends React.Component {
  state = {
    file: '',
    AddImage: pic,  
    active: 'edit'
  }

  photoUpload = e =>{
    e.preventDefault();
    const reader = new FileReader();
    const file = e.target.files[0];
    reader.onloadend = () => {
      this.setState({
        file: file,
        AddImage: reader.result
      });
    }
    reader.readAsDataURL(file);
  }
 
  
  render() {
    const {AddImage, 
          
           active} = this.state;
    return (
      <div>
        {(active === 'edit')?(
            <ImgUpload onChange={this.photoUpload} src={AddImage}/>
        ):(
          <Profile 
            src={AddImage} 
            />
            )}
        
      </div>
    )
  }
}


export default UploadPic