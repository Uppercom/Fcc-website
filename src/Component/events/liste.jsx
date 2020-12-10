import React, { Component } from 'react'
import API from '../../Helpers/config.js'
import { sliceText } from '../../Helpers/functions.js'
import axios from 'axios'
import Skeleton from 'react-loading-skeleton'
import Menu from '../../Parts/menu/menu.jsx' 
import Banner from '../../Images/news.jpg' 
import Footer from '../../Parts/footer.jsx'
import { Link } from 'react-router-dom'

export default class eventsListe extends Component {
    constructor() {
        super()
        this.state = {
            events : {
                datas: [],
                flag: false,
                isLoading: false,
                message: null,
                no_datas: false
            }
        }
    }

    getEvents(){
        this.setState({ events : {isLoading : true}})
        axios
            .get(`${API}/api/events`)
            .then(
                (res) => {
                    if (res.data.state) {
                        this.setState({
                            events : {
                                flag: true,
                                isLoading: false,
                                datas : res.data.datas,
                                message: res.data.message,
                                no_datas: false
                            },
                        })
                    } else {
                        this.setState({
                            events : {
                                flag: true,
                                isLoading: false,
                                datas : [],
                                message: res.data.message,
                                no_datas: true
                            },
                        })
                    }
                }
            )
    }

    componentDidMount() {
        this.getEvents()
    }

    render(){
        var { events } = this.state
        console.log(events);
        return (
            <div>
                <Menu />
                <div className="btContentWrap btClear">
                    <div className="btContentHolder">
                        <div className="btContent actu">
                            <div className="bt_bb_wrapper">
                                <section style={{backgroundImage: `url(${Banner})`, backgroundPosition: '50% 0px'}} className="bt_bb_section bt_bb_top_spacing_large bt_bb_bottom_spacing_large bt_bb_color_scheme_1 bt_bb_layout_boxed_1200 bt_bb_vertical_align_top bt_bb_background_image bt_bb_parallax">
                                    <div className="bt_bb_port">
                                        <div className="bt_bb_cell">
                                            <div className="bt_bb_cell_inner">
                                                <div data-structure="12" className="bt_bb_row">
                                                    <div className="bt_bb_column col-md-12 col-ms-12 bt_bb_align_center bt_bb_vertical_align_top bt_bb_animation_fade_in animate bt_bb_padding_normal bt_bb_shape_inherit animated">
                                                        <div className="bt_bb_column_content">
                                                            <div className="bt_bb_column_content_inner">
                                                                <div className="bt_bb_separator bt_bb_top_spacing_large bt_bb_border_style_none"></div>
                                                                <header class="bt_bb_headline bt_bb_size_extralarge bt_bb_superheadline"><h1 style={{color: '#fff'}}><span class="bt_bb_headline_content"><span>Participez aux événements</span></span><span style={{marginTop: '.3em'}} class="bt_bb_headline_superheadline">Les événements sont ouverts à tous, adhérents ou non.</span></h1></header>
                                                                <div class="bt_bb_separator bt_bb_bottom_spacing_medium bt_bb_border_style_none"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                <section style={{marginBottom: '2em'}} className="bt_bb_section bt_bb_color_scheme_1 bt_bb_layout_wide bt_bb_vertical_align_top bt_bb_background_image bt_bb_parallax">
                                    <div className="bt_bb_port">
                                        <div className="bt_bb_cell">
                                            <div className="bt_bb_cell_inner">
                                                <div className="bt_bb_row bt_bb_column_gap_0" data-structure="6-6">
                                                    <div className="bt_bb_column col-md-12 col-sm-12 bt_bb_align_left bt_bb_vertical_align_middle bt_bb_animation_fade_in animate bt_bb_padding_80 bt_bb_shape_inherit animated" data-width="12">
                                                        <div className="bt_bb_column_content">
                                                            <div className="bt_bb_column_content_inner">
                                                                <div class="bt_bb_separator bt_bb_top_spacing_medium bt_bb_bottom_spacing_extra_small"></div>
                                                                <div class="bt_bb_single_event">
                                                                    <div class="bt_bb_single_event">
                                                                        <div style={{background: "#f6f6f6", padding: "1.5em 2em"}} class="bt_bb_single_event_content">
                                                                            <div style={{marginTop: '-3em'}} class="bt_bb_single_event_date">
                                                                                <div class="bt_bb_single_event_day">04</div>
                                                                                <div class="bt_bb_single_event_month">September</div>
                                                                                <div class="bt_bb_single_event_time">19.30h</div>
                                                                            </div>
                                                                            <div class="bt_bb_single_event_details">
                                                                                <div class="bt_bb_single_event_content_title">Présentation des binômes candidats pour l'animation locale</div>
                                                                                <div class="bt_bb_single_event_content_description">Benefit Teragram Hall<br /> 395 Nostrand Ave, Brooklyn. NY</div> <br/>
                                                                                <a style={{color: '#fff'}} class="btn btn--red b__nudge--right-extra-large" href="/don">Voir plus</a>
                                                                            </div>
                                                                        </div>
                                                                        <div class="bt_bb_separator bt_bb_top_spacing_small bt_bb_bottom_spacing_extra_small"></div>
                                                                        <div style={{background: "#f6f6f6", padding: "1.5em 2em"}} class="bt_bb_single_event_content">
                                                                            <div style={{marginTop: '-3em'}} class="bt_bb_single_event_date">
                                                                                <div class="bt_bb_single_event_day">04</div>
                                                                                <div class="bt_bb_single_event_month">September</div>
                                                                                <div class="bt_bb_single_event_time">19.30h</div>
                                                                            </div>
                                                                            <div class="bt_bb_single_event_details">
                                                                                <div class="bt_bb_single_event_content_title">Présentation des binômes candidats pour l'animation locale</div>
                                                                                <div class="bt_bb_single_event_content_description">Benefit Teragram Hall<br /> 395 Nostrand Ave, Brooklyn. NY</div> <br/>
                                                                                <a style={{color: '#fff'}} class="btn btn--red b__nudge--right-extra-large" href="/don">Voir plus</a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        )
    }
}