import { SignUpLogo, GoogleLogo } from '../constants';

const SignUp: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-sm text-center">
        <SignUpLogo className="mx-auto mb-8" />
        
        <h1 className="text-3xl font-medium text-gray-200 mb-8">
          Create your workspace
        </h1>
        
        <div className="space-y-3">
          <button className="w-full flex items-center justify-center gap-2 bg-[#4A44C6] hover:bg-[#5851e2] text-white font-medium py-2.5 px-4 rounded-lg transition-colors">
            <GoogleLogo />
            Continue with Google
          </button>
          
          <button className="w-full bg-[#252528] hover:bg-[#333336] border border-white/10 text-gray-300 font-medium py-2.5 px-4 rounded-lg transition-colors">
            Continue with email
          </button>
          
          <button className="w-full bg-[#252528] hover:bg-[#333336] border border-white/10 text-gray-300 font-medium py-2.5 px-4 rounded-lg transition-colors">
            Continue with SAML SSO
          </button>
        </div>
        
        <p className="text-xs text-gray-500 mt-8">
          By signing up, you agree to our <a href="#" className="text-gray-400 hover:text-white underline">Terms of Service</a> and <a href="#" className="text-gray-400 hover:text-white underline">Data Processing Agreement</a>.
        </p>
        
        <p className="text-sm text-gray-500 mt-8">
          Already have an account? <a href="#" className="text-gray-300 hover:text-white font-medium underline">Log in</a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
