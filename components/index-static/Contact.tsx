export default function Contact() {
  return (
    <section id="contact" className="py-20 lg:py-32 bg-wise-surface">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            className="
              wise-display-section text-wise-black
              max-sm:text-[3rem] sm:text-[4rem]
              leading-[0.85] mb-6
            "
          >
            Get in <span className="text-wise-green">Touch</span>
          </h2>
          <p className="wise-body text-wise-warm-dark max-w-2xl mx-auto">
            Have questions about our products, your order, or wholesale
            opportunities? We're here to help.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left: Contact Info */}
          <div>
            <h3 className="wise-feature-title text-wise-black mb-8">
              Contact Information
            </h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div
                  className="
                    w-12 h-12 rounded-full
                    bg-wise-mint
                    flex items-center justify-center
                    flex-shrink-0
                  "
                >
                  <span className="text-xl">📍</span>
                </div>
                <div>
                  <p className="wise-caption text-wise-gray mb-1">Address</p>
                  <p className="wise-body-semibold text-wise-black">
                    123 FitWear Street, Kaohsiung, Taiwan
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div
                  className="
                    w-12 h-12 rounded-full
                    bg-wise-mint
                    flex items-center justify-center
                    flex-shrink-0
                  "
                >
                  <span className="text-xl">📧</span>
                </div>
                <div>
                  <p className="wise-caption text-wise-gray mb-1">Email</p>
                  <p className="wise-body-semibold text-wise-black">
                    support@fitwear.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div
                  className="
                    w-12 h-12 rounded-full
                    bg-wise-mint
                    flex items-center justify-center
                    flex-shrink-0
                  "
                >
                  <span className="text-xl">📞</span>
                </div>
                <div>
                  <p className="wise-caption text-wise-gray mb-1">Phone</p>
                  <p className="wise-body-semibold text-wise-black">
                    +886 912 345 678
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div>
            <form
              className="
                wise-card p-8 lg:p-10
                bg-wise-white
              "
              style={{ borderRadius: "30px" }}
            >
              <div className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="wise-caption text-wise-gray block mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Enter your name"
                    className="w-full wise-input"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="wise-caption text-wise-gray block mb-2"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    className="w-full wise-input"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="wise-caption text-wise-gray block mb-2"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    placeholder="How can we help?"
                    rows={5}
                    className="w-full wise-input resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="
                    wise-button-primary w-full
                    focus:outline-none focus:ring-2 focus:ring-wise-green-dark focus:ring-offset-2
                  "
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
