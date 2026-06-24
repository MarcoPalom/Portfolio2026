import GamepadIcon from './icons/GamepadIcon';
import BezierIcon from './icons/BezierIcon';
import BassIcon from './icons/BassIcon';
import SportsIcon from './icons/SportsIcon';
import RadarIcon from './icons/RadarIcon';

interface HobbiesIconMapperProps {
  id: string; // e.g. '01', 'gamepad', 'videojuegos'
}

export default function HobbiesIconMapper({ id }: HobbiesIconMapperProps) {
  const normId = id.toLowerCase().trim();

  switch (normId) {
    case '01':
    case 'gamepad':
    case 'videojuegos':
    case 'videogames':
      return <GamepadIcon />;
      
    case '02':
    case 'bezier':
    case 'dibujo':
    case 'drawing':
      return <BezierIcon />;
      
    case '03':
    case 'bass':
    case 'bajo':
    case 'music':
      return <BassIcon />;
      
    case '04':
    case 'sports':
    case 'deportes':
    case 'tactics':
      return <SportsIcon />;
      
    case '05':
    case 'radar':
    case 'investigacion':
    case 'research':
      return <RadarIcon />;
      
    default:
      return null;
  }
}
