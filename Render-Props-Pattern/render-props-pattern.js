/*
    *** Render Props Pattern ***
        => A render prop is a prop on a component, which value is a 
        function that returns a JSX element.

        => The component itself does not render anything besides the render prop. 
        Instead, the component simply calls the render props instead of implementing its own redering logic.
        => reusability and sharing data, render props solves some issues.
        => We can not add lifecycle methods to a render prop, we can only
        use it on components that do not need to alter the data they receive.

*/
