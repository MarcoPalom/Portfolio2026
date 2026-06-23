import ReactIcon from './icons/ReactIcon';
import NextIcon from './icons/NextIcon';
import NuxtIcon from './icons/NuxtIcon';
import TSIcon from './icons/TSIcon';
import TailwindIcon from './icons/TailwindIcon';
import GSAPIcon from './icons/GSAPIcon';
import FigmaIcon from './icons/FigmaIcon';
import IllustratorIcon from './icons/IllustratorIcon';
import PhotoshopIcon from './icons/PhotoshopIcon';
import NodeIcon from './icons/NodeIcon';

interface StackIconMapperProps {
  id: string;
}

export default function StackIconMapper({ id }: StackIconMapperProps) {
  switch (id) {
    case '01':
      return <ReactIcon />;
    case '02':
      return <NextIcon />;
    case '03':
      return <NuxtIcon />;
    case '04':
      return <TSIcon />;
    case '05':
      return <TailwindIcon />;
    case '06':
      return <GSAPIcon />;
    case '07':
      return <FigmaIcon />;
    case '08':
      return <IllustratorIcon />;
    case '09':
      return <PhotoshopIcon />;
    case '10':
      return <NodeIcon />;
    default:
      return null;
  }
}
