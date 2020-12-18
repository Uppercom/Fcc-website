import React, { Component } from 'react'
import API from '../../Helpers/config.js'
import { sliceText } from '../../Helpers/functions.js'
import axios from 'axios'
import Skeleton from 'react-loading-skeleton'
import Menu from '../../Parts/menu/menu.jsx' 
import Banner from '../../Images/news.jpg' 
import Footer from '../../Parts/footer.jsx'
import { Link } from 'react-router-dom'
import { CategoryConsumer } from '../../Helpers/context'


export default class newsCategory extends Component {
    constructor(props) {
        super(props)
        this.state = {
            articles : {
                datas: [],
                flag: false,
                isLoading: false,
                message: null,
                no_datas: false
            },
            categoryId: this.props.match.params.id
        }
    }

    getArticles() {
        this.setState({ articles : {isLoading : true}})
        axios
            .get(`${API}/api/admin/news/5`)
            .then(
                (res) => {
                    if (res.data.state) {
                        this.setState({
                            articles : {
                                flag: true,
                                isLoading: false,
                                datas : res.data.datas,
                                message: res.data.message,
                                no_datas: false
                            },
                        })
                    } else {
                        this.setState({
                            articles : {
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
        this.getArticles()
    }

    render() {
        var { articles } = this.state
        return (
            <CategoryConsumer>
                {
                    value => {
                        console.log(value)
                        return (
                            <React.Fragment>
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
                                                                                <header class="bt_bb_headline bt_bb_size_extralarge bt_bb_superheadline"><h1 style={{color: '#fff', fontWeight: '700'}}><span class="bt_bb_headline_content"><span>Parcourez par categorie</span></span></h1></header>
                                                                                <div class="bt_bb_separator bt_bb_bottom_spacing_medium bt_bb_border_style_none"></div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </section>
                                                <section className="bt_bb_section bt_bb_top_spacing_medium bt_bb_bottom_spacing_large bt_bb_color_scheme_11 bt_bb_layout_boxed_1200 bt_bb_vertical_align_top">
                                                    <div className="bt_bb_port">
                                                        <div className="bt_bb_cell">
                                                            <div className="bt_bb_cell_inner">
                                                                <div className="bt_bb_row" data-structure="12">
                                                                    <div data-width="12" className="bt_bb_column col-md-12 col-ms-12 bt_bb_align_left bt_bb_vertical_align_top bt_bb_padding_normal">
                                                                        <div className="bt_bb_column_content">
                                                                            <div className="bt_bb_column_content_inner">
                                                                                <div className="bt_bb_masonry_post_grid bt_bb_grid_container bt_bb_columns_3 bt_bb_gap_normal" data-columns="3">
                                                                                    <div class="bt_bb_post_grid_filter">
                                                                                        <Link to="/actualites/liste">
                                                                                            <span style={{fontWeight: '400'}} class="bt_bb_post_grid_filter_item" data-category="">
                                                                                                Toute l'actualité
                                                                                            </span>
                                                                                        </Link>
                                                                                        {value.categories.length > 0 && 
                                                                                         value.categories.map((item, key) =>
                                                                                            <Link to={"/actualites/category/"+ item._id}>
                                                                                                <span style={{fontWeight: '400'}} class={this.state.categoryId == item._id ? "bt_bb_post_grid_filter_item active" : "bt_bb_post_grid_filter_item"} data-category="achievement">
                                                                                                    {item.name}
                                                                                                </span>
                                                                                            </Link>
                                                                                         )
                                                                                        }
                                                                                        
                                                                                    </div>
                                                                                    <ul className="l__row l__row--wrap l__row--top space--20-0 l__row--h-stretch-around l__mobile--col">
                                                                                        {
                                                                                            articles.flag && articles.datas.length > 0 ?
                                                                                            articles.datas.map((item, key) =>
                                                                                                <li className="card card--2 card--2--article l__col--bottom">
                                                                                                    <div className="content-block m-b-xs-30">
                                                                                                        <Link className="align-self-center" to="#">
                                                                                                            <img class="img-fluid m-r-xs-30" src={item.cover} alt="carona-top" />
                                                                                                            <div class="grad-overlay"></div>
                                                                                                        </Link>
                                                                                                        <div className="media-caption grad-overlay">
                                                                                                            <div className="caption-content">
                                                                                                                <h3 class="axil-post-title hover-line hover-line">
                                                                                                                    <Link to={`/actualites/${item._id}`}>{sliceText(item.title, 50)}</Link>
                                                                                                                </h3>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </li>
                                                                                            )
                                                                                            :
                                                                                            <p></p>
                                                                                        }

                                                                                        {articles.isLoading &&
                                                                                            <React.Fragment>
                                                                                                <li className="card card--2 card--2--article l__col--bottom">
                                                                                                    <Skeleton height={200}/>
                                                                                                    <Skeleton height={20} width={240}/>
                                                                                                    <Skeleton height={20} width={150}/>
                                                                                                </li>
                                                                                                <li className="card card--2 card--2--article l__col--bottom">
                                                                                                    <Skeleton height={200}/>
                                                                                                    <Skeleton height={20} width={240}/>
                                                                                                    <Skeleton height={20} width={150}/>
                                                                                                </li>
                                                                                                <li className="card card--2 card--2--article l__col--bottom">
                                                                                                    <Skeleton height={200}/>
                                                                                                    <Skeleton height={20} width={240}/>
                                                                                                    <Skeleton height={20} width={150}/>
                                                                                                </li>
                                                                                                <li className="card card--2 card--2--article l__col--bottom">
                                                                                                    <Skeleton height={200}/>
                                                                                                    <Skeleton height={20} width={240}/>
                                                                                                    <Skeleton height={20} width={150}/>
                                                                                                </li>
                                                                                            </React.Fragment>
                                                                                        }
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
                            </React.Fragment>
                        )
                    }
                }
                
            </CategoryConsumer>
        )
    }
}
