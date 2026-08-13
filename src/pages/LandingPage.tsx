import contentData from '../content/data.json'
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
          <p>
            Im Grafik-Design-Studium habe ich angefangen Webseiten mit HTML und CSS zu bauen. 
            Seitdem habe ich nie aufgehört dazuzulernen. 
          </p>

          <p>
            Heute entwerfe und entwickle ich Benutzeroberflächen mit professionellen Ansätzen und Tools. 
          </p>

          <p>
            Besonders wichtig ist mir die Zusammenarbeit mit Menschen, für die ich Lösungen erschaffen kann, 
            die ästhetisch ansprechend sind und gut funktionieren. Dabei lege ich nicht nur Wert auf das 
            visuelle Ergebnis, sondern auch auf eine saubere Umsetzung.
          </p>

          <p>
            Auf dieser Seite zeige ich drei Projekte, die meine Arbeit als Entwicklerin, UX/UI-Designerin 
            und Grafikdesignerin widerspiegeln.
          </p>
        </div>
      </div>
    </section>
  )
}

