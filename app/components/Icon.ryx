export const Icon = (props) => {
  const {
    icon,
    color = "currentColor",
    size = 24,
    strokeWidth = 2,
    className = "",
    ...rest
  } = props;

  if (!icon) return null;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      stroke-width={strokeWidth}
      stroke-linecap="round"
      stroke-linejoin="round"
      className={className}
      {...rest}
    >
      {icon.map(([tag, attrs], i) => {
        switch (tag) {
          case 'path':
            return <path key={i} d={attrs.d} />;
          case 'circle':
            return <circle key={i} cx={attrs.cx} cy={attrs.cy} r={attrs.r} />;
          case 'line':
            return <line key={i} x1={attrs.x1} y1={attrs.y1} x2={attrs.x2} y2={attrs.y2} />;
          case 'polyline':
            return <polyline key={i} points={attrs.points} />;
          case 'polygon':
            return <polygon key={i} points={attrs.points} />;
          case 'rect':
            return <rect key={i} x={attrs.x} y={attrs.y} width={attrs.width} height={attrs.height} rx={attrs.rx} ry={attrs.ry} />;
          case 'ellipse':
            return <ellipse key={i} cx={attrs.cx} cy={attrs.cy} rx={attrs.rx} ry={attrs.ry} />;
          default:
            return null;
        }
      })}
    </svg>
  );
};
