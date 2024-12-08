
export function ContactUs() {
    return (
        <section id="contact" className="py-16 bg-[#67B7D1]">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
    <div className="flex flex-wrap justify-between items-center">
      <div className="flex-1 max-w-lg mx-auto mb-8 md:mb-0">
        <div className="mb-4">
          <h3 className="font-bold mb-2">Address:</h3>
          <p>Main Bazaar Namhol(Ghiyal), Namhol, Bilaspur
          Bilaspur (H.P), 174032</p>
        </div>
        <div className="mb-4">
          <h3 className="font-bold mb-2">Phone:</h3>
          <p>7018050727</p>
        </div>
        <div className="mb-4">
          <h3 className="font-bold mb-2">Email:</h3>
          <p>shridharan2018@gmail.com</p>
        </div>
      </div>

      {/* Right: Fixed size Image */}
      <div className="flex-1 max-w-lg mx-auto">
        <img 
          src="/pic1.jpeg" 
          alt="License" 
          className="w-4/5 h-4/5 object-cover rounded-lg mx-auto"
        />
      </div>
    </div>
  </div>
</section>

      
    )
  }
  
  