import React from 'react'
import { Card } from 'semantic-ui-react'

class HogCard extends React.Component{

    constructor(){
        super()
        this.state = {
            hidden: true
        }
    }
    handleClick = () => {
      if(this.state.hidden === true){
          this.setState({
              hidden: false 
        })

        
      }
      if(this.state.hidden === false){
          this.setState({
              hidden: true
          })
      }
    }

    render(){
        console.log( this.props.image)
        return (
            <Card className="pigTile" onClick={this.handleClick}>
                <div >
                    <div className="smallHeader">
                        {this.props.name}
                    </div>
                    <div>
                        <img src={this.props.image} alt={this.props.name + ",the pig"}/>
                    </div>
                    <div hidden= {this.state.hidden}>
                        <div className="hoggyText">{this.props.specialty}</div>
                        <br></br>
                        <div className="hoggyText">{this.props.greased}</div>
                        <div className="hoggyText">{this.props.weight}</div>
                        <br></br>
                        <div className="hoggyText">{this.props.highestMedalAchieved}</div>
                    </div>
                </div>
           </Card>
        )
    }

}

export default HogCard