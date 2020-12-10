import React, { Component } from 'react'
import API from '../../Helpers/config.js'
import { sliceText } from '../../Helpers/functions.js'
import axios from 'axios'
import Skeleton from 'react-loading-skeleton'
import Menu from '../../Parts/menu/menu.jsx' 
import Banner from '../../Images/news.jpg' 
import Footer from '../../Parts/footer.jsx'
import { Link } from 'react-router-dom'

export default class eventDetails extends Component {
    render() {
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
                                                <div data-structure="12" className="bt_bb_row">
                                                    <div className="bt_bb_column col-md-12 col-ms-12 bt_bb_align_center bt_bb_vertical_align_top bt_bb_animation_fade_in animate bt_bb_padding_normal bt_bb_shape_inherit animated">
                                                        <div className="bt_bb_column_content">
                                                            <div className="bt_bb_column_content_inner">
                                                                <div style={{height: '500px', overflow: 'hidden'}} className="bt_bb_image bt_bb_shape_square bt_bb_align_inherit bt_bb_hover_style_zoom-in bt_bb_content_display_always bt_bb_content_align_middle bt_bb_content_exists bt_bb_hidden_xs bt_bb_hidden_ms bt_bb_hidden_sm">
                                                                    <span>
                                                                        <img src="http://vox-populi.bold-themes.com/party/wp-content/uploads/sites/3/2019/02/video_background-1280x550.jpg" data-full_image_src="http://vox-populi.bold-themes.com/party/wp-content/uploads/sites/3/2019/02/video_background.jpg" data-image_src="http://vox-populi.bold-themes.com/party/wp-content/uploads/sites/3/2019/02/video_background-1280x550.jpg" title="video_background" alt="http://vox-populi.bold-themes.com/party/wp-content/uploads/sites/3/2019/02/video_background-1280x550.jpg" class="btLazyLoadImage btLazyLoaded" />
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
                                                                <header class="bt_bb_headline bt_bb_color_scheme_15 bt_bb_dash_none bt_bb_size_large bt_bb_superheadline bt_bb_align_inherit"><h3><span class="bt_bb_headline_content"><span>Présentation des binômes candidats pour l'animation locale</span></span></h3></header>
                                                                <div class="bt_bb_separator bt_bb_bottom_spacing_normal bt_bb_border_style_none"></div>
                                                                <div class="bt_bb_row_inner bt_bb_shape_inherit" data-structure="4-8">
                                                                    <div class="bt_bb_column_inner col-md-4 col-ms-12 bt_bb_align_left bt_bb_vertical_align_top" data-width="4">
                                                                        <div class="bt_bb_column_inner_content">
                                                                            <div class="bt_bb_service bt_bb_style_borderless bt_bb_size_normal bt_bb_shape_circle bt_bb_align_left bt_bb_title_size_normal">
                                                                                <span class="bt_bb_icon_holder">
                                                                                <svg
                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                    width="35"
                                                                                    height="37"
                                                                                    fill="none"
                                                                                    stroke="currentColor"
                                                                                    strokeLinecap="round"
                                                                                    strokeLinejoin="round"
                                                                                    strokeWidth="2"
                                                                                    className="feather feather-calendar"
                                                                                    viewBox="0 0 24 24"
                                                                                    >
                                                                                    <rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect>
                                                                                    <path d="M16 2L16 6"></path>
                                                                                    <path d="M8 2L8 6"></path>
                                                                                    <path d="M3 10L21 10"></path>
                                                                                </svg>
                                                                                </span>
                                                                                <div class="bt_bb_service_content">
                                                                                    <div class="bt_bb_service_content_text">22 August 2020<br />7.30 PM</div>
                                                                                </div>
                                                                            </div>
                                                                            <div class="bt_bb_separator bt_bb_bottom_spacing_normal bt_bb_border_style_none bt_bb_hidden_sm bt_bb_hidden_md bt_bb_hidden_lg"></div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="bt_bb_column_inner col-md-8 col-ms-12 bt_bb_align_left bt_bb_vertical_align_top" data-width="8">
                                                                        <div class="bt_bb_column_inner_content">
                                                                            <div class="bt_bb_service bt_bb_style_borderless bt_bb_size_normal bt_bb_shape_circle bt_bb_align_left bt_bb_title_size_normal">
                                                                            <span class="bt_bb_icon_holder">
                                                                                    <svg
                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                        width="35"
                                                                                        height="37"
                                                                                        fill="none"
                                                                                        stroke="currentColor"
                                                                                        strokeLinecap="round"
                                                                                        strokeLinejoin="round"
                                                                                        strokeWidth="2"
                                                                                        className="feather feather-map-pin"
                                                                                        viewBox="0 0 24 24"
                                                                                        >
                                                                                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"></path>
                                                                                        <circle cx="12" cy="10" r="3"></circle>
                                                                                    </svg>
                                                                                </span>
                                                                                <div class="bt_bb_service_content">
                                                                                    <div class="bt_bb_service_content_text">Benefit Teragram Hall<br />395 Nostrand Ave, Brooklyn, NY</div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="bt_bb_separator bt_bb_bottom_spacing_normal bt_bb_border_style_none"></div>
                                                                <div class="bt_bb_text"><p>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and bring to the table win-win survival strategies to ensure proactive domination.</p><p>Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps.</p>
                                                            </div>
                                                            <div class="bt_bb_separator bt_bb_bottom_spacing_medium bt_bb_border_style_none"></div>
                                                            <a style={{color: '#fff'}} class="btn btn--red b__nudge--right-extra-large" href="/don">Je veux participer</a>
                                                        </div>
                                                    </div></div>
                                                </div>
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
