import React, {Component} from 'react';
import {withExhibitions} from './ExhibitionProvider';
import Image from 'react-image-enlarger'

class SearchDetailPage extends Component {    

    state = {
        zoomed: false
    }

    componentDidMount(){
        this.props.searchDetailObject(this.props.match.params.id)
    }

    setZoomed = (willZoom) => {
        this.setState({zoomed: willZoom})
    }

    render(){
        const {title, url, description, images, id} = this.props.searchDetail
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
            <div className='SearchObject'>
                <h1 className='SearchedTitle'>{title}</h1>
                <hr className='SearchedHR'/>
                <h5 className='SearchedID'>Object ID: {id}</h5>
                <p className='SearchedLink'>
                    <a href={url} className='SearchedLinkText'>Visit Cooper Hewitt Website</a>
                    </p>
                <p className='SearchedDescription'>{description}</p>
                <Image
                    /*style={{ width: "400px", height: "auto", marginLeft: '150px', marginTop: '50px' }}*/
                    zoomed={this.state.zoomed}
                    src= {myPic} className='SearchedImages0' 
                    alt="Object Image"
                    onClick={() => this.setZoomed(true)}
                    onRequestClose={() => this.setZoomed(false)}
                    />          
                {
                    myPic1 ? 
                    <Image
                    zoomed={this.state.zoomed}
                    src= {myPic1} className='SearchedImages1' 
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
                    src= {myPic2} className='SearchedImages2' 
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
                    src= {myPic3} className='SearchedImages3' 
                    alt="Object Image"
                    onClick={() => this.setZoomed(true)}
                    onRequestClose={() => this.setZoomed(false)}
                    />                         :
                    <div></div>
                }
            </div>
        )
    }
}

export default withExhibitions(SearchDetailPage);




