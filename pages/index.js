import Head from 'next/head'
import Link from 'next/link'
import { Container, Row, Col, Button, Card} from 'react-bootstrap'

//import Image from 'next/image'


export default function Home() {
  return (
  <Container>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Link href="/about" replace>
          <Button>About us</Button>
      </Link>
      

  <Row> 
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://d2j6dbq0eux0bg.cloudfront.net/images/26105994/1680111461.jpg" />
        <Card.Body>
        <Card.Title>A hat</Card.Title>
         <Card.Text>
           Merp merp, merp some more
        </Card.Text>
      <Button variant="primary">BUY DRUGS</Button>
     </Card.Body>
   </Card>
   <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://d2j6dbq0eux0bg.cloudfront.net/images/26105994/1680111461.jpg" />
        <Card.Body>
        <Card.Title>A hat</Card.Title>
         <Card.Text>
           Merp merp, merp some more
        </Card.Text>
      <Button variant="primary">BUY DRUGS</Button>
     </Card.Body>
   </Card>
   <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://d2j6dbq0eux0bg.cloudfront.net/images/26105994/1680111461.jpg" />
        <Card.Body>
        <Card.Title>A hat</Card.Title>
         <Card.Text>
           Merp merp, merp some more
        </Card.Text>
      <Button variant="primary">BUY MROE DRUGS</Button>
     </Card.Body>
   </Card>
   </Row>

      <Row> 
        <Button variant='secondary'>
          WHOLEASSBUTTONROW
        </Button>
      </Row>
      </Container>


  )
}
