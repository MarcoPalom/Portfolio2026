import GamepadDiagram from './diagrams/GamepadDiagram';
import BezierDiagram from './diagrams/BezierDiagram';
import BassDiagram from './diagrams/BassDiagram';
import SportsDiagram from './diagrams/SportsDiagram';
import RadarDiagram from './diagrams/RadarDiagram';

interface HobbiesDiagramMapperProps {
  id: string; // e.g. '01', 'gamepad', 'videojuegos'
}

export default function HobbiesDiagramMapper({ id }: HobbiesDiagramMapperProps) {
  const normId = id.toLowerCase().trim();

  switch (normId) {
    case '01':
    case 'gamepad':
    case 'videojuegos':
    case 'videogames':
      return <GamepadDiagram />;
      
    case '02':
    case 'bezier':
    case 'dibujo':
    case 'drawing':
      return <BezierDiagram />;
      
    case '03':
    case 'bass':
    case 'bajo':
    case 'music':
      return <BassDiagram />;
      
    case '04':
    case 'sports':
    case 'deportes':
    case 'tactics':
      return <SportsDiagram />;
      
    case '05':
    case 'radar':
    case 'investigacion':
    case 'research':
      return <RadarDiagram />;
      
    default:
      return null;
  }
}
