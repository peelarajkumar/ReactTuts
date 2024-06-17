const heading = React.createElement('h1',{id:"heading",className:'heads'},"hello raj from react ! How are you")

//parent nesetd and siblings

const parent = React.createElement('div', { id: "parentdiv" }, 
React.createElement('div', { id: "childdiv" }, 
[ React.createElement('h1', { id: 'heading1' }, "I am Elder Brother - Rajkumar"),
  React.createElement('h2', { id: 'heading2' }, "I am younger Brother - RajPaul")
]
))


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(parent)

