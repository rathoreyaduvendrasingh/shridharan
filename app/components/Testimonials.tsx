import Image from 'next/image';

export function Testimonials() {
  const testimonials = [
    { 
      name: "Ramlok Thakur",
      quote: "A renowned agriculturist from Bilaspur, Himachal Pradesh, founded the Shridharan Foundation. Dedicated to sustainable agriculture, he actively teaches farmers sustainable cultivation techniques.",
      image: "/Ramlok.jpeg" // Path to image
    },
    { 
      name: "Anirudh Sharma",
      quote: "An advocate and social worker, he is a co-founder of the Shridharan Foundation. Committed to empowering farmers, he organizes legal aid camps to educate them about their rights and provide free legal assistance. He also ensures legal compliance for government schemes and offers pro bono legal representation to marginalized farmers.",
      image: "/anirudh.jpeg" // Path to image
    },
    { 
      name: "Deshraj Thakur",
      quote: "A farmer and entrepreneur, is a permanent member of the Shridharan Foundation. He is instrumental in helping farmers access and benefit from government schemes, ensuring their socio-economic upliftment.",
      image: "/deshraj.jpeg" // Path to image
    },
    { 
      name: "Rishab Joshi",
      quote: "A dedicated advocate and social worker, is a part-time member of the Shridharan Foundation. Enrolled with the Bar Council of Delhi, he actively connects marginalized farmers with pro bono legal counsel to resolve disputes hindering their agricultural activities. He has successfully assisted over 20 individuals, ensuring justice and empowering rural communities.",
      image: "/rishabh.jpeg" // Path to image
    }
  ];

  return (
    <section id="testimonials" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Office Bearer</h2>
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
