export default function Contact() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-lg mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">Get in Touch</h1>
        <p className="text-lg text-gray-600 text-center mb-4">
          I would love to hear from you! Whether you have questions, want to collaborate, or just want to say hello, feel free to reach out.
        </p>
        <div className="mt-6">
          <p className="text-gray-700 mb-2">
            <strong>Email:</strong>{" "}
            <a href="mailto:tobiajayi60@gmail.com" className="text-blue-500 hover:underline">
              tobiAjayi60@gmail.com
            </a>
          </p>
          <p className="text-gray-700 mb-2">
            <strong>LinkedIn:</strong>{" "}
            <a
              href="https://www.linkedin.com/in/oloruntobi-ajayi-62930271/"
              className="text-blue-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Oloruntobi Ajayi
            </a>
          </p>
          <p className="text-gray-700 mb-2">
            <strong>GitHub:</strong>{" "}
            <a
              href="https://github.com/Oloruntobi600"
              className="text-blue-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Oloruntobi600
            </a>
          </p>
        </div>
        <div className="mt-8 text-center">
          <p className="text-gray-600">Connect with me on social media!</p>
          <div className="flex justify-center space-x-4 mt-4">
            <a
              href="https://www.linkedin.com/in/oloruntobi-ajayi-62930271/"
              className="text-blue-500 hover:text-blue-600 transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.548v-5.575c0-1.327-.028-3.04-1.848-3.04-1.85 0-2.132 1.443-2.132 2.94v5.675H10.478V10.491h3.413v1.477h.048c.475-.896 1.632-1.84 3.356-1.84 3.589 0 4.248 2.366 4.248 5.447v5.824zM5.337 9.685c-1.169 0-2.06-.894-2.06-2.002s.891-2.003 2.06-2.003c1.169 0 2.059.893 2.059 2.003 0 1.108-.891 2.002-2.059 2.002zm1.706 10.766H3.628V10.491h3.415v9.960zm15.106-20.451H1.413C.626.0 0 .626 0 1.414v21.172C0 23.374.626 24 1.414 24h21.172C23.374 24 24 23.374 24 22.586V1.414C24 .626 23.374 0 22.586 0z" />
              </svg>
            </a>
            <a
              href="https://github.com/Oloruntobi600"
              className="text-gray-800 hover:text-gray-600 transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 .5C5.373.5.5 5.373.5 12c0 5.246 3.39 9.688 8.128 11.242.593.109.793-.257.793-.57 0-.282-.011-1.077-.017-2.115-3.308.716-4.015-1.592-4.015-1.592-.543-1.384-1.327-1.754-1.327-1.754-1.086-.742.082-.726.082-.726 1.203.085 1.834 1.236 1.834 1.236 1.069 1.831 2.807 1.302 3.489.995.109-.774.418-1.302.763-1.602-2.665-.303-5.467-1.337-5.467-5.931 0-1.313.47-2.392 1.238-3.235-.125-.303-.537-1.53.117-3.19 0 0 1.007-.323 3.296 1.229.956-.266 1.984-.398 3.002-.402 1.018.004 2.046.136 3.002.402 2.289-1.552 3.296-1.229 3.296-1.229.655 1.66.243 2.887.118 3.19.77.843 1.238 1.922 1.238 3.235 0 4.61-2.803 5.624-5.465 5.93.429.372.813 1.099.813 2.219 0 1.605-.015 2.898-.015 3.285 0 .316.197.684.798.568C20.61 21.188 24 16.746 24 12c0-6.627-5.373-11.5-12-11.5z" />
              </svg>
            </a>
          </div>
        </div>
        
        {/* Back to Home Button at the Bottom */}
        <div className="flex justify-center mt-6">
          <a 
            href="/"  // Link to home page
            className="bg-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-600 transition transform hover:-translate-y-1"
          >
            Back to Home
          </a>
        </div>
      </div>
    </div>
  );
}
