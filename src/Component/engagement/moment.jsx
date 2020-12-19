import React, { Component } from 'react'
import Menu from '../../Parts/menu/menu.jsx' 
import Footer from '../../Parts/footer.jsx'
import Banner from '../../Images/news.jpg' 
import { Link } from 'react-router-dom'
import './moment.css'

export default class Moments extends Component {
    render() {
        return (
            <React.Fragment>
                <Menu />
                <div className="btContentWrap btClear">
                    <div className="btContentHolder">
                        <div className="btContent actu">
                            <div className="bt_bb_wrapper">
                                <section style={{backgroundImage: `url(${Banner})`, backgroundPosition: '50% 0px'}} className="bt_bb_section bt_bb_top_spacing_small bt_bb_bottom_spacing_small bt_bb_color_scheme_1 bt_bb_layout_boxed_1200 bt_bb_vertical_align_top bt_bb_background_image bt_bb_parallax">
                                    <div className="bt_bb_port">
                                        <div className="bt_bb_cell">
                                            <div className="bt_bb_cell_inner l__wrapper--slim">
                                                <div data-structure="12" className="bt_bb_row">
                                                    <div className="bt_bb_column col-md-12 col-ms-12 bt_bb_vertical_align_top bt_bb_animation_fade_in animate bt_bb_padding_normal bt_bb_shape_inherit animated">
                                                        <div className="bt_bb_column_content">
                                                            <div className="bt_bb_column_content_inner">
                                                                <div className="bt_bb_separator bt_bb_top_spacing_large bt_bb_border_style_none"></div>
                                                                <header class="bt_bb_headline bt_bb_size_extralarge bt_bb_superheadline"><h1 style={{color: '#fff', fontWeight: '700'}}><span class="bt_bb_headline_content"><span>Grands moments</span></span></h1></header>
                                                                <div class="bt_bb_separator bt_bb_bottom_spacing_medium bt_bb_border_style_none"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                <section className="content">
                                    <article className="l__wrapper--slim b__nudge--bottom-huge">
                                        <h3>Le Canal des idées</h3>
                                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse iusto asperiores reiciendis quas, odio accusamus voluptatem sint odit dolorem praesentium animi excepturi, enim corporis ab ipsa ratione repellendus maiores repellat.</p>
                                        <div className="static-page-overview">
                                            <Link className="static-page-overview__item" to="#" style={{backgroundImage: 'url(https://en-marche.fr/assets/images/urne-vote?cache=56c472e1dec255e3cc0d&fm=pjpg&s=8ce79002f8439f44d35f544b95b77a9a)'}}>
                                                <h2>La Veille des idées</h2>
                                            </Link>

                                            <Link className="static-page-overview__item" to="#" style={{backgroundImage: 'url(https://en-marche.fr/assets/images/larem-contribution-ccc?q=70&cache=9d3aecc6f4a6cea26fca&fm=pjpg&s=852211d24a3499e55a69ca9393ccf4fc)'}}>
                                                <h2>Veille spéciale : COVID-19</h2>
                                            </Link>

                                            <Link className="static-page-overview__item" to="#" style={{backgroundImage: 'url(https://en-marche.fr/assets/images/revolution-livre-instagram?cache=c8db4f395b6716c89e5c&fm=pjpg&s=aa1c7c66d9b38fc0c37e4f47c8912b51)'}}>
                                                <h2>Joseph kabila kabange revolution</h2>
                                            </Link>

                                            <Link className="static-page-overview__item" to="#" style={{backgroundImage: 'url(https://en-marche.fr/assets/images/urne-vote?cache=56c472e1dec255e3cc0d&fm=pjpg&s=8ce79002f8439f44d35f544b95b77a9a)'}}>
                                                <h2>Veille spéciale : COVID-19</h2>
                                            </Link>
                                        </div>
                                    </article>

                                    <article className="l__wrapper--slim b__nudge--bottom-huge">
                                        <h3>Les grands evenements</h3> <br/>
                                        <div className="static-page-overview">
                                            <Link className="static-page-overview__item" to="#" style={{backgroundImage: 'url(https://en-marche.fr/assets/images/urne-vote?cache=56c472e1dec255e3cc0d&fm=pjpg&s=8ce79002f8439f44d35f544b95b77a9a)'}}>
                                                <h2>La Veille des idées</h2>
                                            </Link>

                                            <Link className="static-page-overview__item" to="#" style={{backgroundImage: 'url(https://en-marche.fr/assets/images/urne-vote?cache=56c472e1dec255e3cc0d&fm=pjpg&s=8ce79002f8439f44d35f544b95b77a9a)'}}>
                                                <h2>Veille spéciale : COVID-19</h2>
                                            </Link>

                                            <Link className="static-page-overview__item" to="#" style={{backgroundImage: 'url(https://en-marche.fr/assets/images/urne-vote?cache=56c472e1dec255e3cc0d&fm=pjpg&s=8ce79002f8439f44d35f544b95b77a9a)'}}>
                                                <h2>Veille spéciale : COVID-19</h2>
                                            </Link>

                                            <Link className="static-page-overview__item" to="#" style={{backgroundImage: 'url(https://en-marche.fr/assets/images/urne-vote?cache=56c472e1dec255e3cc0d&fm=pjpg&s=8ce79002f8439f44d35f544b95b77a9a)'}}>
                                                <h2>Veille spéciale : COVID-19</h2>
                                            </Link>
                                        </div>
                                    </article>
                                </section>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
            </React.Fragment>
        )
    }
}
