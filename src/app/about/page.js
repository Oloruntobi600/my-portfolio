export default function About() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">About Me</h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          I am a <span className="font-semibold text-blue-600">Backend Developer</span> with expertise in 
          <span className="font-semibold text-blue-600"> Java</span>, 
          <span className="font-semibold text-blue-600"> Spring Boot</span>, and 
          <span className="font-semibold text-blue-600"> React</span>. 
          I have a strong foundation in RESTful APIs and microservices, and I am passionate about building scalable applications that provide exceptional user experiences.
        </p>
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
