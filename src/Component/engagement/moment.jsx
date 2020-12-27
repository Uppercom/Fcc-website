import React, { Component } from 'react'
import API from '../../Helpers/config.js'
import { sliceText } from '../../Helpers/functions.js'
import axios from 'axios'
import Skeleton from 'react-loading-skeleton'
import Menu from '../../Parts/menu/menu.jsx' 
import Footer from '../../Parts/footer.jsx'
import Banner from '../../Images/news.jpg' 
import { Link } from 'react-router-dom'
import Empty from '../../Parts/empty.jsx'
import './moment.css'

export default class Moments extends Component {
    constructor(props){
        super(props)
        this.state = {
            moments : {
                datas: [],
                flag: false,
                isLoading: false,
                message: null,
                no_datas: false
            }
        }
    }

    getMoments(){
        this.setState({ moments : {isLoading : true}})
        axios
            .get(`${API}/api/moments/gets`)
            .then(
                (res) => {
                    if (res.data.state) {
                        this.setState({
                            moments : {
                                flag: true,
                                isLoading: false,
                                datas : res.data.datas,
                                message: res.data.message,
                                no_datas: false
                            },
                        })
                    } else {
                        this.setState({
                            moments : {
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

    componentDidMount(){
        this.getMoments()
    }

    render() {
        var { moments } = this.state
        return (
            <React.Fragment>
                <Menu />
                <div className="btContentWrap btClear">
                    <div className="btContentHolder">
                        <div className="btContent actu">
                            <div className="bt_bb_wrapper">
                                <section style={{backgroundImage: `url(${Banner})`, backgroundPosition: '50% 0px'}} className="bt_bb_section bt_bb_top_spacing_medium bt_bb_bottom_spacing_large bt_bb_color_scheme_1 bt_bb_layout_boxed_1200 bt_bb_vertical_align_top bt_bb_background_image bt_bb_parallax">
                                    <div className="bt_bb_port">
                                        <div className="bt_bb_cell">
                                            <div className="bt_bb_cell_inner l__wrapper--slim">
                                                <div data-structure="12" className="bt_bb_row">
                                                    <div className="bt_bb_column col-md-12 bt_bb_align_center col-ms-12 bt_bb_vertical_align_top bt_bb_animation_fade_in animate bt_bb_padding_normal bt_bb_shape_inherit animated">
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

                                <section className="content-2">
                                    <article className="l__wrapper b__nudge--bottom-huge">
                                        <h3>Grands événements</h3> <br/>
                                        <div className="static-page-overview">
                                            {moments.flag && moments.datas.length > 0 ?
                                             moments.datas.map((item, key) => 
                                                <Link key={item._id} title={item.title} className="static-page-overview__item" to={`/grands-moment/${item._id}`} style={{backgroundImage: `url(${item.video.cover})`}}>
                                                    <h2>{sliceText(item.title, 50)}</h2>
                                                    <div className="time-indication">{item.video.time}</div>
                                                </Link>
                                            ) : <p></p>}

                                            
                                        </div>

                                        { moments.no_datas && <Empty message="Aucun evenement n'est disponible" /> }
                                    </article>
                                    {moments.isLoading &&
                                        <article className="flex l__wrapper b__nudge--bottom-huge">
                                            <li style={{marginRight: '15px'}} className="card card--2 card--2--article l__col--bottom">
                                                <Skeleton height={200}/>
                                            </li>
                                            <li style={{marginRight: '15px'}} className="card card--2 card--2--article l__col--bottom">
                                                <Skeleton height={200}/>
                                            </li>
                                            <li style={{marginRight: '15px'}} className="card card--2 card--2--article l__col--bottom">
                                                <Skeleton height={200}/>
                                            </li>
                                            <li style={{marginRight: '15px'}} className="card card--2 card--2--article l__col--bottom">
                                                <Skeleton height={200}/>
                                            </li>
                                        </article>
                                    }

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
