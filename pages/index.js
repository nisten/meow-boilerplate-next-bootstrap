import Head from 'next/head'
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
      <Button variant='primary'>Hi</Button>

      <Row>
      
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://cdn.vox-cdn.com/thumbor/eaNBvoR6F-4PWMoqUaj_gtJh2Hg=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/9254955/5868_IMG004868.jpg" />
        <Card.Body>
        <Card.Title>A hat</Card.Title>
         <Card.Text>
           Merp merp, merp some more
        </Card.Text>
      <Button variant="primary">BUY That</Button>
     </Card.Body>
   </Card>
   <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="http://astronomy.com/~/media/D6F7C58A83A448ED91A186939B7F74D3.jpg" />
        <Card.Body>
        <Card.Title>A hat</Card.Title>
         <Card.Text>
           Merp merp, merp some more
        </Card.Text>
      <Button variant="primary">BUY This</Button>
     </Card.Body>
   </Card>
   <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://www.syfy.com/sites/syfy/files/styles/2280x1280_hero/public/cassini_finaldives_artwork.jpg" />
        <Card.Body>
        <Card.Title>A hat</Card.Title>
         <Card.Text>
           Merp merp, merp some more
        </Card.Text>
      <Button variant="primary">BUY MROE</Button>
     </Card.Body>
   </Card>
   </Row>

      <Row> 
        <Button variant='secondary'>
          WHOLEBUTTONROW
        </Button>
      </Row>
      </Container>


  )
}
