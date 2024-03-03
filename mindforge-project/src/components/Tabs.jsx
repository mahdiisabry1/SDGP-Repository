import React, { useState } from 'react'
import '../components/CSS/tabs.css'
const Tabs = () => {
const[toogleState, setToggleState]=useState
(1);  
const [cat, setCat] = useState("Tech");
  const [cats, setcats] = useState([]);

  const addCategory = () => {
    let updatedCats = [...cats];
    updatedCats.push(cat);
    setCat("Tech");
    setcats(updatedCats);
  };

  const deleteCategory = (i) => {
    let updatedCats = [...cats]
    updatedCats.splice(i, 1)
    setcats(updatedCats)

  };
    const [userCode, setUserCode] = useState('');
    const [output, setOutput] = useState('');
  
    const handleCodeChange = (event) => {
      setUserCode(event.target.value);
    };

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
                    HTML/CSS Basics:
Create a webpage with a heading saying "Hello, World!" and a button labeled "Click Me". When the button is clicked, change the background color of the webpage.</li></p>
<div className="p-3 max-w-3xl mx-auto min-h-screen">
        
        <form action="" className="">
          <div className="flex flex-col gap-4 justify-between">
            
          </div>
          <div className="flex items-center space-x-4 md:space-x-8 mt-5">
            <label htmlFor="file">upload the code</label>
            <input type="file" className="flex-1" id="file" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center space-x-4 md:space-x-8">
              
            </div>
            <div className="flex h-6">
              {cats?.map((c, i) => (
                <div
                  key={i}
                  className="flex justify-center items-center space-x-2 mr-4"
                >
                  <p>{c}</p>
                  <p
                    onClick={() => deleteCategory(i)}
                    className="text-gray-700 rounded-xl hover:text-red-500 cursor-pointer"
                  >
                    <HiXCircle />
                  </p>
                </div>
              ))}
            </div>
  
            <textarea
              name=""
              id=""
              cols="30"
              rows="15"
              className="px-4 py-4 outline-none mt-5"
              required
              minLength={500}
              placeholder="200 words minimum required"
            ></textarea>
            <button className="mt-5 bg-black w-full text-white hover:bg-slate-500">
              write your code
            </button>
          </div>
        </form>
      </div>
        <p><li>CSS Box Model:
Create a div element with a width of 200 pixels, a height of 100 pixels, a background color of blue, and 10 pixels of padding. Inside this div, create a paragraph with text "Hello, CSS Box Model!".
</li></p>
<div className="p-3 max-w-3xl mx-auto min-h-screen">
        
        <form action="" className="">
          <div className="flex flex-col gap-4 justify-between">
            
          </div>
          <div className="flex items-center space-x-4 md:space-x-8 mt-5">
            <label htmlFor="file">upload the code</label>
            <input type="file" className="flex-1" id="file" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center space-x-4 md:space-x-8">
              
            </div>
            <div className="flex h-6">
              {cats?.map((c, i) => (
                <div
                  key={i}
                  className="flex justify-center items-center space-x-2 mr-4"
                >
                  <p>{c}</p>
                  <p
                    onClick={() => deleteCategory(i)}
                    className="text-gray-700 rounded-xl hover:text-red-500 cursor-pointer"
                  >
                    <HiXCircle />
                  </p>
                </div>
              ))}
            </div>
  
            <textarea
              name=""
              id=""
              cols="30"
              rows="15"
              className="px-4 py-4 outline-none mt-5"
              required
              minLength={500}
              placeholder="200 words minimum required"
            ></textarea>
            <button className="mt-5 bg-black w-full text-white hover:bg-slate-500">
              write your code
            </button>
          </div>
        </form>
      </div>
        
        

        <p><li>
JavaScript Events:
Write a JavaScript function that changes the text of a paragraph to "Button Clicked!" when a button is clicked. Add this functionality to the button in the previous question.

</li></p>
<div className="p-3 max-w-3xl mx-auto min-h-screen">
        
        <form action="" className="">
          <div className="flex flex-col gap-4 justify-between">
            
          </div>
          <div className="flex items-center space-x-4 md:space-x-8 mt-5">
            <label htmlFor="file">upload the code</label>
            <input type="file" className="flex-1" id="file" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center space-x-4 md:space-x-8">
              
            </div>
            <div className="flex h-6">
              {cats?.map((c, i) => (
                <div
                  key={i}
                  className="flex justify-center items-center space-x-2 mr-4"
                >
                  <p>{c}</p>
                  <p
                    onClick={() => deleteCategory(i)}
                    className="text-gray-700 rounded-xl hover:text-red-500 cursor-pointer"
                  >
                    <HiXCircle />
                  </p>
                </div>
              ))}
            </div>
  
            <textarea
              name=""
              id=""
              cols="30"
              rows="15"
              className="px-4 py-4 outline-none mt-5"
              required
              minLength={500}
              placeholder="200 words minimum required"
            ></textarea>
            <button className="mt-5 bg-black w-full text-white hover:bg-slate-500">
              write your code
            </button>
          </div>
        </form>
      </div>
        <p><li>Responsive Design:
Create a simple webpage layout with header, footer, sidebar, and main content area. Ensure that the layout adjusts appropriately for different screen sizes using media queries.

</li></p>
<div className="p-3 max-w-3xl mx-auto min-h-screen">
        
        <form action="" className="">
          <div className="flex flex-col gap-4 justify-between">
            
          </div>
          <div className="flex items-center space-x-4 md:space-x-8 mt-5">
            <label htmlFor="file">upload the code</label>
            <input type="file" className="flex-1" id="file" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center space-x-4 md:space-x-8">
              
            </div>
            <div className="flex h-6">
              {cats?.map((c, i) => (
                <div
                  key={i}
                  className="flex justify-center items-center space-x-2 mr-4"
                >
                  <p>{c}</p>
                  <p
                    onClick={() => deleteCategory(i)}
                    className="text-gray-700 rounded-xl hover:text-red-500 cursor-pointer"
                  >
                    <HiXCircle />
                  </p>
                </div>
              ))}
            </div>
  
            <textarea
              name=""
              id=""
              cols="30"
              rows="15"
              className="px-4 py-4 outline-none mt-5"
              required
              minLength={500}
              placeholder="200 words minimum required"
            ></textarea>
            <button className="mt-5 bg-black w-full text-white hover:bg-slate-500">
              write your code
            </button>
          </div>
        </form>
      </div>
        <p><li>Basic Animation:
Create a simple animation using CSS transitions or keyframes. For example, make a div element move from left to right continuously when hovered over.
</li></p>
<div className="p-3 max-w-3xl mx-auto min-h-screen">
        
        <form action="" className="">
          <div className="flex flex-col gap-4 justify-between">
            
          </div>
          <div className="flex items-center space-x-4 md:space-x-8 mt-5">
            <label htmlFor="file">upload the code</label>
            <input type="file" className="flex-1" id="file" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center space-x-4 md:space-x-8">
              
            </div>
            <div className="flex h-6">
              {cats?.map((c, i) => (
                <div
                  key={i}
                  className="flex justify-center items-center space-x-2 mr-4"
                >
                  <p>{c}</p>
                  <p
                    onClick={() => deleteCategory(i)}
                    className="text-gray-700 rounded-xl hover:text-red-500 cursor-pointer"
                  >
                    <HiXCircle />
                  </p>
                </div>
              ))}
            </div>
  
            <textarea
              name=""
              id=""
              cols="30"
              rows="15"
              className="px-4 py-4 outline-none mt-5"
              required
              minLength={500}
              placeholder="200 words minimum required"
            ></textarea>
            <button className="mt-5 bg-black w-full text-white hover:bg-slate-500">
              write your code
            </button>
          </div>
        </form>
      </div>

        
<button className={toogleState ===
            1? 'tabs active-tabs' : 'tabs'}
             onClick={()=> toggleTab(1)}>
             Click here
             </button>
                    
                </div>
                <div className={toogleState === 2 ?
                'content active-content':'content'}>
                    <h2>Back-end</h2>
                    <hr />
                    
                    <p><li>Hello, World! in Node.js:
Write a Node.js script that prints "Hello, World!" to the console.

</li></p>
<div className="p-3 max-w-3xl mx-auto min-h-screen">
        
        <form action="" className="">
          <div className="flex flex-col gap-4 justify-between">
            
          </div>
          <div className="flex items-center space-x-4 md:space-x-8 mt-5">
            <label htmlFor="file">upload the code</label>
            <input type="file" className="flex-1" id="file" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center space-x-4 md:space-x-8">
              
            </div>
            <div className="flex h-6">
              {cats?.map((c, i) => (
                <div
                  key={i}
                  className="flex justify-center items-center space-x-2 mr-4"
                >
                  <p>{c}</p>
                  <p
                    onClick={() => deleteCategory(i)}
                    className="text-gray-700 rounded-xl hover:text-red-500 cursor-pointer"
                  >
                    <HiXCircle />
                  </p>
                </div>
              ))}
            </div>
  
            <textarea
              name=""
              id=""
              cols="30"
              rows="15"
              className="px-4 py-4 outline-none mt-5"
              required
              minLength={500}
              placeholder="200 words minimum required"
            ></textarea>
            <button className="mt-5 bg-black w-full text-white hover:bg-slate-500">
              write your code
            </button>
          </div>
        </form>
      </div>
        <p><li>Basic Express Server:
Create a simple Express server that listens on port 3000 and responds with "Hello, World!" for any incoming requests.


</li></p>
<div className="p-3 max-w-3xl mx-auto min-h-screen">
        
        <form action="" className="">
          <div className="flex flex-col gap-4 justify-between">
            
          </div>
          <div className="flex items-center space-x-4 md:space-x-8 mt-5">
            <label htmlFor="file">upload the code</label>
            <input type="file" className="flex-1" id="file" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center space-x-4 md:space-x-8">
              
            </div>
            <div className="flex h-6">
              {cats?.map((c, i) => (
                <div
                  key={i}
                  className="flex justify-center items-center space-x-2 mr-4"
                >
                  <p>{c}</p>
                  <p
                    onClick={() => deleteCategory(i)}
                    className="text-gray-700 rounded-xl hover:text-red-500 cursor-pointer"
                  >
                    <HiXCircle />
                  </p>
                </div>
              ))}
            </div>
  
            <textarea
              name=""
              id=""
              cols="30"
              rows="15"
              className="px-4 py-4 outline-none mt-5"
              required
              minLength={500}
              placeholder="200 words minimum required"
            ></textarea>
            <button className="mt-5 bg-black w-full text-white hover:bg-slate-500">
              write your code
            </button>
          </div>
        </form>
      </div>
        <p><li>Simple CRUD Operations:
Write a Node.js script that connects to a MongoDB database and performs basic CRUD (Create, Read, Update, Delete) operations on a collection of items, such as "todos" or "users".


</li></p>
<div className="p-3 max-w-3xl mx-auto min-h-screen">
        
        <form action="" className="">
          <div className="flex flex-col gap-4 justify-between">
            
          </div>
          <div className="flex items-center space-x-4 md:space-x-8 mt-5">
            <label htmlFor="file">upload the code</label>
            <input type="file" className="flex-1" id="file" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center space-x-4 md:space-x-8">
              
            </div>
            <div className="flex h-6">
              {cats?.map((c, i) => (
                <div
                  key={i}
                  className="flex justify-center items-center space-x-2 mr-4"
                >
                  <p>{c}</p>
                  <p
                    onClick={() => deleteCategory(i)}
                    className="text-gray-700 rounded-xl hover:text-red-500 cursor-pointer"
                  >
                    <HiXCircle />
                  </p>
                </div>
              ))}
            </div>
  
            <textarea
              name=""
              id=""
              cols="30"
              rows="15"
              className="px-4 py-4 outline-none mt-5"
              required
              minLength={500}
              placeholder="200 words minimum required"
            ></textarea>
            <button className="mt-5 bg-black w-full text-white hover:bg-slate-500">
              write your code
            </button>
          </div>
        </form>
      </div>
        <p><li>Simple CRUD Operations:
Write a Node.js script that connects to a MongoDB database and performs basic CRUD (Create, Read, Update, Delete) operations on a collection of items, such as "todos" or "users".

</li></p>
<div className="p-3 max-w-3xl mx-auto min-h-screen">
        
        <form action="" className="">
          <div className="flex flex-col gap-4 justify-between">
            
          </div>
          <div className="flex items-center space-x-4 md:space-x-8 mt-5">
            <label htmlFor="file">upload the code</label>
            <input type="file" className="flex-1" id="file" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center space-x-4 md:space-x-8">
              
            </div>
            <div className="flex h-6">
              {cats?.map((c, i) => (
                <div
                  key={i}
                  className="flex justify-center items-center space-x-2 mr-4"
                >
                  <p>{c}</p>
                  <p
                    onClick={() => deleteCategory(i)}
                    className="text-gray-700 rounded-xl hover:text-red-500 cursor-pointer"
                  >
                    <HiXCircle />
                  </p>
                </div>
              ))}
            </div>
  
            <textarea
              name=""
              id=""
              cols="30"
              rows="15"
              className="px-4 py-4 outline-none mt-5"
              required
              minLength={500}
              placeholder="200 words minimum required"
            ></textarea>
            <button className="mt-5 bg-black w-full text-white hover:bg-slate-500">
              write your code
            </button>
          </div>
        </form>
      </div>
        <p><li>User Authentication:
Create a basic user authentication system using Node.js, Express, and a database (e.g., MongoDB or SQLite). Implement endpoints for user registration, login, and logout.

</li></p>
<div className="p-3 max-w-3xl mx-auto min-h-screen">
        
        <form action="" className="">
          <div className="flex flex-col gap-4 justify-between">
            
          </div>
          <div className="flex items-center space-x-4 md:space-x-8 mt-5">
            <label htmlFor="file">upload the code</label>
            <input type="file" className="flex-1" id="file" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center space-x-4 md:space-x-8">
              
            </div>
            <div className="flex h-6">
              {cats?.map((c, i) => (
                <div
                  key={i}
                  className="flex justify-center items-center space-x-2 mr-4"
                >
                  <p>{c}</p>
                  <p
                    onClick={() => deleteCategory(i)}
                    className="text-gray-700 rounded-xl hover:text-red-500 cursor-pointer"
                  >
                    <HiXCircle />
                  </p>
                </div>
              ))}
            </div>
  
            <textarea
              name=""
              id=""
              cols="30"
              rows="15"
              className="px-4 py-4 outline-none mt-5"
              required
              minLength={150}
              placeholder="200 words minimum required"
            ></textarea>
            <button className="mt-5 bg-black w-full text-white hover:bg-slate-500">
              write your code
            </button>
          </div>
        </form>
      </div>
                    <button className={toogleState ===
            2? 'tabs active-tabs' : 'tabs'}
             onClick={()=> toggleTab(2)}>
             Click here
             </button>
                </div>


                <div className={toogleState === 3 ?
                'content active-content':'content'}>
                    <h2>Angular</h2>
                    <hr />
                    <p><li>
Create an Angular component called "HelloComponent" that displays the text "Hello, Angular!" in the template.
</li></p>
<div className="p-3 max-w-3xl mx-auto min-h-screen">
        
        <form action="" className="">
          <div className="flex flex-col gap-4 justify-between">
            
          </div>
          <div className="flex items-center space-x-4 md:space-x-8 mt-5">
            <label htmlFor="file">upload the code</label>
            <input type="file" className="flex-1" id="file" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center space-x-4 md:space-x-8">
              
            </div>
            <div className="flex h-6">
              {cats?.map((c, i) => (
                <div
                  key={i}
                  className="flex justify-center items-center space-x-2 mr-4"
                >
                  <p>{c}</p>
                  <p
                    onClick={() => deleteCategory(i)}
                    className="text-gray-700 rounded-xl hover:text-red-500 cursor-pointer"
                  >
                    <HiXCircle />
                  </p>
                </div>
              ))}
            </div>
  
            <textarea
              name=""
              id=""
              cols="30"
              rows="15"
              className="px-4 py-4 outline-none mt-5"
              required
              minLength={150}
              placeholder="200 words minimum required"
            ></textarea>
            <button className="mt-5 bg-black w-full text-white hover:bg-slate-500">
              write your code
            </button>
          </div>
        </form>
      </div>
      <p><li>
      Data Binding:
Implement two-way data binding in Angular for an input field and a paragraph element, so that the input field's value is displayed in real-time in the paragraph.
</li></p>
<div className="p-3 max-w-3xl mx-auto min-h-screen">
        
        <form action="" className="">
          <div className="flex flex-col gap-4 justify-between">
            
          </div>
          <div className="flex items-center space-x-4 md:space-x-8 mt-5">
            <label htmlFor="file">upload the code</label>
            <input type="file" className="flex-1" id="file" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center space-x-4 md:space-x-8">
              
            </div>
            <div className="flex h-6">
              {cats?.map((c, i) => (
                <div
                  key={i}
                  className="flex justify-center items-center space-x-2 mr-4"
                >
                  <p>{c}</p>
                  <p
                    onClick={() => deleteCategory(i)}
                    className="text-gray-700 rounded-xl hover:text-red-500 cursor-pointer"
                  >
                    <HiXCircle />
                  </p>
                </div>
              ))}
            </div>
  
            <textarea
              name=""
              id=""
              cols="30"
              rows="15"
              className="px-4 py-4 outline-none mt-5"
              required
              minLength={150}
              placeholder="200 words minimum required"
            ></textarea>
            <button className="mt-5 bg-black w-full text-white hover:bg-slate-500">
              write your code
            </button>
          </div>
        </form>
      </div>

      <p><li>
      Event Binding:
Create a button in an Angular component that, when clicked, increments a counter variable and displays the updated count on the page.

</li></p>
<div className="p-3 max-w-3xl mx-auto min-h-screen">
        
        <form action="" className="">
          <div className="flex flex-col gap-4 justify-between">
            
          </div>
          <div className="flex items-center space-x-4 md:space-x-8 mt-5">
            <label htmlFor="file">upload the code</label>
            <input type="file" className="flex-1" id="file" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center space-x-4 md:space-x-8">
              
            </div>
            <div className="flex h-6">
              {cats?.map((c, i) => (
                <div
                  key={i}
                  className="flex justify-center items-center space-x-2 mr-4"
                >
                  <p>{c}</p>
                  <p
                    onClick={() => deleteCategory(i)}
                    className="text-gray-700 rounded-xl hover:text-red-500 cursor-pointer"
                  >
                    <HiXCircle />
                  </p>
                </div>
              ))}
            </div>
  
            <textarea
              name=""
              id=""
              cols="30"
              rows="15"
              className="px-4 py-4 outline-none mt-5"
              required
              minLength={150}
              placeholder="200 words minimum required"
            ></textarea>
            <button className="mt-5 bg-black w-full text-white hover:bg-slate-500">
              write your code
            </button>
          </div>
        </form>
      </div>
                    <button className={toogleState ===
            3? 'tabs active-tabs' : 'tabs'}
             onClick={()=> toggleTab(3)}>
             Click here
             </button>
                </div>
                <div className={toogleState === 4 ?
                'content active-content':'content'}>
                    <h2>React</h2>
                    <hr />
                    <p><li>Hello, World! Component:
Create a React component that renders a simple "Hello, World!" message on the screen.

                    <div className="p-3 max-w-3xl mx-auto min-h-screen">
        
        <form action="" className="">
          <div className="flex flex-col gap-4 justify-between">
            
          </div>
          <div className="flex items-center space-x-4 md:space-x-8 mt-5">
            <label htmlFor="file">upload the code</label>
            <input type="file" className="flex-1" id="file" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center space-x-4 md:space-x-8">
              
            </div>
            <div className="flex h-6">
              {cats?.map((c, i) => (
                <div
                  key={i}
                  className="flex justify-center items-center space-x-2 mr-4"
                >
                  <p>{c}</p>
                  <p
                    onClick={() => deleteCategory(i)}
                    className="text-gray-700 rounded-xl hover:text-red-500 cursor-pointer"
                  >
                    <HiXCircle />
                  </p>
                </div>
              ))}
            </div>
  
            <textarea
              name=""
              id=""
              cols="30"
              rows="15"
              className="px-4 py-4 outline-none mt-5"
              required
              minLength={150}
              placeholder="200 words minimum required"
            ></textarea>
            <button className="mt-5 bg-black w-full text-white hover:bg-slate-500">
              write your code
            </button>
          </div>
        </form>
      </div>
      <p><li>
      Data Binding:
Implement two-way data binding in Angular for an input field and a paragraph element, so that the input field's value is displayed in real-time in the paragraph.
</li></p>
<div className="p-3 max-w-3xl mx-auto min-h-screen">
        
        <form action="" className="">
          <div className="flex flex-col gap-4 justify-between">
            
          </div>
          <div className="flex items-center space-x-4 md:space-x-8 mt-5">
            <label htmlFor="file">upload the code</label>
            <input type="file" className="flex-1" id="file" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center space-x-4 md:space-x-8">
              
            </div>
            <div className="flex h-6">
              {cats?.map((c, i) => (
                <div
                  key={i}
                  className="flex justify-center items-center space-x-2 mr-4"
                >
                  <p>{c}</p>
                  <p
                    onClick={() => deleteCategory(i)}
                    className="text-gray-700 rounded-xl hover:text-red-500 cursor-pointer"
                  >
                    <HiXCircle />
                  </p>
                </div>
              ))}
            </div>
  
            <textarea
              name=""
              id=""
              cols="30"
              rows="15"
              className="px-4 py-4 outline-none mt-5"
              required
              minLength={150}
              placeholder="200 words minimum required"
            ></textarea>
            <button className="mt-5 bg-black w-full text-white hover:bg-slate-500">
              write your code
            </button>
          </div>
        </form>
      </div>
      <p><li>
      Data Binding:
Implement two-way data binding in Angular for an input field and a paragraph element, so that the input field's value is displayed in real-time in the paragraph.
</li></p>
<div className="p-3 max-w-3xl mx-auto min-h-screen">
        
        <form action="" className="">
          <div className="flex flex-col gap-4 justify-between">
            
          </div>
          <div className="flex items-center space-x-4 md:space-x-8 mt-5">
            <label htmlFor="file">upload the code</label>
            <input type="file" className="flex-1" id="file" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center space-x-4 md:space-x-8">
              
            </div>
            <div className="flex h-6">
              {cats?.map((c, i) => (
                <div
                  key={i}
                  className="flex justify-center items-center space-x-2 mr-4"
                >
                  <p>{c}</p>
                  <p
                    onClick={() => deleteCategory(i)}
                    className="text-gray-700 rounded-xl hover:text-red-500 cursor-pointer"
                  >
                    <HiXCircle />
                  </p>
                </div>
              ))}
            </div>
  
            <textarea
              name=""
              id=""
              cols="30"
              rows="15"
              className="px-4 py-4 outline-none mt-5"
              required
              minLength={150}
              placeholder="200 words minimum required"
            ></textarea>
            <button className="mt-5 bg-black w-full text-white hover:bg-slate-500">
              write your code
            </button>
          </div>
        </form>
      </div>
      <p><li>
      Data Binding:
Implement two-way data binding in Angular for an input field and a paragraph element, so that the input field's value is displayed in real-time in the paragraph.
</li></p>
<div className="p-3 max-w-3xl mx-auto min-h-screen">
        
        <form action="" className="">
          <div className="flex flex-col gap-4 justify-between">
            
          </div>
          <div className="flex items-center space-x-4 md:space-x-8 mt-5">
            <label htmlFor="file">upload the code</label>
            <input type="file" className="flex-1" id="file" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center space-x-4 md:space-x-8">
              
            </div>
            <div className="flex h-6">
              {cats?.map((c, i) => (
                <div
                  key={i}
                  className="flex justify-center items-center space-x-2 mr-4"
                >
                  <p>{c}</p>
                  <p
                    onClick={() => deleteCategory(i)}
                    className="text-gray-700 rounded-xl hover:text-red-500 cursor-pointer"
                  >
                    <HiXCircle />
                  </p>
                </div>
              ))}
            </div>
  
            <textarea
              name=""
              id=""
              cols="30"
              rows="15"
              className="px-4 py-4 outline-none mt-5"
              required
              minLength={150}
              placeholder="200 words minimum required"
            ></textarea>
            <button className="mt-5 bg-black w-full text-white hover:bg-slate-500">
              write your code
            </button>
          </div>
        </form>
      </div>

      
      



</li></p>
<button className={toogleState ===
            4? 'tabs active-tabs' : 'tabs'}
             onClick={()=> toggleTab(4)}>
             Click here
             </button>        
                </div>
                <div className={toogleState === 5 ?
                'content active-content':'content'}>
                    <h2>Full-Stack</h2>
                    <hr />
                    <p><li>
      Data Binding:
Implement two-way data binding in Angular for an input field and a paragraph element, so that the input field's value is displayed in real-time in the paragraph.
</li></p>
<div className="p-3 max-w-3xl mx-auto min-h-screen">
        
        <form action="" className="">
          <div className="flex flex-col gap-4 justify-between">
            
          </div>
          <div className="flex items-center space-x-4 md:space-x-8 mt-5">
            <label htmlFor="file">upload the code</label>
            <input type="file" className="flex-1" id="file" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center space-x-4 md:space-x-8">
              
            </div>
            <div className="flex h-6">
              {cats?.map((c, i) => (
                <div
                  key={i}
                  className="flex justify-center items-center space-x-2 mr-4"
                >
                  <p>{c}</p>
                  <p
                    onClick={() => deleteCategory(i)}
                    className="text-gray-700 rounded-xl hover:text-red-500 cursor-pointer"
                  >
                    <HiXCircle />
                  </p>
                </div>
              ))}
            </div>
  
            <textarea
              name=""
              id=""
              cols="30"
              rows="15"
              className="px-4 py-4 outline-none mt-5"
              required
              minLength={150}
              placeholder="200 words minimum required"
            ></textarea>
            <button className="mt-5 bg-black w-full text-white hover:bg-slate-500">
              write your code
            </button>
          </div>
        </form>
      </div>

        <p><li>
      Data Binding:
Implement two-way data binding in Angular for an input field and a paragraph element, so that the input field's value is displayed in real-time in the paragraph.
</li></p>
<div className="p-3 max-w-3xl mx-auto min-h-screen">
        
        <form action="" className="">
          <div className="flex flex-col gap-4 justify-between">
            
          </div>
          <div className="flex items-center space-x-4 md:space-x-8 mt-5">
            <label htmlFor="file">upload the code</label>
            <input type="file" className="flex-1" id="file" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center space-x-4 md:space-x-8">
              
            </div>
            <div className="flex h-6">
              {cats?.map((c, i) => (
                <div
                  key={i}
                  className="flex justify-center items-center space-x-2 mr-4"
                >
                  <p>{c}</p>
                  <p
                    onClick={() => deleteCategory(i)}
                    className="text-gray-700 rounded-xl hover:text-red-500 cursor-pointer"
                  >
                    <HiXCircle />
                  </p>
                </div>
              ))}
            </div>
  
            <textarea
              name=""
              id=""
              cols="30"
              rows="15"
              className="px-4 py-4 outline-none mt-5"
              required
              minLength={150}
              placeholder="200 words minimum required"
            ></textarea>
            <button className="mt-5 bg-black w-full text-white hover:bg-slate-500">
              write your code
            </button>
          </div>
        </form>
      </div>
      <p><li>
      Data Binding:
Implement two-way data binding in Angular for an input field and a paragraph element, so that the input field's value is displayed in real-time in the paragraph.
</li></p>
<div className="p-3 max-w-3xl mx-auto min-h-screen">
        
        <form action="" className="">
          <div className="flex flex-col gap-4 justify-between">
            
          </div>
          <div className="flex items-center space-x-4 md:space-x-8 mt-5">
            <label htmlFor="file">upload the code</label>
            <input type="file" className="flex-1" id="file" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center space-x-4 md:space-x-8">
              
            </div>
            <div className="flex h-6">
              {cats?.map((c, i) => (
                <div
                  key={i}
                  className="flex justify-center items-center space-x-2 mr-4"
                >
                  <p>{c}</p>
                  <p
                    onClick={() => deleteCategory(i)}
                    className="text-gray-700 rounded-xl hover:text-red-500 cursor-pointer"
                  >
                    <HiXCircle />
                  </p>
                </div>
              ))}
            </div>
  
            <textarea
              name=""
              id=""
              cols="30"
              rows="15"
              className="px-4 py-4 outline-none mt-5"
              required
              minLength={150}
              placeholder="200 words minimum required"
            ></textarea>
            <button className="mt-5 bg-black w-full text-white hover:bg-slate-500">
              write your code
            </button>
          </div>
        </form>
      </div>
      <p><li>
      Data Binding:
Implement two-way data binding in Angular for an input field and a paragraph element, so that the input field's value is displayed in real-time in the paragraph.
</li></p>
<div className="p-3 max-w-3xl mx-auto min-h-screen">
        
        <form action="" className="">
          <div className="flex flex-col gap-4 justify-between">
            
          </div>
          <div className="flex items-center space-x-4 md:space-x-8 mt-5">
            <label htmlFor="file">upload the code</label>
            <input type="file" className="flex-1" id="file" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center space-x-4 md:space-x-8">
              
            </div>
            <div className="flex h-6">
              {cats?.map((c, i) => (
                <div
                  key={i}
                  className="flex justify-center items-center space-x-2 mr-4"
                >
                  <p>{c}</p>
                  <p
                    onClick={() => deleteCategory(i)}
                    className="text-gray-700 rounded-xl hover:text-red-500 cursor-pointer"
                  >
                    <HiXCircle />
                  </p>
                </div>
              ))}
            </div>
  
            <textarea
              name=""
              id=""
              cols="30"
              rows="15"
              className="px-4 py-4 outline-none mt-5"
              required
              minLength={150}
              placeholder="200 words minimum required"
            ></textarea>
            <button className="mt-5 bg-black w-full text-white hover:bg-slate-500">
              write your code
            </button>
          </div>
        </form>
      </div>
      <p><li>
      Data Binding:
Implement two-way data binding in Angular for an input field and a paragraph element, so that the input field's value is displayed in real-time in the paragraph.
</li></p>
<div className="p-3 max-w-3xl mx-auto min-h-screen">
        
        <form action="" className="">
          <div className="flex flex-col gap-4 justify-between">
            
          </div>
          <div className="flex items-center space-x-4 md:space-x-8 mt-5">
            <label htmlFor="file">upload the code</label>
            <input type="file" className="flex-1" id="file" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center space-x-4 md:space-x-8">
              
            </div>
            <div className="flex h-6">
              {cats?.map((c, i) => (
                <div
                  key={i}
                  className="flex justify-center items-center space-x-2 mr-4"
                >
                  <p>{c}</p>
                  <p
                    onClick={() => deleteCategory(i)}
                    className="text-gray-700 rounded-xl hover:text-red-500 cursor-pointer"
                  >
                    <HiXCircle />
                  </p>
                </div>
              ))}
            </div>
  
            <textarea
              name=""
              id=""
              cols="30"
              rows="15"
              className="px-4 py-4 outline-none mt-5"
              required
              minLength={150}
              placeholder="200 words minimum required"
            ></textarea>
            <button className="mt-5 bg-black w-full text-white hover:bg-slate-500">
              write your code
            </button>
          </div>
        </form>
      </div>

                    <button className={toogleState ===
            5? 'tabs active-tabs' : 'tabs'}
             onClick={()=> toggleTab(5)}>
             Click here
             </button>
                </div>
            </div>
           </div>
        </div>
    )
  
}


export default Tabs
