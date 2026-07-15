import contentData from '../data/data.json'
import type { Content } from '../types'

const content: Content = contentData

const LandingPage = () => {
  return (
    <section className="page-wrapper">
      <p className='h1'>{content.greeting}</p>
      <p className='h2'>{content.about.title}</p>
      <p className='text-large'>{content.about.text}</p>
    </section>
  )
}

export default LandingPage