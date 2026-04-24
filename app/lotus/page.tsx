'use client';

export default function LotusPage() {
  return (
    <main style={{
      background: "linear-gradient(180deg, #000000, #050505)",
      color: "white",
      minHeight: "100vh",
      padding: "100px 20px",
      fontFamily: "Georgia, serif"
    }}>

      {/* HERO */}
      <div style={{ textAlign: "center", maxWidth: "800px", margin: "auto" }}>
        <h1 style={{
          fontSize: "44px",
          fontWeight: "300",
          letterSpacing: "2px"
        }}>
          Diamant Lotus 105 Facettes 💎
        </h1>

        <p style={{
          marginTop: "20px",
          color: "#aaa",
          fontSize: "14px"
        }}>
          Une exclusivité mondiale réservée à un cercle restreint d’investisseurs
        </p>
      </div>

      {/* IMAGE PREMIUM */}
      <div style={{
        marginTop: "50px",
        textAlign: "center"
      }}>
        <img 
          src="https://images.unsplash.com/photo-1611143669185-af224c5e3252"
          alt="Diamant luxe"
          style={{
            width: "100%",
            maxWidth: "500px",
            borderRadius: "12px",
            boxShadow: "0 20px 60px rgba(0,0,0,0.6)"
          }}
        />
      </div>

      {/* SEPARATOR */}
      <div style={{
        width: "60px",
        height: "1px",
        background: "#444",
        margin: "50px auto"
      }} />

      {/* STORY */}
      <div style={{
        maxWidth: "700px",
        margin: "auto",
        textAlign: "center",
        lineHeight: "1.8",
        color: "#ccc"
      }}>
        <p>
          Le diamant Lotus à 105 facettes représente une évolution rare dans l’univers du diamant d’investissement.
        </p>

        <p>
          Sa taille unique amplifie la réflexion de la lumière et crée une profondeur visuelle exceptionnelle.
        </p>

        <p>
          Contrairement aux diamants traditionnels, ces pièces ne sont pas diffusées sur le marché public.
        </p>

        <p style={{ marginTop: "20px" }}>
          Elles sont accessibles uniquement via un réseau privé, auprès d’investisseurs sélectionnés.
        </p>

        <p style={{ marginTop: "20px" }}>
          Nous disposons d’un accès exclusif à certaines de ces pierres,
          constituant une opportunité rare sur le marché international.
        </p>
      </div>

      {/* VALEUR */}
      <div style={{
        marginTop: "80px",
        textAlign: "center"
      }}>
        <h2 style={{ fontWeight: "300" }}>
          Caractéristiques d’investissement
        </h2>

        <div style={{
          marginTop: "30px",
          color: "#aaa",
          lineHeight: "2"
        }}>
          <p>✔ Certification GIA / HRD</p>
          <p>✔ Rareté internationale</p>
          <p>✔ Forte liquidité</p>
          <p>✔ Sélection professionnelle</p>
        </div>
      </div>

      {/* RARETÉ */}
      <div style={{
        marginTop: "80px",
        textAlign: "center",
        maxWidth: "700px",
        marginInline: "auto",
        color: "#bbb"
      }}>
        <p>
          Les pièces disponibles sont extrêmement limitées.
        </p>

        <p style={{ marginTop: "10px" }}>
          Elles ne sont proposées qu’à des profils investisseurs validés.
        </p>
      </div>

      {/* CTA */}
      <div style={{
        marginTop: "80px",
        textAlign: "center"
      }}>
        <a
          href="https://wa.me/33782061181?text=Demande%20Lotus%20VIP"
          style={{
            display: "inline-block",
            padding: "18px 40px",
            background: "white",
            color: "black",
            textDecoration: "none",
            letterSpacing: "1px",
            fontSize: "14px",
            borderRadius: "6px"
          }}
        >
          Accéder à une sélection Lotus
        </a>

        <p style={{
          marginTop: "15px",
          fontSize: "12px",
          color: "#666"
        }}>
          Accès réservé après validation du profil
        </p>
      </div>

    </main>
  );
}