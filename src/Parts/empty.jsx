import React, { Component } from 'react'
import img from '../Images/empty.svg'

export default class empty extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div style={{marginTop: '3em', width: '100%'}}>
                <center>
                    <img style={{width: '20em'}} src={ img }/> <br/> <br/>
                    <h4 style={{color:"#000", fontWeight: '600'}}>{this.props.message}</h4>
                </center>    
            </div>
        )
    }
}
