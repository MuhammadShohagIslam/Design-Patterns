import React from "react";
/*
    *** Container-Presentational Pattern ***
        => Enforce separation of concerns by separating the view from 
        the application logic.
        => Through this pattern, we can seperate the view from the application logic
        
      
    *** Sepaation of concerns by separating this process into two parts:
        1. Presentational Components: Component that care about 'How' data is show to the user.
        2. Container Components: Component that care about 'What' data is shown to the user.

        For example: Fetching the data deals with application logic within container component, displaying the fetching data to the UI which deals with the View.
    => Combining these two components together makes it posibile to sepetate handle application logic with the view.

    *** useHook is the best solution which is the the Container/Presentational pattern can be replaced with React Hooks
*/

function App() {
    return (
        <div style={{ textAlign: "center" }} className="App">
            <div>
                <ThemeContextProvider>
                    <Toogle />
                    <ListTheme />
                </ThemeContextProvider>
            </div>
        </div>
    );
}

export default App;
