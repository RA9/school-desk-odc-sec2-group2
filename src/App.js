import './App.css';
import Navbar from './Component/Navbar';
export default function App() {
  return (
    <>
      <Navbar />

      <main>
        <div className="mb-16">
          <div className="bg-gray-100">
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
              <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                <div>
                </div>
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                  <span className="relative inline-block">
                    <svg
                      viewBox="0 0 52 24"
                      fill="currentColor"
                      className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-gray-400 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                    >
                      <defs>
                        <pattern
                          id="dc223fcc-6d72-4ebc-b4ef-abe121034d6e"
                          x="0"
                          y="0"
                          width=".135"
                          height=".30"
                        >
                          <circle cx="1" cy="1" r=".7" />
                        </pattern>
                      </defs>
                      <rect
                        fill="url(#dc223fcc-6d72-4ebc-b4ef-abe121034d6e)"
                        width="52"
                        height="24"
                      />
                    </svg>
                    <span className="relative">Welcome To SchoolDesk</span>
                  </span>{' '}
                </h2>
                <p className="text-base text-gray-700 md:text-lg">
                  Have You Have All Notification About Your School
                </p>
              </div>
              <div className="flex items-center sm:justify-center">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                >
                  Get started
                </button>
                <a
                  href="#"
                  aria-label=""
                  className="inline-flex items-center font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700"
                >
                  Learn more
                </a>
              </div>
            </div>
          </div>
          <div className="relative px-4 sm:px-0">
            <div className="absolute inset-0 bg-gray-100 h-1/2" />
            <div className="relative grid mx-auto overflow-hidden bg-white divide-y rounded shadow sm:divide-y-0 sm:divide-x sm:max-w-screen-sm sm:grid-cols-3 lg:max-w-screen-md">
              <div className="inline-block p-8 text-center">
                <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-indigo-50">
                  <svg
                    className="w-10 h-10 text-deep-purple-accent-400"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </div>
                <p className="font-bold tracking-wide text-gray-800">
                  Get Fast Info
                </p>
              </div>
              <div className="inline-block p-8 text-center">
                <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-indigo-50">
                  <svg
                    className="w-10 h-10 text-deep-purple-accent-400"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </div>
                <p className="font-bold tracking-wide text-gray-800">
                  Be Upto Date
                </p>
              </div>
              <div className="inline-block p-8 text-center">
                <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-indigo-50">
                  <svg
                    className="w-10 h-10 text-deep-purple-accent-400"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </div>
                <p className="font-bold tracking-wide text-gray-800">
                  Prepare Yoursefl
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">

          <div className="grid gap-5 row-gap-5 mb-8 lg:grid-cols-4 sm:grid-cols-2">
            <a
              href="/"
              aria-label="View Item"
              className="inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2"
            >
              <div className="flex flex-col h-full">
                <img
                  src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg? auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                  className="object-cover w-full h-48"
                  alt=""
                />
                <div className="flex-grow border border-t-0 rounded-b">
                  <div className="p-5">
                    <h6 className="mb-2 font-semibold leading-5">
                      BlueCrest University College
                    </h6>
                    <p className="text-sm text-gray-900">
                      BlueCrest College was conceived as a high-tech
                      Information Technology (IT) centre of excellence
                      in late 2013. In April 2014, the Board of School
                      Accreditation of the Ministry of Education of the
                      Republic of Liberia awarded a letter of accreditation
                      to BlueCrest International I. T. Institute to operate
                      as a vocational Institution.
                    </p>
                  </div>
                </div>
              </div>
            </a>
            <a
              href="/"
              aria-label="View Item"
              className="inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2"
            >
              <div className="flex flex-col h-full">
                <img
                  src="https://images.pexels.com/photos/3182750/pexels-photo-3182750.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                  className="object-cover w-full h-48"
                  alt=""
                />
                <div className="flex-grow border border-t-0 rounded-b">
                  <div className="p-5">
                    <h6 className="mb-2 font-semibold leading-5">
                      Starz College of Technology
                    </h6>
                    <p className="text-sm text-gray-900">
                      STARZ was established in the U.S.A. in 2007 and
                      incorporated in Monrovia, Liberia in July of 2009;
                      with the objectives of addressing the IT and capacity
                      needs of Liberia. Starz University is Accredited and
                      Chartered in Liberia by the Commission on Higher Education.
                    </p>
                  </div>
                </div>
              </div>
            </a>
            <a
              href="/"
              aria-label="View Item"
              className="inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2"
            >
              <div className="flex flex-col h-full">
                <img
                  src="https://images.pexels.com/photos/3182746/pexels-photo-3182746.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                  className="object-cover w-full h-48"
                  alt=""
                />
                <div className="flex-grow border border-t-0 rounded-b">
                  <div className="p-5">
                    <h6 className="mb-2 font-semibold leading-5">University Of Libeia</h6>
                    <p className="text-sm text-gray-900">
                      The University of Liberia was founded in
                      1862 as Liberia College and became a full
                      University in 1951. It is a public institution
                      funded mainly by the Government of Liberia.
                      The University now has four campuses: Capitol Hill,
                      Fendall, Medical School Fendall, and Starz-Sinji
                      campus located in Sinji, Grand Cape Mount County.
                    </p>
                  </div>
                </div>
              </div>
            </a>
            <a
              href="/"
              aria-label="View Item"
              className="inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2"
            >
              <div className="flex flex-col h-full">
                <img
                  src="https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                  className="object-cover w-full h-48"
                  alt=""
                />
                <div className="flex-grow border border-t-0 rounded-b">
                  <div className="p-5">
                    <h6 className="mb-2 font-semibold leading-5">
                      United Methodist University
                    </h6>
                    <p className="text-sm text-gray-900">
                      Bro ipsum dolor sit amet gaper backside single track, manny
                      Bike epic clipless. Schraeder drop gondy.
                    </p>
                  </div>
                </div>
              </div>
            </a>
            <a
              href="/"
              aria-label="View Item"
              className="inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2"
            >
              <div className="flex flex-col h-full">
                <img
                  src="https://images.pexels.com/photos/3184311/pexels-photo-3184311.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
                  className="object-cover w-full h-48"
                  alt=""
                />
                <div className="flex-grow border border-t-0 rounded-b">
                  <div className="p-5">
                    <h6 className="mb-2 font-semibold leading-5">
                      Stella Maris Polytechnic University
                    </h6>
                    <p className="text-sm text-gray-900">
                      Sportacus andrew weatherall goose Refined gentlemen super
                      mario des lynam alpha trion zap rowsdower.
                    </p>
                  </div>
                </div>
              </div>
            </a>
            <a
              href="/"
              aria-label="View Item"
              className="inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2"
            >
              <div className="flex flex-col h-full">
                <img
                  src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                  className="object-cover w-full h-48"
                  alt=""
                />
                <div className="flex-grow border border-t-0 rounded-b">
                  <div className="p-5">
                    <h6 className="mb-2 font-semibold leading-5">
                      AME University
                    </h6>
                    <p className="text-sm text-gray-900">
                      Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit.
                    </p>
                  </div>
                </div>
              </div>
            </a>
            <a
              href="/"
              aria-label="View Item"
              className="inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2"
            >
              <div className="flex flex-col h-full">
                <img
                  src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                  className="object-cover w-full h-48"
                  alt=""
                />
                <div className="flex-grow border border-t-0 rounded-b">
                  <div className="p-5">
                    <h6 className="mb-2 font-semibold leading-5">Adventist University of West Africa</h6>
                    <p className="text-sm text-gray-900">
                      A flower in my garden, a mystery in my panties. Heart attack
                      never stopped old Big Bear.
                    </p>
                  </div>
                </div>
              </div>
            </a>
            <a
              href="/"
              aria-label="View Item"
              className="inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2"
            >
              <div className="flex flex-col h-full">
                <img
                  src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                  className="object-cover w-full h-48"
                  alt=""
                />
                <div className="flex-grow border border-t-0 rounded-b">
                  <div className="p-5">
                    <h6 className="mb-2 font-semibold leading-5">
                      Barshell University College
                    </h6>
                    <p className="text-sm text-gray-900">
                      Bro ipsum dolor sit amet gaper backside single track, manny
                      Bike epic clipless. Schraeder drop gondy.
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </main>
    </>
  )
}