import React from 'react';
import Component from 'react';
import './tryDemo.css';
import ComplexGrid from './ComplexGrid';
import Navigbar from './Navigbar';
import ResponsivePlayer from './ResponsivePlayer';
import './img/img-04.jpg';


class tryDemo extends React.Component {
    render(props) {
        return (
            <div>
                {/* <ul>
                    <li><a class="active" href="#home">Home</a></li>
                    <li><a href="#news">News</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li><a href="#about">About</a></li>
                    <li><input class="search__input" type="text" placeholder="Search"/></li>
                </ul> */}
                {/* <h2>Header2</h2> */}
               
                {/* <header>
                    Header  
                </header> */}

                <section>
                <ResponsivePlayer></ResponsivePlayer>
                    <div>
                        <li>
                            <ComplexGrid title="img-03"></ComplexGrid>  <hr/>
                            <ComplexGrid title="videoMessage"> </ComplexGrid> <hr/>
                            <ComplexGrid title="steveCare"> </ComplexGrid> <hr/>
                            <ComplexGrid title="img-01"></ComplexGrid>  <hr/>
                            <ComplexGrid title="videoMessage"> </ComplexGrid> <hr/>
                            <ComplexGrid title="steveCare"> </ComplexGrid> <hr/>
                            <ComplexGrid title="img-02"></ComplexGrid>  <hr/>
                            <ComplexGrid title="videoMessage"> </ComplexGrid> <hr/>
                            <ComplexGrid title="steveCare"> </ComplexGrid> <hr/>
                        </li>
                        <ResponsivePlayer></ResponsivePlayer>
                    </div>
                    {/* </nav> */}

                    {/* <article>
                        insidde article
                    </article> */}
                </section>
                {/* <footer>
                    <p>Footer</p>
                </footer> */}
            </div>
        );

    }
}


export default tryDemo;