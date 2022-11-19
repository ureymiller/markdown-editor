import React from 'react';
import Markdown from 'marked-react';
import './Markdown.css';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown:
      '# Welcome to my React Markdown Previewer!\n## This is a sub-heading\n### And here\'s some other cool stuff:\n\nHere is some code, `<div></div>`, between 2 backtickts.\n\n```\n\\\\ this is multi-line code:\n\nfunction addTwoNumbers(a, b) {\n  return a + b;\n}\n```\n\nYou can also make text **bold** or *italic* or even **_both!_**\nHere is how you can even ~~cross stuff out~~.\n\nThere are also [links](www.google.com) and\n> block quotes!\n\nAnd if you want to get really crazy, even tables:\n\nWild Header | Crazy Header | Another Header\n------------ | ------------- | -------------\nYour content can | be here, and it | can be here\nAnd here | Okay. | I think we get it.\n\n- And of course there are lists.\n  - some are bulleted.\n    - With different indentation levels.\n      That look like this.\n\n\n1. And there are numbered lists too.\n2. This is the second item\nAnd last but not least, let us not forget embedded images:\n\n![Kitten](https://cdn-icons-png.flaticon.com/512/616/616430.png)'

    };
  }

  handleChange(e) {
    this.setState({
      markdown: e.target.value
    });
  }

  render() {
    return(
      <div class="markdown-container">
        <div className="markdown-preview">
          <Markdown>{this.state.markdown}</Markdown>
        </div>
        <textarea 
          className="markdown-input" 
          type="text" 
          onChange={this.handleChange.bind(this)}
          value={this.state.markdown} />
      </div>
    );
  };
}

export default Main;
