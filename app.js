import React from "react"
import ReactDOM from "react-dom/client"

const heading = React.createElement('h1',{id:"heading",className:'heads'},"hello raj from react ! How are you")

//parent nesetd and siblings

const parent = React.createElement('div', { id: "parentdiv" },[
React.createElement('div', { id: "childdiv1" }, 
[ React.createElement('h1', { id: 'heading1' }, "I am Elder Brother - Rajkumar"),
  React.createElement('h2', { id: 'heading2' }, "I am younger Brother - Rajpaul")
]
),
React.createElement('div', { id: "childdiv2" }, 
    [ React.createElement('h1', { id: 'heading3' }, "I am Elder Brother - Shaun Marsh"),
      React.createElement('h2', { id: 'heading4' }, "I am younger Brother - Mitchell Marsh")
    ]
    )
])


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(parent)

