import Image from 'next/image'

export function AboutUs() {
  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center">
      {/* Background Image */}
      <Image
        src="/background.jpeg?height=100&width=100"
        alt="Farm background"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="brightness-75" // Makes the image lighter
      />
      {/* Semi-transparent white overlay */}
      <div className="absolute inset-0 bg-white bg-opacity-50" />
      
      {/* Text Content */}
      <div className="relative z-10 text-black text-center p-8">
        <h2 className="text-4xl font-bold mb-4">About Us</h2>
        <p className="max-w-2xl font mx-auto italic subpixel-antialiased">
        The Sub Himalyan Rural Integrative Development of Horticultural and Agricultural Rooted at Namhol (“SHRIDHARAN Foundation”) is a non-profit organization committed to providing free legal aid to farmers and marginalized communities in India. Its mission is to empower these groups by ensuring access to justice, safeguarding their rights, and helping them navigate legal and bureaucratic challenges.
The foundation addresses a wide range of legal issues affecting farmers, including land disputes, tenancy rights, and debt relief. In addition to these, they play a crucial role in helping farmers access government schemes designed to support agricultural development and welfare. The foundation educates farmers about the various government benefits available, such as subsidies, insurance schemes, and financial assistance programs. They guide farmers through the often-complex application processes, ensuring that they understand the requirements and can overcome bureaucratic hurdles to secure the support they need.
Through free legal advice, representation, and targeted awareness campaigns, the Shridharan Foundation has made a significant impact in improving the livelihoods of farmers. They have successfully assisted in securing land rights, obtaining debt relief, and facilitating access to government schemes. Their work ensures that vulnerable communities not only receive legal representation but also gain the knowledge and resources needed to protect and improve their lives.
        </p>
      </div>
    </section>
  )
}
