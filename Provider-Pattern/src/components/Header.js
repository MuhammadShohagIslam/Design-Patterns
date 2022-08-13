import React, {useContext} from 'react'
import { DataContext } from './Provider/DataContext'

// export default function Header({data}) {
//   return (
//     <div>
//       <h2>{data.name}</h2>
//     </div>
//   )
// }

// Provider Pattern
export default function Header() {
    const data = useContext(DataContext)
    return (
      <div>
        <h2>{data.name}</h2>
      </div>
    )
  }
