import React, { useState } from 'react';

const FutureTechTimeline = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const categories = [
    { id: 'all', name: 'All Technologies' },
    { id: 'ai', name: 'AI & Computing' },
    { id: 'health', name: 'Healthcare' },
    { id: 'energy', name: 'Energy & Climate' },
    { id: 'transport', name: 'Transportation' },
    { id: 'space', name: 'Space' }
  ];
  
  const technologies = [
    {
      name: 'Advanced Large Language Models',
      category: 'ai',
      horizon: 'near',
      description: 'AI systems with significantly improved reasoning, problem-solving capabilities, and multimodal understanding',
      impact: 'High',
      icon: '🧠'
    },
    {
      name: 'Quantum Computing at Scale',
      category: 'ai',
      horizon: 'mid',
      description: 'Practical quantum computers with thousands of stable qubits solving previously intractable problems',
      impact: 'Transformative',
      icon: '⚛️'
    },
    {
      name: 'Brain-Computer Interfaces',
      category: 'health',
      horizon: 'mid',
      description: 'Direct neural interfaces allowing control of devices through thought and enhanced cognitive capabilities',
      impact: 'High',
      icon: '🔌'
    },
    {
      name: 'CRISPR/Gene Editing Therapies',
      category: 'health',
      horizon: 'near',
      description: 'Targeted genetic modifications to treat genetic diseases and enhance human capabilities',
      impact: 'High',
      icon: '🧬'
    },
    {
      name: 'Lab-grown Organs',
      category: 'health',
      horizon: 'mid',
      description: 'Custom-grown replacement organs using patient\'s own cells, eliminating rejection and donor waiting lists',
      impact: 'High',
      icon: '❤️'
    },
    {
      name: 'Fusion Energy',
      category: 'energy',
      horizon: 'far',
      description: 'Commercial fusion reactors providing abundant, clean energy with minimal radioactive waste',
      impact: 'Transformative',
      icon: '⚡'
    },
    {
      name: 'Advanced Energy Storage',
      category: 'energy',
      horizon: 'near',
      description: 'Next-generation batteries and storage systems enabling renewable energy transition',
      impact: 'High',
      icon: '🔋'
    },
    {
      name: 'Autonomous Transportation Network',
      category: 'transport',
      horizon: 'mid',
      description: 'Fully integrated self-driving vehicles coordinating across road, air, and sea',
      impact: 'High',
      icon: '🚗'
    },
    {
      name: 'Electric Aircraft',
      category: 'transport',
      horizon: 'mid',
      description: 'Commercial electric planes for short and medium-haul flights',
      impact: 'Medium',
      icon: '✈️'
    },
    {
      name: 'Hyperloop/Vacuum Tube Transport',
      category: 'transport',
      horizon: 'far',
      description: 'Ultra-high-speed ground transportation in low-pressure tubes',
      impact: 'Medium',
      icon: '🚄'
    },
    {
      name: 'Lunar Settlement',
      category: 'space',
      horizon: 'far',
      description: 'Permanent human presence on the Moon with resource utilization',
      impact: 'Medium',
      icon: '🌕'
    },
    {
      name: 'Space Manufacturing',
      category: 'space',
      horizon: 'far',
      description: 'Industrial production of materials with unique properties only possible in microgravity',
      impact: 'Medium',
      icon: '🏭'
    },
    {
      name: 'AR/VR Integration',
      category: 'ai',
      horizon: 'near',
      description: 'Seamless augmented and virtual reality experiences in daily life',
      impact: 'Medium',
      icon: '👓'
    },
    {
      name: 'Personalized Medicine',
      category: 'health',
      horizon: 'near',
      description: 'Treatments tailored to individual genetic profiles and health histories',
      impact: 'High',
      icon: '💊'
    },
    {
      name: 'Direct Air Carbon Capture',
      category: 'energy',
      horizon: 'mid',
      description: 'Industrial-scale removal of CO2 directly from the atmosphere',
      impact: 'High',
      icon: '♻️'
    }
  ];
  
  const getHorizonYears = (horizon) => {
    switch(horizon) {
      case 'near': return '2025-2030';
      case 'mid': return '2030-2040';
      case 'far': return '2040-2050';
      default: return '';
    }
  };
  
  const getHorizonColor = (horizon) => {
    switch(horizon) {
      case 'near': return 'bg-green-100 border-green-300';
      case 'mid': return 'bg-yellow-100 border-yellow-300';
      case 'far': return 'bg-red-100 border-red-300';
      default: return '';
    }
  };
  
  const getImpactColor = (impact) => {
    switch(impact) {
      case 'Low': return 'bg-blue-100';
      case 'Medium': return 'bg-purple-100';
      case 'High': return 'bg-orange-100';
      case 'Transformative': return 'bg-red-100';
      default: return '';
    }
  };
  
  const filteredTech = technologies.filter(tech => 
    selectedCategory === 'all' || tech.category === selectedCategory
  );

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-center">Emerging Technologies Timeline</h1>
      
      <div className="flex flex-wrap justify-center gap-2 mb-6">
        {categories.map(category => (
          <button
            key={category.id}
            className={`px-3 py-1 rounded-full text-sm ${
              selectedCategory === category.id 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-200 text-gray-700'
            }`}
            onClick={() => setSelectedCategory(category.id)}
          >
            {category.name}
          </button>
        ))}
      </div>
      
      <div className="mb-4 flex justify-center gap-4">
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-green-300 mr-2"></div>
          <span className="text-sm">Near-term (2025-2030)</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-yellow-300 mr-2"></div>
          <span className="text-sm">Mid-term (2030-2040)</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-red-300 mr-2"></div>
          <span className="text-sm">Long-term (2040-2050)</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredTech.map((tech, index) => (
          <div 
            key={index} 
            className={`border-2 rounded-lg p-4 ${getHorizonColor(tech.horizon)} transition-all hover:shadow-md`}
          >
            <div className="flex justify-between items-center mb-2">
              <span className="text-3xl">{tech.icon}</span>
              <span className={`px-2 py-1 rounded-full text-xs ${getImpactColor(tech.impact)}`}>
                {tech.impact} Impact
              </span>
            </div>
            <h3 className="font-bold text-lg mb-1">{tech.name}</h3>
            <p className="text-sm text-gray-600 mb-2">{getHorizonYears(tech.horizon)}</p>
            <p className="text-sm">{tech.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FutureTechTimeline;