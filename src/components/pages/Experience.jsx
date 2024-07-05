import arrowleft from '../../assets/arrowleft.svg'
import arrowright from '../../assets/arrowright.svg'

export default function Experience({ expRef }) {

  return (
    <div ref={expRef} className="h-full flex flex-col items-center justify-center pb-20">
      <h1 className="text-4xl  my-4 font-bold text-center text-slate-50">
        Experience
      </h1>
      <div className='w-full  flex flex-row items-center justify-around'>
        <img src={arrowleft} alt="left" className='h-6' />
        <p className='text-lg font-semibold pb-1 px-1 '>Swipe</p>
        <img src={arrowright} alt="right" className='h-6' />
      </div>
      <div className="w-full px-2 carousel carousel-center rounded-box max-w-[95vw]  md:max-w-6xl space-x-4 p-4 bg-">
        <div className="carousel-item">
          <div className="max-w-[88vw] md:max-w-3xl p-10 bg-[#000000ab] shadow-md mx-5 rounded-box">
            <h3 className="text-3xl font-bold">Software Engineering Immersive Graduate</h3>
            <h4 className="text-xl font-semibold text-gray-300">General Assembly, London</h4>
            <h5 className="text-base font-medium text-gray-400 border-b-4">MARCH 2024 - JUNE 2024</h5>
            <p className="mt-2 text:md md:text-lg text-slate-50">Completed an intensive 12-week program covering React, Express, Node.js, Python, and Django REST. Participated in daily stand-ups, interactive lessons, team exercises, and four key week-long projects:</p>
            <ul className="list-disc list-outside mt-2 text:md md:text-lg text-slate-50">
              <li className="mb-2">
                <strong>Frogger -</strong>A solo project recreating the classic game Frogger to showcase my HTML, CSS, and JavaScript skills.
              </li>
              <li className="mb-2">
                <strong>Movie Gallery -</strong>A two-person team project using Vite.js for setup, with React, Node.js, Axios, and Bootstrap to interact with a movie API.
              </li>
              <li className="mb-2">
                <strong>Pedal -</strong>Pedal is a social network clone for car enthusiasts, built by a three-person team using the MERN stack. It features CRUDable posts and was developed collaboratively on GitHub.
              </li>
              <li className="mb-2">
                <strong>BlendBay -</strong> BlendBay is a site for shake enthusiasts to like, post, create, and review shakes. Built with Python, Django REST, React, PostgreSQL, SCSS, and Cloudinary.
              </li>
            </ul>
          </div>
        </div>
        <div className="carousel-item">
          <div className="h-full max-w-[85vw] md:max-w-3xl p-10 bg-[#000000ab] shadow-md mx-5 rounded-box">
            <h3 className="text-2xl font-bold">Refrigeration Case Cleaner</h3>
            <h4 className="text-xl font-semibold text-gray-300">Arcus FM, Stevenage |  Remote/Mobile </h4>
            <h5 className="text-base font-medium text-gray-400 border-b-4">JULY 2022 - FEB 2024</h5>
            <ul className="list-disc list-outside mt-2 text-lg text-slate-50">
              <li className="mb-2">
                Conducted routine audits of cases before and after jobs to insure high standards.
              </li>
              <li className="mb-2">
                Collaborated with the team to complete tasks efficiently and performed regular inspections to identify and address repair needs.
              </li>
            </ul>
          </div>
        </div>
        <div className="carousel-item">
          <div className=" max-w-[85vw] md:max-w-3xl p-10 bg-[#000000ab] shadow-md mx-5 rounded-box">
            <h3 className="text-2xl font-bold">Outbound Sales Consultant</h3>
            <h4 className="text-xl font-semibold text-gray-300">OneFamily, Swindon</h4>
            <h5 className="text-base font-medium text-gray-300 border-b-4">OCTOBER 2021 - JUNE 2022</h5>
            <ul className="list-disc list-outside mt-2 text-lg text-slate-50">
              <li className="mb-2">
                Communicated with customers, explained products, and upsold new investment products.
              </li>
              <li className="mb-2">
                Exceeded quarterly targets consistently from Q1 2022 to Q2 2022 by leveraging effective teamwork and maximizing the capabilities of Noetica CRM
              </li>
            </ul>
          </div>
        </div>
        <div className="carousel-item">
          <div className=" max-w-[85vw] md:max-w-3xl p-10 bg-[#000000ab] shadow-md mx-5 rounded-box">
            <p className="text-2xl font-bold drop-shadow-lg">Case Maintenance Engineer</p>
            <p className="text-xl font-semibold text-gray-300">Space Engineering Services, Bristol |  Remote/Mobile</p>
            <p className="text-base font-medium text-gray-400 border-b-4">FEBRUARY 2019 - SEPTEMBER 2021</p>
            <ul className="list-disc list-outside mt-2 text-lg text-slate-50">
              <li className="mb-2">
                Networked and liaised with managers for maintenance schedules and conducting safety audits.
              </li>
              <li className="mb-2">
                Facilitated training programs to onboard new employees, ensuring adherence to company standards for operational efficiency.
              </li>
            </ul>
          </div>
        </div>
        <div className="carousel-item">
          <div className=" max-w-sm md:max-w-3xl p-10 bg-[#000000ab] shadow-md mx-5 rounded-box">

            <ul className="list-disc list-outside mt-2 text-lg text-gray-400">
              <li className="mb-2">
                <p className="text-xl font-bold ">Line Technician</p>
                <p className="text-lg font-semibold text-gray-300">Catalent Pharma Solutions, Swindon</p>
                <p className="text-base font-light text-gray-400 border-b-4">DECEMBER 2017 - JANUARY 2019</p>
              </li>
              <li className="mb-2">
                <p className="text-xl font-bold ">Able Bodied Seaman</p>
                <p className="text-lg font-semibold text-gray-300">Iranian Offshore Oil Company, Persian Gulf</p>
                <p className="text-base font-light text-gray-400 border-b-4">APRIL 2016 - MAY 2017</p>
              </li>
              <li className="mb-2">
                <p className="text-xl font-bold ">Event Coordinator</p>
                <p className="text-lg font-semibold text-gray-300">PhotoBooth Goa Ltd, Goa</p>
                <p className="text-base font-light text-gray-400 border-b-4">JUNE 2015 - MARCH 2016</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}