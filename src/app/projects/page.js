export default function Projects() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">My Projects</h1>
        <p className="text-lg text-gray-700 text-center mb-8 leading-relaxed">
          Below are real-world applications I've designed and implemented. These projects showcase my ability to build scalable, secure, and enterprise-grade backend systems using Java, Spring Boot, and modern architectural practices.
        </p>

        <ul className="space-y-10">

          {/* Wallet System */}
          <li className="bg-gray-50 rounded-lg p-6 shadow hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-2xl font-bold text-gray-800">Wallet System – Consolidated Hallmark Insurance Plc (CHI)</h3>
            <p className="mt-4 text-gray-800 text-[17px] leading-relaxed">
              Architected and deployed a high-performance wallet service for CHI to manage digital transactions, account balances, and double-entry ledger updates. Designed with security, auditability, and third-party payment integrations in mind.
            </p>
            <p className="mt-4 text-gray-800 text-[17px] leading-relaxed">
              Built microservices to support wallet funding, internal transfers, secure withdrawals, and automated financial reporting with end-to-end encryption and tokenized authentication.
            </p>
            <p className="mt-4 font-semibold text-blue-900 text-[17px]">
              <strong>Technologies:</strong> Java (Spring Boot), PostgreSQL, JWT, Paystack API, Flutterwave API, Feign, Apache POI, iText, AES Encryption
            </p>
            <p className="mt-3 font-semibold text-blue-900 text-[17px]">
              <strong>Key Contributions:</strong>
            </p>
            <ul className="list-disc pl-5 mt-3 text-gray-700 leading-relaxed text-[16px]">
              <li>⚙️ Developed a double-entry ledger system with reconciler logic.</li>
              <li>💳 Integrated Paystack/Flutterwave payment and webhook flow for real-time top-ups.</li>
              <li>🔐 Enabled encrypted OTP & PIN validations for withdrawal authorization.</li>
              <li>📄 Exported trial balances and reports in PDF/Excel using iText and POI.</li>
              <li>🔁 Scheduled retry jobs for failed transactions and settlements.</li>
              <li>🛡️ Applied user-specific AES encryption across secure endpoints.</li>
              <li>📡 Coordinated microservice communication using secure Feign clients.</li>
            </ul>
          </li>

          {/* Kibou Registry */}
          <li className="bg-gray-50 rounded-lg p-6 shadow hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-2xl font-bold text-gray-800">Kibou Registry – Event Platform (Algomath / Moneta)</h3>
            <p className="mt-4 text-gray-800 text-[17px] leading-relaxed">
              Designed and implemented a modern event registry system that enables users to schedule, manage, and track events through a responsive web platform. Focused on modular backend services, role-based access, and automated lifecycle transitions.
            </p>
            <p className="mt-4 font-semibold text-blue-900 text-[17px]">
              <strong>Technologies:</strong> Java (Spring Boot), PostgreSQL, React, JWT, REST APIs, Render, Postman
            </p>
            <p className="mt-3 font-semibold text-blue-900 text-[17px]">
              <strong>Key Contributions:</strong>
            </p>
            <ul className="list-disc pl-5 mt-3 text-gray-700 leading-relaxed text-[16px]">
              <li>📆 Built a scheduling engine for time-triggered event flows and reminders.</li>
              <li>🧾 Created event registration, RSVP tracking, and guest view endpoints.</li>
              <li>🛠️ Deployed full-stack app on Render with CI/CD readiness.</li>
              <li>🔐 Implemented JWT security across user, admin, and guest modules.</li>
              <li>🧪 Covered endpoints with Postman collections and test scenarios.</li>
            </ul>
          </li>

          {/* Quickbite */}
          <li className="bg-gray-50 rounded-lg p-6 shadow hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-2xl font-bold text-gray-800">Quickbite Restaurant Platform</h3>
            <p className="mt-4 text-gray-800 text-[17px] leading-relaxed">
              Built a full-stack restaurant management and ordering platform supporting multi-restaurant registration, menu uploads, and customer order tracking. Includes separate role flows for admin, staff, and customers.
            </p>
            <p className="mt-4 font-semibold text-blue-900 text-[17px]">
              <strong>Technologies:</strong> Java, PostgreSQL, React, SQL, JWT
            </p>
            <p className="mt-3 font-semibold text-blue-900 text-[17px]">
              <strong>Key Contributions:</strong>
            </p>
            <ul className="list-disc pl-5 mt-3 text-gray-700 leading-relaxed text-[16px]">
              <li>🔐 Set up JWT auth and role-based access for admin and restaurant staff.</li>
              <li>📦 Designed product/menu CRUD APIs with pagination and filtering.</li>
              <li>🛒 Enabled real-time order flow and order tracking components.</li>
              <li>📊 Delivered responsive frontend in React for mobile and desktop users.</li>
            </ul>
          </li>

          {/* Job Board */}
          <li className="bg-gray-50 rounded-lg p-6 shadow hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-2xl font-bold text-gray-800">Job Board System</h3>
            <p className="mt-4 text-gray-800 text-[17px] leading-relaxed">
              Developed a secure and intuitive job board platform for employers to post roles and manage applications, while allowing job seekers to search, filter, and apply to jobs.
            </p>
            <p className="mt-4 font-semibold text-blue-900 text-[17px]">
              <strong>Technologies:</strong> Java, PostgreSQL, JavaScript, JWT
            </p>
            <p className="mt-3 font-semibold text-blue-900 text-[17px]">
              <strong>Key Contributions:</strong>
            </p>
            <ul className="list-disc pl-5 mt-3 text-gray-700 leading-relaxed text-[16px]">
              <li>🔐 Built secure login flows with JWT and user-role separation.</li>
              <li>🧾 Delivered CRUD features for job listings, employer profiles, and applications.</li>
              <li>🔍 Implemented keyword/category search with smart filters.</li>
              <li>📈 Created job application tracking dashboards for employers.</li>
            </ul>
          </li>

          {/* Inventory Management */}
          <li className="bg-gray-50 rounded-lg p-6 shadow hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-2xl font-bold text-gray-800">Inventory Management Platform</h3>
            <p className="mt-4 text-gray-800 text-[17px] leading-relaxed">
              Backend system designed for product inventory control, order placement, and stock deduction. Built to handle high concurrency and track seller-buyer activity across multiple channels.
            </p>
            <p className="mt-4 font-semibold text-blue-900 text-[17px]">
              <strong>Technologies:</strong> Java, PostgreSQL, JavaScript, JWT
            </p>
            <p className="mt-3 font-semibold text-blue-900 text-[17px]">
              <strong>Key Contributions:</strong>
            </p>
            <ul className="list-disc pl-5 mt-3 text-gray-700 leading-relaxed text-[16px]">
              <li>🔐 Developed secure APIs with encrypted auth for product access and transactions.</li>
              <li>📦 Managed stock movement and quantity sync using transactional queries.</li>
              <li>🛒 Enabled real-time ordering and seller-controlled product visibility.</li>
            </ul>
          </li>
        </ul>

        <div className="flex justify-center mt-10">
          <a
            href="/"
            className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition transform hover:-translate-y-1"
          >
            Back to Home
          </a>
        </div>
      </div>
    </div>
  );
}