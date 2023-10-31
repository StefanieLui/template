import { Container } from "./Container"
import { FadeIn } from "./FadeIn"

export default function About(){

return(
      <Container className="mt-24 sm:mt-32 md:mt-36">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
            50+ years of award-winning experience.
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
            We are a development studio working at the intersection of design
            and technology. It’s a really busy intersection though — a lot of
            our staff have been involved in hit and runs.
          </p>

          
        </FadeIn>
      </Container>
)

}