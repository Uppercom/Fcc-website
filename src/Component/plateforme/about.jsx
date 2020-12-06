import React, { Component } from 'react'
import Menu from '../../Parts/menu/menu.jsx' 
import Banner from '../../Images/hero_about_us.jpg' 
import Footer from '../../Parts/footer.jsx' 

export default class about extends Component {
    render() {
        return (
            <div>
                <Menu />
                <div className="btContentWrap btClear">
                    <div className="btContentHolder">
                        <div className="btContent">
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
                                                                <header class="bt_bb_headline bt_bb_dash_top bt_bb_size_huge bt_bb_superheadline bt_bb_align_inherit"><h1 style={{color: '#fff'}}><span class="bt_bb_headline_superheadline">Histoire &amp; politiques</span><span class="bt_bb_headline_content"><span>La plateforme</span></span></h1></header>
                                                                <div class="bt_bb_separator bt_bb_bottom_spacing_medium bt_bb_border_style_none"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                <section className="bt_bb_section bt_bb_top_spacing_large bt_bb_bottom_spacing_large bt_bb_color_scheme_14 bt_bb_layout_boxed_1200 bt_bb_vertical_align_top">
                                    <div className="bt_bb_port">
                                        <div className="bt_bb_cell">
                                            <div className="bt_bb_cell_inner">
                                                <div className="bt_bb_row bt_bb_column_gap_35" data-structure="6-6">
                                                    <div data-width="6" className="bt_bb_column col-md-6 col-sm-12 bt_bb_align_left bt_bb_vertical_align_top bt_bb_animation_fade_in animate bt_bb_padding_normal bt_bb_shape_inherit animated">
                                                        <div className="bt_bb_column_content">
                                                            <div className="bt_bb_column_content_inner">
                                                                <div data-colomuns="2" style={{width: '566px'}} className="bt_bb_masonry_image_grid bt_bb_grid_container bt_bb_columns_2 bt_bb_gap_large">
                                                                    <div data-colomuns="2" style={{position: 'relative', height: '624px'}} className="bt_bb_masonry_post_image_content masonry">
                                                                        <div className="bt_bb_grid_sizer masonry-brick"></div>
                                                                        <div className="bt_bb_grid_item bt_bb_tile_format_21 masonry-brick" data-hw="0.66666666666667" data-src={Banner} data-src-full={Banner} style={{height: '417px', position: 'absolute', left: '0%', top: '0px'}}>
                                                                            <div data-hw="0.66666666666667" className="bt_bb_grid_item_inner">
                                                                                <div className="bt_bb_grid_item_inner_image">
                                                                                    <img src={Banner} alt="" srcset=""/>
                                                                                </div>
                                                                                <div className="bt_bb_grid_item_inner_content"></div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div data-width="6" className="bt_bb_column col-md-6 col-sm-12 bt_bb_align_left bt_bb_animation_fade_in animate bt_bb_padding_normal bt_bb_shape_inherit animated">
                                                        <div class="bt_bb_column_content">
                                                            <div class="bt_bb_column_content_inner">
                                                                <header class="bt_bb_headline bt_bb_dash_none bt_bb_size_large bt_bb_subheadline bt_bb_align_inherit">
                                                                    <h3><span class="bt_bb_headline_content"><span>Principes directeurs</span></span></h3>
                                                                    <div class="bt_bb_headline_subheadline">Nous fournissons tout un ensemble de services pour assurer une croissance stable</div>
                                                                </header>
                                                                <div class="bt_bb_separator bt_bb_bottom_spacing_normal bt_bb_border_style_none"></div>
                                                                <div class="bt_bb_text">
                                                                    <ul>
                                                                        <li>Prioritizing the most vulnerable</li>
                                                                        <li>Lowering health care costs</li>
                                                                        <li>Sensible immigration reform</li>
                                                                        <li>Promoting and working for democracy and diversity</li>
                                                                        <li>Supporting our veterans and military families</li>
                                                                        <li>Guaranteeing Civil Rights</li>
                                                                        <li>Guaranteeing Women’s Rights</li>
                                                                        <li>Building 21st Century Infrastructure</li>
                                                                        <li>Fostering a Manufacturing Renaissance</li>
                                                                        <li>Creating Good-Paying Clean Energy Jobs</li>
                                                                    </ul>
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
