import React from 'react';
import Sidebar from "react-sidebar";
import { slide as Menu } from 'react-burger-menu';

const mql = window.matchMedia(`(min-width: 800px)`);

class My_Sidebar extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
              <Menu>
                <a className="menu-item" href="/">
                  Home
                </a>
                <br />
                <a className="menu-item" href="/Simulators">
                  Simulators
                </a>
                <br />
                <a className="menu-item" href="/Illustrations">
                  Illustrations
                </a>
                <br />
              </Menu>
            </div>
        );
    }

}

export default My_Sidebar;