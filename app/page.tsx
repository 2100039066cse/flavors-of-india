import Image from 'next/image';

const menuItems = [
  {
    name: "Aloo 65 Pulao",
    image: "/aloo-65-pulao.jpg",
    description: "Aloo 65 Pulao features spiced, crispy potato cubes mixed with aromatic basmati rice.",
    price: 265,
    availableItems: 35
  },
  {
    name: "Almond Crunch Ice Cream",
    image: "/almond-crunch-ice-cream.jpg",
    description: "Almond Crunch ice cream is a delightful blend of creamy vanilla base and almond pieces.",
    price: 119,
    availableItems: 36
  },
  {
    name: "Aloo Capsicum Curry",
    image: "/aloo-capsicum-curry.jpg",
    description: "Potatoes and bell peppers in spiced gravy, offering a satisfying vegetarian option.",
    price: 300,
    availableItems: 17
  },
  {
    name: "Besan Masala Poori",
    image: "/besan-masala-poori.jpg",
    description: "Spiced deep-fried bread with besan and traditional spices, paired with lemon pickle.",
    price: 115,
    availableItems: 35
  }
];

const categories = [
  { name: "Breakfast", icon: "/cat-breakfast.png" },
  { name: "Vegan", icon: "/cat-vegan.png" },
  { name: "Meat", icon: "/cat-meat.png" },
  { name: "Dessert", icon: "/cat-dessert.png" },
  { name: "Lunch", icon: "/cat-lunch.png" },
  { name: "Chocolate", icon: "/cat-chocolate.png" }
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">

      {/* Header */}
      <header className="flex justify-between items-center p-5 bg-yellow-300 shadow-lg">
        <h1 className="text-3xl font-extrabold text-yellow-900">Flavors of India</h1>
        <button className="bg-yellow-600 px-4 py-2 rounded text-white hover:bg-yellow-700 transition">Login / Sign Up</button>
      </header>

      {/* About/Review */}
      <section className="max-w-xl mx-auto mt-10 text-center rounded-2xl shadow bg-yellow-50 p-6 border border-yellow-200">
        <p className="text-xl italic font-medium text-gray-700">
          “Our food is freshly made every day, using authentic recipes and selected ingredients to deliver a real taste of India. Your flavor journey starts here!”
        </p>
        <div className="mt-2 font-bold text-yellow-800">- Flavors of India Team</div>
      </section>

      {/* Popular Items Tag */}
      <div className="mt-10 text-center">
        <span className="bg-yellow-400 text-white font-bold px-6 py-2 rounded-full text-lg inline-block shadow">
          Popular Items
        </span>
      </div>

      {/* Popular Items */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-6 px-6">
        {menuItems.map(item => (
          <div key={item.name} className="bg-yellow-50 rounded-xl shadow-md overflow-hidden flex flex-col">
            <Image src={item.image} alt={item.name} width={400} height={250} className="object-cover" />
            <div className="p-4 flex flex-col justify-between flex-1">
              <h3 className="font-bold text-xl text-center mb-1">{item.name}</h3>
              <p className="text-gray-700 text-sm text-center mb-1">{item.description}</p>
              <p className="text-red-600 font-semibold text-center mb-2">Available Items: {item.availableItems}</p>
              <div className="flex items-center justify-between mt-auto">
                <button className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold px-4 py-2 rounded-full shadow">Add to Cart 🛒</button>
                <span className="bg-gray-100 text-blue-800 px-4 py-1 rounded-full font-bold ml-3">₹{item.price}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Categories */}
      <section className="max-w-4xl mx-auto mt-16 py-10">
        <h2 className="text-2xl font-black text-gray-900 mb-6">Categories</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {categories.map(cat => (
            <div key={cat.name} className="flex flex-col items-center">
              <div className="w-28 h-28 bg-gray-50 rounded-3xl shadow-lg flex items-center justify-center mb-4 border-2 border-yellow-200 hover:scale-105 transition-transform">
                <Image src={cat.icon} alt={cat.name} width={72} height={72} className="object-contain" />
              </div>
              <span className="font-semibold text-lg mt-1">{cat.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Hero Section (after Categories) */}
      <section className="flex flex-col-reverse md:flex-row items-center justify-between max-w-5xl mx-auto py-16 px-4 md:px-0 gap-8">
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
            Everyone can be a<br />
            chef in their own kitchen
          </h2>
          <p className="text-gray-700 text-lg mb-8">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqui enim ad minim
          </p>
          <button className="bg-black text-white font-semibold px-7 py-3 rounded-lg text-lg hover:bg-gray-800 transition shadow-md">
            Learn More
          </button>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <div className="bg-gradient-to-b from-blue-50 to-white rounded-2xl shadow-lg p-2 flex justify-center items-center h-[340px] w-[360px]">
            <Image
              src="/chef-hero.jpg.png"
              alt="Chef holding plate"
              width={340}
              height={340}
              className="object-cover rounded-2xl"
              priority
            />
          </div>
        </div>
      </section>

      {/* Instagram Follow Section */}
      <section className="max-w-4xl mx-auto text-center py-10">
        <div className="flex items-center justify-center gap-4">
          <Image src="/instagram-logo.png" alt="Instagram Logo" width={40} height={40} />
          <span className="text-gray-700 font-medium text-lg">Follow us on Instagram</span>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-yellow-800 font-semibold bg-yellow-200 mt-12">
        &copy; 2025 Flavors of India
      </footer>

    </div>
  );
}
