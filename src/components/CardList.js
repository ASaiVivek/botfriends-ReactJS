import React from 'react';
import Card from './Card';

const CardList = ({robots}) => {
    
    return(
        <div>
            {
                robots.map((user,i) => {
                return (
                <Card 
                key={robots[i].id} //for react to keep track of the component, so id is the better key here
                id={robots[i].id} 
                name={robots[i].name} 
                email={robots[i].email}
                />
                )   
                }
                )
            }
        </div>
    )
}

export default CardList;

//alternative way
// const cardArray = robots.map((user,i) => {
    //     return (
    //         <Card 
    //         key={robots[i].id} 
    //         id={robots[i].id} 
    //         name={robots[i].name} 
    //         email={robots[i].email} 
    //         />)
    // })      
    /*   <cardArray /> */