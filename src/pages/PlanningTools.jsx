import React, { useState } from "react";

export default function PlanningTools() {
  const [activeTool, setActiveTool] = useState(null);

  // Default values for calculators
  const [inputs, setInputs] = useState({
    monthlyInvestment: 10000,
    lumpsumAmount: 100000,
    annualStepUp: 10,
    annualRate: 12,
    timePeriodYears: 10,
  });

  const handleInputChange = (field, value) => {
    setInputs((prev) => ({ ...prev, [field]: value }));
  };

  // --- Calculation Logic ---

  // 1. Regular SIP Formula: M = P * ({[1 + i]^n - 1} / i) * (1 + i)
  const calculateSIP = () => {
    const P = inputs.monthlyInvestment;
    const i = inputs.annualRate / 12 / 100;
    const n = inputs.timePeriodYears * 12;

    const invested = P * n;
    const totalValue = P * ((Math.pow(1 + i, n) - 1) / i) * (1 + i);
    const returns = totalValue - invested;

    return { invested, returns, totalValue };
  };

  // 2. Smart (Step-Up) SIP Formula
  const calculateSmartSIP = () => {
    let totalInvested = 0;
    let totalValue = 0;
    let currentMonthly = inputs.monthlyInvestment;
    const monthlyRate = inputs.annualRate / 12 / 100;

    for (let year = 1; year <= inputs.timePeriodYears; year++) {
      for (let month = 1; month <= 12; month++) {
        totalInvested += currentMonthly;
        const monthsRemaining = inputs.timePeriodYears * 12 - ((year - 1) * 12 + month - 1);
        totalValue += currentMonthly * Math.pow(1 + monthlyRate, monthsRemaining);
      }
      currentMonthly += currentMonthly * (inputs.annualStepUp / 100);
    }

    const returns = totalValue - totalInvested;
    return { invested: totalInvested, returns, totalValue };
  };

  // 3. Lumpsum Formula: A = P(1 + r/100)^n
  const calculateLumpsum = () => {
    const P = inputs.lumpsumAmount;
    const r = inputs.annualRate / 100;
    const n = inputs.timePeriodYears;

    const invested = P;
    const totalValue = P * Math.pow(1 + r, n);
    const returns = totalValue - invested;

    return { invested, returns, totalValue };
  };

  // Select active calculation based on open modal
  const getResults = () => {
    if (activeTool === "SIP Calculator") return calculateSIP();
    if (activeTool === "Smart SIP Calculator") return calculateSmartSIP();
    if (activeTool === "Lumpsum Investment Calculator") return calculateLumpsum();
    return { invested: 0, returns: 0, totalValue: 0 };
  };

  const results = getResults();

  const toolDescriptions = {
    "SIP Calculator": "Calculate the wealth generated through systematic monthly contributions over time.",
    "Smart SIP Calculator": "Factor in yearly salary increments by automatically stepping up your SIP amount annually.",
    "Lumpsum Investment Calculator": "See how a single one-time investment compounds over your investment horizon.",
  };

  return (
    <section className="pt-40 pb-24 min-h-screen bg-[#FDFBF7]">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-[#C9A86A] uppercase tracking-[0.2em] text-sm font-semibold">
          Planning Tools
        </p>

        <h1 className="mt-5 text-5xl md:text-7xl font-serif text-[#071A2B] leading-tight">
          Plan today. Build tomorrow.
        </h1>

        <div className="grid md:grid-cols-3 gap-6 mt-16">
          {["SIP Calculator", "Smart SIP Calculator", "Lumpsum Investment Calculator"].map((tool) => (
            <div
              key={tool}
              className="bg-white border border-[#071A2B]/10 rounded-2xl p-8 flex flex-col justify-between hover:shadow-xl transition-shadow duration-300"
            >
              <div>
                <h2 className="text-2xl font-serif text-[#071A2B]">{tool}</h2>
                <p className="mt-4 text-[#071A2B]/70 text-sm leading-relaxed">
                  {toolDescriptions[tool]}
                </p>
              </div>

              <button
                onClick={() => setActiveTool(tool)}
                className="mt-8 w-full py-3 px-5 rounded-full bg-[#071A2B] text-white hover:bg-[#C9A86A] hover:text-[#071A2B] transition-colors duration-200 font-medium"
              >
                Calculate
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* --- Calculator Modal --- */}
      {activeTool && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white w-full max-w-2xl rounded-3xl p-6 md:p-8 relative shadow-2xl overflow-y-auto max-h-[90vh]">
            {/* Close Button */}
            <button
              onClick={() => setActiveTool(null)}
              className="absolute top-6 right-6 text-[#071A2B]/50 hover:text-[#071A2B] text-2xl font-bold transition-colors"
            >
              ✕
            </button>

            <h3 className="text-2xl md:text-3xl font-serif text-[#071A2B]">
              {activeTool}
            </h3>

            <div className="mt-6 space-y-6">
              {/* Conditional Field: Monthly Investment */}
              {(activeTool === "SIP Calculator" || activeTool === "Smart SIP Calculator") && (
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-sm text-[#071A2B]/70 font-medium">Monthly Investment</label>
                    <span className="font-semibold text-[#071A2B]">
                      ₹{inputs.monthlyInvestment.toLocaleString("en-IN")}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="500"
                    max="100000"
                    step="500"
                    value={inputs.monthlyInvestment}
                    onChange={(e) => handleInputChange("monthlyInvestment", Number(e.target.value))}
                    className="w-full accent-[#C9A86A]"
                  />
                </div>
              )}

              {/* Conditional Field: Lumpsum Amount */}
              {activeTool === "Lumpsum Investment Calculator" && (
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-sm text-[#071A2B]/70 font-medium">Total Investment Amount</label>
                    <span className="font-semibold text-[#071A2B]">
                      ₹{inputs.lumpsumAmount.toLocaleString("en-IN")}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="5000"
                    max="1000000"
                    step="5000"
                    value={inputs.lumpsumAmount}
                    onChange={(e) => handleInputChange("lumpsumAmount", Number(e.target.value))}
                    className="w-full accent-[#C9A86A]"
                  />
                </div>
              )}

              {/* Conditional Field: Step-Up Rate */}
              {activeTool === "Smart SIP Calculator" && (
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-sm text-[#071A2B]/70 font-medium">Annual Step-Up (%)</label>
                    <span className="font-semibold text-[#071A2B]">{inputs.annualStepUp}%</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="30"
                    step="1"
                    value={inputs.annualStepUp}
                    onChange={(e) => handleInputChange("annualStepUp", Number(e.target.value))}
                    className="w-full accent-[#C9A86A]"
                  />
                </div>
              )}

              {/* Common Field: Expected Return Rate */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm text-[#071A2B]/70 font-medium">Expected Return Rate (p.a)</label>
                  <span className="font-semibold text-[#071A2B]">{inputs.annualRate}%</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="30"
                  step="0.5"
                  value={inputs.annualRate}
                  onChange={(e) => handleInputChange("annualRate", Number(e.target.value))}
                  className="w-full accent-[#C9A86A]"
                />
              </div>

              {/* Common Field: Investment Tenure */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm text-[#071A2B]/70 font-medium">Time Period (Years)</label>
                  <span className="font-semibold text-[#071A2B]">{inputs.timePeriodYears} Yr</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="40"
                  step="1"
                  value={inputs.timePeriodYears}
                  onChange={(e) => handleInputChange("timePeriodYears", Number(e.target.value))}
                  className="w-full accent-[#C9A86A]"
                />
              </div>
            </div>

            {/* --- Results Section --- */}
            <div className="mt-8 bg-[#071A2B] text-white rounded-2xl p-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-xs text-white/60 uppercase tracking-wider">Invested Amount</p>
                <p className="text-lg font-semibold mt-1">
                  ₹{Math.round(results.invested).toLocaleString("en-IN")}
                </p>
              </div>

              <div>
                <p className="text-xs text-[#C9A86A] uppercase tracking-wider">Est. Returns</p>
                <p className="text-lg font-semibold mt-1 text-[#C9A86A]">
                  ₹{Math.round(results.returns).toLocaleString("en-IN")}
                </p>
              </div>

              <div>
                <p className="text-xs text-white/60 uppercase tracking-wider">Total Value</p>
                <p className="text-xl font-serif mt-1">
                  ₹{Math.round(results.totalValue).toLocaleString("en-IN")}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
