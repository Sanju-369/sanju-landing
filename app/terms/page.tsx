export default function Terms() {
  return (
    <div className="min-h-screen bg-black/[0.96] text-white py-20">
      <div className="container mx-auto px-6 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Terms and Conditions</h1>
        <div className="prose prose-invert">
          <p className="text-gray-400">Last updated: {new Date().toLocaleDateString()}</p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">1. Acceptance of Terms</h2>
          <p className="text-gray-400">
            By accessing and using Tube Trend, you accept and agree to be bound by the terms and provision of this
            agreement.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">2. Use License</h2>
          <p className="text-gray-400">
            Permission is granted to temporarily access Tube Trend services for personal, non-commercial transitory
            viewing only.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">3. Disclaimer</h2>
          <p className="text-gray-400">
            The materials on Tube Trend are provided on an 'as is' basis. Tube Trend makes no warranties, expressed or
            implied, and hereby disclaims and negates all other warranties including, without limitation, implied
            warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of
            intellectual property or other violation of rights.
          </p>

          {/* Add more sections as needed */}
        </div>
      </div>
    </div>
  )
}

