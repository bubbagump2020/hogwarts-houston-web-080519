import React from 'react';
import HogCard from './HogCard'
import { Card } from 'semantic-ui-react'

class HogCollection extends React.Component {
    
    constructor() {
        super()
        this.state = {
            hogs: []
           
        }
    }

    createHogCard = () => {
        return this.state.hogs.map(hog => {
            return(
                <HogCard  key={hog.id} {...hog}/>

            )
        })
    }

    componentDidMount = () => {
        fetch('http://localhost:3001/hogs')
            .then(response => response.json())
            .then(hogs => { 
                this.setState({ hogs: hogs })
            })
    }

    render (){
        return(
            <Card.Group className="ui grid container">
                {this.createHogCard()}
            </Card.Group>
        )
    }
 }

export default HogCollection