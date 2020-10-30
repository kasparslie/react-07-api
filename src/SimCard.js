import React, {Component} from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle} from 'reactstrap';
  import './card.css'


class SimCard extends Component {

    render() {
        console.log(this.props)
        return (
            <div>
            <Card className="card">
              <CardImg width="20%" className="cardimg" src={this.props.image} alt="Card image cap" />
              <CardBody>
                <CardTitle>{this.props.character}</CardTitle>
                <CardSubtitle></CardSubtitle>
                <CardText>{this.props.quote}</CardText>
                <form style={{display: 'flex', justifyContent :'center'}} onSubmit={this.handleSubmit} >
                <button>Refresh Quote</button>
                </form>
              </CardBody>
            </Card>
          </div>
        )
    }
}

export default SimCard