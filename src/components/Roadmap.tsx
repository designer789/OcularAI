'use client';

interface Phase {
  title: string;
  items: string[];
}

const phases: Phase[] = [
  {
    title: "Phase 1: Foundation & Prototype",
    items: [
      "Finalize hardware architecture for OcularAI smart glasses, focusing on modular low-power design and mobile compatibility",
      "Develop and test core AI agent for voice/gesture-driven Web3 interaction",
      "Build MVP for data collection, encryption, and decentralized validation",
      "Establish DePIN communication layer (BLE/LoRaWAN) for efficient node sync",
      "Launch OcularAI's native token and publish initial tokenomics framework"
    ]
  },
  {
    title: "Phase 2: Network & Ecosystem Expansion",
    items: [
      "Begin pilot program with early users and developers for real-world data deployment",
      "Launch OcularAI Data Dashboard and Validator App for quality control",
      "Expand AR interface with wallet visualization, NFT display, and on-chain asset tracking",
      "Introduce staking and data mining incentive mechanisms",
      "Initiate strategic partnerships across urban tech, DeFi, and location-based dApps"
    ]
  },
  {
    title: "Phase 3: AI Co-Pilot & Application Layer",
    items: [
      "Integrate AI model marketplace for agent customization and fine-tuning",
      "Enable third-party dApp access and developer SDK for AR/Web3 integrations",
      "Launch privacy-preserving data marketplace using zero-knowledge proof mechanisms",
      "Support multi-chain interactions and DID identity layer",
      "Host first DAO-led governance vote on network upgrade priorities"
    ]
  },
  {
    title: "Phase 4: Global Scaling & DAO Governance",
    items: [
      "Expand DePIN coverage to global regions through user-driven node growth",
      "Launch community grant programs via DAO treasury",
      "Onboard enterprise and institutional use cases (smart cities, logistics, etc.)",
      "Transition into full decentralized governance and protocol sustainability",
      "Continuously evolve hardware generations and AI model capabilities"
    ]
  }
];

export default function Roadmap() {
  return (
    <section id="Roadmap" className="py-24 min-h-screen relative overflow-hidden">
      {/* Grid lines */}
      <div className="absolute  h-full inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_50%_80%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="container max-w-8xl mx-auto px-6 lg:px-8 relative">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-16 tracking-tighter text-shadow-md">
          Roadmap
        </h2>

        <div className="relative">
          {/* Timeline line with glow effect */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-sky-300/50 via-sky-300 to-sky-300/50" />
          <div className="absolute left-0 top-0 bottom-0 w-px bg-sky-300/20 blur-sm" />

          <div className="space-y-24">
            {phases.map((phase, index) => (
              <div 
                key={`phase-${index}`} 
                className="relative"
              >
                {/* Phase dot with glow */}
                <div className="absolute left-0 w-4 h-4 rounded-full bg-sky-300 -translate-x-1/2 shadow-[0_0_15px_rgba(125,211,252,0.5)]" />

                <div className="ml-8 group">
                  <h3 className="text-2xl font-semibold text-sky-300 mb-8 tracking-tighter font-mono uppercase text-shadow-md group-hover:text-sky-200 transition-colors duration-300">
                    {phase.title}
                  </h3>

                  <ul className="space-y-4">
                    {phase.items.map((item, itemIndex) => (
                      <li 
                        key={`phase-${index}-item-${itemIndex}`}
                        className="text-gray-300 text-sm uppercase-mono tracking-tight hover:text-gray-100 transition-colors duration-300 flex items-start gap-3"
                      >
                        <span className="text-sky-300/50 mt-1.5">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 