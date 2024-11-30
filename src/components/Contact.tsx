import React from 'react';
// import emailjs from 'emailjs-com';
// import Swal from 'sweetalert2';

export function Contact() {
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const formData = new FormData(e.target);

  //   // EmailJS template parameters
  //   const templateParams = {
  //     from_name: formData.get("name"),
  //     from_email: formData.get("email"),
  //     subject: formData.get("subject"),
  //     message: formData.get("message"),
  //   };

  //   try {
  //     await emailjs.send(
  //       'service_7x21l4b', 
  //       'template_9o2laaw',
  //       templateParams,
  //       ' ' 
  //     );

  //     Swal.fire({
  //       icon: 'success',
  //       title: 'Message Sent!',
  //       text: 'We will contact you soon.',
  //       confirmButtonColor: '#8B5CF6'
  //     });

  //     e.target.reset();
  //   } catch (error) {
  //     Swal.fire({
  //       icon: 'error',
  //       title: 'Oops...',
  //       text: 'Failed to send message. Please try again later.',
  //       confirmButtonColor: '#8B5CF6'
  //     });
  //     console.error("Failed to send the email:", error);
  //   }
  // };

  return (
    <>
      {/* Contact Section */}
      <section id="contact" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Get in Touch</h2>
              <p className="text-gray-400 mb-8">
                Ready to bring your vision to life? We'd love to hear from you.
              </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          <div className="text-center">
          <ContactInfo
                  icon={<MapPin />}
                  text="Ethiopia, Addis Ababa, Lafto"
                />
          </div>
          <div className="text-center">
          <ContactInfo icon={<Phone />} text="+251930500415" />
         
          </div>
          <div className="text-center">
   
          <ContactInfo icon={<Phone />} text="+251943180886" />
          </div>
        </div>
      </div>
      
      </section>
    </>
  );
}

function ContactInfo({ icon, text }) {
  return (
    <div className="flex items-center gap-4 text-gray-400">
      <div className="p-2 bg-slate-800 rounded-lg">{icon}</div>
      <span>{text}</span>
    </div>
  );
}

// Icon Components
const MapPin = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6 text-purple-400"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 11c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 11c5.523 0 10-4.477 10-10H2c0 5.523 4.477 10 10 10z"
    />
  </svg>
);

const Phone = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6 text-purple-400"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 10v6c0 1.105.895 2 2 2h14c1.105 0 2-.895 2-2v-6c0-1.105-.895-2-2-2H5c-1.105 0-2 .895-2 2z"
    />
  </svg>
);

// const SendIcon = () => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     className="w-4 h-4 group-hover:translate-x-1 transition-transform"
//     fill="none"
//     viewBox="0 0 24 24"
//     stroke="currentColor"
//     strokeWidth={2}
//   >
//     <path
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       d="M14.752 11.168l-9.286-4.99A1.06 1.06 0 003.333 8v8a1.06 1.06 0 002.133.822l9.286-4.99a1.06 1.06 0 000-1.664zM15 12l7.333-3.947A1.06 1.06 0 0021.667 7v10a1.06 1.06 0 002.133-.822L15 12z"
//     />
//   </svg>
// );