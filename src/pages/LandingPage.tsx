import contentData from '../content/data.json'
import { landingPageText } from '../content/descriptions'
import type { Data } from '../types'

const content: Data = contentData

export const LandingPage = () => {
  return (
    <section className="page-wrapper">
      <div className="max-w-4xl mb-14">
        <h1 className="h1 mb-6">
          {content.about.greeting}
        </h1>

        <h2 className="h2-thinn mb-12">
          {content.about.title}
        </h2>

        <div className="text-large p-space-regular">
          {landingPageText}
        </div>
      </div>
    </section>
  )
}

