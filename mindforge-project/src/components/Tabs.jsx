import React, { useState } from 'react'
import '../components/CSS/tabs.css'
const Tabs = () => {
const[toogleState, setToggleState]=useState
(1);  

const toggleTab=(index)=>{
    setToggleState(index)
}

    return(
        <div>
           <div className="container-tabs">

            <div className="bloc-tabs">

            <button className={toogleState ===
            1? 'tabs active-tabs' : 'tabs'}
             onClick={()=> toggleTab(1)}>
             React
             </button>
            
             <button className={toogleState ===
            2? 'tabs active-tabs' : 'tabs'}
             onClick={()=> toggleTab(2)}>
             Angular
             </button>
             <button className={toogleState ===
            3? 'tabs active-tabs' : 'tabs'}
             onClick={()=> toggleTab(3)}>
             Front-end
             </button>
             <button className={toogleState ===
            4? 'tabs active-tabs' : 'tabs'}
             onClick={()=> toggleTab(4)}>
             Back-end
             </button>
             <button className={toogleState ===
            5? 'tabs active-tabs' : 'tabs'}
             onClick={()=> toggleTab(5)}>
             Full-Stack
             </button>

            </div>
            <div className="content-tabs">
                <div className={toogleState === 1 ?
                'content active-content':'content'}>

                    <h2>Front-end</h2>
                    <hr />
                    <p><li>dont delete this</li></p>
                    <p><li>........</li></p>
                    <p><li>Suiiii</li></p>
                </div>
                <div className={toogleState === 2 ?
                'content active-content':'content'}>
                    <h2>Back-end</h2>
                    <hr />
                    <p><li>gvuvuu</li></p>
                    <p><li>h</li></p>
                    <p><li>Suiiii</li></p>
                </div>
                <div className={toogleState === 3 ?
                'content active-content':'content'}>
                    <h2>Angular</h2>
                    <hr />
                    <p><li>gvuvuu</li></p>
                    <p><li>h</li></p>
                    <p><li>Suiiii</li></p>
                </div>
                <div className={toogleState === 4 ?
                'content active-content':'content'}>
                    <h2>React</h2>
                    <hr />
                    <p><li>gvuvuu</li></p>
                    <p><li>h</li></p>
                    <p><li>Suiiii</li></p>
                </div>
                <div className={toogleState === 5 ?
                'content active-content':'content'}>
                    <h2>Full-Stack</h2>
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
