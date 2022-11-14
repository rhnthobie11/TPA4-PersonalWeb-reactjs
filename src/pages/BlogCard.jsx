import React from 'react'
import { Accordion, Button } from 'react-bootstrap'

export default function BlogCard({
    id, title, content, sumber
}) {
  return (
    <div>
            <Accordion defaultActiveKey="1">

                <Accordion.Item eventKey={id}>
                    <Accordion.Header>{title}</Accordion.Header>
                    <Accordion.Body>
                        {content}
                    <Button variant="outline-dark" size="sm" href={sumber}>Read More</Button>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
    </div>
  )
}
