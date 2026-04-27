'use client';

export default function GuidePage() {
  return (
    <main style={{
      background: "linear-gradient(180deg, #000000, #0d0d0d)",
      color: "white",
      minHeight: "100vh",
      padding: "80px 20px",
      fontFamily: "Georgia, serif"
    }}>

      {/* HERO */}
      <div style={{ textAlign: "center", maxWidth: "900px", margin: "auto" }}>
        <h1 style={{ fontSize: "42px", fontWeight: "300" }}>
          Comprendre le Diamant d’Investissement 💎
        </h1>

        <p style={{ marginTop: "20px", color: "#aaa" }}>
          Un actif tangible, rare et international
        </p>
      </div>

      {/* INTRO */}
      <div style={{
        maxWidth: "800px",
        margin: "60px auto",
        color: "#ccc",
        lineHeight: "1.8",
        textAlign: "center"
      }}>
        <p>
          Le diamant d’investissement est un marché discret, souvent mal compris,
          mais qui repose sur des fondamentaux solides : rareté, valeur intrinsèque et liquidité internationale.
        </p>
      </div>

      {/* SECTION ROND */}
      <div style={{
        maxWidth: "800px",
        margin: "80px auto",
        textAlign: "center"
      }}>
        <h2>Pourquoi le diamant rond est la référence</h2>

        <p style={{ marginTop: "20px", color: "#aaa", lineHeight: "1.8" }}>
          Le diamant rond brillant représente la norme mondiale sur le marché de l’investissement.
          Il concentre la majorité des transactions internationales et bénéficie d’une liquidité incomparable.
        </p>

        <p style={{ marginTop: "20px", color: "#aaa", lineHeight: "1.8" }}>
          Sa taille optimise la réflexion de la lumière et maximise sa valorisation,
          ce qui en fait la forme la plus recherchée par les acheteurs et les professionnels.
        </p>
      </div>

      {/* 4C */}
      <div style={{
        maxWidth: "800px",
        margin: "80px auto",
        textAlign: "center"
      }}>
        <h2>Les critères fondamentaux (4C)</h2>

        <p style={{ marginTop: "20px", color: "#aaa" }}>
          Chaque diamant est évalué selon quatre critères essentiels :
        </p>

        <div style={{ marginTop: "30px", lineHeight: "2", color: "#ccc" }}>
          <p><b>Carat</b> – le poids</p>
          <p><b>Color</b> – la couleur</p>
          <p><b>Clarity</b> – la pureté</p>
          <p><b>Cut</b> – la qualité de taille</p>
        </div>
      </div>

      {/* CERTIFICATION */}
      <div style={{
        maxWidth: "800px",
        margin: "80px auto",
        textAlign: "center"
      }}>
        <h2>Certification : un élément indispensable</h2>

        <p style={{ marginTop: "20px", color: "#aaa", lineHeight: "1.8" }}>
          Un diamant d’investissement doit impérativement être certifié par des organismes reconnus internationalement
          tels que GIA ou HRD.
        </p>

        <p style={{ marginTop: "20px", color: "#aaa" }}>
          La certification garantit l’authenticité et permet une revente sur le marché mondial.
        </p>
      </div>

      {/* PRIX */}
      <div style={{
        maxWidth: "800px",
        margin: "80px auto",
        textAlign: "center"
      }}>
        <h2>Comment est déterminé le prix</h2>

        <p style={{ marginTop: "20px", color: "#aaa", lineHeight: "1.8" }}>
          Le marché du diamant s’appuie sur des références internationales comme le Rapaport,
          qui sert de base aux transactions professionnelles.
        </p>

        <p style={{ marginTop: "20px", color: "#aaa" }}>
          L’enjeu consiste à accéder à des pierres en dessous de ces références,
          grâce à un réseau et une capacité de négociation.
        </p>
      </div>

      {/* POURQUOI PASSER PAR UN CHASSEUR */}
      <div style={{
        maxWidth: "800px",
        margin: "80px auto",
        textAlign: "center"
      }}>
        <h2>Pourquoi passer par un chasseur de diamants</h2>

        <p style={{ marginTop: "20px", color: "#aaa", lineHeight: "1.8" }}>
          Le marché est fragmenté, opaque et difficile d’accès pour un particulier.
        </p>

        <p style={{ marginTop: "20px", color: "#aaa" }}>
          L’approche consiste à rechercher, analyser et négocier directement sur le marché international
          afin d’obtenir les meilleures conditions.
        </p>
      </div>

      {/* CTA */}
      <div style={{
        textAlign: "center",
        marginTop: "100px"
      }}>
        <a href="/"
          style={{
            padding: "16px 30px",
            background: "white",
            color: "black",
            textDecoration: "none"
          }}>
          Accéder à une consultation
        </a>
      </div>

    </main>
  );
}