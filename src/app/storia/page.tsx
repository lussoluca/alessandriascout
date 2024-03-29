import Layout from '@/components/Layout'
import Container from '@/components/Container'
import { TITLE } from '@/lib/constants'
import portraitImage from '@/images/photos/istockphoto-916072438-1024x1024.jpg'
import TextWithImage from '@/components/paragraphs/TextWithImage'
import Title from '@/components/Title'
import { Metadata } from 'next'

export default function Page() {
  return (
    <>
      <Layout>
        <Title
          title="Storia"
          subtitle="Storia dello scautismo alessandrino dalla sua fondazione ad oggi."
        />
        <Container className="mb-20 space-y-10">
          <TextWithImage image={portraitImage} title=" I primi anni">
            <p>
              Lo scautismo è stato introdotto in Italia nei primi anni del XX
              secolo, influenzato dal movimento scout internazionale fondato da
              Lord Baden-Powell in Inghilterra. Nel 1912, si tenne il primo
              campo scout italiano a Bologna, segnando l’inizio ufficiale dello
              scautismo nel paese. Il movimento scout italiano crebbe
              rapidamente, attraendo giovani da diverse regioni.
            </p>
            <p>
              Nel contesto di Alessandria, è probabile che il movimento scout
              abbia radici profonde nella comunità locale, con gruppi scout che
              si sono sviluppati nel corso degli anni. Le attività scout,
              incentrate sull’educazione, l’avventura e il servizio alla
              comunità, avranno contribuito a plasmare la vita di molti giovani
              alessandrini. Eventi significativi, come campi, escursioni e
              iniziative di servizio, avranno giocato un ruolo importante
              nell’integrare lo scautismo nella storia locale.
            </p>
            <p>
              Per ottenere informazioni più dettagliate sulla storia dello
              scautismo ad Alessandria, ti consiglio di consultare archivi
              locali, associazioni scout della zona o documenti storici della
              città. Potresti anche contattare direttamente gruppi scout locali
              per raccogliere testimonianze e approfondimenti sulla loro storia
              specifica nella comunità alessandrina.
            </p>
          </TextWithImage>
          <TextWithImage
            image={portraitImage}
            imagePosition={'left'}
            title=" L’avventura continua"
          >
            <p>
              I’ve loved making things for as long as I can remember, and wrote
              my first program when I was 6 years old, just two weeks after my
              mom brought home the brand new Macintosh LC 550 that I taught
              myself to type on.
            </p>
            <p>
              The only thing I loved more than computers as a kid was space.
              When I was 8, I climbed the 40-foot oak tree at the back of our
              yard while wearing my older sister’s motorcycle helmet, counted
              down from three, and jumped — hoping the tree was tall enough that
              with just a bit of momentum I’d be able to get to orbit.
            </p>
            <p>
              I spent the next few summers indoors working on a rocket design,
              while I recovered from the multiple surgeries it took to fix my
              badly broken legs. It took nine iterations, but when I was 15 I
              sent my dad’s Blackberry into orbit and was able to transmit a
              photo back down to our family computer from space.
            </p>
            <p>
              Today, I’m the founder of Planetaria, where we’re working on
              civilian space suits and manned shuttle kits you can assemble at
              home so that the next generation of kids really <em>can</em> make
              it to orbit — from the comfort of their own backyards.
            </p>
          </TextWithImage>
        </Container>
      </Layout>
    </>
  )
}

export const metadata: Metadata = {
  title: `Storia | ${TITLE}`,
}
