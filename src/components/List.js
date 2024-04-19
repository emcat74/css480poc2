import ListItem from './ListItem'
import {useState, useEffect} from 'react'

function List (props) {
  const [items, setItems] = useState([])

  useEffect(() => {
    setItems(props.items)
  }, [])

  function sortItems() {
    const sortedItems = [...items].sort((a,b) => {
      return a.interest > b.interest ? 1 : -1
    })
    setItems(sortedItems)
  }

  const listItems = items.map((object) => {
    return <ListItem interest={object.interest} />
  })
  return(
    <ul>
      {listItems}
      <button onClick={sortItems}>Sort</button>
    </ul>

  )
}

export default List