import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Sobre } from './components/Sobre'
import { Servicos } from './components/Servicos'
import { Galeria } from './components/Galeria'
import { Equipe } from './components/Equipe'
import { Agendamento } from './components/Agendamento'
import { Localizacao } from './components/Localizacao'
import { Footer } from './components/Footer'
import { WhatsAppFloat } from './components/WhatsAppFloat'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Sobre />
        <Servicos />
        <Galeria />
        <Equipe />
        <Agendamento />
        <Localizacao />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
