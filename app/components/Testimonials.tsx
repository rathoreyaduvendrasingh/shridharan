import Image from 'next/image';

export function Testimonials() {
  const testimonials = [
    { 
      name: "Ramlok Thakur",
      quote: "A renowned agriculturist from Bilaspur, Himachal Pradesh, founded theShridharan Foundation. Dedicated to sustainable agriculture, he actively teaches farmers sustainable cultivation techniques.",
      image: "/Ramlok.jpeg" // Path to image
    },
    { 
      name: "Deshraj Thakur", 
      role: "", 
      quote: "A farmer and entrepreneur, is a permanent member of the Shridharan Foundation. He is instrumental in helping farmers access and benefit from government schemes, ensuring their socio-economic upliftment.",
      image: "/deshraj.jpeg" // Path to image
    },
    { 
      name: "Anirudh Sharma", 
      role: "", 
      quote: "An advocate and social worker, is a co-founder of the Shridharan Foundation. He ensures legal compliance for government schemes and provides pro bono legal representation to marginalized communities",
      image: "/anirudh.jpeg" // Path to image
    },
    { 
      name: "Rishabh Joshi", 
      role: "", 
      quote: "A dedicated advocate and social worker, is a part-time member of the Shridharan Foundation. Enrolled with the Bar Council of Delhi, he actively connects marginalized farmers with pro bono legal counsel to resolve disputes hindering their agricultural activities. He has successfully assisted over 20 individuals, ensuring justice and empowering rural communities.",
      image: "/rishabh.jpeg" // Path to image
    }
  ];

  return (
    <section id="testimonials" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">What People Say</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg transform transition-all hover:scale-105 hover:shadow-xl hover:cursor-pointer">
              {/* Larger image size with border */}
              <div className="w-40 h-40 rounded-full overflow-hidden mx-auto mb-6 border-4 border-indigo-500">
                <Image 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  width={160} 
                  height={160} 
                  className="object-cover" 
                />
              </div>
              <p className="italic mb-4">"{testimonial.quote}"</p>
              <p className="font-bold text-xl mb-1">{testimonial.name}</p>
              <p className="text-sm text-gray-600">{testimonial.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
