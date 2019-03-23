import React, { Component } from 'react';
import './App.css';
import {Header} from "./components/Header";
import {Player} from "./components/Player";


class Counter extends React.Component {
  // state = {
  //   score: 30
  // }

  constructor(props) {
    super(props);
    this.state = {
      name: "a",
      score: 30
    }

  }


  render() {
    return (
      <div className="counter">
        <button className="counter-action decrement"> - </button>
        <span className="counter-score">{this.state.score}</span>
        <button className="counter-action increment" onClick={this.incrementScore}> + </button>
      </div>
    );
  }
}

class App extends React.Component {
  state = {
    players: [
      {name: "LDK",score:0, id: 1},
      {name: "HONG",score:0, id: 2},
      {name: "KIM",score:0, id: 3},
      {name: "PARK",score:0, id: 4},
    ]
  }

  handleRemovePlayer =(id) => {
    // 해당 id를 삭제
    this.setState(prevState => ({
      players: prevState.players.filter(item => item.id !== id)
    }))
  }

  handleChangeScore = (id,delta) => {
    console.log(id, delta);
  }

  render() {
    return (
      <div className="scoreboard">
        <Header title="My Scoreboard" totalPlayers={10 + 1}/>
        {
          this.state.players.map(player => (
            <Player name={player.name} key={player.id.toString()}
                    id={player.id}
                    score={player.score}
                    handleRemovePlayer={this.handleRemovePlayer}
                    handleChangeScore={this.handleChangeScore}/>
          ))
        }
      </div>
    );
  }
}


// 1. Header() 펑션 컴포넌트를 호출
// 2. 속성을 json으로 전달한다. {title: "My Scoreboard", totalPlayers: 11}

export default App;
