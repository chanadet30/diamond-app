'use client';

export default function LotusPage() {
  return (
    <main style={{
      background: "linear-gradient(180deg, #000000, #050505)",
      color: "white",
      minHeight: "100vh",
      padding: "100px 20px",
      fontFamily: "Georgia, serif",
      textAlign: "center"
    }}>

      <h1 style={{ fontSize: "42px", fontWeight: "300" }}>
        Diamant Lotus 105 Facettes 💎
      </h1>

      <p style={{ marginTop: "20px", color: "#aaa" }}>
        Une exclusivité mondiale réservée à un cercle restreint d’investisseurs
      </p>

      <div style={{ marginTop: "50px", maxWidth: "700px", marginInline: "auto", lineHeight: "1.7", color: "#ccc" }}>
        <p>
          Le diamant Lotus à 105 facettes représente une évolution rare dans l’univers du diamant d’investissement.
        </p>

        <p>
          Sa structure unique amplifie la réflexion de la lumière et crée une profondeur visuelle exceptionnelle.
        </p>

        <p>
          Ces pièces ne sont pas diffusées publiquement et sont accessibles uniquement via un réseau privé.
        </p>

        <p style={{ marginTop: "20px" }}>
          Nous disposons d’un accès exclusif à certaines de ces pierres,
          réservées à des profils investisseurs qualifiés.
        </p>
      </div>

      <a
        href="https://wa.me/33782061181?text=Demande%20Lotus%20VIP"
        style={{
          display: "inline-block",
          marginTop: "60px",
          padding: "18px 40px",
          background: "white",
          color: "black",
          textDecoration: "none"
        }}
      >
        Accéder à une sélection Lotus
      </a>

    </main>
  );
}