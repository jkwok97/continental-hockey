import './button.module.css';
import { Button } from 'primereact/button';

export interface ButtonProps {
  label: string;
  iconType?: string;
  hasIcon: boolean;
  iconPosition?: 'left' | 'right' | 'top' | 'bottom';
}

const ReactButton = (props: ButtonProps) => {
  return (
    <Button
      label={props.label}
      icon={props.hasIcon ? props.iconType : ''}
      iconPos={props.hasIcon ? props.iconPosition : 'left'}
    />
  );
};

export default ReactButton;
