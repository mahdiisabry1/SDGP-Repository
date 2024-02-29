import React from 'react'
import '../components/CSS/tabs.css'
const Tabs = () => {
    return(
        <div>
           <div className="container-tabs">
            <div className="bloc-tabs">
            <button className="tabs
            active-tabs">Front-end</button>
            <button className="tabs
            ">Back-end</button>
            <button className="tabs
            ">Angular</button>
            <button className="tabs
            ">React</button>
            </div>
            <div className="content-tabs">
                <div className="content active-content">
                    <h2>Front-end</h2>
                    <hr />
                    <p><li>dont delete this</li></p>
                    <p><li>........</li></p>
                    <p><li>Suiiii</li></p>
                </div>
                <div className="content active-content">
                    <h2>Back-end</h2>
                    <hr />
                    <p><li>gvuvuu</li></p>
                    <p><li>h</li></p>
                    <p><li>Suiiii</li></p>
                </div>
                <div className="content active-content">
                    <h2>Angular</h2>
                    <hr />
                    <p><li>gvuvuu</li></p>
                    <p><li>h</li></p>
                    <p><li>Suiiii</li></p>
                </div>
                <div className="content active-content">
                    <h2>React</h2>
                    <hr />
                    <p><li>gvuvuu</li></p>
                    <p><li>h</li></p>
                    <p><li>Suiiii</li></p>
                </div>
            </div>
           </div>
        </div>
    )
  
}

export default Tabs
