/*
    *** Hooks Pattern ***
        => Use function to resuse stateful logic among multiple components throughout the app.
        => Hooks make it possible to use React state and lifecyle methods, 
        without having to use a ES2015 a class component.
        => Hooks play a very important role in your application design. 
        May tratitional design patterns can be replaced by Hooks.
*/

/*
    *** Before hooks, we are use class for manage state and lifecycle methods

    class MyComponent extends React.Component {
        constructor(){
            super()
            this.state = {...}
            this.customeMethod = this.customeMethod.bind(this)
        }

        // lifecyle Methods 
        componentDidMount(){...}
        componentDidUnmount(){...}

        // Custome Method
        customeMethod(){...}

        reder(){return {...}}

    }
*/

/*
    *** Why leave work class component to Hook ***
        => Refactor the component so difficult, that is why, we
        have to know how refactor a component properly without 
        accidentally changing the data flow.
        => We have to need to understand how ES2015 classes work. like bind, construnctor
        => Wrapping Hell, it make it difficult to understand how data is flowing through our application, which can make it harder to figure out why unexpected behaviour is happening.
       
*/