import React, {Component} from 'react';
import {withExhibitions} from './ExhibitionProvider';
// import {Link} from 'react-router-dom'

class RandomObject extends Component {
    
    componentDidMount(){
        console.log(this.props.object)

        this.props.randomObject()
    }
    render(){
        const {title, url, text, images, date_start, date_end, id} = this.props.random
        let myPic;
        let myPic1;

        if(images){
            myPic = images[0].b.url ? images[0].b.url : 'no_image'
            myPic1 = images[0].z.url ? images[0].z.url : 'no_image'

        }

        return(
                <div className='RandomObject'>
                    <h1 className='RandomObjectTitle'>{title}</h1>
                    <a href={url} className='ExhibitionLink'>Visit Cooper Hewitt </a>
                    <p className='ExhibitDescription'>{text}</p>
                    <img src={myPic} className='RandomImages' alt='RandomImage'/>
                    <img src={myPic1} className='RandomImages' alt='RandomImage'/>
                </div>
        )
    }
}

export default withExhibitions(RandomObject);