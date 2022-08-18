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
        => Wrapping Hell, it make it difficult to understand how data is flowing through our application, 
        which can make it harder to figure out why unexpected behaviour is happening.
       
*/

/*
    *** Hooks ***
        => React Hooks are functions that we can use to manage a components state and lifecycle methods.
        => If we know react Hook, no longer require class component,and having
        reusable statefull logic increase the testability, flexibility, and
        readability of components.

    *** React Hooks make it possible to ***
        => Add state to a function component
        => manage a components lifecycle without having to use lifecycle methods such as componentDidMount and componentWillUnmount
        => resuse the same statefull logic among multiple components throughout the app.
    
    *** React Build-In Hooks ***
        (useState, useEffect, useReducer, useRef, useContext, useMemo,
        useImperativeHandle, useLayoutEffect, useDebugValue, useCallback);

        useState: The useState hook enables developers to update and manipulate
        state inside function components without needing to convert it to a class component.

        useEffect: The useEffect hook prevents all of these "side effect" and
        allows the UI run smoothly.

        useContext: the useContext hook also works with the React Context API
        in order to share data throughout the app without the need to pass
        your app props down through various levels. useContext hook must be
        the context object itself and any component calling the useContext
        always re-renders whenever the context value changes.

        useReducer: The useReducer hook  gives an alternative to useState and 
        but it is good for if we have complex state logic that involves multiple 
        sub-values or when the next state depends on previous one.

    *** Custome Hooks ***
            => If we want to create a custome hook, we may have noticed that 
            all hooks start with "use".
*/

/*
        *** Benefits of Hook ***
            => Fewer lines of code.
            => Stateless component
            => Simplifies complex components
            => Reusing stateful logic
*/

/*
        React Hooks   vs Classes
    
    ================ React Hooks ===================
            => It help avoid multiple hierarchies and make code clearer.
            => It provides uniformity across React component.

    ================ React Class ===================
            => Generally, when we use HOC or renderProps, we have to restructure
            our app with multiple hiererchies when we try to see it in DEVTools
            => Classes confuse both human and machines due to the need to understand 
            binding and the context in which functions are called.
*/
