import React from 'react';

export const LinearLogo: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M21 21H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1zM4 19h16V5H4v14z" />
    <path d="M11.5 15.5H8V8.5h3.5a3.5 3.5 0 0 1 0 7zm-1.5-5.5v4h1.5a2 2 0 0 0 0-4H10z" />
  </svg>
);

export const SignUpLogo: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <circle cx="24" cy="24" r="24" fill="white" />
        <g clipPath="url(#clipPath-signup)">
            <line x1="12" y1="12" x2="36" y2="36" stroke="black" strokeWidth="2.5" />
            <line x1="18" y1="12" x2="36" y2="30" stroke="black" strokeWidth="2.5" />
            <line x1="24" y1="12" x2="36" y2="24" stroke="black" strokeWidth="2.5" />
            <line x1="30" y1="12" x2="36" y2="18" stroke="black" strokeWidth="2.5" />
            <line x1="12" y1="18" x2="30" y2="36" stroke="black" strokeWidth="2.5" />
            <line x1="12" y1="24" x2="24" y2="36" stroke="black" strokeWidth="2.5" />
            <line x1="12" y1="30" x2="18" y2="36" stroke="black" strokeWidth="2.5" />
        </g>
        <defs>
            <clipPath id="clipPath-signup">
                <circle cx="24" cy="24" r="24" />
            </clipPath>
        </defs>
    </svg>
);

export const GoogleLogo: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 48 48" {...props} className="w-5 h-5">
        <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path>
        <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path>
        <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.223,0-9.657-3.657-11.303-8H6.306C9.656,35.663,16.318,40,24,40z"></path>
        <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571l6.19,5.238C43.021,36.251,44,34,44,31C44,27.202,44,23.338,43.611,20.083z"></path>
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