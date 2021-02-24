import './Card.css'
import {Fragment} from 'react';

const Card = (props) => {
    const {issues} = props;
    // console.log("issues is: ", issues.data.items)

    const issuesList = issues.length !== 0 ? (
         issues.data.items.map((issue) => (
            <Fragment>
                 
                    <div className="card" key={issue.id}>
                        <h4>{issue.title}</h4>
                        <p>{issue.body.substring(0, 240).concat("...")}</p>
                        <a href={issue.url} target="_blank"><p>Read more</p></a>
                    </div>
                
            </Fragment>
        ))
    ): (
        <div>
            <p>No issue found</p>
        </div>
    );
    
    
     
   

    return ( 
        <div className="results">
            {issuesList}
        </div>
     );
}
 
export default Card;