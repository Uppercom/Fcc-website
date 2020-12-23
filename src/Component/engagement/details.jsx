import React, { Component } from 'react'
import Player from './player.jsx'
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
    render() {
        return (
            <div>
                <Menu />
                
                <div className="flex">
                    <div class="player-content">
                        {/* <div className="header-video">
                            <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet perspiciatis nulla quibusdam maiores provident mollitia</h6>
                        </div> */}
                        <Player />
                        <div style={{padding: "4em"}}>
                        
                            <h4 style={{fontWeight: "600", fontSize: "2em"}}>Signature de la charte par les gouverneurs, confessions religieuses et personnalités du FCC</h4>
                            <p>
                            Trois jours ont suffi ce mardi 3 juillet 2018 pour les gouverneurs, les confessions religieuses et autres personnalités pour apposer leurs signatures au bas de la charte constitutive du FCC, plateforme électorale dont le président Joseph Kabila est l’autorité morale
                            </p>
                            <p>Beaucoup des ministres de la Majorité, de l’opposition tout comme de l’opposition mais également des personnalités politiques dont Raphaël Katebe Katoto, se sont livrés à cet exercice</p>
                            <p>Prenant la parole comme à l’ouverture, au nom du président de la République et autorité morale du FCC, Néhémie Mwilanya, son directeur de cabinet, et Coordinateur du FCC a salué l’engouement qui a eu autour de cette signature qui, selon lui traduit une pensée, mieux une vision de Joseph Kabila du Congo. Une pensée, dit-il, pour déceler ce qui a fait sa faiblesse hier et ce qui fait sa force aujourd’hui et le fera demain</p>
                            <p>Néhémie Mwilanya évoque pour se réconforter trois grands rassemblements. D’abord au sortir du dialogue intercongolais de Sun City ayant accouché d’un mode atypique de gestion avec la formule 1+4. « Ça n’a jamais existé ailleurs, ça existait ici, ça été expérimenté et ça réussi », ne s’empêche-t-il de féliciter la grandeur d’âme de son patron. Ensuite, Néhémie Mwilanya cite le rassemblement de 2013 avec les concertations nationales ce, après la prise de la ville de Goma par la rébellion du 23 mars (M23), quand Joseph Kabila avait appelé à la cohésion nationale. Enfin, le troisième rassemblement mais en deux séquences, c’est le dialogue national intervenu d’abord à la Cité de l’Union africaine et ensuite au Centre Interdiocésain ayant donné naissance au gouvernement d’union national actuel.</p>
                            <p>Pour Néhémie Mwilanya, ce gouvernement qui a fait une année et qui a géré le pays sans couac, constitue une force de Congolais, mieux de la RDC, de pouvoir gérer ses affaires sans interférences extérieures. Voilà, dit-il, qui a poussé Joseph Kabila à se demander si les Congolais ne pouvaient pas avancer avec le même élan. D’où sa proposition de la création d’un front commun pour le Congo qui place au centre l’unité, la souveraineté et l’indépendance du pays que les signataires de la charte doivent protéger.</p>
                            <p>Le Coordinateur du FCC estime que la charte signée par plusieurs partis politiques, ministres au gouvernement Tshibala et personnalités politiques indépendantes, pose les bases d’une nouvelle gouvernance dans le pays au terme des élections et engage ces derniers à soutenir aux élections de décembre 2018 une seule candidature à la présidentielle et aller à la conquête d’une vaste majorité parlementaire qui permettra au pays d’avoir une stabilité institutionnelle voulue pour amorcer des réformes politiques, économiques et sociales qui peuvent transformer  réellement la RDC.</p>
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
                            </div>
                        </div>

                    </div>
                    <div className="series">
                        <div className="video-single flex">
                            <div className="video-title">
                                Des députés, sénateurs et cadres du FCC renouvellent leur loyauté à Joseph Kabila
                            </div>
                            
                            <div className="video-content">
                                <div style={{backgroundImage: 'url(https://i0.wp.com/www.sango26.info/wp-content/uploads/2020/10/IMG_20201027_164737.jpg?fit=1008%2C490&ssl=1&resize=350%2C200)'}} className="video-cover">
                                    <div className="video-button-play">
                                        <svg class="SVGInline-svg SVGInline--cleaned-svg d:b-svg c:white-svg w:4-svg h:4-svg w:7-svg h:7-svg" fill="currentColor" style={{width: "3em", color: "#fff"}} x="0" y="0" viewBox="0 0 200 200">
                                            <polygon points="70.993,60.347 153.398,102.384 70.993,144.42   "></polygon>
                                        </svg>
                                    </div>
                                </div>
                                <div className="video-timer">
                                    3:52
                                </div>
                            </div>
                        </div>

                        <div className="video-single flex">
                            <div className="video-title">
                            Signature de la charte du FCC
                            </div>
                            <div className="video-content">
                                <div style={{backgroundImage: 'url(https://www.mediacongo.net/cache/mp_conclave_jpeg_640_350_1.jpeg)'}} className="video-cover">
                                    <div className="video-button-play">
                                        <svg class="SVGInline-svg SVGInline--cleaned-svg d:b-svg c:white-svg w:4-svg h:4-svg w:7-svg h:7-svg" fill="currentColor" style={{width: "3em", color: "#fff"}} x="0" y="0" viewBox="0 0 200 200">
                                            <polygon points="70.993,60.347 153.398,102.384 70.993,144.42   "></polygon>
                                        </svg>
                                    </div>
                                </div>
                                <div className="video-timer">
                                    3:52
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
