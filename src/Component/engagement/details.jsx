import React, { Component } from 'react'
import Player from './player.jsx'
import API from '../../Helpers/config.js'
import { sliceText, customDateLetters } from '../../Helpers/functions.js'
import axios from 'axios'
import Skeleton from 'react-loading-skeleton'
import Menu from '../../Parts/menu/menu.jsx' 
import Banner from '../../Images/news.jpg' 
import Footer from '../../Parts/footer.jsx'
import { Link } from 'react-router-dom'
import Item from 'antd/lib/list/Item'
import './moment.css'

export default class details extends Component {
    constructor(props) {
        super(props)
        this.state = {
            moment : {
                datas: [],
                flag: false,
                isLoading: false,
                message: null,
                no_datas: false
            },
            simular : {
                datas: [],
                flag: false,
                isLoading: false,
                message: null,
                no_datas: false
            },
        }
    }

    details(id){
        this.setState({ moment : {isLoading : true}})
        axios
            .get(`${API}/api/moments/details/${id}`)
            .then(
                (res) => {
                    if (res.data.state) {
                        this.setState({
                            moment : {
                                flag: true,
                                isLoading: false,
                                datas : res.data.datas,
                                message: res.data.message,
                                no_datas: false
                            },
                        })
                    } else {
                        this.setState({
                            moment : {
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

    simular(id){
        this.setState({ simular : {isLoading : true}})
        axios
            .get(`${API}/api/moments/similar/${id}/6`)
            .then(
                (res) => {
                    if (res.data.state) {
                        this.setState({
                            simular : {
                                flag: true,
                                isLoading: false,
                                datas : res.data.datas,
                                message: res.data.message,
                                no_datas: false
                            },
                        })
                    } else {
                        this.setState({
                            simular : {
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
        var id = this.props.match.params.id;
        this.details(id)
        this.simular(id)
    }

    handleVideo(id) {
        this.details(id)
        this.simular(id)
    }

    render() {
        const { moment, simular } = this.state
        return (
            <div>
                <Menu />
                
                <div className="flex">
                    <div class="player-content">
                        {moment.flag && <Player poster={moment.datas.video.cover} src={moment.datas.video.link} />}
                        {moment.isLoading && <Skeleton height={500} width={860} />}
                        <div style={{padding: "4em"}}>
                            <h4 style={{fontWeight: "600", fontSize: "2em"}}>
                                {moment.flag && moment.datas.title}
                                {moment.isLoading && <Skeleton width={450} height={15} />}
                            </h4>
                            <p>
                                {moment.flag && moment.datas.content}
                                {moment.isLoading && <Skeleton count={3} />}
                            </p>
                            {moment.flag && 
                            <div class="btShareColumn">
                                <div class="bt_bb_icon btIcoFacebook bt_bb_style_filled bt_bb_size_xsmall bt_bb_shape_circle">
                                    <a href="https://www.facebook.com/sharer/sharer.php?u=http://vox-populi.bold-themes.com/party/2018/01/10/veterans-day-fundraiser/" target="_self" title="Share on Facebook" class="bt_bb_icon_holder link--no-decor">
                                        <i class="fab fa-facebook-f"></i>
                                    </a>
                                </div>
                                <div class="bt_bb_icon btIcoTwitter bt_bb_style_filled bt_bb_size_xsmall bt_bb_shape_circle">
                                    <a href="https://www.facebook.com/sharer/sharer.php?u=http://vox-populi.bold-themes.com/party/2018/01/10/veterans-day-fundraiser/" target="_self" title="Share on Facebook" class="bt_bb_icon_holder link--no-decor">
                                        <i class="fab fa-twitter"></i>
                                    </a>
                                </div>
                                <div class="bt_bb_icon btIcoInstagram bt_bb_style_filled bt_bb_size_xsmall bt_bb_shape_circle">
                                    <a href="https://www.facebook.com/sharer/sharer.php?u=http://vox-populi.bold-themes.com/party/2018/01/10/veterans-day-fundraiser/" target="_self" title="Share on Facebook" class="bt_bb_icon_holder link--no-decor">
                                        <i class="fab fa-instagram"></i>
                                    </a>
                                </div>
                            </div>}
                        </div>

                    </div>
                    <div className="series">
                        {simular.flag && simular.datas.length > 0 ? 
                         simular.datas.map((item, key) => 
                            <div className="video-single flex">
                                <div className="video-title">
                                    {sliceText(item.title, 100)}
                                </div>
                                
                                <div className="video-content">
                                    <div style={{backgroundImage: `url(${item.video.cover})`}} className="video-cover">
                                        <div onClick={() => { this.handleVideo(item._id) }} className="video-button-play">
                                            <svg class="SVGInline-svg SVGInline--cleaned-svg d:b-svg c:white-svg w:4-svg h:4-svg w:7-svg h:7-svg" fill="currentColor" style={{width: "3em", color: "#fff"}} x="0" y="0" viewBox="0 0 200 200">
                                                <polygon points="70.993,60.347 153.398,102.384 70.993,144.42   "></polygon>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="video-timer">
                                        {item.video.time}
                                    </div>
                                </div>
                            </div>
                         ) : <p></p>}

                         {simular.isLoading && 
                            <React.Fragment>
                                <div className="video-single flex">
                                    <div className="video-title">
                                        <Skeleton height={14} width={200}/>
                                        <Skeleton height={14} width={180}/>
                                        <Skeleton height={14} width={160}/>
                                    </div>
                                    
                                    <div className="video-content">
                                        <Skeleton width={206} height={128}/>
                                    </div>
                                </div>

                                <div className="video-single flex">
                                    <div className="video-title">
                                        <Skeleton height={14} width={200}/>
                                        <Skeleton height={14} width={180}/>
                                        <Skeleton height={14} width={160}/>
                                    </div>

                                    <div className="video-content">
                                        <Skeleton width={206} height={128}/>
                                    </div>
                                </div>
                            </React.Fragment>
                        }
                        
                    </div>
                </div>
            </div>
        )
    }
}
