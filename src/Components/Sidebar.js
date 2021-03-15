import React, { Component } from 'react'

class Sidebar extends Component {
    render(){

        if(this.props.data){
            var name = this.props.data.name;
            var email = this.props.data.email;
            var networks= this.props.data.social.map(function(network){
                return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
              }) 
        }
        return(
            <div >
            <aside id="colorlib-aside" className="border js-fullheight">
                <div className="text-center">
                    <div className="author-img" style={{backgroundImage: 'url(images/profilepic.jpg)'}} />
                    <h1 id="colorlib-logo"><a href="index.html">{name}</a></h1>
                    <span className="email"><i className="icon-mail"></i> {email}</span>
                </div>
                <nav id="colorlib-main-menu" role="navigation" className="navbar">
                    <div id="navbar" className="collapse">
                        <ul>
                        <li className="active"><a href="#home" data-nav-section="home">Introduction</a></li>
                        <li><a href="#about" data-nav-section="about">About</a></li>
                        <li><a href="#timeline" data-nav-section="timeline">Timeline</a></li>
                        </ul>
                    </div>
                </nav>
                <nav id="colorlib-main-menu">
                    <ul className="social-links">
                        {networks}
                    </ul>
               </nav>
            </aside>
            </div>
        )
    }
}

export default Sidebar;