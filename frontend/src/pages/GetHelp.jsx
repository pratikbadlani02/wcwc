import React from 'react';
import { Phone, Mail, MapPin, AlertCircle, Heart, Home as HomeIcon } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { contactInfo, services } from '../mockData';

const GetHelp = () => {
  const emergencyServices = [
    {
      title: 'Crisis Hotline',
      description: 'Immediate support available 24/7 for women in crisis situations',
      contact: contactInfo.phone,
      icon: Phone
    },
    {
      title: 'Walk-In Services',
      description: 'Visit us during business hours for intake assessment and support',
      contact: contactInfo.hours,
      icon: HomeIcon
    },
    {
      title: 'Email Support',
      description: 'Send us your inquiry and we\'ll respond within 24 hours',
      contact: contactInfo.email,
      icon: Mail
    }
  ];

  const eligibilityCriteria = [
    'Single women (18+ years)',
    'Experiencing homelessness or at risk of homelessness',
    'Wake County resident or willing to relocate',
    'Committed to working toward independence',
    'Able to participate in program requirements'
  ];

  const admissionProcess = [
    {
      step: 1,
      title: 'Initial Contact',
      description: 'Call or visit us to begin the intake process'
    },
    {
      step: 2,
      title: 'Assessment',
      description: 'Meet with our case manager for needs evaluation'
    },
    {
      step: 3,
      title: 'Placement',
      description: 'If eligible, immediate placement in our shelter program'
    },
    {
      step: 4,
      title: 'Ongoing Support',
      description: 'Work with dedicated case manager on your personalized plan'
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-cyan-50 to-blue-50 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            We're <span className="text-cyan-500">Here</span> to <span className="text-pink-500">Help</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            If you or someone you know is experiencing homelessness, we're here to provide support, resources, and a path forward.
          </p>
        </div>
      </section>

      {/* Emergency Services */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              <span className="text-pink-500">Immediate</span> Support
            </h2>
            <p className="text-lg text-gray-600">
              Multiple ways to reach us for help
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {emergencyServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card
                  key={index}
                  className="border-2 border-gray-100 hover:border-cyan-300 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                >
                  <CardHeader>
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-400 to-cyan-500 flex items-center justify-center mb-4">
                      <Icon className="text-white" size={28} />
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <div className="text-lg font-semibold text-cyan-600">
                      {service.contact}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Eligibility */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              <span className="text-green-500">Eligibility</span> Requirements
            </h2>
            <p className="text-lg text-gray-600">
              Who we serve and how to qualify for our programs
            </p>
          </div>

          <Card className="border-none shadow-xl">
            <CardContent className="p-8">
              <div className="space-y-4">
                {eligibilityCriteria.map((criteria, index) => (
                  <div key={index} className="flex items-start gap-3 group">
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-green-500 transition-colors">
                      <div className="w-2 h-2 rounded-full bg-green-500 group-hover:bg-white" />
                    </div>
                    <p className="text-gray-700 text-lg">{criteria}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-cyan-50 border-l-4 border-cyan-500 rounded">
                <div className="flex items-start gap-3">
                  <AlertCircle className="text-cyan-600 flex-shrink-0" size={20} />
                  <p className="text-sm text-gray-700">
                    <strong>Note:</strong> We work with each individual on a case-by-case basis. If you're not sure about eligibility, please contact us to discuss your situation.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How to <span className="text-pink-500">Get Started</span>
            </h2>
            <p className="text-lg text-gray-600">
              Our admission process is designed to be simple and supportive
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {admissionProcess.map((step, index) => (
              <div key={index} className="relative">
                <Card className="h-full border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-400 to-pink-500 flex items-center justify-center text-white font-bold text-xl mb-4">
                      {step.step}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-600">{step.description}</p>
                  </CardContent>
                </Card>
                {index < admissionProcess.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <div className="w-6 h-0.5 bg-pink-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What We <span className="text-green-500">Provide</span>
            </h2>
            <p className="text-lg text-gray-600">
              Comprehensive support services to help you succeed
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <Card
                key={service.id}
                className="border-none shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Heart className="text-pink-500" size={24} />
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <Card className="border-none shadow-2xl bg-gradient-to-br from-cyan-500 to-blue-600 text-white">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Take the First Step?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Our compassionate team is standing by to help you today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="px-8 py-4 bg-white text-cyan-600 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 inline-flex items-center justify-center gap-2"
                >
                  <Phone size={20} />
                  Call Now
                </a>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="px-8 py-4 bg-pink-500 text-white rounded-full font-semibold text-lg hover:bg-pink-600 transition-all duration-300 hover:scale-105 inline-flex items-center justify-center gap-2"
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

export default GetHelp;