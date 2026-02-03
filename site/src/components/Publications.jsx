import React from "react";
import Img from "../assets/academic.png";

const publications = [
  {
    title:
      "CustomSight: Enhancing LLM-Powered Visual Assistance for Blind Individuals using Goal-Directed Dynamic Filters",
    paperUrl: "https://dl.acm.org/doi/10.1145/3746058.3758401",
    citation:
      "Adil Rahman, Rifat Rahman Khan, Jonggi Hong, Stephanie Valencia, and Seongkook Heo. 2025. Proc. The 38th Annual ACM Symposium on User Interface Software and Technology (UIST 2025 Adjunct).",
  },
  {
    title: "Interactive Form Filling Assistant on Smart Glasses for Blind Users",
    paperUrl: "https://dl.acm.org/doi/10.1145/3663547.3759722",
    citation:
      "Rifat Rahman Khan, Srikala Sandu, Jonggi Hong. 2025. Proc. International ACM SIGACCESS Conference on Computers and Accessibility (ASSETS 2025).",
  },
  {
    title:
      "Accessible Slide Presentation via Intelligent Real-time Editing: Insights from a Wizard-of-Oz Study",
    paperUrl: "https://dl.acm.org/doi/10.1145/3663547.3759719",
    citation:
      "Azizul Hoque, Jonggi Hong. 2025. Proc. International ACM SIGACCESS Conference on Computers and Accessibility (ASSETS 2025).",
  },
  {
    title:
      "Typing Haptically: Towards Enabling Non-auditory Smartphone Text Entry with Haptic Feedback for Blind and Low Vision Users",
    paperUrl: "https://dl.acm.org/doi/10.1145/3746059.3747801",
    citation:
      "Jisu Yim, Donghyeon Ko, Taeho Kim, Taejun Kim, Jonggi Hong, Geehyuk Lee. 2025. Proc. ACM Symposium on User Interface Software and Technology (UIST 2025).",
  },
  {
    title:
      "Exploring User Behavior and Validation Proficiency in Assessing Responses from a Conversational Agent",
    paperUrl:
      "https://openaccess.cms-conferences.org/publications/book/978-1-964867-73-1/article/978-1-964867-73-1_13",
    citation:
      "Jiayin Huang, Jonggi Hong. 2025. Proc. International Conference on Human Interaction & Emerging Technologies (IHIET 2025).",
  },
];

const Publications = () => {
  return (
    <main className="container mx-auto px-4 py-10">
      <header className="text-center">
        <h1 className="text-3xl font-semibold tracking-tight">
          All Publications
        </h1>
      </header>

      <ul className="mt-10 space-y-6" role="list">
        {publications.map((pub) => (
          <li
            key={pub.title}
            className="rounded-2xl overflow-hidden border border-black/10 bg-white"
          >
            <div className="flex flex-col md:flex-row">
              <div className="md:w-[260px] shrink-0">
                <img
                  src={Img}
                  alt=""
                  aria-hidden="true"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex-1 p-6 bg-gray-100">
                <div className="flex flex-col gap-3">
                  <h2 className="text-lg font-semibold leading-snug">
                    <a
                      href={pub.paperUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline underline-offset-4 decoration-black/30 hover:decoration-black focus:outline-none focus-visible:ring-2 focus-visible:ring-black/50 rounded"
                    >
                      {pub.title}
                    </a>
                  </h2>

                  <p className="text-gray-700 text-sm leading-relaxed">
                    {pub.citation}
                  </p>

                  <div className="pt-1">
                    <a
                      href={pub.paperUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-lg bg-black text-white px-4 py-2 text-sm font-medium hover:bg-black/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-black/50"
                    >
                      View paper
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Publications;
