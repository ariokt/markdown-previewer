import { useState } from "react";
import Markdown from "marked-react";
import Lowlight from "react-lowlight";
import javascript from "highlight.js/lib/languages/javascript";
import xml from "highlight.js/lib/languages/xml";
import md from "highlight.js/lib/languages/markdown";
import TextEditor from "./Components/TextEditor/index.js";
import "./index.css";
import "highlight.js/styles/github-dark.css";

export default function MarkdownPreviewer() {
  Lowlight.registerLanguage("js", javascript);
  Lowlight.registerLanguage("html", xml);

  const [data, setData] = useState(`# Welcome to my React Markdown Previewer!
  
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

  ![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
  `);

  const renderer = {
    code(snippet, lang) {
      return <Lowlight key={this.elementId} language={lang} value={snippet} />;
    },
  };

  return (
    <div className="App">
      <div className="content-preview p-8 mx-auto">
        <TextEditor data={data} setData={setData} />
        <div id="preview">
          <Markdown
            value={data}
            renderer={renderer}
            breaks={true}
            gfm={true}
            sanitize={true}
            // isInline={true}
          />
        </div>
      </div>
    </div>
  );
}
