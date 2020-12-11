import React from 'react'
import Confetti from 'react-confetti'
import Modal from './Modal'

const ThrowConfetti = ({ confetti }) => {
      const { width, height } = window.screen
      return (
            <span className="confetti">
                  {confetti ? <>
                        <Confetti
                        width={width}
                        height={height}
                        numberOfPieces={2000}
                        recycle={false}
                        tweenDuration = {3000}
                              />
                              <Modal />
                        </> : null}
            </span>
      )
}

export default ThrowConfetti

