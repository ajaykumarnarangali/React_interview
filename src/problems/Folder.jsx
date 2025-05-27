import { useState } from 'react'
import json from '../components/Folder/folder.json'

function Folder() {

  const [tree, setTree] = useState(json);

  const List = ({ data }) => {
    return (
      <>
        {
          data.map((node) => {
            return (
              <div key={node.id} className='px-4'>
                <span>{node.name}</span>
                {node.children && <List data={node.children} />}
              </div>
            )
          })
        }
      </>
    )
  }

  return (
    <div>
      <List data={tree} />
    </div>
  )
}

export default Folder