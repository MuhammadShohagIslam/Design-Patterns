function withStyles(Component){
    return props => {
        const style = {padding: ".3rem", margin: "1rem", color:"green"}
        return <Component style={style} {...props} />
    }
}

export default withStyles;