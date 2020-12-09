import React, { Component } from 'react'

export default class article extends Component {
    render() {
        return (
            <li className="card card--1 card--1--article l__col--bottom">
                <div className="cs card--small ">
                    <a href="#" className="background-container">
                        <div style={{backgroundImage: `url(${info1})`, backgroundColor: 'rgb(0, 0, 0)', }} className="background card__background progressive-background">

                        </div>
                    </a>
                    <a href="#" className="headline link--no-decor">
                        <h2>Revenu minimum, garantie jeunes…Des aides renforcées pour les Français</h2>
                    </a>
                    <div className="share">
                        Partagez
                        <span role="button">
                            <i className="fab fa-facebook-square"></i>
                        </span>
                        <span role="button">
                            <i className="fab fa-twitter"></i>
                        </span>
                    </div>
                </div>
                <div className="cm card--medium">
                    <a href="#" style={{backgroundImage: `url(${info1})`, backgroundColor: 'rgb(0, 0, 0)', }} className="background-container card__background progressive-background link--no-decor">
                        <div className="background">
                            <div class="content">
                                <h2 class="headline link--no-decor b__nudge--bottom-medium">
                                    Revenu minimum, garantie jeunes…Des aides renforcées pour les Français
                                </h2>
                                <div class="btn btn--no-border">Cliquez ici</div>
                            </div>
                        </div>
                    </a>
                </div>
            </li>
        )
    }
}
