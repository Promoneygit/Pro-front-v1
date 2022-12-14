
import React,{Component} from 'react';
import ImageUploader from 'react-images-upload';
import './style.css';


export class Uploadphoto extends Component {
          constructor(props) {
                    super(props);
                    this.state = { pictures: [] };
                    this.onDrop = this.onDrop.bind(this);
                }
            
                onDrop(picture) {
                    this.setState({
                        pictures: this.state.pictures.concat(picture),
                    });
                }
            
                render() {
                    return (
                        <ImageUploader
                            withIcon={true}
                            buttonText='Choose images'
                            onChange={this.onDrop}
                            imgExtension={['.jpg', '.gif', '.png', '.gif']}
                            maxFileSize={5242880}
                        />
                    );
                }
}


export default Uploadphoto;

