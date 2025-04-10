import React from 'react';
import { Droplet, ShoppingCart, Users, History, ChevronDown, Leaf, Star, Heart, Target, TrendingUp, Award, Globe2, UserCircle2 } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-cream">
      {/* Hero Section */}
      <header className="bg-teal-50 min-h-screen flex items-center relative">
        <div className="container mx-auto px-4 py-16">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold text-teal-800">KEH2O</h1>
              <p className="text-2xl text-teal-700">Sustainable and Healthy Hydration Revolution</p>
              <p className="text-lg text-gray-600">Discover KEH2O, the innovative drink of fermented water and kefir. It's sustainable, healthy, and affordable.</p>
              <button className="bg-teal-600 text-white px-8 py-3 rounded-full flex items-center gap-2 hover:bg-teal-700 transition">
                <ShoppingCart size={20} />
                Shop Now
              </button>
            </div>
            <div className="lg:w-1/2">
              <img 
                src="/images/keho-bottle.png"
                alt="KEH2O Water Kefir Bottle"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <ChevronDown size={32} className="text-teal-600" />
          </div>
        </div>
      </header>

      {/* Founding Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-teal-800 text-center mb-12">Meet Our Founders</h2>
          <div className="grid md:grid-cols-5 gap-8">
            {[
              { name: 'Nathan', role: 'CEO & Product Innovation' },
              { name: 'Daniel', role: 'Operations Director' },
              { name: 'Richard', role: 'Marketing Strategist' },
              { name: 'Vil', role: 'Technology Lead' },
              { name: 'Mariam', role: 'Sustainability Officer' }
            ].map((member) => (
              <div key={member.name} className="bg-teal-50 p-6 rounded-lg shadow-lg text-center">
                <div className="w-24 h-24 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <UserCircle2 size={48} className="text-teal-600" />
                </div>
                <h3 className="text-xl font-bold text-teal-700 mb-2">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center max-w-2xl mx-auto">
            <p className="text-gray-600">
              Our diverse team brings together expertise in fermentation science, sustainable business practices, and wellness innovation. 
              United by a passion for healthy living and environmental consciousness, we're committed to revolutionizing the beverage industry.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-teal-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-teal-800 mb-6">Our Mission</h2>
            <p className="text-xl text-gray-700 italic mb-8">
              "To harness the power of water to nourish and revitalize, creating clean and effective products for every body."
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Creating an affordable, healthy, refreshing, and sustainable drink that revolutionizes the way you hydrate.
            </p>
            <div className="aspect-video rounded-lg overflow-hidden shadow-xl">
              <img 
                src="/images/keho-illustration.jpg"
                alt="KEH2O Brand Illustration"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Market Position Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-teal-800 text-center mb-12">Market Leadership</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="bg-teal-50 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-teal-700 mb-3 flex items-center gap-2">
                  <TrendingUp className="text-teal-600" />
                  Market Growth
                </h3>
                <p className="text-gray-600">Spain ranks 10th globally in the bottled water market with €6.2B revenue</p>
                <p className="text-gray-600 mt-2">7.3% annual growth rate expected</p>
                <p className="text-gray-600 mt-2">Projected market value of €761.29 million by 2024</p>
              </div>
              <div className="bg-teal-50 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-teal-700 mb-3 flex items-center gap-2">
                  <Target className="text-teal-600" />
                  Target Market
                </h3>
                <p className="text-gray-600">Health-conscious individuals aged 16-40</p>
                <ul className="list-disc list-inside mt-2 text-gray-600">
                  <li>Fitness enthusiasts</li>
                  <li>Wellness-focused consumers</li>
                  <li>Vegans and vegetarians</li>
                  <li>Active lifestyle advocates</li>
                  <li>Health-conscious professionals</li>
                </ul>
              </div>
            </div>
            <div className="bg-teal-50 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-teal-700 mb-6">Market Strengths</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-2">
                  <Star className="text-teal-600" />
                  <span>Natural health benefits with scientific backing</span>
                </li>
                <li className="flex items-center gap-2">
                  <Star className="text-teal-600" />
                  <span>Dairy-free and vegan-friendly formulation</span>
                </li>
                <li className="flex items-center gap-2">
                  <Star className="text-teal-600" />
                  <span>Low sugar content through natural fermentation</span>
                </li>
                <li className="flex items-center gap-2">
                  <Star className="text-teal-600" />
                  <span>Unique refreshing flavor profile</span>
                </li>
                <li className="flex items-center gap-2">
                  <Star className="text-teal-600" />
                  <span>Eco-friendly packaging solutions</span>
                </li>
                <li className="flex items-center gap-2">
                  <Star className="text-teal-600" />
                  <span>Fast and efficient fermentation process</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Product Benefits Section */}
      <section className="py-20 bg-teal-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center mb-12">
            <Droplet size={32} className="text-teal-600 mb-4" />
            <h2 className="text-4xl font-bold text-teal-800 mb-4">Health Benefits</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-bold text-teal-700 mb-4">Rich in Probiotics</h3>
              <p className="text-gray-600">Helps balance gut bacteria and supports digestive health through natural fermentation process</p>
              <ul className="mt-4 text-gray-600 text-left space-y-2">
                <li>• Multiple probiotic strains</li>
                <li>• Natural enzymes</li>
                <li>• Beneficial yeasts</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-bold text-teal-700 mb-4">Boosts Immunity</h3>
              <p className="text-gray-600">Strengthens your immune system naturally</p>
              <ul className="mt-4 text-gray-600 text-left space-y-2">
                <li>• Enhanced gut health</li>
                <li>• Vitamin B complex</li>
                <li>• Antioxidant properties</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-bold text-teal-700 mb-4">Natural Energy</h3>
              <p className="text-gray-600">Sustainable energy without caffeine or artificial stimulants</p>
              <ul className="mt-4 text-gray-600 text-left space-y-2">
                <li>• B vitamins</li>
                <li>• Natural enzymes</li>
                <li>• Mineral-rich</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Marketing Campaign Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-teal-800 text-center mb-12">"Kefir & Chill: Volleyball Edition"</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="/images/keho-beach.png"
                alt="Beach Volleyball Campaign"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="space-y-6">
              <div className="bg-teal-50 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-teal-700 mb-3">Campaign Highlights</h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-2">
                    <Star className="text-teal-600" />
                    <span>Team jerseys featuring our signature flavors</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Heart className="text-teal-600" />
                    <span>Branded court-side refreshment stations</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Globe2 className="text-teal-600" />
                    <span>Social media integration with live events</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Star className="text-teal-600" />
                    <span>Interactive beach wellness workshops</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Heart className="text-teal-600" />
                    <span>Sustainable packaging demonstrations</span>
                  </li>
                </ul>
              </div>
              <div className="bg-teal-50 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-teal-700 mb-3">Campaign Impact</h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-2">
                    <Target className="text-teal-600" />
                    <span>Reaching active lifestyle enthusiasts</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Users className="text-teal-600" />
                    <span>Building community through sports</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Leaf className="text-teal-600" />
                    <span>Promoting sustainable hydration</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Comparison Section */}
      <section className="py-20 bg-teal-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-teal-800 text-center mb-12">Why Choose KEH2O?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-teal-700 mb-6">Water Kefir Benefits</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-2">
                  <Award className="text-teal-600" />
                  <span>Diverse probiotics for gut health</span>
                </li>
                <li className="flex items-center gap-2">
                  <Award className="text-teal-600" />
                  <span>Naturally fizzy and refreshing</span>
                </li>
                <li className="flex items-center gap-2">
                  <Award className="text-teal-600" />
                  <span>Fermented with kefir grains</span>
                </li>
                <li className="flex items-center gap-2">
                  <Award className="text-teal-600" />
                  <span>Lower acid content</span>
                </li>
                <li className="flex items-center gap-2">
                  <Award className="text-teal-600" />
                  <span>No caffeine dependency</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-teal-700 mb-6">Kombucha Comparison</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-2">
                  <Award className="text-teal-600" />
                  <span>Contains caffeine</span>
                </li>
                <li className="flex items-center gap-2">
                  <Award className="text-teal-600" />
                  <span>Fermented with SCOBY</span>
                </li>
                <li className="flex items-center gap-2">
                  <Award className="text-teal-600" />
                  <span>Higher acid content</span>
                </li>
                <li className="flex items-center gap-2">
                  <Award className="text-teal-600" />
                  <span>Tea-based fermentation</span>
                </li>
                <li className="flex items-center gap-2">
                  <Award className="text-teal-600" />
                  <span>May contain trace caffeine</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Shop Section */}
      <section className="py-20 bg-white" id="shop">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center mb-12">
            <ShoppingCart size={32} className="text-teal-600 mb-4" />
            <h2 className="text-4xl font-bold text-teal-800 mb-4">Shop KEH2O</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-teal-50 p-8 rounded-lg shadow-lg text-center">
              <h3 className="text-2xl font-bold text-teal-800 mb-2">250ml Bottle</h3>
              <p className="text-4xl font-bold text-teal-600 mb-2">€2.24</p>
              <p className="text-gray-600 mb-4">Perfect for on-the-go</p>
              <button className="w-full bg-teal-600 text-white py-3 rounded-full hover:bg-teal-700 transition">
                Add to Cart
              </button>
            </div>
            <div className="bg-teal-50 p-8 rounded-lg shadow-lg text-center transform scale-105 border-2 border-teal-600">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-teal-600 text-white px-4 py-1 rounded-full text-sm">
                Most Popular
              </div>
              <h3 className="text-2xl font-bold text-teal-800 mb-2">500ml Bottle</h3>
              <p className="text-4xl font-bold text-teal-600 mb-2">€3.50</p>
              <p className="text-gray-600 mb-4">Daily wellness companion</p>
              <button className="w-full bg-teal-600 text-white py-3 rounded-full hover:bg-teal-700 transition">
                Add to Cart
              </button>
            </div>
            <div className="bg-teal-50 p-8 rounded-lg shadow-lg text-center">
              <h3 className="text-2xl font-bold text-teal-800 mb-2">330ml Can</h3>
              <p className="text-4xl font-bold text-teal-600 mb-2">€3.35</p>
              <p className="text-gray-600 mb-4">Eco-friendly option</p>
              <button className="w-full bg-teal-600 text-white py-3 rounded-full hover:bg-teal-700 transition">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Distribution Section */}
      <section className="py-20 bg-teal-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-teal-800 text-center mb-12">Where to Find Us</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-bold text-teal-700 mb-4">Retail Stores</h3>
              <ul className="text-gray-600 space-y-2">
                <li>Veritas</li>
                <li>Carrefour Bio</li>
                <li>Ecoalgrup</li>
                <li>Local Health Food Stores</li>
                <li>Organic Markets</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-bold text-teal-700 mb-4">Fitness Centers</h3>
              <ul className="text-gray-600 space-y-2">
                <li>VIVAGYM</li>
                <li>Local Gyms</li>
                <li>Wellness Centers</li>
                <li>Yoga Studios</li>
                <li>Sports Facilities</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-bold text-teal-700 mb-4">Online</h3>
              <ul className="text-gray-600 space-y-2">
                <li>Official Website</li>
                <li>Amazon</li>
                <li>Glovo</li>
                <li>Local Delivery Apps</li>
                <li>Subscription Service</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-teal-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-2xl font-bold mb-4 md:mb-0">KEH2O</div>
            <div className="flex gap-8">
              <a href="#" className="hover:text-teal-200 transition">Home</a>
              <a href="#benefits" className="hover:text-teal-200 transition">Benefits</a>
              <a href="#shop" className="hover:text-teal-200 transition">Shop</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;