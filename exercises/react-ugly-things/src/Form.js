import React, {Component} from 'react';
import {withProvider} from './ListProvider';

class Form extends Component {
    constructor(props){
        super(props)

        this.state = {
            title: props.title,
            description: props.description,
            imgUrl: props.imgUrl,
        }
    }

    componentDidMount(){
        if(this.props.type === 'update'){
            let {title, description, imgUrl} = this.props.post
            this.setState({title, description, imgUrl})
        }
    }

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit = e => {
        e.preventDefault()
        if(this.props.type === 'add'){
            this.props.addNewPost({...this.state})
        } else {
            this.props.toggle()
            this.props.editPost({...this.props.post, ...this.props.state}, this.props.title)
        }
    }
    render(){
        return(
            <div className='container'>
                <form onSubmit={this.handleSubmit} className={this.props.type === 'add' ? 'list-submit' : 'edit-list'}>
                    <label htmlFor='title'>Title:
                        <input className='initialInput' id='title' onChange={this.handleChange} name='title' placeholder='Title' value={this.state.title}></input>
                    </label>
                    <label htmlFor='description'>Description:
                        <input className='initialInput' id='description' onChange={this.handleChange} name='description' placeholder='Description' value={this.state.description}></input>
                    </label>
                    <label htmlFor='imgUrl'>Image:
                        <input className='initialInput' id='imgUrl' onChange={this.handleChange} name='imgUrl' placeholder='Image URL' value={this.state.imgUrl}></input>
                    </label>
                    <button className='submitButton'>{this.props.button}</button>
                </form>
            </div>
        )
    }
}

export default withProvider(Form);