

import React from 'react';
import ReactDOM from 'react-dom/client';
//import using defualt--> default import
import Header from "./components/Header";
//import using name-->Named import
// import {Title} from "./components/Header";
// import {createElement } from 'react';
import Body from "./components/Body"; 
import Footer from "./components/Footer";
import { createBrowserRouter, RouterProvider,Outlet } from 'react-router-dom';
import About from './components/About';
import Error from './components/Error';
import Contact from './components/Contact';


// React Component 
// Functional component - new way of writing component 
// Class component - old way of writing component

// Title component is functional component

//element
// const title = (
//   // return (
//     <h1 id="title" key="title">I am react Element</h1>
//   );
 //functional componenet
  // const Title =()=>(
  //   <a href="/"> 
  //     <img className="logo" alt="logo" 
  //     src="https://api.logo.com/api/v2/images?logo=logo_6a279f71-1a22-4152-921c-312bdaa11287&u=1702204414&width=500&height=400&fit=contain&margins=100&format=webp&quality=60"/>
  //    </a>
  // );
// const Header=()=>{
//   return (
//     <div className="header">
//       {/* {title} */}
//       <Title/>
//       {/* we can also use <Title()> */}
//       {/* we can also use <Title></Title> */}
//       <div className="NavItems">
//         <ul>
//           <li>Home</li>
//           <li>About</li>
//           <li>Contact</li>
//           <li>Cart</li>
//         </ul>
//       </div>
//     </div>
//   );
// }; 

const AppLayout=()=>{
  return (
      <>
      <Header/>
      {/* <About/>
      <Body/>
      <Contact/> */}
      {/* {Otulet} */}
      <Outlet/>
      <Footer/>
     </>
  )
}

//react fragment:-jsx have only one parent. so if you want to use multiple elements without using  div so that we can access those elememts particularly, we use react fragment.
// const jsx=(
// <React.Fragment> or <></>
//   <h1>jsx</h1>
//   <h2>Second Jsx</h2>
// </React.Fragment>
// );

const appRouter = createBrowserRouter([
{
  path:"/",
  element:<AppLayout/>,
  errorElement:<Error/>,
  children:[
    {
      path:"/",
      element:<Body/>,
    },
    {
         path:"/about",
         element:<About/>,
       },
       {
        path:"/contact",
          element:<Contact/>,
      },

  ]
},
// {
//   path:"/about",
//   element:<About/>,
//   errorElement:<Error/>,
// },
// {
//   path:"/contact",
//     element:<Contact/>,
//     errorElement:<Error/>,
// },
]);

  // create root using createRoot
  const root = ReactDOM.createRoot(document.getElementById("root"));
  // passing react element inside root
  // root.render(<AppLayout/>);
  root.render(<RouterProvider router={appRouter}/>);
 
  // root.render(jsx);