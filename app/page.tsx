'use client';

import { useState } from 'react';

export default function Home() {

  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    budget: '',
    objective: '',
    timeline: ''
  });

  const next = () => setStep(step + 1);

  const submit = async () => {
    await fetch('https://hook.eu1.make.com/XXXXX', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    });

    setStep(5);
  };

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

        <p style={{ color: "#aaa", marginTop: "10px" }}>
          Réservé à une clientèle sélectionnée
        </p>

        <p style={{ marginTop: "20px", color: "#bbb", maxWidth: "600px", marginInline: "auto" }}>
          Accès à des diamants Lotus à 105 facettes, exclusivité mondiale,
          ainsi qu’à des pièces d’investissement introuvables sur le marché public.
        </p>
      </div>

      {/* FORM */}
      <div style={{
        background: "white",
        color: "black",
        padding: "50px",
        maxWidth: "520px",
        margin: "80px auto",
        borderRadius: "16px"
      }}>

        {step === 1 && (
          <>
            <h2>Votre objectif</h2>
            <button style={buttonStyle}
              onClick={() => { setForm({ ...form, objective: 'investissement' }); next(); }}>
              Investissement
            </button>
          </>
        )}

        {step === 2 && (
          <>
            <h2>Montant envisagé</h2>

            <button style={buttonStyle} onClick={() => { setForm({ ...form, budget: '<50k' }); next(); }}>
              Moins de 50k€
            </button>

            <button style={buttonStyle} onClick={() => { setForm({ ...form, budget: '50k+' }); next(); }}>
              50k+
            </button>

            <button style={buttonStyle} onClick={() => { setForm({ ...form, budget: '100k+' }); next(); }}>
              100k+
            </button>

            <button style={{
              ...buttonStyle,
              background: "black",
              color: "white"
            }}
              onClick={() => { setForm({ ...form, budget: '1M+' }); next(); }}>
              1M+ (Accès Privé)
            </button>
          </>
        )}

        {step === 3 && (
          <>
            <h2>Délai</h2>
            <button style={buttonStyle}
              onClick={() => { setForm({ ...form, timeline: 'immédiat' }); next(); }}>
              Immédiat
            </button>
          </>
        )}

        {step === 4 && (
          <>
            <h2>Accès confidentiel</h2>

            <input placeholder="Nom" style={{ width: "100%", padding: "12px", marginTop: "10px" }}
              onChange={e => setForm({ ...form, name: e.target.value })} />

            <input placeholder="Email" style={{ width: "100%", padding: "12px", marginTop: "10px" }}
              onChange={e => setForm({ ...form, email: e.target.value })} />

            <input placeholder="Téléphone" style={{ width: "100%", padding: "12px", marginTop: "10px" }}
              onChange={e => setForm({ ...form, phone: e.target.value })} />

            <button style={{ ...buttonStyle, marginTop: "20px", background: "black", color: "white" }}
              onClick={submit}>
              Demander un accès
            </button>
          </>
        )}

        {step === 5 && (
          <div style={{ textAlign: "center" }}>
            <h2>Analyse en cours</h2>

            {form.budget === '1M+' ? (
              <>
                <p style={{ marginTop: "10px" }}>
                  Vous êtes éligible à un accès prioritaire à nos pièces les plus rares.
                </p>

                <p style={{ marginTop: "10px", fontSize: "13px", color: "#666" }}>
                  Certaines opportunités ne sont présentées qu’à un cercle restreint d’investisseurs.
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
          </div>
        )}

      </div>

      {/* STORY + PRÉ-CLOSING */}
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
          Parmi ces opportunités, certaines pièces Lotus à 105 facettes constituent une exclusivité mondiale,
          réservée à un cercle restreint d’investisseurs.
        </p>

        <p style={{ marginTop: "20px", fontStyle: "italic" }}>
          Ces pièces ne sont présentées que lorsque le profil investisseur correspond aux critères requis.
        </p>
      </div>

    </main>
  );
}