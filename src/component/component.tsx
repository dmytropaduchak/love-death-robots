import { CSSProperties, FC } from 'react';

export const DEFAULT_COLOR = 'currentColor';
export const DEFAULT_SIZE = 24;

export interface Props {
  css?: CSSProperties, 
  color?: string | [string, string, string],
  size?: number,
}

const defaultCSS = {};

export const Component: FC<Props> = ({ color, size, css }) => {
  const fill = Array.isArray(color) ? color : [color];
  const stroke = Array.isArray(color) ? color : [color];

  const width = size || DEFAULT_SIZE;
  const height = size || DEFAULT_SIZE;

  const style = css || defaultCSS;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 200 200"
      style={style}
    >
      {/* <g transform-origin="50 70"> */}
        <g transform="translate(58, 48) scale(0.82)">
          <path
            d="
              M 0 0
              A 20 20 0 0 1 40 0
            "
            fill={fill[0] || DEFAULT_COLOR}
            stroke={stroke[0] || DEFAULT_COLOR}
            transform="translate(-28.3, 28.3) rotate(-45)"
          />
          <path
            d="
              M 0 0
              A 20 20 0 0 1 40 0
            "
            fill={fill[0] || DEFAULT_COLOR}
            stroke={stroke[0] || DEFAULT_COLOR}
            transform="rotate(45)"
          />
          <rect
            x="-7.5"
            y="0"
            width="40"
            height="40"
            transform="translate(5.3, 5.3) rotate(45)"
            fill={fill[0] || DEFAULT_COLOR}
            stroke={stroke[0] || DEFAULT_COLOR}
          />
        </g>

        {/* <animateTransform
          id="1"
          attributeName="transform"
          type="scale"
          begin="0s; 2.end"
          dur="0.3s"
          values="1;1.2;1"
          repeatCount="2"
        />
        <animateTransform
          id="2"
          attributeName="transform"
          type="scale"
          begin="1.end"
          dur="1s"
          values="1;1;1"
          repeatCount="1"
        />
      </g> */}

      {/* <g transform-origin="136.4 63"> */}
        <g transform="translate(140, 70)">
          <rect
            x="-8"
            y="-34"
            width="15"
            height="65"
            rx="7.5"
            transform="rotate(45)"
            fill={fill[1] || fill[0] || DEFAULT_COLOR}
            stroke={stroke[1] || stroke[0] || DEFAULT_COLOR}
            // fill={fill}
            // stroke={stroke}
          />
          <rect
            x="-5"
            y="-30"
            width="15"
            height="60"
            transform="rotate(-45)"
            fill={fill[1] || fill[0] || DEFAULT_COLOR}
            stroke={stroke[1] || stroke[0] || DEFAULT_COLOR}
          />
        </g>

        {/* <rect
          x="136.4"
          y="63"
          width="10"
          height="10"
          fill="red"
        />
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 8 8"
          to="360 8 8"
          dur="3s"
          repeatCount="indefinite"
        />
      </g> */}

      <rect
        x="40"
        y="150"
        width="120"
        height="15"
        fill={fill[2] || fill[0] || DEFAULT_COLOR}
        stroke={stroke[2] || stroke[0] || DEFAULT_COLOR}
      />
    </svg>
  );
};
