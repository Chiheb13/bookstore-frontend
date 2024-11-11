import { TypeAnimation } from 'react-type-animation';

export default function TextMoving() {
  return (
    <TypeAnimation
      sequence={[
        "Buy  your textbooks for the best price.", 
        3000,
        '', 
        1000, 
      ]}
      wrapper="span"
      cursor={true}
      repeat={Infinity}
      style={{ fontSize: '2em', display: 'inline-block' }}
    />
  );
};
