import React, { Component } from 'react';
import './App.css';
// import './style.css';
// import './flexslider.css';
import './css/style.css';
import './css/flexslider.css';
import './css/bootstrap.css';
import './css/animate.css';
// import Header from './Components/Header';
// import Footer from './Components/Footer';
import Introduction from './Components/Introduction';
import About from './Components/About';
// import Resume from './Components/Resume';
// import Contact from './Components/Contact';
// import Testimonials from './Components/Testimonials';
// import Portfolio from './Components/Portfolio';
import Sidebar from './Components/Sidebar';
import $ from 'jquery';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      foo: 'bar',
      websiteData: {}
    };

  }

  getSiteData(){
    $.ajax({
      url:'websiteData.json',
      dataType:'json',
      cache: false,
      success: function(data){
        this.setState({websiteData: data});
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
        alert(err);
      }
    });
  }

  componentDidMount(){
    this.getSiteData();
  }

  render() {
    return (
      <div className="App">
        <div id="colorlib-page">
            <div id="container-wrap">
              <Sidebar data={this.state.websiteData.main}/>
              <div id="colorlib-main">
                <Introduction data={this.state.websiteData.main}/> 
                <About data={this.state.websiteData.main}/>
              </div>
            </div>
          </div>
      </div>
    );
  }
}

export default App;
