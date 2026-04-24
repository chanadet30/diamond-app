'use client';

import { useState } from 'react';

export default function Home() {

  const [step, setStep] = useState(1);
  const [budget, setBudget] = useState('');

  const buttonStyle = {
    width: "100%",
    padding: "16px",
    marginTop: "15px",
    border: "1px solid #333",
    background: "white",
    cursor: "pointer",
    fontSize: "15px",
    letterSpacing: "1px"
  };

  return (
    <main style={{
      background: "linear-gradient(180deg, #000000, #0d0d0d)",
      color: "white",
      minHeight: "100vh",
      padding: "80px 20px",
      fontFamily: "Georgia, serif"
    }}>

      {/* HEADER */}
      <div style={{ textAlign: "center" }}>
        <h1 style={{ fontSize: "42px", fontWeight: "300" }}>
          Accès Privé aux Diamants d’Investissement 💎
        </h1>

        <p style={{ fontSize:"12px", color:"#777", marginTop:"10px" }}>
          Investisseurs privés • Dirigeants • Family offices
        </p>

        <p style={{ color: "#aaa", marginTop: "10px" }}>
          Réservé à une clientèle sélectionnée
        </p>

        <p style={{ marginTop: "20px", color: "#bbb", maxWidth: "600px", marginInline: "auto" }}>
          Accès à des diamants Lotus à 105 facettes, exclusivité mondiale,
          ainsi qu’à des pièces d’investissement introuvables sur le marché public.
        </p>

        <p style={{
          marginTop:"20px",
          fontSize:"12px",
          color:"#777"
        }}>
          Pierres certifiées GIA / HRD – réseau international – sélection professionnelle
        </p>
      </div>

      {/* CARD */}
      <div style={{
        background: "white",
        color: "black",
        padding: "50px",
        maxWidth: "520px",
        margin: "80px auto",
        borderRadius: "16px",
        border: "1px solid #e5e5e5"
      }}>

        {step === 1 && (
          <>
            <h2>Votre objectif</h2>

            <button style={buttonStyle} onClick={() => setStep(2)}>
              Investissement
            </button>
          </>
        )}

        {step === 2 && (
          <>
            <h2>Montant envisagé</h2>

            <button style={buttonStyle} onClick={() => {setBudget('<50k'); setStep(3);}}>
              Moins de 50k€
            </button>

            <button style={buttonStyle} onClick={() => {setBudget('50k+'); setStep(3);}}>
              50k+
            </button>

            <button style={buttonStyle} onClick={() => {setBudget('100k+'); setStep(3);}}>
              100k+
            </button>

            <button
              style={{ ...buttonStyle, background: "black", color: "white" }}
              onClick={() => {setBudget('1M+'); setStep(3);}}
            >
              1M+ (Accès Privé)
            </button>
          </>
        )}

        {step === 3 && (
          <>
            <h2>Délai</h2>

            <button style={buttonStyle} onClick={() => setStep(4)}>
              Immédiat
            </button>
          </>
        )}

        {step === 4 && (
          <>
            <h2>Accès confidentiel</h2>

            <input placeholder="Nom" style={{ width: "100%", padding: "12px", marginTop: "10px" }} />
            <input placeholder="Email" style={{ width: "100%", padding: "12px", marginTop: "10px" }} />
            <input placeholder="Téléphone" style={{ width: "100%", padding: "12px", marginTop: "10px" }} />

            <button
              style={{ ...buttonStyle, marginTop: "20px", background: "black", color: "white" }}
              onClick={() => setStep(5)}
            >
              Demander un accès
            </button>

            <p style={{
              fontSize:"12px",
              color:"#666",
              marginTop:"10px",
              textAlign:"center"
            }}>
              Nombre de demandes limité chaque semaine
            </p>
          </>
        )}

        {step === 5 && (
          <div style={{ textAlign: "center" }}>
            <h2>Validation du profil en cours</h2>

            <p style={{ marginTop: "10px", fontSize:"13px", color:"#666" }}>
              Vous serez contacté uniquement si votre profil correspond aux critères d’accès.
            </p>

            {budget === '1M+' ? (
              <>
                <p style={{ marginTop: "10px" }}>
                  Accès prioritaire aux pièces les plus rares.
                </p>

                <a href="https://wa.me/33782061181?text=Client%201M%20VIP"
                  style={{
                    display: "block",
                    marginTop: "20px",
                    padding: "15px",
                    background: "black",
                    color: "white",
                    textDecoration: "none"
                  }}>
                  Accès direct expert senior
                </a>
              </>
            ) : (
              <>
                <p style={{ marginTop: "10px" }}>
                  Un expert vous contacte sous 24h
                </p>

                <a href="https://wa.me/33782061181?text=Demande%20standard"
                  style={{
                    display: "block",
                    marginTop: "20px",
                    padding: "15px",
                    background: "black",
                    color: "white",
                    textDecoration: "none"
                  }}>
                  Contact WhatsApp
                </a>
              </>
            )}

            {/* ACCÈS LOTUS */}
            <a href="/lotus" style={{
              display:"block",
              marginTop:"20px",
              fontSize:"13px",
              color:"#888"
            }}>
              Voir une pièce exceptionnelle
            </a>

          </div>
        )}

      </div>

      {/* STORY */}
      <div style={{
        textAlign: "center",
        color: "#aaa",
        maxWidth: "700px",
        margin: "auto",
        lineHeight: "1.6"
      }}>
        <p>Les diamants d’investissement ne sont pas accessibles au grand public.</p>
        <p>Chaque pierre est sélectionnée selon des critères stricts de pureté, de rareté et de liquidité internationale.</p>
        <p>Nous disposons d’un accès privilégié à un réseau international permettant de sourcer des pièces introuvables sur le marché traditionnel.</p>

        <p style={{ marginTop: "20px" }}>
          Certaines pièces Lotus à 105 facettes constituent une exclusivité mondiale,
          réservée à un cercle restreint d’investisseurs.
        </p>
      </div>

    </main>
  );
}