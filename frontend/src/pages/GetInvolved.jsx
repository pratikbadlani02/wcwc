import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Users, Calendar, HandHeart, Gift, Mail, Phone, CheckCircle } from 'lucide-react';
import { volunteerOpportunities, contactInfo } from '../mockData';
import { toast } from '../hooks/use-toast';

const GetInvolved = () => {
  const [volunteerForm, setVolunteerForm] = useState({
    name: '',
    email: '',
    phone: '',
    interest: '',
    message: ''
  });

  const handleVolunteerSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Application Submitted!",
      description: "Thank you for your interest. We'll contact you soon.",
    });
    setVolunteerForm({
      name: '',
      email: '',
      phone: '',
      interest: '',
      message: ''
    });
  };

  const waysTogether = [
    {
      icon: Users,
      title: 'Volunteer',
      description: 'Share your time and skills to directly support women in our programs.',
      color: 'cyan'
    },
    {
      icon: Gift,
      title: 'Donate Items',
      description: 'Contribute essential supplies, clothing, and household items.',
      color: 'pink'
    },
    {
      icon: Calendar,
      title: 'Host an Event',
      description: 'Organize fundraisers or awareness events in your community.',
      color: 'green'
    },
    {
      icon: HandHeart,
      title: 'Corporate Partnership',
      description: 'Partner with us through employee engagement and corporate giving.',
      color: 'cyan'
    }
  ];

  const benefits = [
    'Make a tangible difference in women\'s lives',
    'Gain valuable experience in social services',
    'Connect with like-minded community members',
    'Flexible scheduling to fit your availability',
    'Comprehensive training and ongoing support',
    'Be part of a compassionate, dedicated team'
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-50 to-teal-50 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Get <span className="text-green-500">Involved</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            Join us in our mission to end homelessness for women in Wake County. Your support transforms lives.
          </p>
        </div>
      </section>

      {/* Ways to Get Involved */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ways to <span className="text-pink-500">Make an Impact</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {waysTogether.map((way, index) => {
              const Icon = way.icon;
              const colorMap = {
                cyan: 'from-cyan-400 to-cyan-500',
                green: 'from-green-400 to-green-500',
                pink: 'from-pink-400 to-pink-500'
              };
              return (
                <Card
                  key={index}
                  className="border-none shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
                >
                  <CardContent className="p-6 text-center">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${colorMap[way.color]} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="text-white" size={28} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {way.title}
                    </h3>
                    <p className="text-gray-600">{way.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Volunteer Opportunities */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              <span className="text-cyan-500">Volunteer</span> Opportunities
            </h2>
            <p className="text-lg text-gray-600">
              Find the perfect way to share your time and talents
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {volunteerOpportunities.map((opportunity) => (
              <Card
                key={opportunity.id}
                className="border-none shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-900">
                    {opportunity.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    {opportunity.description}
                  </p>
                  <div className="flex items-center gap-2 text-green-600 font-semibold">
                    <Calendar size={18} />
                    {opportunity.commitment}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Volunteer Benefits */}
          <Card className="border-none shadow-xl bg-gradient-to-br from-pink-50 to-purple-50">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-center">
                Why <span className="text-pink-500">Volunteer</span> With Us?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" size={20} />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Volunteer Application Form */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              <span className="text-green-500">Apply</span> to Volunteer
            </h2>
            <p className="text-lg text-gray-600">
              Fill out the form below and we'll be in touch soon
            </p>
          </div>

          <Card className="border-none shadow-2xl">
            <CardContent className="p-8">
              <form onSubmit={handleVolunteerSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    value={volunteerForm.name}
                    onChange={(e) => setVolunteerForm({ ...volunteerForm, name: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={volunteerForm.email}
                      onChange={(e) => setVolunteerForm({ ...volunteerForm, email: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      value={volunteerForm.phone}
                      onChange={(e) => setVolunteerForm({ ...volunteerForm, phone: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Area of Interest *
                  </label>
                  <select
                    value={volunteerForm.interest}
                    onChange={(e) => setVolunteerForm({ ...volunteerForm, interest: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                    required
                  >
                    <option value="">Select an option</option>
                    {volunteerOpportunities.map((opp) => (
                      <option key={opp.id} value={opp.title}>
                        {opp.title}
                      </option>
                    ))}
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Tell Us About Yourself
                  </label>
                  <textarea
                    value={volunteerForm.message}
                    onChange={(e) => setVolunteerForm({ ...volunteerForm, message: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all resize-none"
                    placeholder="Share your interests, skills, and why you'd like to volunteer..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-green-500 hover:bg-green-600 text-white rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
                >
                  Submit Application
                </button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-cyan-50 to-blue-50">
        <div className="max-w-4xl mx-auto">
          <Card className="border-none shadow-2xl">
            <CardContent className="p-8 md:p-12 text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Questions About <span className="text-cyan-500">Volunteering</span>?
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                Our volunteer coordinator is here to help
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="px-8 py-4 bg-cyan-500 hover:bg-cyan-600 text-white rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 inline-flex items-center justify-center gap-2"
                >
                  <Phone size={20} />
                  {contactInfo.phone}
                </a>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="px-8 py-4 bg-pink-500 hover:bg-pink-600 text-white rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 inline-flex items-center justify-center gap-2"
                >
                  <Mail size={20} />
                  {contactInfo.email}
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default GetInvolved;