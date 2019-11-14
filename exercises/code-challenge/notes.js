// after the list put a button to get next list of results. Add onclick to button (onClickNext)
// need to offset by # that is shown to see the next ones in list 
// make an offset counter = 0

// in get need to add to search list : offset and limit 

componentDidMount(){
    this.handleNext()
}

handleNext = () => {
    axios.get(`http......offset=${this.state.offset}&limit=20`).then(response => {
        this.setState(prevState => {
            return {
                array: [...prevState, ...array.results],
                offset: prevState.offset + 20
            }
        })
    })
}




// Properties
// Props	Type	Description	Default
// cardZIndex	string	z-Index for the flip card. Used to help solve context stack issues while using multiple flip cards.	auto

// containerStyle	object	Extra css styling that can be applied to the container.	{}

// isFlipped	bool	False to show the front of the card, true to show the back	undefined

// flipSpeedBackToFront	number	The speed of the flip animation when the card flips from back to front, the higher the number the slower the flip animation	0.6

// flipSpeedFrontToBack	number	The speed of the flip animation when the card flips from front to back, the higher the number the slower the flip animation	0.6

// infinite	bool	False to rotate in opposite directions on both sides of the card, true to rotate in the same direction	false

// flipDirection	string	Direction of the card flip (options are: 'horizontal' or 'vertical' )