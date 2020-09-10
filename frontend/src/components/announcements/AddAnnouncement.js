import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Button } from "react-bootstrap";
import { addAnnouncement } from '../../actions/announcements.js';


//FilePond
 import { FilePond, File, registerPlugin } from 'react-filepond';
 import 'filepond/dist/filepond.min.css';
 import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
 import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
 import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';
 registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);


 export class AddAnnouncement extends Component {
   state = {
     title: '',
     slideImages: "this is slideImages, Hello!",

   }
     static propTypes = {
       addAnnouncement: PropTypes.func.isRequired,
       backToList: PropTypes.func.isRequired,
       refresh: PropTypes.func.isRequired,
     };

     onChange = e => this.setState ({ [e.target.name]: e.target.value });

     onSubmit = (e) => {
       e.preventDefault();
       const announcement = new FormData();
       announcement.append('title', this.state.title)
       this.pond.getFiles()
       .map(fileItem => fileItem.file)
       .forEach(file => {
        announcement.append('image', file, file.name);
        
       });
       this.props.addAnnouncement(announcement);
       this.setState({
         title: "",
       })
       
       this.props.backToList()
       this.props.refresh()
     };
     render() {
       const {title, files, setFiles } = this.state;
       return (
         <div className="container">
           
           <Button
          className="btn btn-secondary mb-2 text-right"
          onClick={this.props.backToList}
          
        >
          الصفحة السابقة
        </Button>

          <div className="row pt-4" style={{borderTop: "2px solid #ffc107"}}>
            
            <div className="col-6">
            <form onSubmit={ this.onSubmit} id="setForm">
              <div className="form-group">
                <h4 className="text-info text-right">:العنوان</h4>
                <input
                  className="form-control"
                  type="text"
                  name="title"
                  onChange={this.onChange}
                  value={title}
                  placeholder="عنوان الإعلان"
                />
              </div>
 
              <div className="form-group">
              <button type="submit" className="btn btn-lg btn-warning btn-block">
                إرسال
              </button>
            </div>
 
            </form>
            </div>
            <div className = "col-6">
            <div className="form-group" form = "setForm">
               <h4 className="text-info text-right">:رفع صور/ة الإعلان</h4> 
                <FilePond
              name="image"
              ref={ref => this.pond = ref}
              files={this.state.files}
              allowMultiple={true}
              onuploadfiles={(fileitems => {
                this.setState({
                  files: fileitems.map(fileitem => fileitem.file)
                });
              })}
              onupdatefiles={(fileitems => {
                this.setState({
                  files: fileitems.map(fileitem => fileitem.file)
                });
              })}
              form = "setForm"
              />
              </div>
            </div>
          </div>
          </div>
       )
     }
   }

  export default connect(null, { addAnnouncement })(AddAnnouncement);