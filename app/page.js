import Image from 'next/image'
import  Courtimage  from '@/public/courtImage.jpeg'
import  LawyerOne  from '@/public/LawyerOne .jpg'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Building2, Scale, Gavel, HardHat, HeartHandshake } from 'lucide-react'

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Image src="" alt="Frieden & Forbes Logo" width={200} height={50} className="h-10 w-auto" />
          <nav className="hidden md:flex space-x-4">
            <a href="#" className="text-gray-600 hover:text-gray-900">Our Team</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Contact Us</a>
          </nav>
          <Button className="bg-blue-700 hover:bg-blue-800">Log In</Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-[91vh]">
        <Image src={Courtimage} alt="Kansas State Capitol" layout="fill" objectFit="cover" />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Experience the Kansas Expertise</h1>
            <p className="text-xl mb-8">Frieden & Forbes LLP: A team of local lawyers with national vision</p>
            <Button className="bg-blue-700 hover:bg-blue-800">Learn More</Button>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Welcome to Frieden & Forbes</h2>
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
            <Image src={LawyerOne} alt="About Us"  className="rounded-lg xl:w-[700px] xl:h-[300px] lg:w-[500px] lg:h-[200px] md:w-[500px] md:h-[200px] sm:w-[600px] sm:h-[300px] w-[300px] h-[200px] shadow-lg" />
            </div>
            <div className="md:w-1/2 md:pl-8">
              <p className="text-gray-600 mb-4">
                Frieden & Forbes, LLP is a high-profile civil law firm with an outstanding reputation for complex business, construction and litigation matters. We also possess a unique expertise with the gaming industry and represent a number of casinos in the Las Vegas area.
              </p>
              <Button className="bg-blue-700 hover:bg-blue-800">Learn More</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Areas of Expertise */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Areas of Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Tax Law", icon: BookOpen },
              { title: "Wills and Trusts", icon: Scale },
              { title: "Business Law", icon: Building2 },
              { title: "Civil Law", icon: Gavel },
              { title: "Construction", icon: HardHat },
              { title: "Marriage and Divorce", icon: HeartHandshake },
            ].map((service, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <service.icon className="w-6 h-6 mr-2 text-blue-700" />
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="py-16 bg-blue-700 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <Image src="" alt="Professional Team"   className="rounded-lg xl:w-[700px] xl:h-[300px] lg:w-[500px] lg:h-[200px] md:w-[500px] md:h-[200px] sm:w-[600px] sm:h-[300px] w-[300px] h-[200px]  shadow-lg" />
            </div>
            <div className="md:w-1/2 md:pl-8">
              <h2 className="text-3xl font-bold mb-4">Meet Our Professional Team</h2>
              <p className="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <Button variant="outline" className="bg-white text-blue-700 hover:bg-gray-100">Learn More</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container text-center mx-auto px-4">
         <h2>©️ Lawine. All rights reserved</h2>
        </div>
      </footer>
    </div>
  )
}