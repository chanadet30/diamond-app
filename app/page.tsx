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
    letterSpacing: "1px",
    transition: "all 0.3s ease"
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
      <div style={{
        textAlign: "center",
        opacity: 0,
        animation: "fadeIn 1.2s ease forwards"
      }}>
        <h1 style={{
          fontSize: "42px",
          letterSpacing: "2px",
          fontWeight: "300"
        }}>
          Accès Privé aux Diamants d’Investissement 💎
        </h1>

        <p style={{
          marginTop: "10px",
          color: "#aaa",
          fontSize: "14px",
          letterSpacing: "1px"
        }}>
          Sélection confidentielle réservée à une clientèle exigeante
        </p>

        {/* LOTUS */}
        <p style={{
          marginTop: "20px",
          fontSize: "14px",
          color: "#bbb",
          maxWidth: "600px",
          marginLeft: "auto",
          marginRight: "auto"
        }}>
          Accès à une sélection incluant des diamants Lotus à 105 facettes,
          pièces rares réservées à une clientèle privée.
        </p>
      </div>

      {/* FORM CARD */}
      <div style={{
        background: "rgba(255,255,255,0.95)",
        color: "black",
        padding: "50px",
        maxWidth: "520px",
        margin: "80px auto",
        borderRadius: "16px",
        boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
        animation: "fadeInUp 1s ease"
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

            <button style={buttonStyle} onClick={() => { setForm({ ...form, budget: '1M+' }); next(); }}>
              1M+
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

            <input
              placeholder="Nom"
              style={{ width: "100%", padding: "12px", marginTop: "10px" }}
              onChange={e => setForm({ ...form, name: e.target.value })}
            />

            <input
              placeholder="Email"
              style={{ width: "100%", padding: "12px", marginTop: "10px" }}
              onChange={e => setForm({ ...form, email: e.target.value })}
            />

            <input
              placeholder="Téléphone"
              style={{ width: "100%", padding: "12px", marginTop: "10px" }}
              onChange={e => setForm({ ...form, phone: e.target.value })}
            />

            <button
              style={{
                ...buttonStyle,
                marginTop: "20px",
                background: "black",
                color: "white"
              }}
              onClick={submit}
            >
              Demander un accès
            </button>
          </>
        )}

        {step === 5 && (
          <div style={{ textAlign: "center" }}>
            <h2>Demande reçue</h2>
            <p style={{ marginTop: "10px" }}>
              Un expert vous recontacte sous 24h
            </p>

            <a
              href="https://wa.me/33782061181?text=Bonjour%20je%20souhaite%20investir"
              style={{
                display: "block",
                marginTop: "25px",
                padding: "15px",
                background: "black",
                color: "white",
                textDecoration: "none"
              }}
            >
              Contact immédiat
            </a>
          </div>
        )}

      </div>

      {/* STORYTELLING */}
      <div style={{
        marginTop: "60px",
        textAlign: "center",
        fontSize: "14px",
        color: "#aaa",
        maxWidth: "700px",
        marginLeft: "auto",
        marginRight: "auto",
        lineHeight: "1.6"
      }}>
        <p>Les diamants d’investissement ne sont pas accessibles au grand public.</p>
        <p>Chaque pierre est sélectionnée selon des critères stricts : pureté, rareté et liquidité internationale.</p>
        <p>Notre réseau permet un accès privilégié à des opportunités réservées aux professionnels du marché.</p>
      </div>

      {/* ANIMATIONS */}
      <style>{`
        @keyframes fadeIn {
          to { opacity: 1; }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

    </main>
  );
}