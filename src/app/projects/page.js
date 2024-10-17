export default function Projects() {
    return (
      <div className="p-6">
        <h1 className="text-3xl font-bold">Projects</h1>
        <ul className="mt-2 space-y-4">
          <li>
            <h3 className="font-semibold">Quickbite Restaurant</h3>
            <p>A comprehensive restaurant management platform enabling users to register and manage multiple restaurants, browse menus, place orders, and manage user profiles.</p>
            <p><strong>Technologies:</strong> Java, SQL, PostgreSQL, React</p>
            <p><strong>Key Features:</strong></p>
            <ul className="list-disc pl-5">
              <li>Implemented a full-fledged authentication and authorization system using JWT.</li>
              <li>Developed all CRUD operations for seamless interaction with the database.</li>
              <li>Managed database operations using PostgreSQL for reliable data storage and retrieval.</li>
              <li>Integrated an order tracking system, allowing users to monitor their order status from preparation to delivery.</li>
              <li>Designed a responsive UI using React, ensuring a seamless user experience across devices.</li>
              <li>Added role-based access control (RBAC) for admin and restaurant staff, enhancing security and data privacy.</li>
            </ul>
          </li>
          <li>
            <h3 className="font-semibold">Job Board Application</h3>
            <p>A job application platform designed for employers to post job listings and for job seekers to browse and apply for jobs.</p>
            <p><strong>Technologies:</strong> Java, PostgreSQL, JavaScript</p>
            <p><strong>Key Features:</strong></p>
            <ul className="list-disc pl-5">
              <li>Integrated a full-fledged authentication and authorization system with JWT.</li>
              <li>Developed comprehensive CRUD operations for managing job postings and applications.</li>
              <li>Managed all database interactions using PostgreSQL.</li>
              <li>Implemented an advanced search and filtering system for job listings, enabling users to find relevant jobs quickly.</li>
              <li>Integrated an application tracking system for employers to manage and review job applications efficiently.</li>
            </ul>
          </li>
          <li>
            <h3 className="font-semibold">Inventory Management Application</h3>
            <p>An inventory management platform allowing sellers to post products and buyers to browse and order.</p>
            <p><strong>Technologies:</strong> Java, PostgreSQL, JavaScript</p>
            <p><strong>Key Features:</strong></p>
            <ul className="list-disc pl-5">
              <li>Built a robust authentication and authorization system using JWT.</li>
              <li>Implemented CRUD operations for product management and order processing.</li>
              <li>Handled database management using PostgreSQL for efficient inventory tracking.</li>
            </ul>
          </li>
        </ul>
      </div>
    );
  }
  