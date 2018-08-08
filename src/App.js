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
                  <div className="deletebtn">
                    <p>todo 1</p>
                    <div style={{ flexDirection: 'row', paddingRight: '5px' }}>
                      <span onClick={() => document.getElementById('id01').style.display = 'block'} className="fa fa-times" style={{ fontSize: '36px', color: '#369ef4' }}></span>
                      <span onClick={() => document.getElementById('id02').style.display = 'block'} className="fa fa-edit" style={{ fontSize: '36px', color: '#369ef4', padding: 5 }}></span>
                    </div>
                  </div>
                </AccordionItemTitle>
                <AccordionItemBody>
                  <p>name</p>
                  <div className='tag'><text>tag 1</text></div>
                </AccordionItemBody>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemTitle>
                <div className="deletebtn">
                    <p>todo 2</p>
                    <div style={{ flexDirection: 'row', paddingRight: '5px' }}>
                      <span onClick={() => document.getElementById('id01').style.display = 'block'} className="fa fa-times" style={{ fontSize: '36px', color: '#369ef4' }}></span>
                      <span onClick={() => document.getElementById('id02').style.display = 'block'} className="fa fa-edit" style={{ fontSize: '36px', color: '#369ef4', padding: 5 }}></span>
                    </div>
                  </div>
                </AccordionItemTitle>
                <AccordionItemBody>
                  <p>name</p>
                  <div className='tag'><text>tag 2</text></div>
                </AccordionItemBody>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemTitle>
                <div className="deletebtn">
                    <p>todo 3</p>
                    <div style={{ flexDirection: 'row', paddingRight: '5px' }}>
                      <span onClick={() => document.getElementById('id01').style.display = 'block'} className="fa fa-times" style={{ fontSize: '36px', color: '#369ef4' }}></span>
                      <span onClick={() => document.getElementById('id02').style.display = 'block'} className="fa fa-edit" style={{ fontSize: '36px', color: '#369ef4', padding: 5 }}></span>
                    </div>
                  </div>
                </AccordionItemTitle>
                <AccordionItemBody>
                  <p>name</p>
                  <div className='tag'><text>tag 3</text></div>
                </AccordionItemBody>
              </AccordionItem>
            </Accordion>
          </div>

        </div>

        <div id="id01" className="w3-modal">
          <div className="w3-modal-content">
            <header className="w3-container " style={{ backgroundColor: '#369ef4', color: '#fff' }}>
              <span onClick={() => document.getElementById('id01').style.display = 'none'}
                className="w3-button w3-display-topright">&times;</span>
              <h2>Todo 1</h2>
            </header>
            <div class="w3-container">
              <p>Do you want to delete</p>
            </div>
            <footer class="w3-container" style={{ backgroundColor: '#369ef4' }}>
              <button className='deletebutton'>Delete</button>
            </footer>
          </div>
        </div>
        <div id="id02" className="w3-modal">
          <div className="w3-modal-content">
            <header className="w3-container " style={{ backgroundColor: '#369ef4', color: '#fff' }}>
              <span onClick={() => document.getElementById('id02').style.display = 'none'}
                className="w3-button w3-display-topright">&times;</span>
              <h2>Todo 1</h2>
            </header>
            <div class="w3-container">
              <p>Do you want to update</p>
            </div>
            <footer class="w3-container" style={{ backgroundColor: '#369ef4' }}>
              <button className='deletebutton'>Update</button>
            </footer>
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
