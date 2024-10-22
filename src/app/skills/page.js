export default function Skills() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">Core Skills</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-50 p-4 rounded-lg shadow">
            <h2 className="text-2xl font-semibold text-gray-700">Programming Languages</h2>
            <p className="mt-2 text-gray-600">Java, React, JavaScript</p>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg shadow">
            <h2 className="text-2xl font-semibold text-gray-700">Web Technologies</h2>
            <p className="mt-2 text-gray-600">RESTful APIs, Microservices, Spring, HTML, CSS, Bootstrap, React, JWT, JPA, Hibernate</p>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg shadow">
            <h2 className="text-2xl font-semibold text-gray-700">Databases</h2>
            <p className="mt-2 text-gray-600">SQL, MySQL, PostgreSQL, MongoDB</p>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg shadow">
            <h2 className="text-2xl font-semibold text-gray-700">Frameworks</h2>
            <p className="mt-2 text-gray-600">Spring, Spring Boot, React</p>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg shadow">
            <h2 className="text-2xl font-semibold text-gray-700">Software / Tools</h2>
            <p className="mt-2 text-gray-600">GitHub, GitLab, Docker, Kafka, AWS, Postman, Apache HTTP Server, Render</p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="flex justify-center mt-6">
        <a 
            href="/"  // Changed link to the home page
            className="bg-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-600 transition transform hover:-translate-y-1"
          >
            Back to Home
          </a>
        </div>
      </div>
    </div>
  );
}
