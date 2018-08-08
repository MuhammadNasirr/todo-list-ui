import React, { Component } from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionItemTitle,
  AccordionItemBody,
} from 'react-accessible-accordion';
import './App.css';
import 'react-accessible-accordion/dist/fancy-example.css';
class App extends Component {
  render() {
    return (
      <div className="App">
        <div id="myDIV" className="header">
          <h2>My To Do List</h2>
          <div className='inputs'>
            <input type="text" id="myInput" placeholder="Add Todo..." />
            <input type="text" id="myInput1" placeholder="Add Tag..." />
          </div>
          <span className="addBtn">Create Todo</span>
        </div>
        <div className="bodydiv">
          <div className="taglist">
            <div className="tagsheading"><h3>Tags</h3></div>
            <div className='tags'>tag 1</div>
            <div className='tags'>tag 2</div>
            <div className='tags'>tag 3</div>
            <div className='tags'>tag 4</div>
            <div className='tags'>tag 5</div>

          </div>
          <div className='todo-list'>
            <Accordion>
              <AccordionItem>
                <AccordionItemTitle>
                  <p>todo 1</p>
                </AccordionItemTitle>
                <AccordionItemBody>
                  <p>name</p>
                  <div className='tag'><text>tag 1</text></div>
                </AccordionItemBody>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemTitle>
                  <p>todo 2</p>
                </AccordionItemTitle>
                <AccordionItemBody>
                  <p>name</p>
                  <div className='tag'><text>tag 2</text></div>
                </AccordionItemBody>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemTitle>
                  <p>todo 3</p>
                </AccordionItemTitle>
                <AccordionItemBody>
                  <p>name</p>
                  <div className='tag'><text>tag 3</text></div>
                </AccordionItemBody>
              </AccordionItem>
            </Accordion>
          </div>

        </div>
      </div >
    );

  }
}

export default App;
export const DummyContent = () => (
  <div>
    <p style={{ padding: '18px' }}>
      this is name
        </p>
    <p style={{ padding: '18px' }}>
      this is tag
        </p>
  </div>
);
