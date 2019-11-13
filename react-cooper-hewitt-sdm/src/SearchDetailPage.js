import React, {Component} from 'react';
import {withExhibitions} from './ExhibitionProvider';
import {Link} from 'react-router-dom'

class SearchDetailPage extends Component {
    
    // componentDidMount(){
    //     // console.log(this.props.object)
    //      !this.props.random.title ? this.props.randomObject() : console.log('already have random item')
    // }
    render(){
        const {title, url, description, images, id} = this.props.random
        let myPic;
        let myPic1;

        if(images){
            myPic = images[0].b.url ? images[0].b.url : 'no_image'
            myPic1 = images[0].z.url ? images[0].z.url : 'no_image'

        }

        return(
                <div className='SearchObject'>
                    <h1 className='SearchedTitle'>{title}</h1>
                    <a href={url} className='ExhibitionLink'>Visit Cooper Hewitt Website</a>
                    <p className='ExhibitDescription'>{description}</p>
                    <img src={myPic} className='RandomImages' alt='RandomImage'/>
                    <img src={myPic1} className='RandomImages' alt='RandomImage'/>
                </div>
        )
    }
}

export default withExhibitions(SearchDetailPage);