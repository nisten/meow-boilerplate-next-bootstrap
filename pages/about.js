import Link from 'next/link'
import { Button, Container } from 'react-bootstrap'
function About() {
    return <Container>
        <h1>Meow</h1>
    <Link href="/" replace>
          <Button>Go Homo</Button>
    </Link>
    </Container>
  }
  
  export default About