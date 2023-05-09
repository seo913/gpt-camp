import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faFire, faFishingRod, faHiking, faMountain } from '@fortawesome/free-solid-svg-icons'
// import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Camp Out - Camping Adventures</title>
        <meta name="description" content="Discover the great outdoors with Camp Out - the ultimate camping experience." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-green-600 text-white">
        <div className="container mx-auto py-4 px-6 flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold">Camp Out</h1>
            <p className="text-lg">Discover the great outdoors with us</p>
          </div>
          <Link href="/login">
            <a className="px-4 py-2 bg-white text-green-600 rounded-lg font-medium hover:bg-green-700 hover:text-white transition duration-300">Login</a>
          </Link>
        </div>
      </header>

      <main className="bg-gray-100">
        <div className="container mx-auto py-12 px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-center justify-center bg-white rounded-lg shadow-lg">
              <Image src="/tent.png" width={400} height={400} alt="Tent" />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4">Welcome to Camp Out</h2>
              <p className="text-lg mb-6">Camp Out is the ultimate camping experience, where you can explore the great outdoors and make memories that will last a lifetime. With a wide variety of activities to choose from, you're sure to find something you love.</p>
              <Link href="/activities">
                <a className="px-4 py-2 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition duration-300">Explore Activities</a>
              </Link>
            </div>
          </div>
        </div>

        <div className="bg-green-600 py-12 px-6 text-white">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-4">Our Activities</h2>
            <p className="text-lg mb-6">We offer a wide variety of activities to suit everyone's interests. Here are just a few of our most popular options:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-center justify-start">
                {/* <FontAwesomeIcon icon={faHiking} className="text-5xl mr-4" /> */}
                
 </div>
 <div className="flex items-center justify-start">
   {/* <FontAwesomeIcon icon={faMountain} className="text-5xl mr-4" /> */}
   <div>
     <h3 className="text-2xl font-bold mb-2">Rock Climbing</h3>
     <p>Experience the thrill of scaling the rock face with our expert guides.</p>
   </div>
 </div>
 <div className="flex items-center justify-start">
   {/* <FontAwesomeIcon icon={faFire} className="text-5xl mr-4" /> */}
   <div>
     <h3 className="text-2xl font-bold mb-2">Campfire</h3>
     <p>Relax around the campfire and share stories with your fellow campers.</p>
   </div>
 </div>
</div>
</div>
</div>

<div className="container mx-auto py-12 px-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div>
 <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
 <p className="text-lg mb-6">Our mission at Camp Out is to provide a safe and enjoyable camping experience for all of our guests. We believe that spending time in nature is essential for physical and mental well-being, and we are committed to making the great outdoors accessible to everyone.</p>
 <p className="text-lg mb-6">We strive to minimize our impact on the environment and promote sustainable practices in everything we do. By working together, we can preserve our natural resources for future generations to enjoy.</p>
 <Link href="/about">
   <a className="px-4 py-2 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition duration-300">Learn More About Us</a>
 </Link>
</div>
<div className="flex items-center justify-center bg-white rounded-lg shadow-lg">
 <Image src="/campfire.png" width={400} height={400} alt="Campfire" />
</div>
</div>
</div>

<div className="bg-green-600 py-12 px-6 text-white">
<div className="container mx-auto">
<h2 className="text-3xl font-bold mb-4">Contact Us</h2>
<p className="text-lg mb-6">If you have any questions or would like to book your camping adventure, please get in touch with us. Our friendly staff are always here to help.</p>
<form>
 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
   <div>
     <label htmlFor="name" className="block text-lg mb-2">Name</label>
     <input type="text" id="name" name="name" className="border-gray-400 border-2 px-4 py-2 w-full rounded-lg" required />
   </div>
   <div>
     <label htmlFor="email" className="block text-lg mb-2">Email</label>
     <input type="email" id="email" name="email" className="border-gray-400 border-2 px-4 py-2 w-full rounded-lg" required />
   </div>
 </div>
 <div className="mt-6">
   <label htmlFor="message" className="block text-lg mb-2">Message</label>
   <textarea     id="message" name="message" rows="6" className="border-gray-400 border-2 px-4 py-2 w-full rounded-lg" required></textarea>
              </div>
              <div className="mt-6">
                <button type="submit" className="px-4 py-2 bg-white text-green-600 rounded-lg font-medium hover:bg-gray-100 transition duration-300">Send Message</button>
              </div>
            </form>
          </div>
        </div>

      </main>

      <footer className="bg-gray-200 py-8 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">Contact Info</h3>
              {/* <p className="mb-2"><FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" /> 123 Main St, Anytown USA</p> */}
              {/* <p className="mb-2"><FontAwesomeIcon icon={faPhone} className="mr-2" /> (555) 555-1234</p> */}
              {/* <p><FontAwesomeIcon icon={faEnvelope} className="mr-2" /> info@campout.com</p> */}
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Links</h3>
              <ul>
                <li className="mb-2"><Link href="/"><a>Home</a></Link></li>
                <li className="mb-2"><Link href="/about"><a>About Us</a></Link></li>
                <li className="mb-2"><Link href="/activities"><a>Activities</a></Link></li>
                <li className="mb-2"><Link href="/contact"><a>Contact Us</a></Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Follow Us</h3>
              <div className="flex items-center">
                {/* <FontAwesomeIcon icon={faFacebook} className="text-3xl mr-4" />
                <FontAwesomeIcon icon={faTwitter} className="text-3xl mr-4" />
                <FontAwesomeIcon icon={faInstagram} className="text-3xl" /> */}
              </div>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
   