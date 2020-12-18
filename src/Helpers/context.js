import React, { Component } from 'react'
import API from './config.js'
import axios from 'axios'

const categoryContext = React.createContext()


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

const CategoryConsumer = categoryContext.Consumer

export { CategoryProvider, CategoryConsumer }