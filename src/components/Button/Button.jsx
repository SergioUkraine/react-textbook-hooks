import { Btn } from './Button.styled';

function Button({
  selected = false,
  type = 'button',
  children,
  ...otherProps
}) {
  return (
    <Btn type={type} isSelected={selected} {...otherProps}>
      {children}
    </Btn>
  );
}

export default Button;
