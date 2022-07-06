import React from 'react'
import { Button, Badge, Card } from 'react-bootstrap'

export const TodoItem = (props) => {
  
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
          <Button variant={background} size="sm" onClick={() => {props.onComplete(props.item, props.index)}}>{done}</Button>
          <Button variant="danger" size="sm mx-2" onClick={() => {props.onDelete(props.item)}}>Delete</Button>
        </Card.Footer>
      </Card>
    </>
  )
}
