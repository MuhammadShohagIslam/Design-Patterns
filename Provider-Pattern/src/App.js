// import { DataContext } from "./components/Provider/DataContext";
// import Content from "./components/Content";
// import SideBar from "./components/SideBar";
import ListTheme from "./components/ListTheme";
import Toogle from "./components/Toogle";
import ThemeContextProvider  from "./components/ThemeProvider/ThemeContext";

/*  
          ***  Data Flow  ***
      // ListItem < List < Sidebar < App 
      // Header < Content < App
      // Text < Block < App
      *** above data flow is prop drilling way::: 
      
      Prop Drilling => (When we pass props far down the component tree)

      *** Disadvantage of Props Drilling ***
        => It is quite messay
        => If we want to rename the data prop in the future, we have to rename it in the all components.
        => The bigger your application gets, the trickier prop drilling can be.
*/

// function App() {
//     const data = {
//         name: "Abc",
//     };
//     return (
//         <div style={{ textAlign: "center" }} className="App">
//             <div>
//                 <DataContext.Provider value={data}>
//                     {/* <SideBar data={data} />
//                     <Content data={data} /> */}
//                     <SideBar />
//                     <Content />
//                 </DataContext.Provider>
//             </div>
//         </div>
//     );
// }

// export default App;

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
