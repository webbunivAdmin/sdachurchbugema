import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Facebook, Twitter, Instagram, InstagramIcon as Tiktok } from "lucide-react"
import { MainNav } from "@/components/main-nav"

export default function Home() {
  return (
    <main className="min-h-screen">
      <MainNav />
      {/* Hero Section */}
      <section className="relative min-h-screen pt-20">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/home1-nOxrzHoVuy1Sp9b8Fy8mGZSt5IjWuE.png"
          alt="Church gathering"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="absolute inset-0 flex flex-col justify-center px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
              Welcome to
              <br />
              <span className="text-highlight">Bugema University</span>
              <br />
              Seventh-day Adventist Church
            </h1>
            <p className="text-xl text-white mb-8">
              Building Faith, Strengthening Community, Preparing for His Return.
            </p>
            <Button className="bg-primary hover:bg-primary/90 text-white">Join Us</Button>
          </div>
        </div>
      </section>

      {/* Mission Statement Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Mission Statement</h2>
          <div className="grid md:grid-cols-3 gap-8 px-4 sm:px-0">
            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary text-2xl">🎯</span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">
                <span className="text-highlight">Our</span> Mission
              </h3>
              <p className="text-gray-600">
                Make disciples of Jesus Christ who live as His loving witnesses and proclaim to all people the
                everlasting gospel of the Three Angels{"'"} Messages in preparation for His soon return
              </p>
            </div>
            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary text-2xl">👁️</span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">
                <span className="text-highlight">Our</span> Vision
              </h3>
              <p className="text-gray-600">
                In harmony with Bible revelation, Seventh-day Adventists see as the climax of God{"'"}s plan the restoration
                of all His creation to full harmony with His perfect will and righteousness.
              </p>
            </div>
            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary text-2xl">📚</span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">
                <span className="text-highlight">Our</span> Method
              </h3>
              <p className="text-gray-600">
                Guided by the Bible and the Holy Spirit, Seventh-day Adventists pursue this mission through Christ-like
                living, communicating, discipling, teaching, healing, and serving.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center px-4 sm:px-0">
            <div>
              <div className="inline-block bg-primary/10 px-4 py-2 rounded-full text-primary mb-4">
                Seventh Day Adventist
              </div>
              <h2 className="text-4xl font-bold mb-4">
                About <span className="text-highlight">UU-Mission</span>
              </h2>
              <p className="text-gray-600 mb-6">
                We are called to eat, drink, speak, think and work to the glory of God. We worship God by remembering
                the gospel through preaching, teaching, singing, praying and celebrating baptism and communion.
              </p>
              <Button className="bg-primary hover:bg-primary/90 text-white">About Us</Button>
            </div>
            <div className="relative h-[400px]">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/home4-2nLe31USpjFzvMciYBYZ7tTJuIS6OS.png"
                alt="Church activities"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Weekly Sermons Section */}
      <section className="relative py-24">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/home6-tCxXy966sBKEJu2ZNJf1KSHgKLJmm4.png"
          alt="Prayer background"
          fill
          className="object-cover brightness-50"
        />
        <div className="relative container">
          <div className="max-w-lg">
            <div className="inline-block bg-white/10 px-4 py-2 rounded-full text-white mb-4">A Word From God</div>
            <h2 className="text-4xl font-bold text-white mb-4">
              Weekly <span className="text-highlight">Sermons</span>
            </h2>
            <p className="text-white mb-6">
              We worship God by remembering the gospel through preaching, teaching, singing, praying and celebrating
              baptism and communion.
            </p>
            <Button className="bg-primary hover:bg-primary/90 text-white">All Sermons</Button>
          </div>
        </div>
      </section>

      {/* News & Events Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-12 px-4 sm:px-0">
            <h2 className="text-3xl font-bold">News & Events</h2>
            <Button variant="outline">All News</Button>
          </div>
          <div className="grid md:grid-cols-3 gap-8 px-4 sm:px-0">
            <Card>
              <CardContent className="p-4">
                <div className="relative h-48 mb-4">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/home5-KDrLZHeIeXpr2gaDOdACyjQs6UqeWj.png"
                    alt="New Year Statement"
                    fill
                    className="object-cover rounded"
                  />
                </div>
                <h3 className="font-bold mb-2">New Year Statement From the Seventh-day Adventist Church</h3>
                <p className="text-gray-500 text-sm">January 2, 2025</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="relative h-48 mb-4">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/home5-KDrLZHeIeXpr2gaDOdACyjQs6UqeWj.png"
                    alt="Death Announcement"
                    fill
                    className="object-cover rounded"
                  />
                </div>
                <h3 className="font-bold mb-2">Death Announcement of Pr. John Luga Wani</h3>
                <p className="text-gray-500 text-sm">December 2, 2024</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="relative h-48 mb-4">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/home5-KDrLZHeIeXpr2gaDOdACyjQs6UqeWj.png"
                    alt="Graduation"
                    fill
                    className="object-cover rounded"
                  />
                </div>
                <h3 className="font-bold mb-2">Bugema University Graduation</h3>
                <p className="text-gray-500 text-sm">November 12, 2024</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#111827] text-white py-12">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 px-4 sm:px-0">
            <div>
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/footer-6eYvTVzs7CFXr1e0lYu9vu2kjHnfpB.png"
                alt="Church Logo"
                width={200}
                height={100}
                className="mb-4"
              />
              <p className="text-gray-400">We are happy to have you!</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Address</h3>
              <p className="text-gray-400">Naalya —</p>
              <p className="text-gray-400">Ndagire Road, Opposite KB Supermarket,</p>
              <p className="text-gray-400">Plot —</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Say hello</h3>
              <p className="text-gray-400 underline mb-2">info@mtolivesdachurch.com</p>
              <p className="text-gray-400">+256 774 512959</p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center px-4 sm:px-0">
            <div className="flex gap-4 mb-4 md:mb-0">
              <Link href="#" className="text-gray-400 hover:text-white">
                Our beliefs
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                Contacts
              </Link>
            </div>
            <div className="flex gap-4">
              <Link href="#" className="text-gray-400 hover:text-white">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Tiktok className="h-5 w-5" />
              </Link>
            </div>
          </div>
          <p className="text-center text-gray-400 mt-8">© 2025. All Rights Reserved.</p>
        </div>
      </footer>
    </main>
  )
}

