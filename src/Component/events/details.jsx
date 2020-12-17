import React, { Component } from 'react'
import API from '../../Helpers/config.js'
import { sliceText, customDateLetters } from '../../Helpers/functions.js'
import axios from 'axios'
import Skeleton from 'react-loading-skeleton'
import Menu from '../../Parts/menu/menu.jsx' 
import Banner from '../../Images/news.jpg' 
import Footer from '../../Parts/footer.jsx'
import { Link } from 'react-router-dom'
import Item from 'antd/lib/list/Item'

export default class eventDetails extends Component {
    constructor() {
        super()
        this.state = {
            event : {
                datas: null,
                flag: false,
                isLoading: false,
                message: null,
                no_datas: false
            }
        }
    }

    getDetails() {
        var id = this.props.match.params.id;
        this.setState({ event : {isLoading : true}})
        axios
            .get(`${API}/api/events/details/${id}`)
            .then(
                (res) => {
                    var state = res.data.state
                    this.setState({
                        event : {
                            datas: state ? res.data.datas : [],
                            flag: state,
                            isLoading: false,
                            message: state ? res.data.message : null,
                            no_datas: !state
                        },
                    })
                }
            )
    }

    componentDidMount() {
        this.getDetails()
    }

    render() {
        var { event } = this.state
        console.log(event);
        return (
            <div>
                <Menu />
                <div className="btContentWrap btClear">
                    <div className="btContentHolder">
                        <div className="btContent actu">
                            <div className="bt_bb_wrapper">
                                <section className="bt_bb_section bt_bb_top_spacing_small bt_bb_bottom_spacing_large bt_bb_color_scheme_1 bt_bb_layout_boxed_1200 bt_bb_vertical_align_top bt_bb_background_image bt_bb_parallax">
                                    <div className="bt_bb_port">
                                        <div className="bt_bb_cell">
                                            <div className="bt_bb_cell_inner">
                                                {event.flag &&
                                                    <React.Fragment>
                                                        <div data-structure="12" className="bt_bb_row">
                                                            <div className="bt_bb_column col-md-12 col-ms-12 bt_bb_align_center bt_bb_vertical_align_top bt_bb_animation_fade_in animate bt_bb_padding_normal bt_bb_shape_inherit animated">
                                                                <div className="bt_bb_column_content">
                                                                    <div className="bt_bb_column_content_inner">
                                                                        <div style={{height: '500px', overflow: 'hidden', width: '100%'}} className="bt_bb_image bt_bb_shape_square bt_bb_align_inherit bt_bb_hover_style_zoom-in bt_bb_content_display_always bt_bb_content_align_middle bt_bb_content_exists bt_bb_hidden_xs bt_bb_hidden_ms bt_bb_hidden_sm">
                                                                            <span>
                                                                                <img style={{width: '100%'}} src={event.datas.cover} data-full_image_src={event.datas.cover} data-image_src={event.datas.cover} title="video_background" alt={event.datas.cover} class="btLazyLoadImage btLazyLoaded" />
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="bt_bb_row" data-structure="8-4">
                                                            <div class="bt_bb_column col-md-12 col-ms-12 bt_bb_align_left bt_bb_vertical_align_middle bt_bb_animation_fade_in animate bt_bb_padding_20 bt_bb_shape_inherit animated" data-width="12">
                                                                <div class="bt_bb_column_content">
                                                                    <div class="bt_bb_column_content_inner">
                                                                        <div class="bt_bb_separator bt_bb_bottom_spacing_normal bt_bb_border_style_none"></div>
                                                                        <header class="bt_bb_headline bt_bb_color_scheme_15 bt_bb_dash_none bt_bb_size_large bt_bb_superheadline bt_bb_align_inherit"><h3><span class="bt_bb_headline_content"><span>{event.datas.title}</span></span></h3></header>
                                                                        <div class="bt_bb_separator bt_bb_bottom_spacing_normal bt_bb_border_style_none"></div>
                                                                        <div class="bt_bb_row_inner bt_bb_shape_inherit" data-structure="4-8">
                                                                            <div class="bt_bb_column_inner col-md-4 col-ms-12 bt_bb_align_left bt_bb_vertical_align_top" data-width="4">
                                                                                <div class="bt_bb_column_inner_content">
                                                                                    <div class="bt_bb_service bt_bb_style_borderless bt_bb_size_normal bt_bb_shape_circle bt_bb_align_left bt_bb_title_size_normal">
                                                                                        <span style={{marginTop: '.14em', fontSize: '1.9em'}} class="bt_bb_icon_holder">
                                                                                            <i class="far fa-calendar-alt"></i>
                                                                                        </span>
                                                                                        <div class="bt_bb_service_content">
                                                                                            <div class="bt_bb_service_content_text">{customDateLetters(event.datas.updatedAt).jour} {customDateLetters(event.datas.updatedAt).mois} {customDateLetters(event.datas.updatedAt).year}<br />{customDateLetters(event.datas.updatedAt).heure}.{customDateLetters(event.datas.updatedAt).minute}h</div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="bt_bb_separator bt_bb_bottom_spacing_normal bt_bb_border_style_none bt_bb_hidden_sm bt_bb_hidden_md bt_bb_hidden_lg"></div>
                                                                                </div>
                                                                            </div>
                                                                            <div class="bt_bb_column_inner col-md-8 col-ms-12 bt_bb_align_left bt_bb_vertical_align_top" data-width="8">
                                                                                <div class="bt_bb_column_inner_content">
                                                                                    <div class="bt_bb_service bt_bb_style_borderless bt_bb_size_normal bt_bb_shape_circle bt_bb_align_left bt_bb_title_size_normal">
                                                                                        <span style={{marginTop: '.14em', fontSize: '1.9em'}} class="bt_bb_icon_holder">
                                                                                            <i class="fas fa-map-marker-alt"></i>
                                                                                        </span>
                                                                                        <div class="bt_bb_service_content">
                                                                                            <div class="bt_bb_service_content_text">{event.datas.location.town}, {event.datas.location.region}<br />{event.datas.location.street}</div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="bt_bb_separator bt_bb_bottom_spacing_normal bt_bb_border_style_none"></div>
                                                                        <div class="bt_bb_text"><p>{event.datas.describe}</p>
                                                                    </div>
                                                                    <div class="bt_bb_separator bt_bb_bottom_spacing_medium bt_bb_border_style_none"></div>
                                                                    {/* <a style={{color: '#fff'}} class="btn btn--red b__nudge--right-extra-large" href="/don">Je veux participer</a> */}
                                                                </div>
                                                            </div></div>
                                                        </div>
                                                    </React.Fragment>
                                                }

                                                {event.isLoading &&
                                                    <React.Fragment>
                                                        <Skeleton height={450} width={1200} /><br/>
                                                        <Skeleton height={20} width={100}/> <br/>
                                                        <Skeleton height={20} width={600}/> <br/>
                                                        <Skeleton height={20} width={200}/> <br/>
                                                    </React.Fragment>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}
