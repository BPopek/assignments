import React, {Component} from 'react';
import {withExhibitions} from './ExhibitionProvider';

class SearchDetailPage extends Component {    
    componentDidMount(){
        // this.props.searchDetailObject(this.props.searchRes.id)
        this.props.searchDetailObject(this.props.match.params.id)
    }

    render(){
        // console.log(this.props)

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
                    <a href={url} className='ExhibitionLink'>Visit Cooper Hewitt Website</a>
                    <p className='ExhibitDescription'>{description}</p>
                    <img src={myPic} className='DetailedImages' alt='DetailedImages'/>
                    {
                        myPic1 ? 
                        <img src={myPic1} className='DetailedImages' alt='DetailedImages'/>
                        :
                        <div></div>
                    }
                    {
                        myPic2 ? 
                        <img src={myPic2} className='DetailedImages' alt='DetailedImages'/>
                        :
                        <div></div>
                    }
                    {
                        myPic3 ? 
                        <img src={myPic3} className='DetailedImages' alt='DetailedImages'/>
                        :
                        <div></div>
                    }
                    
                </div>
        )
    }
}

export default withExhibitions(SearchDetailPage);