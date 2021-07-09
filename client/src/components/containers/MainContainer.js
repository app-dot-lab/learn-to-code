const MainContainer = props => {
    return (
        <div className="main-container" style={props.style}>
            {props.children}
        </div>
    ) 
}

export default MainContainer