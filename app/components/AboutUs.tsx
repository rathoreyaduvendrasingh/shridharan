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
        The Sub Himalyan Rural Integrative Development of Horticultural and Agricultural Rooted at
Namhol (“SHRIDHARAN Foundation”) is a non-profit organization dedicated to providing pro
bono legal aid services to farmers and economically marginalized groups in India. The
foundation's mission is to empower these vulnerable communities by ensuring access to justice
and protecting their rights.
The Shridharan Foundation works on a variety of legal issues affecting farmers, including land
disputes, tenancy rights, debt relief, and access to government schemes. They also provide legal
assistance to marginalized groups such as women, children, and the elderly, focusing on issues
like domestic violence, child labor, and elder abuse.
The foundation's team of legal volunteers provides free legal advice, representation, and
litigation services to their clients. They work closely with grassroots organizations and
community leaders to identify cases and provide outreach services. The Shridharan Foundation
also conducts legal awareness campaigns and workshops to educate people about their legal
rights and remedies.
The foundation's impact has been significant in empowering marginalized communities and
ensuring that their voices are heard. They have successfully represented farmers in land disputes,
secured debt relief for indebted farmers, and helped women obtain protection orders against
domestic violence. The Shridharan Foundation's work has also contributed to policy advocacy
and systemic change in the legal system.
The Shridharan Foundation is committed to upholding the principles of justice, equality, and
human rights. They believe that everyone, regardless of their social or economic status, deserves
access to legal representation and a fair hearing. Through their dedicated work, the Shridharan
Foundation is making a positive impact on the lives of thousands of farmers and marginalized
individuals in India.
        </p>
      </div>
    </section>
  )
}
