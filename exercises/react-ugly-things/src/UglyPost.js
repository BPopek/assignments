import React, {Component} from 'react';
import Form from './Form'
import {withProvider} from './ListProvider';

class UglyPost extends Component {
    constructor() {
        super()

        this.state = {
            // title: props.title,
            // description: props.description,
            // imgUrl: props.imgUrl,
            // isBeingEdited: false,
            toggle: true
        }
    }

    toggle = () => {
        this.setState(prevState => {
            return {toggle: !prevState.toggle}
        })
    }

    render(){
        // const lineThrough = {
        //     textDecoration: this.props.completed ? 'line-through' : 'none'
        // }
        const imageSize = {
            width: 200,
            margin: 'auto',
        }
        // const {title, description, imgUrl} = this.state
        return (
            <div>
                {this.state.toggle ?
                    <div className='postContainer'>
                        <h1>{this.props.title}</h1>
                        <p>{this.props.description}</p>
                        <img style={imageSize} 
                                src={this.props.imgUrl} 
                                alt={this.props.imgUrl} />
                       

                        <button onClick={this.toggle} className='edit'>Edit</button>
                        <button onClick={ () => this.handleDelete} className='Del'>X</button>
                    </div>
                        :
                    <Form button='Save Changes' type='update' toggle={this.toggle} title={this.props.title} description={this.props.description} image={this.props.imgUrl} post={this.props.info}/> 
                }
            </div>
        )}      
}


export default withProvider(UglyPost);