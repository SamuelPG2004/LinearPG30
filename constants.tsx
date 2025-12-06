
import React from 'react';

export const LinearLogo: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M21 21H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1zM4 19h16V5H4v14z" />
    <path d="M11.5 15.5H8V8.5h3.5a3.5 3.5 0 0 1 0 7zm-1.5-5.5v4h1.5a2 2 0 0 0 0-4H10z" />
  </svg>
);

export const ArrowRightIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 16 16" fill="currentColor" {...props}>
    <path d="M8.53 3.47a.75.75 0 0 0-1.06 1.06l2.72 2.72H3.75a.75.75 0 0 0 0 1.5h6.44L7.47 11.47a.75.75 0 1 0 1.06 1.06l4-4a.75.75 0 0 0 0-1.06l-4-4Z" />
  </svg>
);

export const PlusIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
    </svg>
);

const SvgText: React.FC<{ children: React.ReactNode } & React.SVGProps<SVGSVGElement>> = ({ children, ...props }) => (
    <svg viewBox="0 0 100 20" xmlns="http://www.w3.org/2000/svg" {...props}>
        <text x="50" y="15" textAnchor="middle" fill="currentColor" fontSize="14" fontWeight="bold" fontFamily="sans-serif">{children}</text>
    </svg>
);

export const OpenAILogo: React.FC<React.SVGProps<SVGSVGElement>> = (props) => <SvgText {...props}>OpenAI</SvgText>;
export const CashAppLogo: React.FC<React.SVGProps<SVGSVGElement>> = (props) => <SvgText {...props}>Cash App</SvgText>;
export const ScaleLogo: React.FC<React.SVGProps<SVGSVGElement>> = (props) => <SvgText {...props}>scale</SvgText>;
export const RampLogo: React.FC<React.SVGProps<SVGSVGElement>> = (props) => <SvgText {...props}>ramp</SvgText>;
export const VercelLogo: React.FC<React.SVGProps<SVGSVGElement>> = (props) => <SvgText {...props}>▲ Vercel</SvgText>;
export const CoinbaseLogo: React.FC<React.SVGProps<SVGSVGElement>> = (props) => <SvgText {...props}>coinbase</SvgText>;
export const BoomLogo: React.FC<React.SVGProps<SVGSVGElement>> = (props) => <SvgText {...props}>BOOM</SvgText>;
export const CursorLogo: React.FC<React.SVGProps<SVGSVGElement>> = (props) => <SvgText {...props}>CURSOR</SvgText>;
