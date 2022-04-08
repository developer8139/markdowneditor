import './App.css';
import ReactMarkdown from 'react-markdown';
import { useState } from 'react';
import { Form } from './components/Form';
import styled from 'styled-components';
import remarkGfm from 'remark-gfm';


const FormContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80vw;
`

const RightSide = styled.div`
  width: 30vw;
`

const LeftSide = styled.div`
  min-width: 400px;
  min-height: 400px;
  background-color: lightgrey;
  margin-top: 50px;
  box-shadow: 2px 5px 13px 1px black;
  border: 2px dotted yellow;
  border-radius: 4px;
`

const LeftSideContainer = styled.div`
  text-align: center;
`

const defaultTemplate = `
# This is a Title

  * This is a list item
  * This is another list item
  
  ## This is a h2 tag
  ### This is a h3 tag
  Have to put two spaces in front of text to  
  make a newline  

  *This is italics*  
  **This is bold**  
  ~~strikethrough~~



   [Wikipedia](https://en.wikipedia.org/wiki/Main_Page)


`

function App() {
  const [markdown, setMarkDown] = useState(defaultTemplate)
  return (
    <FormContainer>
      <RightSide>
        <Form value={markdown} setMarkDown={setMarkDown}/>
      </RightSide>
      <LeftSideContainer>
        <h1 style={{backgroundColor: "lightgrey", padding: "20px", borderRadius: "5px", boxShadow: "0 2px 5px black"}}>Preview Screen</h1>
        <LeftSide>
          <ReactMarkdown remarkPlugins={remarkGfm}>{markdown}</ReactMarkdown>  
        </LeftSide>
      </LeftSideContainer>
    </FormContainer>
  )
}

export default App;
