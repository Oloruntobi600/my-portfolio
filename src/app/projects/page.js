export default function Projects() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">My Projects</h1>
        <p className="text-lg text-gray-600 text-center mb-8">
          Explore my projects that showcase my skills in developing scalable and user-friendly applications.
        </p>

        <ul className="space-y-6">
          <li className="bg-gray-50 rounded-lg p-6 shadow hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-gray-700">Quickbite Restaurant</h3>
            <p className="mt-2 text-gray-600">
              A comprehensive restaurant management platform enabling users to register and manage multiple restaurants, browse menus, place orders, and manage user profiles.
            </p>
            <p className="mt-2 font-semibold"><strong>Technologies:</strong> Java, SQL, PostgreSQL, React</p>
            <p className="mt-2 font-semibold">Key Features:</p>
            <ul className="list-disc pl-5 mt-2 text-gray-600">
              <li>Implemented a full-fledged authentication and authorization system using JWT.</li>
              <li>Developed all CRUD operations for seamless interaction with the database.</li>
              <li>Managed database operations using PostgreSQL for reliable data storage and retrieval.</li>
              <li>Integrated an order tracking system, allowing users to monitor their order status from preparation to delivery.</li>
              <li>Designed a responsive UI using React, ensuring a seamless user experience across devices.</li>
              <li>Added role-based access control (RBAC) for admin and restaurant staff, enhancing security and data privacy.</li>
            </ul>
          </li>
          
          <li className="bg-gray-50 rounded-lg p-6 shadow hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-gray-700">Job Board Application</h3>
            <p className="mt-2 text-gray-600">
              A job application platform designed for employers to post job listings and for job seekers to browse and apply for jobs.
            </p>
            <p className="mt-2 font-semibold"><strong>Technologies:</strong> Java, PostgreSQL, JavaScript</p>
            <p className="mt-2 font-semibold">Key Features:</p>
            <ul className="list-disc pl-5 mt-2 text-gray-600">
              <li>Integrated a full-fledged authentication and authorization system with JWT.</li>
              <li>Developed comprehensive CRUD operations for managing job postings and applications.</li>
              <li>Managed all database interactions using PostgreSQL.</li>
              <li>Implemented an advanced search and filtering system for job listings, enabling users to find relevant jobs quickly.</li>
              <li>Integrated an application tracking system for employers to manage and review job applications efficiently.</li>
            </ul>
          </li>
          
          <li className="bg-gray-50 rounded-lg p-6 shadow hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-gray-700">Inventory Management Application</h3>
            <p className="mt-2 text-gray-600">
              An inventory management platform allowing sellers to post products and buyers to browse and order.
            </p>
            <p className="mt-2 font-semibold"><strong>Technologies:</strong> Java, PostgreSQL, JavaScript</p>
            <p className="mt-2 font-semibold">Key Features:</p>
            <ul className="list-disc pl-5 mt-2 text-gray-600">
              <li>Built a robust authentication and authorization system using JWT.</li>
              <li>Implemented CRUD operations for product management and order processing.</li>
              <li>Handled database management using PostgreSQL for efficient inventory tracking.</li>
            </ul>
          </li>
        </ul>

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
