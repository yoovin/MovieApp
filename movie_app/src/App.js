import React, { Component } from 'react';
import './App.css';
import Movie from './Movie'

class App extends Component {

  state = {
  }

componentDidMount(){
  setTimeout(() => {
    this.setState({
    anis: [
      {
        title: "카구야 님은 고백받고 싶어",
        poster: "http://img.chuing.net/i/QNpVGVy/4567.png"
      },
      {
        title: "5등분의 신부",
        poster: "https://shop.r10s.jp/amiami/cabinet/images/2019/12/card-00008461.jpg"
      },
      {
        title: "사신 도련님과 검은 메이드",
        poster: "https://img.ironmancdn.xyz/upload/be36353103ec7a2b7f385696cbe60d98.JPEG?v=1?quick"
      },
      {
        title: "팝팀에픽",
        poster: "https://i.ytimg.com/vi/nPO_ZzoELKo/maxresdefault.jpg"
      },
      {
        title:"사랑과 거짓말",
        poster:"http://ani24suki.com/img/ani/3749.jpg"
      }
    ]
    
    })
  },3000)
}

_renderAnis = () => {
  const anis = this.state.anis.map((ani, index) => {
    return <Movie title={ani.title} poster={ani.poster} key={index} />
   })
   return anis
}

  render(){
    return(
      <div className='App'>
        {this.state.anis ? this._renderAnis() : 'Loading'}
      </div>
    )
  }
}

// function App() {
//   return (
//     <div className="App">
//       {anis.map((ani, index) => {
//         return <Movie title={ani.title} poster={ani.poster} key={index} />
//       })}
//     </div>
//   );
// }

export default App;
