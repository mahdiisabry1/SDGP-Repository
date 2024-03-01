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
             Front-End
             </button>
            
             <button className={toogleState ===
            2? 'tabs active-tabs' : 'tabs'}
             onClick={()=> toggleTab(2)}>
             Back-End
             </button>
             <button className={toogleState ===
            3? 'tabs active-tabs' : 'tabs'}
             onClick={()=> toggleTab(3)}>
             Angular
             </button>
             <button className={toogleState ===
            4? 'tabs active-tabs' : 'tabs'}
             onClick={()=> toggleTab(4)}>
             React
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
                    <p><li>
Front-end development involves creating the user interface and experience of a website or application. It encompasses coding languages such as HTML, CSS, and JavaScript, shaping how content is presented and interacted with by users. Front-end developers focus on optimizing design, accessibility, and responsiveness for seamless user navigation and engagement</li></p>
                    <p><li>Dont Delete this (\/)
(• ‿•)
/👍👍</li></p>
                    
                </div>
                <div className={toogleState === 2 ?
                'content active-content':'content'}>
                    <h2>Back-end</h2>
                    <hr />
                    
                    <p><li>Backend refers to the unseen infrastructure of a software application, managing data and functionality behind the scenes. It comprises servers, databases, and logic ensuring smooth operation. Developers code in languages like Python, Java, or Node.js, handling server-side processes, database interactions, and APIs, crucial for delivering dynamic and interactive web experiences</li></p>
                    <p><li>click here</li></p>
                </div>
                <div className={toogleState === 3 ?
                'content active-content':'content'}>
                    <h2>Angular</h2>
                    <hr />
                    <p><li>Angular is a popular open-source web application framework maintained by Google. It allows developers to build dynamic single-page applications (SPAs) efficiently. Using TypeScript, Angular provides a structured approach to development, emphasizing modularity and reusability of components. Its powerful features include two-way data binding, dependency injection, and robust routing capabilities</li></p>
                </div>
                <div className={toogleState === 4 ?
                'content active-content':'content'}>
                    <h2>React</h2>
                    <hr />
                    <p><li>React is a JavaScript library widely used for building user interfaces. Developed by Facebook, it allows developers to create reusable UI components, making the development process more efficient and manageable. With its virtual DOM, React optimizes rendering performance, providing a seamless and responsive user experience for web applications.




</li></p>
                    
                </div>
                <div className={toogleState === 5 ?
                'content active-content':'content'}>
                    <h2>Full-Stack</h2>
                    <hr />
                    <p><li>Fullstack refers to proficiency in both frontend and backend development, covering the entire spectrum of web development. A fullstack developer possesses skills in programming languages, databases, server management, and client-side frameworks. This expertise enables them to create dynamic, interactive, and functional web applications from conception to deployment, ensuring seamless user experiences</li></p>
                    
                </div>
            </div>
           </div>
        </div>
    )
  
}

export default Tabs
