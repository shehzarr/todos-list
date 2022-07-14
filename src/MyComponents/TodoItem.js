import React, { useContext } from 'react'
import { Button, Badge, Card } from 'react-bootstrap'
import { ClickContext } from '../App'
 
export const TodoItem = (props) => {
  
  const value = useContext(ClickContext);

  let background, status, done;
  props.item.completed === true ? eval(' background = "success"; status = "Completed"; done = "Un Done"; ') : eval(' background = "warning"; status = "Pending"; done = "Finish Task" ')

  return (
    <>
      <Card bg='light' className="mb-4" style={{width: '20rem'}}>
        <Card.Header>
          <Badge pill bg={background}>{status}</Badge>
        </Card.Header>
        <Card.Body>
          <Card.Title>Task# {props.index+1}</Card.Title>
          <Card.Text>
            {props.item.todo} 
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <Button variant={background} size="sm" onClick={() => {value.onComplete(props.item, props.index)}}>{done}</Button>
          <Button variant="danger" size="sm mx-2" onClick={() => {value.onDelete(props.item)}}>Delete</Button>
        </Card.Footer>
      </Card>
    </>
  )
}
