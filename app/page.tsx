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
    await fetch('https://hook.eu1.make.com/irdovjwnou2qmcv88wl3lagkomj4h4b5', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    });

    setStep(5);
  };

  const buttonStyle = {
    width:"100%",
    padding:"16px",
    marginTop:"15px",
    border:"1px solid #222",
    background:"white",
    cursor:"pointer",
    fontSize:"16px",
    letterSpacing:"1px",
    transition:"0.3s"
  };

  return (
    <main style={{
      background:"linear-gradient(180deg, #000000, #0a0a0a)",
      color:"white",
      minHeight:"100vh",
      padding:"80px 20px",
      fontFamily:"serif"
    }}>

      <h1 style={{
        textAlign:"center",
        fontSize:"42px",
        letterSpacing:"2px",
        fontWeight:"300"
      }}>
        Accès Privé aux Diamants d’Investissement Certifiés 💎
      </h1>

      <p style={{
        textAlign:"center",
        marginTop:"10px",
        color:"#aaa"
      }}>
        Sélection réservée aux investisseurs exigeants
      </p>

      <div style={{
        background:"white",
        color:"black",
        padding:"50px",
        maxWidth:"520px",
        margin:"80px auto",
        borderRadius:"18px",
        boxShadow:"0 20px 60px rgba(0,0,0,0.4)"
      }}>

        {step === 1 && (
          <>
            <h2>Objectif</h2>
            <button 
              onClick={()=>{setForm({...form, objective:'investissement'}); next();}}
              style={buttonStyle}
              
            >
              Investissement
            </button>
          </>
        )}

        {step === 2 && (
          <>
            <h2>Budget</h2>

    <button 
      onClick={()=>{setForm({...form, budget:'<50k'}); next();}}
      style={buttonStyle}
      
    >
      Moins de 50k€
    </button>

    <button 
      onClick={()=>{setForm({...form, budget:'50k+'}); next();}}
      style={buttonStyle}
    
    >
      50k+
    </button>

    <button 
      onClick={()=>{setForm({...form, budget:'100k+'}); next();}}
      style={buttonStyle}
      
    >
      100k+
    </button>

    <button 
      onClick={()=>{setForm({...form, budget:'1M+'}); next();}}
      style={buttonStyle}
      
    >
      1M+
    </button>
          </>
        )}

        {step === 3 && (
          <>
            <h2>Délai</h2>
            <button 
              onClick={()=>{setForm({...form, timeline:'immédiat'}); next();}}
              style={buttonStyle}
              
            >
              Immédiat
            </button>
          </>
        )}

        {step === 4 && (
          <>
            <h2>Contact</h2>

            <input 
              placeholder="Nom" 
              style={{width:"100%", padding:"12px", marginTop:"10px"}} 
              onChange={e=>setForm({...form,name:e.target.value})}
            />

            <input 
              placeholder="Email" 
              style={{width:"100%", padding:"12px", marginTop:"10px"}} 
              onChange={e=>setForm({...form,email:e.target.value})}
            />

            <input 
              placeholder="Téléphone" 
              style={{width:"100%", padding:"12px", marginTop:"10px"}} 
              onChange={e=>setForm({...form,phone:e.target.value})}
            />

            <button 
              onClick={submit}
              style={{...buttonStyle, marginTop:"20px"}}
              
            >
              Accéder
            </button>
          </>
        )}

        {step === 5 && (
          <div>
            <h2>Votre accès est en cours de validation</h2>
            <p style={{marginTop:"10px"}}>
              Un expert vous contacte sous 24h
            </p>

            <a 
              href="https://wa.me/33782061181?text=Bonjour%20je%20souhaite%20investir%20dans%20un%20diamant%20certifié"
              style={{
                display:"inline-block",
                marginTop:"25px",
                padding:"15px",
                background:"black",
                color:"white",
                textDecoration:"none",
                width:"100%",
                textAlign:"center"
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