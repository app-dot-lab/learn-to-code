import React from 'react'
import * as icons from '@material-ui/icons';

class Sidebar extends React.Component {

    navItems = [
        { icon: icons.Apps, text: 'Home', active: true },
        { icon: icons.Search, text: 'Search', active: false },
        { icon: icons.MenuBook, text: 'Courses', active: false },
        { icon: icons.Code, text: 'IDE', active: false },
    ]

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
                            return (
                                <div key={index} className='navbar-item py-4'>
                                    <item.icon className={`navbar-item-icon ${item.active ? 'text-green': ''}`}></item.icon>
                                    <span className='navbar-item-label'>{item.text}</span>
                                </div>
                            )
                        })
                    }
                    
                </div>
            </div>
        )
    }
}

export default Sidebar