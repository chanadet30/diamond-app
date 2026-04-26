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
          Chasseur International de Diamants d’Investissement 💎
        </h1>

        <p style={{ fontSize:"12px", color:"#777", marginTop:"10px" }}>
          Acquisition patrimoniale • Diversification • Transmission • Événements exceptionnels
        </p>

        <p style={{ color: "#aaa", marginTop: "15px" }}>
          Accès direct au marché international du diamant, sans intermédiaire.
        </p>

        <p style={{ marginTop: "20px", color: "#bbb", maxWidth: "600px", marginInline: "auto" }}>
          Recherche et sélection de diamants d’investissement aux meilleures conditions du marché,
          avec un positionnement systématiquement inférieur aux références Rapaport.
        </p>

        <p style={{
          marginTop:"20px",
          fontSize:"12px",
          color:"#777"
        }}>
          Diamants certifiés GIA / HRD – sélection rigoureuse – accompagnement confidentiel
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
            <h2>Entrons en contact</h2>

            <button style={buttonStyle} onClick={() => setStep(2)}>
              Consultation gratuite
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
              1M+
            </button>
          </>
        )}

        {step === 3 && (
          <>
            <h2>Coordonnées</h2>

            <input placeholder="Nom" style={{ width: "100%", padding: "12px", marginTop: "10px" }} />
            <input placeholder="Email" style={{ width: "100%", padding: "12px", marginTop: "10px" }} />
            <input placeholder="Téléphone" style={{ width: "100%", padding: "12px", marginTop: "10px" }} />

            <button
              style={{ ...buttonStyle, marginTop: "20px", background: "black", color: "white" }}
              onClick={() => setStep(4)}
            >
              Être recontacté
            </button>

            <p style={{
              fontSize:"12px",
              color:"#666",
              marginTop:"10px",
              textAlign:"center"
            }}>
              Échange confidentiel et sans engagement
            </p>
          </>
        )}

        {step === 4 && (
          <div style={{ textAlign: "center" }}>
            <h2>Prise de contact confirmée</h2>

            <p style={{ marginTop: "10px", fontSize:"13px", color:"#666" }}>
              Vous serez recontacté pour une consultation personnalisée.
            </p>
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
        <p>
          Le marché du diamant d’investissement est complexe et rarement accessible dans des conditions optimales.
        </p>

        <p>
          L’approche consiste à identifier, négocier et sécuriser des pierres répondant à des critères stricts
          de qualité, de certification et de liquidité internationale.
        </p>

        <p style={{ marginTop: "20px" }}>
          Chaque recherche est réalisée avec un objectif précis :
          obtenir la meilleure pierre au meilleur prix, en toute transparence.
        </p>
      </div>

    </main>
  );
}