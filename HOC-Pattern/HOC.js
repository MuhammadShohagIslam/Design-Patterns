/*
    *** HOC(Higher Order Component) Pattern ***
        => Pass resuable same logic down as props to multiple components
        throughout our application.
        => HOC should receive an component, and return that component.
        => HOC is a component that receives another component,
        and contains certain logic that we want to apply to 
        the component that we pass as a parameter.
        => After applying that logic, the HOC returns the element with the additional logic.
*/

/*
    *** Use Case HOC ***
        => The same, uncustomized behaviour needs to be used by 
        many components throughout the application.
        => Component can work standalone, without the added custome logic.

*/

/*
    *** Use Case Hook ***
        => The behaviour has to be customized for each component that uses it.
        => The behaviour is not spread throughot the application, 
        only one or a few components use the behaviour.
        => The behaviour adds many properties to the component.
*/