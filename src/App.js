import React from 'react';
import logo from './logo.svg';
import './App.css';
import Sites from './Sites'

class App extends React.Component {

    state = {
        sites: [],
        colors: ["#81b71a", "#00B1E1", "#37BC9B", "#8CC152", "#E9573F", "#F6BB42"]
    }

    setColorsAndImages( trend, showsImage, isFinal, trends) {
        const {colors} = this.state
        let rand = Math.floor(Math.random() * colors.length)
        const color = colors[rand]


        if (showsImage) {
            fetch('https://api.mercadolibre.com/sites/MLA/search?q=' + trend.keyword)
                .then(res => res.json())
                .then((searchData) => {

                    if (searchData.results.length > 0) {
                        let auxElement = searchData.results[0]
                        if (auxElement.thumbnail) {
                            trend.thumbnail = auxElement.thumbnail

                        }
                    }
                  if (isFinal) {
                    this.setState({
                      sites: trends
                    })
                  }
                })
        } else {
            trend.color = color
        }
    }

    componentDidMount() {
        fetch('https://api.mercadolibre.com/trends/MLA#json')
            .then(res => res.json())
            .then((data) => {
                let contShow = false
                let trends = data.slice()
                for (let i = 0; i <= trends.length; i++) {
                    this.setColorsAndImages(trends[i], contShow, i == trends.length - 1 || i == trends.length - 2, trends)
                    contShow = !contShow

                }


            })
            .catch(console.log)
    }

    render() {
        return (
            <Sites sites={this.state.sites}/>
        );
    }
}

export default App;
