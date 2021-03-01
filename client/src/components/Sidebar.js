import React from 'react'
import * as icons from '@material-ui/icons';
import {NavLink} from 'react-router-dom'

class Sidebar extends React.Component {

    state = { activeNav: 0 }

    navItems = [
        { icon: icons.Apps, text: 'Home', link: '/'},
        { icon: icons.Search, text: 'Search', link: '/search'},
        { icon: icons.MenuBook, text: 'Courses', link: '/courses'},
        { icon: icons.Code, text: 'IDE', link: '/ide'},
        // { icon: icons.Code, text: 'Login', link: '/login'},
    ]

    search = () => {
        var isSearchActive = this.props.isSearchActive
        isSearchActive = !isSearchActive
        this.props.searchListener(isSearchActive)
    }

    render() {
        return (
            <div className='sidebar text-center py-3 px-2'>
                <div className='logo py-3'>
                    <h1 className='text-center text-green font-weight-medium'>{"{ }"}</h1>
                </div>

                <br></br>

                <div className='navbar-items'>
                    { 
                        this.navItems.map((item, index) => {

                            if (item.text != 'Search') {
                                return (
                                    <NavLink key={index} to={item.link} exact activeClassName='navbar-active'>
                                        <div key={index} className='navbar-item py-4'>
                                            <item.icon className={`navbar-item-icon`}></item.icon>
                                            <span className='navbar-item-label'>{item.text}</span>
                                        </div>
                                    </NavLink>
                                )
                            } else {
                                return (
                                    <div key={index} onClick={() => this.search()} key={index} className='navbar-item py-4'>
                                        <item.icon className={`navbar-item-icon`}></item.icon>
                                        <span className='navbar-item-label'>{item.text}</span>
                                    </div>
                                )
                            }
                        })
                    }
                    
                </div>
            </div>
        )
    }
}

export default Sidebar