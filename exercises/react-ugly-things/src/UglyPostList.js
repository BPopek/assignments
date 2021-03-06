import React from 'react';
import UglyPost from './UglyPost';
import { withProvider } from './ListProvider'

const WholeUglyList = (props) => {

    const mappedList = props.posts.map((info, i) => 
                <UglyPost key={i + info.title}
                title={info.title}
                description={info.description}
                imgUrl={info.imgUrl}
                                />)
        
    return(
        <div className='newPosts'>
            {mappedList}
        </div>
    )
}



// class WholeUglyList extends Component {

//     render(){
//         const mappedList = this.props.posts.map((info, i) => 
//                     <UglyPost key={i + info.title}
//                     title={info.title}
//                     description={info.description}
//                     imgUrl={info.imgUrl}
//                                     />)
            
//         return(
//             <div className='newPosts'>
//                 {mappedList}
//             </div>
//         )
//     }
// }

export default withProvider( WholeUglyList );
