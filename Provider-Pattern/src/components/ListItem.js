import React, {useContext} from 'react';
import { DataContext } from './Provider/DataContext';

// Prop Drilling
// export default function ListItem({data}) {
//     
//   return (
//     <div>
//       <h1>{data.name}</h1>
//     </div>
//   )
// }

// Provider Pattern
export default function ListItem() {
    const data = useContext(DataContext);

  return (
    <div>
      <h1>{data.name}</h1>
    </div>
  )
}
