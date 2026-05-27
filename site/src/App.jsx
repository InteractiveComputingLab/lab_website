import { useState } from 'react'
import './Index.css'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import About from './components/About'
import Recent_publications from './components/recent_publications'
import Publications from './components/Publications'
import Labmembers from './components/Labmembers'
import { FaLinkedin } from "react-icons/fa";

function App() {
  const [page, setPage] = useState("home");

  return (
    <>
      <Navbar setPage={setPage} />

      {page === "home" && (
        <>
          <Banner />
          <About />
          <Recent_publications />
        </>
      )}

      {page === "publications" && <Publications />}

      {page === "lab_members" && <Labmembers />}

      <div className='bg-gray-200 mt-[60px] pt-[60px]'>
        <div className="container">
          <div className="grid sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 px-0 sm:px-5">
            
            <div className="sm:mb-[60px]">
              <h3 className="font-semibold text-2xl">Links</h3>
              <ul className="text-center text-xl">
                <li><a onClick={() => setPage("home")} href="#">Home</a></li>
                <li><a onClick={() => setPage("publications")} href="#">Publications</a></li>
                <li><a onClick={() => setPage("lab_members")} href="#">Lab Members</a></li>
              </ul>
            </div>

            <div className="sm:mb-[60px]">
              <h3 className="font-semibold text-2xl">Contact Us</h3>
              <address className="not-italic text-center text-xl leading-relaxed mt-2">
                <p className="font-medium">Dr. Jonggi Hong</p>
                <p>Assistant Professor</p>
                <p>
                  <a
                    href="mailto:jhong8@stevens.edu"
                    className="underline underline-offset-4"
                  >
                    jhong8@stevens.edu
                  </a>
                </p>
              </address>
            </div>

            <div className="sm:mb-[60px]">
              <h3 className="font-semibold text-2xl">Social Media</h3>
              <ul className='flex justify-center gap-4 text-xl'>
                <li>
                  <a
                    href="https://www.linkedin.com/company/iclab-stevens/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 underline"
                  >
                    <FaLinkedin aria-hidden="true" focusable="false" />
                    <span>LinkedIn</span>
                  </a>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default App