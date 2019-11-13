import React, {Component} from 'react';
import {withExhibitions} from './ExhibitionProvider';
// import {Link} from 'react-router-dom'

class RandomObject extends Component {
    
    componentDidMount(){
        // console.log(this.props.object)
         !this.props.random.title ? this.props.randomObject() : console.log('already have random item')
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
        }

        return(
            <div className='RandomObject'>
                <h1 className='RandomObjectTitle'>{title}</h1>
                <a href={url} className='ExhibitionLink'>Visit Cooper Hewitt </a>
                <p className='ExhibitDescription'>{description}</p>
                <img src={myPic} className='RandomImages' alt='RandomImage'/>
                {
                        myPic1 ? 
                        <img src={myPic1} className='RandomImages' alt='RandomImage'/>
                        :
                        <div></div>
                    }
                    {
                        myPic2 ? 
                        <img src={myPic2} className='RandomImages' alt='RandomImage'/>
                        :
                        <div></div>
                    }
                    {
                        myPic3 ? 
                        <img src={myPic3} className='RandomImages' alt='RandomImage'/>
                        :
                        <div></div>
                    }               
            </div>
        )
    }
}

export default withExhibitions(RandomObject);