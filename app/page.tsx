import Link from "next/link";
import { ArrowRight, Calendar, Users, BookOpen, Award, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import UpcomingEvents from "@/components/upcoming-events";
import LatestBlogs from "@/components/blogs";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              IEEE Microwave Theory and Techniques Society
            </h1>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-6">
              CUSAT Student Branch
            </h2>
            <p className="text-base md:text-lg lg:text-xl mb-8 text-blue-100">
              Advancing microwave theory, techniques, and applications through
              innovation and education.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-white text-blue-900 hover:bg-blue-50 w-full sm:w-auto"
              >
                <Link href="/events" className="flex items-center justify-center">
                  Explore Events <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white  hover:bg-white/10 w-full sm:w-auto"
              >
                <Link href="https://www.ieee.org/membership-catalog/productdetail/showProductDetailPage.html?product=MEMMTT017&searchResults=Y" className="flex items-center text-blue-900 justify-center">
                  Join MTT-S
                </Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* About Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-blue-900">
                About IEEE MTT-S CUSAT SB
              </h2>
              <p className="text-gray-700 mb-4">
                The IEEE Microwave Theory and Techniques Society (MTT-S) CUSAT
                Student Branch is dedicated to advancing microwave theory,
                techniques, and applications through innovation and education.
              </p>
              <p className="text-gray-700 mb-6">
                Our chapter provides a platform for students to explore the
                fascinating world of microwave engineering, RF technologies, and
                wireless communications through workshops, seminars, and
                hands-on projects.
              </p>
              {/* <Button
                asChild
                variant="outline"
                className="text-blue-900 border-blue-900 hover:bg-blue-50"
              >
                <Link href="/about">Learn More About Us</Link>
              </Button> */}
            </div>
            <div className="bg-blue-50 p-6 md:p-8 rounded-lg">
              <h3 className="text-xl md:text-2xl font-bold mb-6 text-blue-900">
                What We Do
              </h3>
              <div className="space-y-4 md:space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 md:p-3 rounded-full mr-4">
                    <Calendar className="h-5 w-5 md:h-6 md:w-6 text-blue-900" />
                  </div>
                  <div>
                    <h4 className="text-base md:text-lg font-semibold text-blue-900">
                      Technical Events
                    </h4>
                    <p className="text-gray-700 text-sm md:text-base">
                      Workshops, seminars, and conferences on cutting-edge
                      microwave technologies.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 md:p-3 rounded-full mr-4">
                    <Users className="h-5 w-5 md:h-6 md:w-6 text-blue-900" />
                  </div>
                  <div>
                    <h4 className="text-base md:text-lg font-semibold text-blue-900">
                      Networking
                    </h4>
                    <p className="text-gray-700 text-sm md:text-base">
                      Connect with industry professionals and fellow
                      enthusiasts.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 md:p-3 rounded-full mr-4">
                    <BookOpen className="h-5 w-5 md:h-6 md:w-6 text-blue-900" />
                  </div>
                  <div>
                    <h4 className="text-base md:text-lg font-semibold text-blue-900">
                      Research
                    </h4>
                    <p className="text-gray-700 text-sm md:text-base">
                      Opportunities to engage in research projects and
                      publications.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 md:p-3 rounded-full mr-4">
                    <Award className="h-5 w-5 md:h-6 md:w-6 text-blue-900" />
                  </div>
                  <div>
                    <h4 className="text-base md:text-lg font-semibold text-blue-900">
                      Competitions
                    </h4>
                    <p className="text-gray-700 text-sm md:text-base">
                      Participate in technical competitions and showcase your
                      skills.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-10 text-center text-blue-900">
            Upcoming Events
          </h2>
          <UpcomingEvents />
          <div className="text-center mt-8 md:mt-10">
            <Button asChild className="bg-blue-900 hover:bg-blue-800">
              <Link href="/events" className="flex items-center justify-center">
                View All Events <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Latest Blogs Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-10 text-center text-blue-900">
            Latest Blog Posts
          </h2>
          <LatestBlogs />
          <div className="text-center mt-8 md:mt-10">
            <Button asChild className="bg-blue-900 hover:bg-blue-800">
              <Link href="/blog" className="flex items-center justify-center">
                View All Posts <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="py-12 md:py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Join IEEE MTT-S CUSAT SB</h2>
          <p className="text-lg md:text-xl mb-6 md:mb-8 max-w-2xl mx-auto">
            Become a part of our vibrant community and explore the exciting
            world of microwave engineering and RF technologies.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-white text-blue-900 hover:bg-blue-50 px-6"
          >
            <Link href="https://www.ieee.org/membership-catalog/productdetail/showProductDetailPage.html?product=MEMMTT017&searchResults=Y">
              Become a Member Today
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
