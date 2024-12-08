'use client'

import Image from 'next/image'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export function Gallery() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const images = [
    { src: "/pic1.jpeg", alt: "License" },
    { src: "/pic2.jpeg", alt: "Farmer with crops" },
    { src: "/pic3.jpeg", alt: "Farmer using sustainable methods" },
    { src: "/pic4.jpeg", alt: "Organic produce" },
    { src: "/pic5.jpeg", alt: "Community farming project" }
  ];

  return (
    <section id="gallery" className="py-16">
      <div className="bg-gray-50 p-6 rounded-lg shadow-lg mx-auto px-4">
        <div>
        <h3 className="text-2xl font-semibold text-gray-800 mb-4 border-b pb-2 text-center">Objectives</h3>
        <ul className="space-y-4 list-disc pl-6 mb-6">
            <li className="text-gray-700">
            <span className="font-semibold">Empowering Marginalized Communities:</span> The foundation aims to empower farmers, women,
            children, and the elderly by providing them with access to justice and protecting their rights.
            </li>
            <li className="text-gray-700">
            <span className="font-semibold">Facilitating Access to Government Schemes:</span> The foundation assists beneficiaries in
            understanding and accessing government schemes meant for their welfare, such as agricultural
            subsidies, social security benefits, and healthcare programs.
            </li>
            <li className="text-gray-700">
            <span className="font-semibold">Providing Pro Bono Legal Aid:</span> The foundation offers free legal aid services to vulnerable
            communities, including legal advice, representation, and litigation, especially in cases related to
            government schemes.
            </li>
            <li className="text-gray-700">
            <span className="font-semibold">Promoting Legal Awareness:</span> The foundation conducts legal awareness campaigns and
            workshops to educate people about their legal rights and remedies, particularly concerning
            government schemes.
            </li>
            <li className="text-gray-700">
            <span className="font-semibold">Advocating for Policy Change:</span> The foundation works to advocate for policy changes that will
            benefit marginalized communities and improve the implementation of government schemes.
            </li>
            <li className="text-gray-700">
            <span className="font-semibold">Building Strong Community Partnerships:</span> The foundation collaborates with grassroots
            organizations and community leaders to identify beneficiaries, provide outreach services, and
            strengthen community resilience.
            </li>
        </ul>
        </div>

        <div className="relative">
          <Slider {...settings}>
            {images.map((image, index) => (
              <div key={index} className="px-2">
  <div className="relative w-[400px] h-[300px]"> {/* Fixed dimensions */}
    <Image
      src={image.src}
      alt={image.alt}
      width={index == 0 ? 200 : 300}   /* Set fixed width */
      height={index == 0 ? 300 : 200} /* Ensures the whole image is shown */
      className="rounded-lg"
    />
  </div>
</div>
       
            ))}
          </Slider>
        </div>
      </div>
    </section>
  )
}

