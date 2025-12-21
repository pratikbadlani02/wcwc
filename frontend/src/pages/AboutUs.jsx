import React from 'react';
import { Heart, Target, Eye, Users, Award, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { missionStatement, teamMembers, statistics } from '../mockData';

const AboutUs = () => {
  const values = [
    {
      icon: Heart,
      title: 'Compassion',
      description: 'We treat every woman with dignity, respect, and unconditional support.'
    },
    {
      icon: Users,
      title: 'Empowerment',
      description: 'We believe in the strength and potential of every woman we serve.'
    },
    {
      icon: Target,
      title: 'Evidence-Based',
      description: 'Our programs are grounded in proven practices and continuous evaluation.'
    },
    {
      icon: TrendingUp,
      title: 'Transformation',
      description: 'We support lasting change through comprehensive, individualized care.'
    }
  ];

  const timeline = [
    {
      year: '1978',
      title: 'Foundation',
      description: 'Women\'s Center of Wake County was founded to address the growing need for women\'s homeless services.'
    },
    {
      year: '1990',
      title: 'Expansion',
      description: 'Expanded capacity to serve more women with enhanced case management services.'
    },
    {
      year: '2005',
      title: 'New Facility',
      description: 'Moved to our current location, providing improved facilities and resources.'
    },
    {
      year: '2020',
      title: 'Program Evolution',
      description: 'Implemented evidence-based housing-first approach and trauma-informed care.'
    },
    {
      year: '2025',
      title: 'Looking Forward',
      description: 'Continuing to innovate and expand services to meet the evolving needs of women in our community.'
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-pink-50 to-purple-50 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About <span className="text-pink-500">The Women's</span> <span className="text-green-500">Center</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed italic">
            {missionStatement}
          </p>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <Card className="border-none shadow-xl bg-gradient-to-br from-cyan-50 to-blue-50">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <Target className="text-cyan-500" size={32} />
                  Our Mission
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-lg leading-relaxed">
                  {missionStatement}
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-xl bg-gradient-to-br from-green-50 to-teal-50">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <Eye className="text-green-500" size={32} />
                  Our Vision
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-lg leading-relaxed">
                  A community where all women and their families thrive in safe and stable homes, with access to resources and opportunities for lasting transformation.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Values */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-pink-500">Core Values</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card
                  key={index}
                  className="border-none shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-pink-400 to-pink-500 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="text-white" size={28} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {value.title}
                    </h3>
                    <p className="text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-green-500">Impact</span>
            </h2>
            <p className="text-lg text-gray-600">
              Making a measurable difference in our community
            </p>
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

      {/* Timeline */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-cyan-500">Journey</span>
            </h2>
            <p className="text-lg text-gray-600">
              Decades of service to women in Wake County
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-cyan-400 via-pink-400 to-green-400 hidden lg:block" />

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className={`relative flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex-col`}
                >
                  <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:text-right lg:pr-12' : 'lg:text-left lg:pl-12'}`}>
                    <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                      <CardHeader>
                        <CardTitle className="text-3xl font-bold text-pink-500">
                          {item.year}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          {item.title}
                        </h3>
                        <p className="text-gray-600">{item.description}</p>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Center Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-br from-pink-400 to-pink-500 border-4 border-white shadow-lg hidden lg:block" />

                  <div className="w-full lg:w-5/12" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-pink-500">Leadership</span> Team
            </h2>
            <p className="text-lg text-gray-600">
              Dedicated professionals committed to our mission
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <Card
                key={member.id}
                className="border-none shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 text-center"
              >
                <CardContent className="p-8">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-cyan-400 to-cyan-500 flex items-center justify-center mx-auto mb-4">
                    <Award className="text-white" size={40} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-pink-500 font-semibold mb-3">{member.role}</p>
                  <p className="text-gray-600 leading-relaxed">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;