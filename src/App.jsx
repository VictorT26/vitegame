import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Game } from '../game/game.js'
import { getBoard } from '../util'

function game() {
  console.log("yo mama")
}

const board = getBoard();

let currentGame = new Game();

function App() {

  return (
    <div className='min-h-screen bg-slate-700 flex flex-col gap-5 items-center'>
      <div className=' text-blue-500 text-center pt-5 text-5xl'>
        Tic Tac Toe 
      </div>

      <p className='text-white'> Challenge yourself with this totally not random Tic Tac Toe game! </p>

      {/* This is where we display game data */}
      <div className='grid grid-cols-3 gap-8 text-white text-3xl' >
        { board }
      </div>

      <button className=' h-16 w-32 bg-blue-500 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded-full' onClick={() => {game()}}>
        Play
      </button>
    </div>
  )
}

export default App
