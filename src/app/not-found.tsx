import Link from 'next/link'
import React from 'react'

export default function NotFound() {
  return (
    <div>
      <div id="background"></div>
      <div className={'top'}>
        <h1>404</h1>
        <h3>page not found</h3>
      </div>
      <div className={'container'}>
        <div className={'ghost-copy'}>
          <div className={'one'}></div>
          <div className={'two'}></div>
          <div className="three"></div>
          <div className="four"></div>
        </div>
        <div className="ghost">
          <div className="face">
            <div className="eye"></div>
            <div className="eye-right"></div>
            <div className="mouth"></div>
          </div>
        </div>
        <div className="shadow"></div>
        <div className="bottom">
          <p>Boo, looks like a ghost stole this page!</p>
          <form className="search">
            <input type="text" className="search-bar" placeholder="Search" />
            <button type="submit" className="search-btn">
              <i className="fa fa-search"></i>
            </button>
          </form>
          <div className="buttons">
            <button className="btn">Back</button>
            <button className="btn">Home</button>
          </div>
        </div>

        <footer>
          <p>
            made by <Link href="https://codepen.io/juliepark"> julie</Link> ♡
          </p>
        </footer>
      </div>
    </div>
  )
}
