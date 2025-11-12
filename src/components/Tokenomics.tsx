'use client';

interface UtilityItem {
  title: string;
  description: string;
 
}

const utilities: UtilityItem[] = [
  {
    title: "Data Contribution Rewards",
    description: "Users earn tokens by passively contributing verified geospatial, visual, and ambient data through OcularAI smart glasses—fueling the DePIN network."
  },
  {
    title: "Staking & Network Security",
    description: "Stake tokens to support decentralized data validation, participate in consensus mechanisms, and secure the network while earning additional rewards.",
  },
  {
    title: "Access to Premium Features",
    description: "Unlock advanced AI capabilities, personalized AR overlays, and exclusive tools by holding or spending tokens within the OcularAI ecosystem.",
  },
  {
    title: "AI Agent Development Rewards",
    description: "Developers earn $VISION by contributing AI modules or training agents, with rewards based on adoption, usage, and DAO incentives.",
  },
  {
    title: "Governance Participation",
    description: "Token holders can vote on key protocol decisions, including reward structures, ecosystem upgrades, and treasury allocations—ensuring decentralized control.",
  }
];

export default function Tokenomics() {
  return (
    <section className="py-24">
      <div className="container max-w-8xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          {/* Left side - Token Info & Allocation */}
          <div className="lg:w-1/2">
            <div className="w-[80%]">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-6 tracking-tighter">
                Tokenomics
              </h2>
              
              <div className="mb-12">
                <h3 className="text-2xl font-semibold text-sky-300 mb-4 tracking-tighter font-mono uppercase text-shadow-md">
                  $VISION
                </h3>
                <p className="text-gray-300 text-lg uppercase-mono tracking-tight">
                  Total Supply: 1,000,000,000 $VISION
                </p>
              </div>

            </div>
          </div>
          
          {/* Right side - Utility Table */}
          <div className="lg:w-1/2 flex items-end justify-end">
            <div >
              <h3 className="text-2xl font-semibold text-sky-300 mb-8 tracking-tighter font-mono uppercase text-shadow-md">
                Utility
              </h3>
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  
                  <tbody>
                    {utilities.map((utility, index) => (
                      <tr 
                        key={`utility-${index}`} 
                        className="border-b border-gray-700 hover:bg-gray-800/30 transition-colors"
                      >
                        <td className="py-4">
                          <span className="text-sky-300 font-mono uppercase tracking-tight">
                            {utility.title}
                          </span>
                        </td>
                        <td className="py-4 pl-12">
                          <p className="text-gray-300 text-sm uppercase-mono tracking-tight">
                            {utility.description}
                          </p>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 