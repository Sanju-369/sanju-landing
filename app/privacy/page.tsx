export default function Privacy() {
  return (
    <div className="min-h-screen bg-black/[0.96] text-white py-20">
      <div className="container mx-auto px-6 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        <div className="prose prose-invert">
          <p className="text-gray-400">Last updated: {new Date().toLocaleDateString()}</p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">1. Information We Collect</h2>
          <p className="text-gray-400">
            We collect information that you provide directly to us, including but not limited to: names, email
            addresses, and any other information you choose to provide.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">2. How We Use Your Information</h2>
          <p className="text-gray-400">
            We use the information we collect to provide, maintain, and improve our services, to develop new ones, and
            to protect Tube Trend and our users.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">3. Information Sharing</h2>
          <p className="text-gray-400">
            We do not share your personal information with any third parties except as described in this privacy policy.
          </p>

          {/* Add more sections as needed */}
        </div>
      </div>
    </div>
  )
}

