import React, {Component} from 'react';
import {withExhibitions} from './ExhibitionProvider';
// import {Link} from 'react-router-dom'
import Image from 'react-image-enlarger'
import Loader from 'react-loader-spinner'

class RandomObject extends Component {

    state = {
        zoomed: false,
        isLoaded: false
    }
    
    componentDidMount(){
         !this.props.random.title ? this.props.randomObject().then(() => {
             this.setState({isLoaded: true})
         }) 
         : 
         console.log('already have random item')
    }
    setZoomed = (willZoom) => {
        this.setState({zoomed: willZoom})
    }

    render(){
        const {title, url, description, images, id} = this.props.random
        let myPic;
        let myPic1;
        let myPic2;
        let myPic3;

        if(images){
            myPic = images[0].b.url ? images[0].b.url : 'no_image'

            if (images[1]){
                myPic1 = images[1].b.url ? images[1].b.url : 'no_image'
            } else {
               console.log('no_image')
            }
            if (images[2]){
                myPic2 = images[2].b.url ? images[2].b.url : 'no_image'
            } else {
               console.log('no_image')
            }
            if (images[3]){
                myPic3 = images[3].b.url ? images[3].b.url : 'no_image'
            } else {
               console.log('no_image')
            }
        }

        return(
            <div className='SpinnerDiv'>{!this.state.isLoaded ? 
                <span className='SpinnerSpan'>
                    <Loader
                        type='Circles'
                        color='#806aaf'
                        height={200}
                        width={100}
                        marginLeft={250}
                        />
                        </span>
                    :
                <div className='RandomObject'>
                    <h1 className='RandomObjectTitle'>{title}</h1>
                    <hr className='RandomHR'/>
                    <h5 className='RandomID'>Object ID: {id}</h5>
                    <p className='RandomObjectLink'>
                        <a href={url} className='RandLinktext'>Visit Cooper Hewitt Website</a>
                    </p>
                    <p className='RandomDescription'>{description}</p>
                        <Image
                            /*style={{ width: "400px", height: "auto", marginLeft: '150px', marginTop: '50px' }}*/
                            zoomed={this.state.zoomed}
                            src= {myPic} className='RandomImages0' 
                            alt="Object Image"
                            onClick={() => this.setZoomed(true)}
                            onRequestClose={() => this.setZoomed(false)}
                            />          
                        {
                            myPic1 ? 
                            <Image
                            zoomed={this.state.zoomed}
                            src= {myPic1} className='RandomImages1' 
                            alt="Object Image"
                            onClick={() => this.setZoomed(true)}
                            onRequestClose={() => this.setZoomed(false)}
                            /> 
                            :
                            <div></div>
                        }
                        {
                            myPic2 ? 
                            <Image
                            zoomed={this.state.zoomed}
                            src= {myPic2} className='RandomImages2' 
                            alt="Object Image"
                            onClick={() => this.setZoomed(true)}
                            onRequestClose={() => this.setZoomed(false)}
                            />                         :
                            <div></div>
                        }
                        {
                            myPic3 ? 
                            <Image
                            zoomed={this.state.zoomed}
                            src= {myPic3} className='RandomImages3' 
                            alt="Object Image"
                            onClick={() => this.setZoomed(true)}
                            onRequestClose={() => this.setZoomed(false)}
                            />                         :
                            <div></div>
                        }                     
                </div>
            }  
            </div>

        )
    }
}

export default withExhibitions(RandomObject);