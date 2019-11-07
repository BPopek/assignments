import React, {Component} from 'react';
import {withProvider} from './ListProvider';
import Form from './Form'

class UglyPost extends Component {
    constructor(props) {
        super(props)

        this.state = {
            title: props.title,
            description: props.description,
            imgUrl: props.imgUrl,
            isBeingEdited: false
        }
    }
    handleEditToggle = () => {
        this.setState(prevState => {
            return { 
            isBeingEdited: !prevState.isBeingEdited }
        })
    }
    // handleChange = (e) => {
    //     this.setState({[e.target.name] : e.target.value})
    // }
    // handleSave = () => {
    //     this.handleEditToggle()
    //     this.props.handleSave(this.state)
    // }
    // checkbox = (e) => {
    //     this.props.handleSave({completed: e.target.checked})
    // }

    render(){
        const lineThrough = {
            textDecoration: this.props.completed ? 'line-through' : 'none'
        }
        const imageSize = {
            width: 200,
        }
        const {title, description, imgUrl} = this.props.info
        return (
            // const regularDisplay = (
            <div>
                <div className='postContainer'>
                    <h1 style={lineThrough}>{title}</h1>
                    <p>{description}</p>
                    <img style={imageSize} src={imgUrl} alt={title} />
                    <div className='completed'>Completed
                        <input onChange={this.checkbox} checked={this.props.completed ? true : false} type='checkbox'/>
                    </div> 
                    <button onClick={this.handleEditToggle} className='editDel'>Edit</button>
                    <button onClick={ () => this.props.handleDelete} className='editDel'>X</button>
                </div>
                    :
                <Form button='Save Changes' type='update' toggle={this.toggle}/> 
                )
                }
            </div>
        
        )

                {/* const form = (
                    <form>
                    Title: <input onChange={this.handleChange} name='title' value={this.state.title}></input>
                    Description: <input onChange={this.handleChange} name='description' value={this.state.description}></input>
                    Image URL: <input onChange={this.handleChange} name='imgUrl' value={this.state.imgUrl}></input>
                    <button onClick={this.handleSave}>Save</button>
                    </form> */}
            
        // return this.isBeingEdited ? form : regularDisplay
        
    }
}

export default withProvider(UglyPost);