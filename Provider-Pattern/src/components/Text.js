import React, {useContext} from 'react'
import { DataContext } from './Provider/DataContext'
// export default function Text({data}) {
//   return (
//     <div>
//       <h3>{data.name}</h3>
//     </div>
//   )
// }

// Provider Pattern
export default function Text() {
    const data = useContext(DataContext)
    return (
      <div>
        <h3>{data.name}</h3>
      </div>
    )
  }
