import { useState } from 'react';
import { Droplets, Sun, Sparkles, SprayCan, CloudRain, Bird, Scissors, Factory } from 'lucide-react';

type ViewMode = 'without' | 'with';

const THREATS = [
  { icon: CloudRain, label: 'Acid Rain', tooltip: 'Acidic rainfall slowly etches into unprotected clear coat.' },
  { icon: Bird, label: 'Bird Droppings', tooltip: 'Highly acidic and can permanently stain paint within hours.' },
  { icon: Scissors, label: 'Scratches', tooltip: 'Improper washing and automatic car washes cause fine swirl marks.' },
  { icon: Factory, label: 'Pollution', tooltip: 'Industrial fallout and road grime bond to the surface over time.' },
];

const BENEFITS = [
  { icon: Droplets, label: 'Water Beading', tooltip: 'Hydrophobic surface causes water to bead and roll off instantly.' },
  { icon: Sun, label: 'UV Protection', tooltip: 'Blocks UV rays that would otherwise fade and oxidize the clear coat.' },
  { icon: Sparkles, label: 'Enhanced Gloss', tooltip: 'Creates a deeper, glassier reflection than wax or sealant.' },
  { icon: SprayCan, label: 'Easy Cleaning', tooltip: 'Contaminants have a harder time bonding, making washes faster.' },
];

const LAYERS_WITHOUT = ['Clear Coat', 'Color Base Coat', 'Primer Coat', 'Body Panel'];
const LAYERS_WITH = ['Ceramic Coating', 'Clear Coat', 'Color Base Coat', 'Primer Coat', 'Body Panel'];

export default function CeramicCoatingDiagram() {
  const [mode, setMode] = useState<ViewMode>('without');
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);
  const items = mode === 'without' ? THREATS : BENEFITS;
  const layers = mode === 'without' ? LAYERS_WITHOUT : LAYERS_WITH;

  return (
    <div className="bg-gray-50 rounded-xl p-6 sm:p-10">
      <div className="flex justify-center gap-2 mb-10">
        <button
          onClick={() => setMode('without')}
          className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-colors ${
            mode === 'without' ? 'bg-black text-white' : 'bg-white border border-gray-300'
          }`}
        >
          Without Ceramic Coating
        </button>
        <button
          onClick={() => setMode('with')}
          className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-colors ${
            mode === 'with' ? 'bg-black text-white' : 'bg-white border border-gray-300'
          }`}
        >
          With Ceramic Coating
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="flex justify-center gap-6 flex-wrap">
          {items.map((item) => (
            <div
              key={item.label}
              className="relative flex flex-col items-center gap-2"
              onMouseEnter={() => setActiveTooltip(item.label)}
              onMouseLeave={() => setActiveTooltip(null)}
            >
              <div
                className={`w-16 h-16 rounded-full flex items-center justify-center ${
                  mode === 'without' ? 'bg-red-100 text-red-600' : 'bg-green-100 text-green-700'
                }`}
              >
                <item.icon className="w-7 h-7" />
              </div>
              <span className="text-xs font-semibold text-center">{item.label}</span>
              {activeTooltip === item.label && (
                <div className="absolute top-full mt-2 w-48 bg-black text-white text-xs rounded-md p-3 z-10 shadow-lg">
                  {item.tooltip}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-1">
          {layers.map((layer) => (
            <div
              key={layer}
              className={`rounded-md px-4 py-3 text-center text-sm font-semibold border ${
                layer === 'Ceramic Coating'
                  ? 'bg-blue-100 border-blue-300 text-blue-800'
                  : layer === 'Clear Coat'
                  ? 'bg-gray-100 border-gray-300'
                  : layer === 'Color Base Coat'
                  ? 'bg-gray-200 border-gray-300'
                  : layer === 'Primer Coat'
                  ? 'bg-gray-300 border-gray-400'
                  : 'bg-gray-400 border-gray-500 text-white'
              }`}
            >
              {layer}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
