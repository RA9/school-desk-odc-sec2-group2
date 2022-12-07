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
                  Hare You Have All Notification About Your School
                </p>
              </div>
              {/* <!-- Get started  
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
              </div> end --*/}
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
                  Prepare Yourself
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="grid gap-5 row-gap-5 mb-8 lg:grid-cols-4 sm:grid-cols-2">
            <a
              href="https://bluecrest.edu.lr/"
              aria-label="View Item"
              className="inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2"
            >
              <div className="flex flex-col h-full">
                <img
                  src={"https://scontent-cdg2-1.xx.fbcdn.net/v/t39.30808-6/304845690_5799046620126484_1791028667726592749_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=e3f864&_nc_ohc=PCWBnUvC9j0AX-1JHVw&_nc_zt=23&_nc_ht=scontent-cdg2-1.xx&oh=00_AfDQi3ujWk_0l73WXPsyplK1hVK9xoM6nWYtEsQOzks7Ew&oe=63954E48"}
                  className="object-cover w-full h-48"
                  alt="" />
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
              href="https://starzit.com/"
              aria-label="View Item"
              className="inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2"
            >
              <div className="flex flex-col h-full">
                <img
                  src="https://starzit.com/wp-content/uploads/2020/04/BUILDING.jpg"
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
              href="https://ul.edu.lr/"
              aria-label="View Item"
              className="inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2"
            >
              <div className="flex flex-col h-full">
                <img
                  src="https://test.everythinglib.com/wp-content/uploads/2019/06/University-of-Liberia-at-Fendall-Campus.jpg"
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
              href="https://umu.edu.lr/"
              aria-label="View Item"
              className="inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2"
            >
              <div className="flex flex-col h-full">
                <img
                  src="https://scontent-cdg2-1.xx.fbcdn.net/v/t39.30808-6/275997907_1044638309462609_6968044369498252400_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=e3f864&_nc_ohc=hYHi6DY77_IAX8cpGZD&_nc_zt=23&_nc_ht=scontent-cdg2-1.xx&oh=00_AfAWf1XT91_HYGHCB3VGaqhLMOVpdHIA_AgDjrP8impSFw&oe=6394F799"
                  className="object-cover w-full h-48"
                  alt=""
                />
                <div className="flex-grow border border-t-0 rounded-b">
                  <div className="p-5">
                    <h6 className="mb-2 font-semibold leading-5">
                      United Methodist University
                    </h6>
                    <p className="text-sm text-gray-900">
                      University is to prepare a new generation
                      of men and women schooled on the African
                      continent to build nations that are spiritually,
                      socially, economically and politically independent
                      and self-sustaining.
                    </p>
                  </div>
                </div>
              </div>
            </a>
            <a
              href="http://smp.edu.lr/index.html"
              aria-label="View Item"
              className="inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2"
            >
              <div className="flex flex-col h-full">
                <img
                  src="https://scontent-cdt1-1.xx.fbcdn.net/v/t1.6435-9/121231187_103044561581349_3493800215699301335_n.jpg?stp=dst-jpg_p960x960&_nc_cat=101&ccb=1-7&_nc_sid=36a2c1&_nc_ohc=8t4z7IqKfiIAX_SYY_A&_nc_ht=scontent-cdt1-1.xx&oh=00_AfAFVanvMppQa7wbtilCHX55F9b3q77Zw19Si20Khj5YuQ&oe=63B81CC7"
                  className="object-cover w-full h-48"
                  alt=""
                />
                <div className="flex-grow border border-t-0 rounded-b">
                  <div className="p-5">
                    <h6 className="mb-2 font-semibold leading-5">
                      Stella Maris Polytechnic University
                    </h6>
                    <p className="text-sm text-gray-900">
                      The Stella Maris Polytechnic is an Institution
                      of higher learning own and operated by the
                      Catholic Archdioces of Monrovia. With main
                      campus situated on Capitol Hill in Monrovia
                      the Polytechnic boasts of four colleges with
                      over 2,500 enrollment.
                    </p>
                  </div>
                </div>
              </div>
            </a>
            <a
              href="https://ame.edu.lr/"
              aria-label="View Item"
              className="inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2"
            >
              <div className="flex flex-col h-full">
                <img
                  src="https://scontent-cdg2-1.xx.fbcdn.net/v/t1.6435-9/119988759_1061218837614601_1070646956231788145_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_ohc=gYw992NLm-IAX8yMhz7&_nc_ht=scontent-cdg2-1.xx&oh=00_AfCETQiCM4OhgaiV0E-lVvnacg24t1SmxCqFFsRqeCwiqg&oe=63B7F88B"
                  className="object-cover w-full h-48"
                  alt=""
                />
                <div className="flex-grow border border-t-0 rounded-b">
                  <div className="p-5">
                    <h6 className="mb-2 font-semibold leading-5">
                      AME University
                    </h6>
                    <p className="text-sm text-gray-900">
                      The African Methodist Episcopal University
                      is a private institution of higher learning
                      located in Monrovia, in the West African nation
                      of Liberia. Located on Camp Johnson Road, the
                      school is the second largest college in Liberia
                      with over 5,000 students.
                    </p>
                  </div>
                </div>
              </div>
            </a>
            <a
              href="https://web.facebook.com/auwaliberia/?_rdc=1&_rdr"
              aria-label="View Item"
              className="inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2"
            >
              <div className="flex flex-col h-full">
                <img
                  src="https://jordan.adventist.org/?service=/modules/encyclopedia/media/getMediaFile&resource=D94R&file=D94RL.jpg"
                  className="object-cover w-full h-48"
                  alt=""
                />
                <div className="flex-grow border border-t-0 rounded-b">
                  <div className="p-5">
                    <h6 className="mb-2 font-semibold leading-5">Adventist University of West Africa</h6>
                    <p className="text-sm text-gray-900">
                      The Adventists University of West Africa's Nursing
                      School began classes in 2011 on the campus of
                      Adventist High School.[5] In 2012, ground was
                      broken on the permanent site,[6] the first student
                      elections were held,[7] and the nursing school moved
                      into its permanent location.[5] In 2018
                    </p>
                  </div>
                </div>
              </div>
            </a>
            <a
              href="https://web.facebook.com/BarshellUniversityCollege/?_rdc=1&_rdr"
              aria-label="View Item"
              className="inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2"
            >
              <div className="flex flex-col h-full">
                <img
                  src="https://counselorcorporation.com/wp-content/uploads/2021/06/barshell-university-college-liberia.jpeg"
                  className="object-cover w-full h-48"
                  alt=""
                />
                <div className="flex-grow border border-t-0 rounded-b">
                  <div className="p-5">
                    <h6 className="mb-2 font-semibold leading-5">
                      Barshell University College
                    </h6>
                    <p className="text-sm text-gray-900">
                      The Barshell University College welcomes you to your College Journey. We
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
                  src="https://thenewdawnnewspaper.files.wordpress.com/2021/05/img-20210524-wa00146958570869015340317.jpg"
                  className="object-cover w-full h-48"
                  alt=""
                />
                <div className="flex-grow border border-t-0 rounded-b">
                  <div className="p-5">
                    <h6 className="mb-2 font-semibold leading-5">
                      T-FIVE University
                    </h6>
                    <p className="text-sm text-gray-900">
                      T-Five University was founded 2021
                    </p>
                  </div>
                </div>
              </div>
            </a>
            <a
              href="http://cu.edu.lr"
              aria-label="View Item"
              className="inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2"
            >
              <div className="flex flex-col h-full">
                <img
                  src="https://test.everythinglib.com/wp-content/uploads/2019/06/CU-talnet__1053.jpg"
                  className="object-cover w-full h-48"
                  alt=""
                />
                <div className="flex-grow border border-t-0 rounded-b">
                  <div className="p-5">
                    <h6 className="mb-2 font-semibold leading-5">
                      Cuttington University
                    </h6>
                    <p className="text-sm text-gray-900">
                      Cuttington University is a private university
                      in Suacoco, Liberia. Founded in 1889 as Cuttington
                      College by Episcopal Church of the United States,
                      it is the oldest private, coeducational, four-year,
                      degree-granting institution in sub-Saharan Africa.
                    </p>
                  </div>
                </div>
              </div>
            </a>
            <a
              href="https://web.facebook.com/BONGCOLLEGE/?_rdc=1&_rdr"
              aria-label="View Item"
              className="inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2"
            >
              <div className="flex flex-col h-full">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStV_7KwQLHfE0fxROTWF0cc2Ax_hNWR6WSvw&usqp=CAU"
                  className="object-cover w-full h-48"
                  alt=""
                />
                <div className="flex-grow border border-t-0 rounded-b">
                  <div className="p-5">
                    <h6 className="mb-2 font-semibold leading-5">
                      Bong County Technical College
                    </h6>
                    <p className="text-sm text-gray-900">
                      The Bong Technical College was established in 2010 by the act of Law for
                      the sole purpose of educating aspiring students in disciplines that are
                      technical and skill oriented. The college is accredited by the National
                      Commission on Higher Education to offer undergraduate degrees in Computer
                      Science, Mining Engineering, Civil Engineering, Agriculture Technology,
                      Science Education and Nursing.
                    </p>
                  </div>
                </div>
              </div>
            </a>
            <a
              href="https://amezion.edu.lr/"
              aria-label="View Item"
              className="inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2"
            >
              <div className="flex flex-col h-full">
                <img
                  src="https://scontent-cdg2-1.xx.fbcdn.net/v/t1.6435-9/119118436_114185943754879_2635693559432633728_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=973b4a&_nc_ohc=wzrC8Zykaw4AX_qJipi&_nc_ht=scontent-cdg2-1.xx&oh=00_AfCfmoRCTrTV1dWfsn9pTAhymQDksGE0DajSfPrmtZp0mA&oe=63B82383"
                  className="object-cover w-full h-48"
                  alt=""
                />
                <div className="flex-grow border border-t-0 rounded-b">
                  <div className="p-5">
                    <h6 className="mb-2 font-semibold leading-5">
                      AME Zion University
                    </h6>
                    <p className="text-sm text-gray-900">
                      The AME Zion University commenced in 1983 with
                      the founding of the AME Zion School of Business
                      Studies attached to the AME Zion Academy, a high
                      school owned by the AME Zion Church.  In 1987,
                      the AME Zion Community College was established,
                      offering Associate degrees in Criminal Justice
                      Administration and Law Enforcement, Liberal Arts,
                      Business Administration..
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </div>

        </div>

        <footer class="p-4 bg-white rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-900">
          <div class="sm:flex sm:items-center sm:justify-between">
            <a href="/" class="flex items-center mb-4 sm:mb-0">
              <img src="https://flowbite.com/docs/images/logo.svg" class="mr-3 h-8" alt="Flowbite Logo" />
              <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">SchoolDesk</span>
            </a>
            <ul class="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
              <li>
                <a href="/" class="mr-4 hover:underline md:mr-6 ">Home</a>
              </li>
              <li>
                <a href="/notification" class="mr-4 hover:underline md:mr-6">Notification</a>
              </li>
              <li>
                <a href="/about" class="mr-4 hover:underline md:mr-6 ">About Us</a>
              </li>
              <li>
                <a href="/contact" class="hover:underline">Contact Us</a>
              </li>
            </ul>
          </div>
          <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-2" />
          <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <a href="/" class="hover:underline">SchoolDesk™</a>. All Rights Reserved.
          </span>
        </footer>

      </main>
    </>
  )
}