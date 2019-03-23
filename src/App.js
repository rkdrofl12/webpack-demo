import React, { Component } from 'react';
import './App.css';

const Header = (props) => {
  console.log(props);
  const {title, totalPlayers} = props; // destruct assignment
  return (
    <header>
      <h1>{title}</h1>
      <span className="stats">Players: {totalPlayers}</span>
    </header>
  )
};

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

  incrementScore = () => {
    console.log(this);
    this.setState(prevState => {
      return {
        score: prevState.score + 1
      }
    });
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

const Player = (props) => (
  <div className="player">
    <span className="player-name">
      <button className="remove-player" onClick={()=> props.handleRemovePlayer(props.id)}>x</button>
    </span>
    <span className="player-name">
      {props.name}
    </span>
    <Counter />
  </div>
);

class App extends React.Component {
  state = {
    players: [
      {name: "LDK", id: 1},
      {name: "HONG", id: 2},
      {name: "KIM", id: 3},
      {name: "PARK", id: 4},
    ]
  }

  handleRemovePlayer =(id) => {
    // 해당 id를 삭제
    this.setState(prevState => ({
      players: prevState.players.filter(item => item.id !== id)
    }))
  }

  render() {
    return (
      <div className="scoreboard">
        <Header title="My Scoreboard" totalPlayers={10 + 1}/>
        {
          this.state.players.map(player => (
            <Player name={player.name} key={player.id.toString()}
                    id={player.id}
                    handleRemovePlayer={this.handleRemovePlayer}/>
          ))
        }
      </div>
    );
  }
}


// 1. Header() 펑션 컴포넌트를 호출
// 2. 속성을 json으로 전달한다. {title: "My Scoreboard", totalPlayers: 11}

export default App;
