import React from "react";
const ExperienceContent = () => {
  return (
    <div className="pt-10 px-10 md:px-24 max-w-4xl h-full">
      <h1 className="text-3xl text-[#e1ad01]">Experience</h1>
      <hr className="rounded border-gray-100 border-2 my-3"></hr>
      <div className="grid grid-cols-1 justify-between gap-2 pb-4">
        <div className="bg-slate-400 bg-opacity-40 hover:bg-opacity-70 rounded-md p-4">
          <div className="grid grid-cols-2">
            <div>
              <h2 className="text-lg">T-Mobile</h2>
            </div>
            <div className="place-self-end">
              <span className="text-sm">Oct 2020 - Present</span>
            </div>
          </div>
          <hr className="rounded border-gray-100 border-2 my-3"></hr>

          <h2 className="text-xl font-semibold mb-2">Technical Stack:</h2>
          <p className="mb-2">
            <span className="font-medium">Current:</span> Angular, TypeScript,
            HAPI.js BFF, Adobe Experience Manager (AEM), Java, Spring Boot,
            Maven, Splunk, Grafana, GitLab
          </p>
          <p className="mb-4">
            <span className="font-medium">Legacy:</span> Angular (older
            versions), AEM Servlets, monolithic application architecture
          </p>

          <div className="relative border-l-2 border-gray-400 ml-2 mt-4">

            <div className="mb-8 ml-6 relative">
              <div className="absolute -left-[1.65rem] top-1.5 w-3 h-3 rounded-full bg-[#e1ad01]"></div>
              <div className="grid grid-cols-2 mb-3">
                <h3 className="text-lg font-semibold">Senior Software Engineer</h3>
                <span className="text-sm place-self-end">Dec 2025 - Present</span>
              </div>
              <h4 className="font-medium mt-3">Feature Development & Leadership:</h4>
              <ul className="list-disc list-inside ml-4 mt-1">
                <li>
                  Led the development of features from concept to delivery,
                  including LOE estimation, dependency identification, and risk
                  mitigation.
                </li>
              </ul>
              <h4 className="font-medium mt-3">Security, Stability, and Scalability:</h4>
              <ul className="list-disc list-inside ml-4 mt-1">
                <li>
                  Secured client configurations and secrets, adhering to
                  enterprise security standards.
                </li>
                <li>
                  Standardized API integration by migrating to internal proxies,
                  improving security and maintainability.
                </li>
                <li>
                  Enhanced application logging, enabling proactive alerts and
                  robust dashboards in Splunk and Grafana.
                </li>
                <li>
                  Resolved dependencies with critical vulnerabilities and upgraded
                  Angular applications for improved security.
                </li>
              </ul>
              <h4 className="font-medium mt-3">Operational Excellence:</h4>
              <ul className="list-disc list-inside ml-4 mt-1">
                <li>
                  Provided on-call support, resolved production defects, and
                  performed triages for system outages.
                </li>
                <li>
                  Reviewed 300+ merge requests annually, ensuring code quality and
                  adherence to best practices.
                </li>
                <li>
                  Authored technical documentation and developed sequence diagrams
                  to streamline knowledge sharing.
                </li>
              </ul>
              <h4 className="font-medium mt-3">Collaboration & Mentorship:</h4>
              <ul className="list-disc list-inside ml-4 mt-1">
                <li>
                  Supported teams through knowledge-sharing sessions, project
                  discussions, and triages.
                </li>
              </ul>
            </div>

            <div className="ml-6 relative">
              <div className="absolute -left-[1.65rem] top-1.5 w-3 h-3 rounded-full bg-gray-400"></div>
              <div className="grid grid-cols-2 mb-3">
                <h3 className="text-lg font-semibold">Software Engineer</h3>
                <span className="text-sm place-self-end">Oct 2020 - Nov 2025</span>
              </div>
              <p className="mb-3">
                Part of the Digital Account Management team, focused on
                modernizing postpaid account services for T-Mobile's web
                customers.
              </p>
              <h4 className="font-medium mt-3">Legacy Modernization:</h4>
              <ul className="list-disc list-inside ml-4 mt-1">
                <li>
                  Migrated ~30 user flows from a legacy Angular + AEM Servlet
                  application to modern Angular monorepos backed by HAPI.js BFFs
                  and AEM.
                </li>
                <li>
                  Flows included high-impact blocking features such as call and
                  message blocking, international roaming, and multi-device
                  management (DIGITS), among others.
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 justify-between gap-2 pb-4">
        <div className="bg-slate-400 bg-opacity-40 hover:bg-opacity-70 rounded-md p-4">
          <div className="grid grid-cols-2">
            <div>
              <h2 className="text-lg">HNTB</h2>
            </div>
            <div className="place-self-end">
              <span className="text-sm">May 2018 - Oct 2020</span>
            </div>
          </div>
          <hr className="rounded border-gray-100 border-2 my-3"></hr>
          <div>
            <p className="mb-4">
              Contributed to the rapid development of resource allocation and
              public outreach tools, transitioning from intern to full-time
              application developer.
            </p>

            <h2 className="text-xl font-semibold mb-2">Technical Stack:</h2>
            <p className="mb-4">
              TypeScript, Vue.js, Python (Django), AWS (DBS, EC2, S3), GitHub
            </p>

            <h2 className="text-xl font-semibold mb-2">
              Key Achievements & Responsibilities:
            </h2>

            <h3 className="text-lg font-medium mt-4">Feature Development:</h3>
            <ul className="list-disc list-inside ml-4">
              <li>
                Designed and implemented frontend and backend features,
                delivering user-friendly and efficient solutions.
              </li>
            </ul>

            <h3 className="text-lg font-medium mt-4">
              Infrastructure & Deployment:
            </h3>
            <ul className="list-disc list-inside ml-4">
              <li>
                Developed and maintained AWS architecture, streamlining
                deployments and releases.
              </li>
            </ul>

            <h3 className="text-lg font-medium mt-4">
              Agile & Team Collaboration:
            </h3>
            <ul className="list-disc list-inside ml-4">
              <li>
                Participated in SCRUM meetings and created detailed tickets for
                efficient task management.
              </li>
              <li>
                Reviewed team merge requests, ensuring code quality and
                maintainability.
              </li>
            </ul>

            <h3 className="text-lg font-medium mt-4">Stakeholder Engagement:</h3>
            <ul className="list-disc list-inside ml-4">
              <li>
                Attended stakeholder public outreach meetings to gain insights
                into user needs and improve services.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceContent;
