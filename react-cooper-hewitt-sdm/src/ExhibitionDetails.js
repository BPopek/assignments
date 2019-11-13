import React, {Component} from 'react';
import {withExhibitions} from './ExhibitionProvider';

class ExhibitionDetails extends Component {
    componentDidMount(){
        this.props.singleExhibition(this.props.match.params.id)
    }
    render(){

        const {title, url, text, images} = this.props.detail
        let myPic;
        let myPic1;

        if(images){
            myPic = images[0].b.url ? images[0].b.url : 'no_image'
            myPic1 = images[0].z.url ? images[0].z.url : 'no_image'
        }

        return(
            <div className='ExhibitionDetails' >
                <h1 className='DetailedTitle'>{title}</h1>
                {/* <img src={url}/> */}
                <a href={url} className='DetailedLink'>Visit Cooper Hewitt Website</a>
                <p className='DetailedDescription'>{text}</p>
              
            </div>
        )
    }
}

export default withExhibitions(ExhibitionDetails);