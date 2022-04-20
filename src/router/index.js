import React from 'react'
import { useRoutes } from 'react-router-dom'
//懶加載, 不用原因:比較慢
/*let About = React.lazy(() => import('../pages/About'))
let Home = React.lazy(() => import('../pages/Home'))
let Contact = React.lazy(() => import('../pages/Contact'))
let NoMatch = React.lazy(() => import('../pages/NoMatch'))
let UserName = React.lazy(() => import('../pages/UserName'))
let NavBarExample = React.lazy(() => import('../layout/Navbar'))
let ReposList = React.lazy(() => import('../pages/ReposList'))
let Repo = React.lazy(() => import('../pages/Repo')) 
 <React.Suspense fallback={<>...</>}>
                        <Repo />
                      </React.Suspense>*/

import About from '../pages/About'
import Home from '../pages/Home'
import Contact from '../pages/Contact'
import NoMatch from '../pages/NoMatch'
import UserName from '../pages/UserName'
import NavBarExample from '../layout/Navbar'
import ReposList from '../pages/ReposList'
import Repo from '../pages/Repo'

export default function GetRoutes() {
  let routes = [
    {
      path: '/',
      element:
        <NavBarExample />,
      children: [
        {
          index: true, element: <Home />        
        },
        {
          path: 'user',
          element:  <Home />,         
          children: [
            {
              path: ':username',
              element:<UserName />,               
              children: [
                {
                  path: 'repos',
                  element:<ReposList />,                   
                  children: [{
                    path: ':repo',
                    element:<Repo />,                     
                  }]
                }
              ]
            }
          ]
        },
        {
          path: 'About',
          element:<About />   
        },
        {
          path: 'Contact',
          element:<Contact />         
        }
      ]
    },
    {
      path: '*',
      element:<NoMatch />       
    }
  ]

  let element = useRoutes(routes)

  return (
    <div>
      {element}
    </div>
  )
}