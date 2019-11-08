



// from UGLY POST 
/* const form = (
                    <form>
                    Title: <input onChange={this.handleChange} name='title' value={this.state.title}></input>
                    Description: <input onChange={this.handleChange} name='description' value={this.state.description}></input>
                    Image URL: <input onChange={this.handleChange} name='imgUrl' value={this.state.imgUrl}></input>
                    <button onClick={this.handleSave}>Save</button>
                    </form> */
            
        // return this.isBeingEdited ? form : regularDisplay


<div className='completed'>Completed
                    <input onChange={this.checkbox} checked={this.props.completed ? true : false} type='checkbox'/>
                </div> 