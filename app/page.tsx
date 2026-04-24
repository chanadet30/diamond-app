'use client';

import { useState } from 'react';

export default function Home() {
  const [step, setStep] = useState(1);

  return (
    <main style={{ padding: 40 }}>
      <h1>VERSION OK</h1>

      {step === 1 && (
        <button onClick={() => setStep(2)}>
          CLICK
        </button>
      )}

      {step === 2 && (
        <h2>OK STEP 2</h2>
      )}
    </main>
  );
}