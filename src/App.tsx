import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { Button, Heading, VStack } from '@chakra-ui/react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <VStack>
        <Heading>My Portofolio</Heading>
          <Button colorPalette="purple">
            Get Started
          </Button>
      </VStack>
    </>
  )
}

export default App
