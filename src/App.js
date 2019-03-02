import React, { Component } from 'react';
import {BrowserRouter, Route, Switch, NavLink} from 'react-router-dom';

import Add from './components/Add';
import Err from './components/InvalidURL';
import Records from './components/Record';

class App extends Component {

  state = {
    records: [
    ],
    page: "Phone Directory"
  }

  deleteRecord = (id) => {
    const records = this.state.records.filter(record => {
      return record.id !== id;
    });
    this.setState({
      records
    });
  }

  addRecord = (record) => {
    record.id = this.state.records.length+1;
    let records = [...this.state.records, record];
    this.setState({
      records
    });
  }

  pageToAdd = () => {
    this.setState({
      page: 'Add a Subscriber'
    });
  }
  pageToHome = () => {
    this.setState({
      page: 'Phone Directory'
    });
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <div className="title">
              {this.state.page}
          </div>
          <div className="container nav">
            <NavLink to="/Add" activeStyle={{display:'none'}} exact>
              <button type="button" className="btn btn-success" onClick={this.pageToAdd}>Add a Subscriber</button>
            </NavLink>
            <NavLink to="/" className="back-btn-container"  activeStyle={{display:'none'}} exact>
              <button type="button" className="btn btn-dark" onClick={this.pageToHome}>Back</button>
            </NavLink>
          </div>
          <Switch>
            <Route path="/" exact render={
              ()=>{
                return (
                  <div>
                      <div className="container">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">Phone Number</th>
                                </tr>
                            </thead>
                            <Records records={this.state.records} deleteRecord={this.deleteRecord} />
                        </table>
                      </div>
          
                      
                  </div>
                  
                );
              }
            }/>
            <Route path="/Add" render={
              () => {
                return (
                  <Add addRecord={this.addRecord} />
                );
              }
            } />
            <Route component={Err} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
