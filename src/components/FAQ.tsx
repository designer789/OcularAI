'use client';

import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What is OcularAI and what problem does it solve?",
    answer: "OcularAI is a DePIN project that transforms AI-powered smart glasses into decentralized data nodes. It solves the problems of centralized data monopolies and complex Web3 interaction by enabling users to own their data and access blockchain functions intuitively."
  },
  {
    question: "How does OcularAI collect and use data?",
    answer: "OcularAI smart glasses capture geolocation, visual, and environmental data. This data is encrypted, validated on-chain, and can be monetized by the user or used to power decentralized services such as maps, event alerts, and smart city infrastructure."
  },
  {
    question: "What kind of AI is built into OcularAI?",
    answer: "OcularAI includes an on-device AI agent that helps users manage wallets, execute DeFi actions, access decentralized identities, and interact with Web3 apps through voice and gesture commands—reducing friction and increasing accessibility."
  },
  {
    question: "Can I earn rewards using OcularAI?",
    answer: "Yes. Users are rewarded for contributing high-quality data, validating others' contributions, staking tokens, and participating in AI training or governance tasks within the OcularAI ecosystem."
  },
  {
    question: "Is my personal data safe when using OcularAI?",
    answer: "Absolutely. Data collected by OcularAI is encrypted and user-owned. You control what is shared, and privacy is protected through advanced cryptographic techniques like zero-knowledge proofs."
  },
  {
    question: "What makes OcularAI different from other DePIN or wearable projects?",
    answer: "Unlike typical DePIN devices, OcularAI combines hardware, AI, and AR in a single form factor. It not only contributes to decentralized infrastructure but also allows users to see, interact with, and earn from blockchain in real time."
  },
  {
    question: "Do I need prior Web3 experience to use OcularAI?",
    answer: "Not at all. OcularAI is designed to be user-friendly, with an AI agent guiding you through tasks like managing assets or voting in governance. No technical background is required."
  },
  {
    question: "How is the OcularAI token used in the ecosystem?",
    answer: "The native token powers rewards, AI feature access, staking, governance voting, and network validation. It is the core unit of value exchange and coordination within the OcularAI decentralized infrastructure."
  }
];

export default function FAQ() {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  return (
    <section id="FAQ" className="pt-24 pb-32">
      <div className="container max-w-8xl mx-auto px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-16 tracking-tighter text-shadow-md">
          FAQ
        </h2>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 relative">
          {/* Questions */}
          <div className="lg:w-1/2">
            <div className="space-y-3">
              {faqs.map((faq, index) => (
                <div key={`faq-${index}`} className="relative">
                  <button
                    onClick={() => setSelectedIndex(index)}
                    className={`w-full px-6 py-4 text-left border transition-all duration-300 ${
                      selectedIndex === index 
                        ? 'bg-gray-800/30 border-sky-300 shadow-[0_0_15px_rgba(125,211,252,0.1)]' 
                        : 'border-gray-700 hover:bg-gray-800/30 hover:border-gray-600'
                    }`}
                  >
                    <span className="text-sky-300 font-mono uppercase tracking-tight">
                      {faq.question}
                    </span>
                  </button>
                  
                  {/* Connecting line - only show when active */}
                  {selectedIndex === index && (
                    <div className="hidden lg:block absolute top-1/2 -right-16 w-16 h-px border-t border-dashed border-sky-300 shadow-[0_0_8px_rgba(125,211,252,0.5)]" style={{borderWidth: '1px'}} />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Answer */}
          <div className="lg:w-1/2">
            <div className="border border-gray-700 bg-gray-800/30 p-8 h-full relative">
              {/* Corner accents */}
              <div className="absolute -right-1 -top-1 w-4 h-4 border-t border-r border-sky-300/30" />
              <div className="absolute -right-1 -bottom-1 w-4 h-4 border-b border-r border-sky-300/30" />
              <div className="absolute -left-1 -top-1 w-4 h-4 border-t border-l border-sky-300/30" />
              <div className="absolute -left-1 -bottom-1 w-4 h-4 border-b border-l border-sky-300/30" />
              
              <p className="text-gray-300 text-lg uppercase-mono tracking-tight leading-relaxed">
                {faqs[selectedIndex].answer}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 