import './Card.css'
import {Fragment} from 'react';

const Card = (props) => {
    const {issues} = props;
    // console.log("issues is: ", issues.data.items)

    const issuesList = issues.length !== 0 ? (
         issues.data.items.map((issue) => (
            <Fragment>
                 <a href={issue.url}>
                    <div className="card" key= {issue.id}>
                        <h3>{issue.title}</h3>
                        <p>{issue.url}</p>
                    </div>
                </a>
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