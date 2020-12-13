import React, { Component } from 'react'

export default class footer extends Component {
    render() {
        return (
            <section className="donation__footer">
                <div className="l__wrapper">
                    <div className="donation__footer__sections">
                        <div class="footer__section text--body">
                            <h5>Une question ? Contactez-nous.</h5>
                            <p>01 86 95 09 15 / <a class="text--blue--dark link--no-decor" href="mailto:dons@fcc.cd">dons@fcc.cd</a></p>
                        </div>
                        <div class="footer__section text--body">
                            <h5>Suivez Le Front Commun Pour le Congo !</h5>
                            <ul class="list__links list__links--no-decor list__links--svgs">
                                <li><a href="#" target="_blank" rel="noopener noreferrer"><i class="fab fa-facebook-square"></i></a></li>
                                <li><a href="#" target="_blank" rel="noopener noreferrer"><i class="fab fa-twitter"></i></a></li>
                                <li><a href="#" target="_blank" rel="noopener noreferrer"><i class="fab fa-instagram"></i></a></li>
                                <li><a href="#" target="_blank" rel="noopener noreferrer"><i class="fab fa-youtube"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
