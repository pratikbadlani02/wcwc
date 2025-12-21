import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Heart, DollarSign, CreditCard, Gift, CheckCircle, Phone, Mail } from 'lucide-react';
import { donationLevels, acceptedDonations, donationHours, contactInfo } from '../mockData';
import { toast } from '../hooks/use-toast';

const Donate = () => {
  const [selectedAmount, setSelectedAmount] = useState('');
  const [customAmount, setCustomAmount] = useState('');
  const [donationType, setDonationType] = useState('one-time');
  const [donorInfo, setDonorInfo] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const handleDonationSubmit = (e) => {
    e.preventDefault();
    const amount = selectedAmount || customAmount;
    toast({
      title: "Thank You!",
      description: `Your ${donationType} donation of $${amount} makes a real difference.`,
    });
    // Reset form
    setSelectedAmount('');
    setCustomAmount('');
    setDonorInfo({ name: '', email: '', phone: '' });
  };

  const impactAreas = [
    {
      icon: Heart,
      title: 'Emergency Services',
      description: 'Immediate shelter, meals, and crisis support',
      percentage: '40%'
    },
    {
      icon: Gift,
      title: 'Case Management',
      description: 'Individualized support and resources',
      percentage: '30%'
    },
    {
      icon: CheckCircle,
      title: 'Housing Programs',
      description: 'Transitional and permanent housing assistance',
      percentage: '25%'
    },
    {
      icon: DollarSign,
      title: 'Operations',
      description: 'Facilities, administration, and program development',
      percentage: '5%'
    }
  ];

  const otherWays = [
    {
      title: 'Monthly Giving',
      description: 'Become a sustaining donor with automatic monthly contributions',
      icon: Heart
    },
    {
      title: 'Legacy Giving',
      description: 'Include us in your estate planning to create lasting impact',
      icon: Gift
    },
    {
      title: 'Corporate Matching',
      description: 'Double your impact through employer matching gift programs',
      icon: CheckCircle
    },
    {
      title: 'Stock Donations',
      description: 'Donate appreciated securities for potential tax benefits',
      icon: DollarSign
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-pink-50 to-purple-50 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Your <span className="text-pink-500">Gift</span> Transforms Lives
          </h1>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            Every donation directly supports women experiencing homelessness, providing them with shelter, support, and hope for a better future.
          </p>
        </div>
      </section>

      {/* Donation Levels */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              <span className="text-cyan-500">Giving</span> Levels
            </h2>
            <p className="text-lg text-gray-600">
              Choose an amount that's meaningful to you
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {donationLevels.map((level) => (
              <Card
                key={level.id}
                className="border-2 border-gray-100 hover:border-pink-300 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group"
                onClick={() => setSelectedAmount(level.amount)}
              >
                <CardHeader className="text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-pink-400 to-pink-500 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <DollarSign className="text-white" size={32} />
                  </div>
                  <CardTitle className="text-3xl font-bold text-pink-500">
                    ${level.amount}
                  </CardTitle>
                  <p className="text-lg font-semibold text-gray-900">{level.title}</p>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600">{level.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Form */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Make Your <span className="text-pink-500">Donation</span>
            </h2>
          </div>

          <Card className="border-none shadow-2xl">
            <CardContent className="p-8">
              <form onSubmit={handleDonationSubmit} className="space-y-6">
                {/* Donation Type */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Donation Type
                  </label>
                  <div className="flex gap-4">
                    <button
                      type="button"
                      onClick={() => setDonationType('one-time')}
                      className={`flex-1 py-3 px-4 rounded-lg font-semibold transition-all duration-200 ${
                        donationType === 'one-time'
                          ? 'bg-pink-500 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      One-Time
                    </button>
                    <button
                      type="button"
                      onClick={() => setDonationType('monthly')}
                      className={`flex-1 py-3 px-4 rounded-lg font-semibold transition-all duration-200 ${
                        donationType === 'monthly'
                          ? 'bg-pink-500 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      Monthly
                    </button>
                  </div>
                </div>

                {/* Amount Selection */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Select Amount
                  </label>
                  <div className="grid grid-cols-4 gap-3 mb-3">
                    {[25, 50, 100, 250].map((amount) => (
                      <button
                        key={amount}
                        type="button"
                        onClick={() => {
                          setSelectedAmount(amount);
                          setCustomAmount('');
                        }}
                        className={`py-3 px-4 rounded-lg font-semibold transition-all duration-200 ${
                          selectedAmount === amount
                            ? 'bg-green-500 text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        ${amount}
                      </button>
                    ))}
                  </div>
                  <input
                    type="number"
                    value={customAmount}
                    onChange={(e) => {
                      setCustomAmount(e.target.value);
                      setSelectedAmount('');
                    }}
                    placeholder="Or enter custom amount"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                    min="1"
                  />
                </div>

                {/* Donor Information */}
                <div className="pt-6 border-t border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Your Information
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        value={donorInfo.name}
                        onChange={(e) => setDonorInfo({ ...donorInfo, name: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          value={donorInfo.email}
                          onChange={(e) => setDonorInfo({ ...donorInfo, email: e.target.value })}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          value={donorInfo.phone}
                          onChange={(e) => setDonorInfo({ ...donorInfo, phone: e.target.value })}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={!selectedAmount && !customAmount}
                  className="w-full px-8 py-4 bg-pink-500 hover:bg-pink-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center justify-center gap-2"
                >
                  <Heart size={20} />
                  Complete Donation
                </button>

                <p className="text-xs text-gray-500 text-center">
                  Your donation is tax-deductible. Tax ID: 58-1316004
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* How Donations Are Used */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How Your <span className="text-green-500">Donation</span> Helps
            </h2>
            <p className="text-lg text-gray-600">
              Transparent allocation of your generous contributions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {impactAreas.map((area, index) => {
              const Icon = area.icon;
              return (
                <Card
                  key={index}
                  className="border-none shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-400 to-cyan-500 flex items-center justify-center mx-auto mb-4">
                      <Icon className="text-white" size={28} />
                    </div>
                    <div className="text-3xl font-bold text-cyan-600 mb-2">
                      {area.percentage}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {area.title}
                    </h3>
                    <p className="text-sm text-gray-600">{area.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Other Ways to Give */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-cyan-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Other Ways to <span className="text-pink-500">Give</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {otherWays.map((way, index) => {
              const Icon = way.icon;
              return (
                <Card
                  key={index}
                  className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-400 to-pink-500 flex items-center justify-center mb-4">
                      <Icon className="text-white" size={20} />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {way.title}
                    </h3>
                    <p className="text-sm text-gray-600">{way.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* In-Kind Donations */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              <span className="text-green-500">In-Kind</span> Donations
            </h2>
            <p className="text-lg text-gray-600">
              We gratefully accept donations of essential items
            </p>
          </div>

          <Card className="border-none shadow-xl">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {acceptedDonations.map((item, index) => (
                  <div key={index} className="flex items-center gap-3 group">
                    <CheckCircle className="text-green-500 flex-shrink-0 group-hover:scale-110 transition-transform" size={20} />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>

              <div className="p-6 bg-gradient-to-br from-green-50 to-teal-50 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <Gift className="text-green-500" size={24} />
                  Drop-Off Information
                </h3>
                <p className="text-gray-700 mb-4">
                  <strong>Hours:</strong> {donationHours}
                </p>
                <p className="text-gray-700">
                  <strong>Location:</strong> {contactInfo.address}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="max-w-4xl mx-auto">
          <Card className="border-none shadow-2xl bg-gradient-to-br from-pink-500 to-pink-600 text-white">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Questions About Giving?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Our development team is happy to discuss your philanthropic goals
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="px-8 py-4 bg-white text-pink-600 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 inline-flex items-center justify-center gap-2"
                >
                  <Phone size={20} />
                  Call Us
                </a>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="px-8 py-4 bg-cyan-500 text-white rounded-full font-semibold text-lg hover:bg-cyan-600 transition-all duration-300 hover:scale-105 inline-flex items-center justify-center gap-2"
                >
                  <Mail size={20} />
                  Email Us
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Donate;