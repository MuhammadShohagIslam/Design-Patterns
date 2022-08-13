import React from 'react'
import Block from './Block'
import Header from './Header'

// export default function Content({data}) {
//   return (
//     <div>
//       <Header data={data} />
//       <Block data={data} />
//     </div>
//   )
// }

export default function Content() {
    return (
      <div>
        <Header />
        <Block />
      </div>
    )
  }
