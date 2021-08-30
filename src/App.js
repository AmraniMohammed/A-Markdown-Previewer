import React, { Component } from 'react';
import marked from 'marked';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


const intialState = `
# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![Logo](https://image.flaticon.com/icons/png/512/1336/1336494.png)
`

class App extends Component {
   constructor(props) {
    super(props);
    this.state = {
      text: intialState
    };
     this.handlChange = this.handlChange.bind(this);
   }
  
  handlChange = (e) => {
    this.setState({
      text: e.target.value
    })
  }
  
  render() {
    const { text } = this.state;
    const markdown = marked(text);
    return (
      <div className="container mb-5">
        <h1 className="text-center mt-5">Convert Your Markdown</h1>
        <div className="row">
        <div className="col-6 textarea-conainer">
          <h6 className="text-center">Enter Your Markdown Here</h6>
          <textarea className='form-control textarea' value={text} onChange={this.handlChange} id="editor" />
        </div>
        <div className="col-6 preview-container" >
          <h6 className="text-center">The Result</h6>
          <div className="preview rounded px-3 pt-2" dangerouslySetInnerHTML={{__html: markdown}} id="preview"></div>
        </div>
        </div>
      </div>
    );
  }
}


export default App
