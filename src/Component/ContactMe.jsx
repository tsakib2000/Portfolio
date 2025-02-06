import emailjs from "@emailjs/browser";
import { FaFacebook, FaGithub,  FaPhone,  FaXTwitter } from "react-icons/fa6";
import Swal from "sweetalert2";
const ContactMe = () => {
  const handleSendEmail = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;
    const info = { name, email, message };
    emailjs
      .send("service_uyeihqj", "template_fksm8ic", info, {
        publicKey: "cp8Zdk5Q0VkB4te57",
      })
      .then(
        () => {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Thank You for emailing Me",
            showConfirmButton: false,
            timer: 1500,
          });
          form.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <div
      id="contact-me"
      className=" flex flex-col items-center justify-center my-20"
    >
      <h1 className="text-2xl md:text-4xl font-bold mb-5 text-center">Contact Me</h1>

      <div className="flex flex-col justify-between md:flex-row">
        <div className="bg-gray-800 rounded-lg shadow-lg p-8 w-full ">
          <form onSubmit={handleSendEmail}>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Name
              </label>
              <input
                name="name"
                type="text"
                id="name"
                placeholder="Your Name"
                className="w-full px-4 py-2 bg-gray-700 text-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                placeholder="Your@email.com"
                className="w-full px-4 py-2 bg-gray-700 text-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Your Message"
                rows="4"
                className="w-full px-4 py-2 bg-gray-700 text-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              ></textarea>
            </div>

            <div>
              <button
                type="submit"
                className="w-full py-2 text-white bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                Send
              </button>
            </div>
          </form>
        </div>

        <div className="flex flex-col items-center justify-center text-center py-12 space-y-6">
      {/* Title */}
      <h2 className="text-2xl md:text-3xl font-semibold">
        <span className="text-purple-600">What’s next?</span>
      </h2>

      {/* Subtitle */}
      <h3 className="text-lg md:text-xl font-medium text-gray-700">Let’s connect</h3>

      {/* Description */}
      <p className="text-gray-600 max-w-2xl px-4">
        If you have any opportunity, suggestion, or feedback, I would love to hear from you! Please
        feel free to reach out to me using the contact form or my email address.
      </p>
      <h1 className="font-semibold flex items-center gap-4"><FaPhone/>Phone/Whatsapp: +8801706953344</h1>
      {/* Social Links */}
      <div className="flex space-x-6 mt-4">
        {/* GitHub */}
        <a
          href="https://github.com/tsakib2000"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 hover:text-purple-600 transition"
        >
          <FaGithub className="text-2xl" />
        </a>

        {/* Twitter */}
        <a
          href="https://x.com/TAUHIDULIS10407"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 hover:text-purple-600 transition"
        >
          <FaXTwitter className="text-2xl" />
        </a>

        {/* Facebook */}
        <a
          href="https://www.facebook.com/tauhid.sakib.40/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 hover:text-purple-600 transition"
        >
          <FaFacebook className="text-2xl" />
        </a>

    
      </div>
    
    </div>
      </div>
    </div>
  );
};

export default ContactMe;
