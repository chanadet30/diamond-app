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
          Chasseur International de Diamants 💎
        </h1>

        <p style={{ fontSize:"12px", color:"#777", marginTop:"10px" }}>
          Acquisition patrimoniale • Diversification • Mariage • Fiançailles • Transmission • Donation • Succession
        </p>

        <p style={{ color: "#aaa", marginTop: "15px" }}>
          Accès direct au marché international du diamant, sans intermédiaire.
        </p>

        <p style={{ marginTop: "20px", color: "#bbb", maxWidth: "650px", marginInline: "auto" }}>
          Contrairement à un vendeur, dont l’objectif est de céder une pierre au meilleur prix pour lui,
          l’approche consiste ici à agir exclusivement du côté de l’acquéreur.
        </p>

        <p style={{ marginTop: "15px", color: "#bbb", maxWidth: "650px", marginInline: "auto" }}>
          Le rôle est de rechercher, analyser et négocier sur le marché international afin d’identifier
          la pierre correspondant précisément à un objectif donné, dans les meilleures conditions possibles.
        </p>

        <p style={{
          marginTop:"20px",
          fontSize:"14px",
          color:"#fff",
          fontWeight:"500"
        }}>
          Garantie d’obtenir le meilleur prix du marché à qualité équivalente sous une semaine
        </p>

        <p style={{
          marginTop:"10px",
          fontSize:"13px",
          color:"#ccc"
        }}>
          Honoraires transparents : 3% uniquement, sans marge cachée
        </p>

        <p style={{
          marginTop:"15px",
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
            <h2>Entrons en contact (sous 24h)</h2>

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
              Échange confidentiel • sans engagement • accompagnement personnalisé
            </p>
          </>
        )}

        {step === 4 && (
          <div style={{ textAlign: "center" }}>
            <h2>Prise de contact confirmée</h2>

            <p style={{ marginTop: "10px", fontSize:"13px", color:"#666" }}>
              Une consultation vous sera proposée afin d’identifier les meilleures opportunités selon votre objectif.
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
          Le marché du diamant est fragmenté, opaque et souvent difficile d’accès dans des conditions optimales.
        </p>

        <p>
          L’approche consiste à se positionner du côté de l’acquéreur afin d’aligner les intérêts,
          sécuriser la qualité et optimiser le prix d’entrée.
        </p>

        <p style={{ marginTop: "20px" }}>
          L’objectif reste constant :
          accéder à la bonne pierre, au bon prix, en toute transparence.
        </p>
      </div>

      {/* GUIDE CTA */}
      <div style={{
        textAlign: "center",
        marginTop: "80px"
      }}>
        <p style={{
          fontSize: "14px",
          color: "#ccc",
          marginBottom: "20px"
        }}>
          Ce que 95% des gens ignorent sur le diamant
        </p>

        <a href="/guide"
          style={{
            display: "inline-block",
            padding: "16px 30px",
            background: "white",
            color: "black",
            textDecoration: "none",
            letterSpacing: "1px"
          }}>
          Cliquez ici
        </a>
      </div>

    </main>
  );
}