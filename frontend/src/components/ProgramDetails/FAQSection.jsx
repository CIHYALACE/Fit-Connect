// FAQSection.jsx
export default function FAQSection() {
  const faqs = [
    {
      question: "How do I receive the program?",
      answer: "You'll get instant access to a downloadable ZIP file with all content immediately after purchase, plus ongoing access through your member dashboard."
    },
    {
      question: "Is it suitable for beginners?",
      answer: "Absolutely! The program includes scaled versions of every exercise and progressive overload plans for all fitness levels."
    },
    {
      question: "What equipment do I need?",
      answer: "Most workouts require only bodyweight. Optional equipment includes dumbbells (or water bottles), resistance bands, and a yoga mat."
    },
    {
      question: "Can I access this on mobile?",
      answer: "Yes! All materials are mobile-optimized, including PDFs that adapt to your screen size and streaming-friendly video formats."
    }
  ];

  return (
    <div className="row mb-5 justify-content-center">
      <div className="col-md-10">
        <h2 className="display-5 fw-bold mb-5 text-dark-gradient">Frequently Asked Questions</h2>
        
        <div className="d-flex flex-column gap-3">
          {faqs.map((faq, index) => (
            <details 
              key={index} 
              className="border-0 shadow-sm rounded-4 overflow-hidden bg-white"
            >
              <summary className="p-4 text-light bg-gradient-dark cursor-pointer list-none fs-5 fw-semibold d-flex justify-content-between align-items-center">
                {faq.question}
                <span className="text-light fs-4">+</span>
              </summary>
              <div className="p-4 pt-0 fs-5 border-top">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>

        {/* Support CTA */}
        <div className="text-center mt-5 pt-3">
          <p className="fs-5 mb-3">Need more help?</p>
          <button className="btn btn-outline-dark-gradient px-4 py-2 rounded-3 fw-semibold">
            Contact Our Support Team
          </button>
        </div>
      </div>
    </div>
  );
}