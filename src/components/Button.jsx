const Button = ({
  text,
  onclick,
  bgcolor,
  color = '#183153',
  type,
  width,
  height,
  fontsize = '1rem',
}) => {
  function MouseOver(event) {
    event.target.style.background = bgcolor;
    event.target.style.filter = 'brightness(80%)';
  }
  function MouseOut(event) {
    event.target.style.filter = 'none';
  }

  const estilos = {
    padding: '8px',
    borderRadius: '10px 10px 12px 12px',
    borderTop: 'solid 2px #183153',
    borderLeft: 'solid 2px #183153',
    borderRight: 'solid 2px #183153',
    borderBottom: 'solid 4px #183153',
    overflow: 'hidden',
    background: bgcolor,
    fontSize: fontsize,
    fontWeight: 'bold',
    color: color,
    width: width,
    height: height,
  };

  return (
    <button
      type={type}
      onClick={onclick}
      style={estilos}
      onMouseOver={MouseOver}
      onMouseOut={MouseOut}
    >
      {text}
    </button>
  );
};

export default Button;
