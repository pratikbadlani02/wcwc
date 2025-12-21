import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Home, Users, TrendingUp, Award, Heart, Target, CheckCircle } from 'lucide-react';
import { services, statistics, impactStories } from '../mockData';

const OurWork = () => {
  const programs = [
    {
      icon: Home,
      title: 'Emergency Shelter Program',
      description: 'Immediate, safe housing for women experiencing homelessness with 24/7 access to support services.',
      features: [
        'Safe, secure accommodations',
        'Three meals per day',
        'Personal storage space',
        'Access to facilities and amenities',
        'Crisis intervention services'
      ]
    },
    {
      icon: Users,
      title: 'Transitional Housing',
      description: 'Bridge to permanent housing with intensive case management and life skills development.',
      features: [
        'Up to 24 months of support',
        'Individual apartment units',
        'Continued case management',
        'Job placement assistance',
        'Financial literacy training'
      ]
    },
    {
      icon: TrendingUp,
      title: 'Rapid Rehousing',
      description: 'Quick placement into permanent housing with short-term rental assistance and support.',
      features: [
        'Housing location assistance',
        'Rental and utility assistance',
        'Move-in cost support',
        'Ongoing case management',
        'Connection to community resources'
      ]
    },
    {
      icon: Award,
      title: 'Aftercare Services',
      description: 'Continued support for program graduates to ensure lasting stability and success.',
      features: [
        'Follow-up case management',
        'Crisis prevention',
        'Community connections',
        'Alumni support groups',
        'Resource referrals'
      ]
    }
  ];

  const outcomes = [
    {
      percentage: '85%',
      label: 'Successfully exit to permanent housing',
      color: 'cyan'
    },
    {
      percentage: '92%',
      label: 'Maintain housing after 6 months',
      color: 'green'
    },
    {
      percentage: '78%',
      label: 'Gain employment during program',
      color: 'pink'
    },
    {
      percentage: '95%',
      label: 'Report improved mental health',
      color: 'cyan'
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-50 to-teal-50 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-green-500">Programs</span> & <span className="text-pink-500">Services</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            Comprehensive, evidence-based programs designed to provide stability, support, and lasting transformation for women experiencing homelessness.
          </p>
        </div>
      </section>

      {/* Main Programs */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              <span className="text-cyan-500">Housing</span> Programs
            </h2>
            <p className="text-lg text-gray-600">
              Multiple pathways to stable housing
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {programs.map((program, index) => {
              const Icon = program.icon;
              return (
                <Card
                  key={index}
                  className="border-none shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                >
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-green-400 to-green-500 flex items-center justify-center flex-shrink-0">
                        <Icon className="text-white" size={28} />
                      </div>
                      <div>
                        <CardTitle className="text-2xl font-bold text-gray-900 mb-2">
                          {program.title}
                        </CardTitle>
                        <p className="text-gray-600">{program.description}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {program.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" size={18} />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Support Services */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              <span className="text-pink-500">Wraparound</span> Services
            </h2>
            <p className="text-lg text-gray-600">
              Comprehensive support for holistic transformation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card
                key={service.id}
                className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-pink-400 to-pink-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Heart className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Proven <span className="text-green-500">Outcomes</span>
            </h2>
            <p className="text-lg text-gray-600">
              Measurable success in transforming lives
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {outcomes.map((outcome, index) => {
              const colorMap = {
                cyan: 'from-cyan-400 to-cyan-500',
                green: 'from-green-400 to-green-500',
                pink: 'from-pink-400 to-pink-500'
              };
              return (
                <Card
                  key={index}
                  className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <CardContent className="p-8 text-center">
                    <div className={`text-5xl font-bold bg-gradient-to-r ${colorMap[outcome.color]} text-transparent bg-clip-text mb-3`}>
                      {outcome.percentage}
                    </div>
                    <p className="text-gray-700 font-medium leading-relaxed">
                      {outcome.label}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Impact Stories */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-cyan-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              <span className="text-cyan-500">Success</span> Stories
            </h2>
            <p className="text-lg text-gray-600">
              Real women, real transformation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {impactStories.map((story) => (
              <Card
                key={story.id}
                className="border-none shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-400 to-cyan-500 flex items-center justify-center mx-auto mb-6">
                    <Target className="text-white" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                    {story.name}
                  </h3>
                  <blockquote className="text-gray-700 italic mb-6 leading-relaxed">
                    "{story.quote}"
                  </blockquote>
                  <div className="pt-4 border-t border-gray-200">
                    <p className="text-sm font-semibold text-green-600 text-center">
                      {story.outcome}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-pink-500">Approach</span>
            </h2>
          </div>

          <Card className="border-none shadow-2xl">
            <CardContent className="p-8 md:p-12">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <Heart className="text-pink-500" size={24} />
                    Trauma-Informed Care
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    We recognize the impact of trauma and create a safe, supportive environment that promotes healing and recovery. Our staff is trained in trauma-informed practices to ensure respectful, compassionate care.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <Home className="text-green-500" size={24} />
                    Housing First Philosophy
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    We believe stable housing is the foundation for addressing other challenges. Our Housing First approach prioritizes rapid placement into housing, followed by comprehensive support services.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <Target className="text-cyan-500" size={24} />
                    Individualized Support
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Every woman's journey is unique. We develop personalized plans that address individual needs, goals, and circumstances, empowering each woman to achieve lasting stability and independence.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              <span className="text-pink-500">Annual</span> Impact
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {statistics.map((stat, index) => {
              const colorMap = {
                cyan: 'from-cyan-400 to-cyan-500',
                green: 'from-green-400 to-green-500',
                pink: 'from-pink-400 to-pink-500'
              };
              return (
                <Card
                  key={index}
                  className="text-center border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <CardContent className="p-8">
                    <div className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${colorMap[stat.color]} text-transparent bg-clip-text mb-2`}>
                      {stat.number}
                    </div>
                    <div className="text-sm md:text-base text-gray-600 font-medium">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurWork;