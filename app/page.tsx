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
    border: "1px solid #222",
    background: "white",
    cursor: "pointer",
    fontSize: "16px"
  };

  return (
    <main style={{
      background: "black",
      color: "white",
      minHeight: "100vh",
      padding: "60px",
      fontFamily: "serif"
    }}>

      <h1 style={{
        textAlign: "center",
        fontSize: "36px",
        marginBottom: "40px"
      }}>
        Accès Privé aux Diamants d’Investissement Certifiés 💎
      </h1>

      <div style={{
        background: "white",
        color: "black",
        padding: "40px",
        maxWidth: "500px",
        margin: "0 auto",
        borderRadius: "10px"
      }}>

        {step === 1 && (
          <>
            <h2>Objectif</h2>
            <button style={buttonStyle}
              onClick={() => { setForm({ ...form, objective: 'investissement' }); next(); }}>
              Investissement
            </button>
          </>
        )}

        {step === 2 && (
          <>
            <h2>Budget</h2>

            <button style={buttonStyle}
              onClick={() => { setForm({ ...form, budget: '<50k' }); next(); }}>
              Moins de 50k€
            </button>

            <button style={buttonStyle}
              onClick={() => { setForm({ ...form, budget: '50k+' }); next(); }}>
              50k+
            </button>

            <button style={buttonStyle}
              onClick={() => { setForm({ ...form, budget: '100k+' }); next(); }}>
              100k+
            </button>

            <button style={buttonStyle}
              onClick={() => { setForm({ ...form, budget: '1M+' }); next(); }}>
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
            <h2>Contact</h2>

            <input
              placeholder="Nom"
              style={{ width: "100%", padding: "10px", marginTop: "10px" }}
              onChange={e => setForm({ ...form, name: e.target.value })}
            />

            <input
              placeholder="Email"
              style={{ width: "100%", padding: "10px", marginTop: "10px" }}
              onChange={e => setForm({ ...form, email: e.target.value })}
            />

            <input
              placeholder="Téléphone"
              style={{ width: "100%", padding: "10px", marginTop: "10px" }}
              onChange={e => setForm({ ...form, phone: e.target.value })}
            />

            <button
              style={{ ...buttonStyle, marginTop: "20px" }}
              onClick={submit}
            >
              Accéder
            </button>
          </>
        )}

        {step === 5 && (
          <div>
            <h2>Votre accès est en cours de validation</h2>
            <p>Un expert vous contacte sous 24h</p>

            <a
              href="https://wa.me/33782061181?text=Bonjour%20je%20souhaite%20investir%20dans%20un%20diamant%20certifié"
              style={{
                display: "block",
                marginTop: "20px",
                padding: "15px",
                background: "black",
                color: "white",
                textAlign: "center",
                textDecoration: "none"
              }}
            >
              Contacter immédiatement
            </a>
          </div>
        )}

      </div>

    </main>
  );
}