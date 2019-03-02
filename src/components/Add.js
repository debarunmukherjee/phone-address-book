import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';

class AddRecord extends Component {
  state = {
    name: '',
    phone: ''
  }
  nameChange = (e) => {
    this.setState({
      name: e.target.value
    });
  }
  phoneChange = (e) => {
    if(/^\d+$/.test(e.target.value) || e.target.value === "")
    this.setState({
      phone: e.target.value
    });
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addRecord(this.state);
    this.props.history.push('/');
    this.setState({
      name: '',
      phone: ''
    })
  }
  render() {
    return (
    <div className="container">

      <div className="wd-40">
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <div>
                        <label htmlFor="name">Name:</label>
                    </div>
                    <div>
                        <input type="text" className="form-control" id="name" onChange={this.nameChange} value={this.state.name} required autoComplete="off"/>
                    </div>
                    <div>
                        <label htmlFor="phone">Phone:</label>
                    </div>
                    <div>
                        <input type="text" className="form-control" id="phone" onChange={this.phoneChange} value={this.state.phone} required />
                    </div>

                    <div className="mg-top-10">
                        <button type="submit" className="btn btn-success mb-2">Add</button>
                    </div>
                </div>
            </form>
      </div>
        

        <div className="subscriber-info">
            <div className="card">
                <div className="card-header">
                    Subscriber to be added
                </div>
                <div className="card-body">
                <div className="row">
                            <strong className="font-weight-bold">&nbsp; Name: &nbsp;</strong> {this.state.name}
                        </div>
                        <div className="row">
                            <strong className="font-weight-bold">&nbsp; Phone: &nbsp;</strong> {this.state.phone}
                        </div>
                </div>
            </div>
        </div>
    </div>
    )
  }
}

export default withRouter(AddRecord);