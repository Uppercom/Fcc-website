import React, { Component } from 'react'
import API from './config.js'
import axios from 'axios'

const categoryContext = React.createContext()
const countriesContext = React.createContext()

class CategoryProvider extends Component {
    state = {
        categories : []
    }

    getCategory(){
        axios
            .get(`${API}/api/admin/categories/gets`)
            .then(
                (res) => {
                    this.setState({
                        categories: res.data.datas
                    })
                }
            )
    }
     
    componentDidMount(){
        this.getCategory()
    }

    render() {
        return (
            <categoryContext.Provider
                value={{
                    ...this.state
                }}>
                    {this.props.children}
            </categoryContext.Provider>
        )
    }

}

class CountriesProvider extends Component {
    state = {
        countries : []
    }

    getCountries(){
        axios
            .get(`${API}/api/admin/countries`)
            .then(
                (res) => {
                    if (res.data.state) {
                        var out = 0
                        var tab = []
                        res.data.datas.map((item, key) => {
                            out++
                            tab.push({
                                value: item._id,
                                label: item.name
                            })

                            if (res.data.datas.length == out) {
                                this.setState({
                                    countries: tab
                                })
                            }
                        })
                    }
                    
                }
            )
    }
     
    componentDidMount(){
        this.getCountries()
    }

    render() {
        return (
            <countriesContext.Provider
                value={{
                    ...this.state
                }}>
                    {this.props.children}
            </countriesContext.Provider>
        )
    }
}

const CategoryConsumer = categoryContext.Consumer
const CountrieConsumer = countriesContext.Consumer

export { CategoryProvider, CategoryConsumer, CountrieConsumer, CountriesProvider }