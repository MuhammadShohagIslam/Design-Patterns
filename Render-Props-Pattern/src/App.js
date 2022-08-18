import React, { useState } from "react";
import Fahrenheit from "./components/Temparature/Fahrenheit";
// import Title from "./components/Title";

// export default class App extends Component {
//     render() {
//         return (
//             <div className="App">
//                 <Title
//                     renderFirstComponent={() => (
//                         <h1>✨ First render prop! ✨</h1>
//                     )}
//                     renderSecondComponent={() => (
//                         <h2>🔥 Second render prop! 🔥</h2>
//                     )}
//                     renderThirdComponent={() => (
//                         <h3>🚀 Third render prop! 🚀</h3>
//                     )}
//                 />
//             </div>
//         );
//     }
// }

import Input from "./components/Temparature/Input";
import Kelvin from "./components/Temparature/Kelvin";

/*
    *** Lift State ***
        => It can be tricky to lift state in larger application with
        components that handle many children.
        => Each state change could cause a re-render of all the children, even the ones 
        that do not handle the data, which could negatively affect the performance of your app.
*/
// export default function App() {
//     const [input, setInput] = useState();
//     return (
//         <div>
//             <h1>☃️ Temperature Converter 🌞</h1>
//             {/* Lift State */}
//             <Input input={input} setInput={setInput} />
//             <Kelvin input={input} />
//             <Fahrenheit input={input} />
//         </div>
//     );
// }

// export default function App() {
//     const [input, setInput] = useState();
//     return (
//         <div>
//             <h1>☃️ Temperature Converter 🌞</h1>
//             <Input
//                 input={input}
//                 setInput={setInput}
//                 render={() => (
//                     <>
//                         <Kelvin input={input} />
//                         <Fahrenheit input={input} />
//                     </>
//                 )}
//             />
//         </div>
//     );
// }

export default function App() {
    const [input, setInput] = useState();
    return (
        <div>
            <h1>☃️ Temperature Converter 🌞</h1>
            <Input
                input={input}
                setInput={setInput}
            >
               {(value) => (
                <>
                    <Kelvin input={value} />
                    <Fahrenheit input={value} />
                </>
               )}
            </Input>
        </div>
    );
}
