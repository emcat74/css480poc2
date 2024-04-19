import React from 'react';
import biskit from '../components/biskit.JPG'
import List from '../components/List'
import data from '../components/data'

const HomePage = () => {
  return (
    <div className='home'>
      <header>
        <h1>Hello World!</h1>
      </header>
      <main>
        <p>My name is Emma, and I am a CSS major at UW Bothell. Welcome to my webpage for CSS 480! <br/>Here's a picture of my dog, Biskit.</p>
        <img src={biskit} width={250} height={300} alt="My dog" />
        <h2>How to Use the Site Using Keyboard Controls:</h2>
        <ul>
          <li>Press <b>'Ctrl'</b> + <b>'F7'</b> to enable keyboard controls on your device.</li>
          <li>Use <b>'Tab'</b> to scroll between elements on the page or use <b>'Tab'</b> + <b>'Shift'</b> to scroll back to previous elements.</li>
          <li>Use <b>'Enter'</b> to click on elements such as pages or links.</li>
          <li>Use the <b>arrow</b> keys to scroll up and down the page.</li>
          <li>See the <i>"Things to Read"</i> page for more information and links.</li>
        </ul>
        <h2> Things that interest me:</h2>
        <List items={data}/>
      </main>
    </div>
  );
}

export default HomePage;