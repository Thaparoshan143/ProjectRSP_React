import "./Body.css"
import "../uni.css"

import React from 'react'

function Body() {
  return (
    <main className="Main-Body flex-row-evenly">
        <section className="Title-Display">
            <span className="Description">WE STAND TOGETHER</span>
            <span className="Main Title">RSP</span><br />
            <span className="Sub Title"><span className="Highlight">R</span>ising <span className="Highlight">S</span>uper <span className="Highlight">P</span>ower</span><br /><br />
            <div>
                <span className="Sub-Title">GROW IT</span>
                <span className="Sub-Title">BUILD IT</span>
                <span className="Sub-Title">SAVE IT</span>
            </div>
            <span className="Description">"We care about for your capital and your future financial well-being." - RSP</span>
        </section>
        <section className="Disp-Photo">
            <div className="Photo-Cont">
                <div className="C-Photo">
                    <img className="Fian-Photo" src="https://images.gmanews.tv/webpics/2015/08/2015_01_02_15_45_20_010_2015_08_23_13_12_01.jpg" alt="finance" />
                </div>
            </div>
        </section>
    </main>
  )
}

export default Body