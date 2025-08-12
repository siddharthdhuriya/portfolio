import React from 'react';
import { 
  MapPin, 
  Users, 
  Mail, 
  Calendar, 
  Award, 
  Briefcase, 
  GraduationCap,
  ExternalLink,
  Star,
  TrendingUp,
  Target,
  Database,
  User,
  Phone,
  Globe,
  Code,
  BarChart3,
  Lightbulb,
  Zap
} from 'lucide-react';

function App() {
  const skills = [
    'User Experience (UX)',
    'Wireframing', 
    'Market Research',
    'Product Design',
    'Data Analysis',
    'Performance Metrics',
    'Market Analysis',
    'Product Strategy',
    'Cross-functional Leadership',
    'SQL Queries'
  ];

  const experiences = [
    {
      title: 'Product Manager',
      company: 'Justdial',
      duration: 'Dec 2022 - Present',
      period: '2 yrs 9 mos',
      location: 'Bangalore',
      skills: ['Data Analysis', 'Product Design', 'Strategic Vision', 'Cross-functional Leadership', 'User-Centric Design', 'Market Research'],
      current: true
    },
    {
      title: 'Product Manager',
      company: 'Navia Life Care',
      duration: 'Apr 2021 - Jun 2022',
      period: '1 yr 3 mos',
      location: 'Gurugram',
      skills: ['Data Analysis', 'Product Design', 'Product Development', 'User Research', 'Go-to-Market Strategy', 'A/B Testing'],
      current: false
    },
    {
      title: 'Associate Product Manager',
      company: 'Parity Cube Pvt. Ltd.',
      duration: 'Nov 2015 - Apr 2021',
      period: '5 yrs 6 mos',
      location: 'Mumbai',
      skills: ['Data Analysis', 'Product Design', 'Wireframing', 'Market Research', 'Product Lifecycle Management'],
      current: false
    },
    {
      title: 'Product Manager',
      company: 'Justdial',
      duration: 'May 2013 - Jul 2015',
      period: '2 yrs 3 mos',
      location: 'Mumbai',
      skills: ['Data Analysis', 'Product Design', 'User Experience', 'Market Analysis'],
      current: false
    },
    {
      title: 'Software Tester',
      company: 'Justdial',
      duration: 'Jun 2011 - May 2013',
      period: '2 yrs',
      location: 'Mumbai',
      skills: ['Quality Assurance', 'Testing Methodologies', 'Bug Tracking'],
      current: false
    },
  ];

  const education = [
    {
      degree: 'Bachelor of Business Administration - BBA',
      field: 'Business Administration and Management, General',
      school: 'MATS University, Raipur',
      duration: '2017 - 2019',
      grade: 'Second Division'
    },
    {
      degree: 'Software Engineer',
      field: 'Software Engineering',
      school: 'NIIT',
      duration: '2008 - 2010',
      grade: null
    }
  ];

  const certifications = [
    {
      title: 'Product Management with Generative AI',
      issuer: 'Indian School of Business',
      date: 'Mar 2025',
      credentialId: '136437349',
      description: '16-week Executive Education Program covering AI in Product Lifecycle, Competitive Positioning, Growth Hacking, and Generative AI applications'
    }
  ];

  const highlights = [
    {
      icon: TrendingUp,
      title: 'Strategic Vision',
      description: 'Defining and executing product roadmaps aligned with company goals through market research and competitive analysis',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Target,
      title: 'Product Development',
      description: 'Guiding products through entire lifecycle from concept to launch, collaborating with cross-functional teams',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: User,
      title: 'User-Centric Design',
      description: 'Delivering products that resonate with audiences through user research and feedback integration',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: BarChart3,
      title: 'Data-Informed Decisions',
      description: 'Leveraging data analytics and SQL queries to analyze user behavior and drive product improvements',
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #7c3aed 0%, transparent 50%), 
                             radial-gradient(circle at 75% 75%, #06b6d4 0%, transparent 50%)`
          }}></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="text-white space-y-8">
              <div className="space-y-6">
                <div>
                  <h1 className="text-6xl lg:text-7xl font-bold leading-tight mb-4">
                    Siddharth
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                      Dhuriya
                    </span>
                  </h1>
                  <p className="text-2xl lg:text-3xl text-gray-300 font-light mb-6">
                    Product Manager & Innovation Leader
                  </p>
                  <p className="text-lg text-gray-400 max-w-xl leading-relaxed">
                    Transforming ideas into impactful products with 8+ years of experience in user-centric design, 
                    data-driven strategy, and cross-functional leadership.
                  </p>
                </div>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400">8+</div>
                  <div className="text-sm text-gray-400">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400">6</div>
                  <div className="text-sm text-gray-400">Companies</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400">500+</div>
                  <div className="text-sm text-gray-400">Connections</div>
                </div>
              </div>
              
              {/* Location & Company */}
              <div className="flex flex-wrap gap-6 text-gray-300">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-cyan-400" />
                  <span>Bangalore, India</span>
                </div>
                <div className="flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-purple-400" />
                  <span>Justdial</span>
                </div>
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => window.open('mailto:siddharthdhuriya@gmail.com', '_blank')}
                  className="group flex items-center justify-center gap-3 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl"
                >
                  <Mail className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                  Get In Touch
                </button>
                <a 
                  href="https://www.linkedin.com/in/siddharth-dhuriya" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold border border-white/20 transition-all duration-300 hover:scale-105"
                >
                  <ExternalLink className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                  LinkedIn Profile
                </a>
              </div>
            </div>
            
            {/* Right Content - Profile Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                {/* Decorative Elements */}
                <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full blur-2xl"></div>
                <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 rounded-full blur-xl"></div>
                <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-xl"></div>
                
                {/* Profile Image */}
                <div className="relative w-80 h-96 rounded-3xl overflow-hidden border-4 border-white/20 shadow-2xl hover:scale-105 transition-all duration-500">
                  <img 
                    src="FB_IMG_1696354168015.jpg" 
                    alt="Siddharth Dhuriya - Product Manager" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">What I Bring</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Proven expertise in strategic product management with a focus on user-centric solutions and data-driven innovation
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((highlight, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl blur-xl" 
                     style={{background: `linear-gradient(135deg, ${highlight.color.split(' ')[1]}, ${highlight.color.split(' ')[3]})`}}></div>
                <div className="relative bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100">
                  <div className={`w-16 h-16 bg-gradient-to-r ${highlight.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <highlight.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{highlight.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{highlight.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">About Me</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl shadow-xl p-12 border border-gray-100">
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-8">
              <p className="text-2xl text-gray-800 font-medium leading-relaxed">
                Experienced Product Manager with a proven track record of delivering impactful and user-centric solutions across diverse industries.
              </p>
              
              <p className="text-lg">
                With 8 years of dedicated experience in driving product strategy, development, and lifecycle management, I have consistently demonstrated my ability to bridge the gap between customer needs and business objectives. My passion for data analytics, user experience, and problem-solving, combined with my keen understanding of market dynamics, has allowed me to lead cross-functional teams to success while maintaining a strong focus on collaboration and execution.
              </p>
              
              <p className="text-lg">
                I am truly passionate about crafting products that solve real-world problems and enhance people's lives. The ever-changing technology landscape excites me, and I'm dedicated to staying ahead of the curve. My drive stems from a desire to make a lasting impact through innovation, and I find immense satisfaction in seeing a product evolve from an idea into a tangible solution that adds value.
              </p>
              
              <div className="bg-gradient-to-r from-cyan-50 to-purple-50 p-8 rounded-2xl border-l-4 border-gradient-to-b from-cyan-500 to-purple-500">
                <div className="flex items-start gap-4">
                  <Lightbulb className="w-8 h-8 text-purple-600 mt-1 flex-shrink-0" />
                  <p className="text-gray-800 font-semibold text-lg">
                    Currently expanding expertise in AI and Generative AI tools to revolutionize product management approaches and drive innovation at Justdial.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Skills & Expertise</h2>
            <p className="text-xl text-gray-600">Core competencies developed through 8+ years of product management experience</p>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full mt-6"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <div key={index} className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
                <div className="flex items-center gap-4">
                  <div className="w-4 h-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                  <span className="text-gray-800 font-semibold text-lg">{skill}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Professional Journey</h2>
            <p className="text-xl text-gray-600">A journey of growth and innovation across leading organizations</p>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full mt-6"></div>
          </div>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="group relative">
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 hover:-translate-y-1 border border-gray-100">
                  {exp.current && (
                    <div className="absolute -top-4 left-8">
                      <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                        Current Position
                      </span>
                    </div>
                  )}
                  
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-8">
                    <div className="flex-1">
                      <h3 className="text-3xl font-bold text-gray-900 mb-3">{exp.title}</h3>
                      <p className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-purple-600 font-bold mb-4">{exp.company}</p>
                      <div className="flex flex-wrap items-center gap-6 text-gray-600">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-5 h-5 text-cyan-500" />
                          <span className="font-medium">{exp.duration} • {exp.period}</span>
                        </div>
                        {exp.location && (
                          <div className="flex items-center gap-2">
                            <MapPin className="w-5 h-5 text-purple-500" />
                            <span className="font-medium">{exp.location}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-3">
                    {exp.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className="bg-gradient-to-r from-cyan-100 to-purple-100 text-gray-800 px-4 py-2 rounded-full text-sm font-semibold border border-cyan-200/50">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Certifications */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Education & Growth</h2>
            <p className="text-xl text-gray-600">Continuous learning and professional development</p>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full mt-6"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Education */}
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                Education
              </h3>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                    <h4 className="text-xl font-bold text-gray-900 mb-3">{edu.degree}</h4>
                    <p className="text-lg text-blue-600 font-semibold mb-3">{edu.field}</p>
                    <p className="text-gray-700 font-medium mb-3">{edu.school}</p>
                    <div className="flex items-center gap-4 text-gray-600">
                      <span className="font-medium">{edu.duration}</span>
                      {edu.grade && <span>• Grade: {edu.grade}</span>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Certifications */}
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
                Certifications
              </h3>
              <div className="space-y-6">
                {certifications.map((cert, index) => (
                  <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                        <Star className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-gray-900 mb-2">{cert.title}</h4>
                        <p className="text-lg text-orange-600 font-semibold mb-3">{cert.issuer}</p>
                        <div className="text-gray-600 mb-4">
                          <span className="font-medium">Issued {cert.date}</span> • <span>Credential ID: {cert.credentialId}</span>
                        </div>
                        <p className="text-gray-700 leading-relaxed">{cert.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #7c3aed 0%, transparent 50%), 
                             radial-gradient(circle at 75% 75%, #06b6d4 0%, transparent 50%)`
          }}></div>
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold mb-8">Let's Create Something Amazing</h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Ready to collaborate on innovative product solutions? Let's discuss how we can create impactful user experiences together.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <button 
              onClick={() => window.open('mailto:siddharthdhuriya@gmail.com', '_blank')}
              className="group flex items-center gap-4 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 px-10 py-5 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl text-lg font-semibold"
            >
              <Mail className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
              Get In Touch
            </button>
            
            <a 
              href="https://www.linkedin.com/in/siddharth-dhuriya" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center gap-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm px-10 py-5 rounded-full transition-all duration-300 hover:scale-105 border border-white/20 text-lg font-semibold"
            >
              <ExternalLink className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
              LinkedIn Profile
            </a>
          </div>
          
          <div className="pt-12 border-t border-white/20 text-gray-400">
            <p className="text-lg">&copy; 2025 Siddharth Dhuriya. Crafted with passion for innovation.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;