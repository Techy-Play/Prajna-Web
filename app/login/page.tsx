'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import { motion } from "framer-motion"

// Forgot Password Popup Component
const ForgotPasswordPopup = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState<'success' | 'error' | null>(null);
  const [step, setStep] = useState<'form' | 'success' | 'error'>('form');
  
  // Email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      setMessage('Please enter your email address');
      setMessageType('error');
      return;
    }
    
    if (!emailRegex.test(email)) {
      setMessage('Please enter a valid email address');
      setMessageType('error');
      return;
    }
    
    setIsSubmitting(true);
    setMessage('');
    
    try {
      // Simulate API call for password reset
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Show success message
      setMessage(`Password reset link has been sent to ${email}`);
      setMessageType('success');
      setStep('success');
      
      // Clear the input field
      setEmail('');
    } catch (error) {
      console.error('Password reset error:', error);
      setMessage('Failed to send reset link. Please try again.');
      setMessageType('error');
      setStep('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    onClose();
    // Reset the form state after the animation completes
    setTimeout(() => {
      setMessage('');
      setMessageType(null);
      setStep('form');
    }, 300);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.2 }}
        className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-4 sm:p-6 w-full max-w-xs sm:max-w-sm md:max-w-md m-4"
      >
        {step === 'form' && (
          <>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold dark:text-white">Reset your password</h3>
              <button 
                onClick={handleClose}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                aria-label="Close"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Enter your email address and we'll send you a link to reset your password. This link will expire after 24 hours.
            </p>
            
            {message && messageType === 'error' && (
              <div className="mb-4 p-3 rounded-lg bg-red-100 text-red-700 border border-red-400 dark:bg-red-900/50 dark:text-red-300 dark:border-red-800">
                {message}
              </div>
            )}
            
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="reset-email" className="block text-sm font-medium mb-1 dark:text-gray-200">Email address</label>
                <input 
                  type="email" 
                  id="reset-email" 
                  placeholder="name@example.com"
                  className={`w-full px-4 py-2 border ${
                    messageType === 'error' ? 'border-red-500 dark:border-red-700' : 'dark:border-gray-700'
                  } rounded-lg focus:ring-2 focus:ring-indigo-400 focus:border-indigo-500 dark:bg-gray-700 dark:text-white`}
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                  Enter the email address you used to create your account
                </p>
              </div>
              
              <div className="flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={handleClose}
                  className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
                >
                  Cancel
                </button>
                <button 
                  type="submit" 
                  className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 dark:bg-indigo-600 dark:hover:bg-indigo-700 disabled:opacity-70 flex items-center"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : 'Reset Password'}
                </button>
              </div>
            </form>
          </>
        )}
        
        {step === 'success' && (
          <div className="text-center py-4">
            <div className="flex justify-center mb-4">
              <div className="rounded-full bg-green-100 p-3 dark:bg-green-900">
                <svg className="w-8 h-8 text-green-500 dark:text-green-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2 dark:text-white">Check your email</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              We've sent a password reset link to <span className="font-medium">{message.split(' ').pop()}</span>. 
              The link will expire in 24 hours.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-6 text-sm">
              If you don't see the email in your inbox, please check your spam folder.
            </p>
            <button 
              onClick={handleClose} 
              className="w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 dark:bg-indigo-600 dark:hover:bg-indigo-700"
            >
              Close
            </button>
          </div>
        )}
        
        {step === 'error' && (
          <div className="text-center py-4">
            <div className="flex justify-center mb-4">
              <div className="rounded-full bg-red-100 p-3 dark:bg-red-900">
                <svg className="w-8 h-8 text-red-500 dark:text-red-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2 dark:text-white">Something went wrong</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              {message || "We couldn't send the reset link. Please try again later."}
            </p>
            <div className="flex space-x-3">
              <button 
                onClick={() => setStep('form')} 
                className="w-1/2 px-4 py-2 text-sm font-medium text-indigo-600 bg-white border border-indigo-600 rounded-lg hover:bg-indigo-50 dark:bg-gray-700 dark:text-indigo-400 dark:border-indigo-500 dark:hover:bg-gray-600"
              >
                Try Again
              </button>
              <button 
                onClick={handleClose} 
                className="w-1/2 px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 dark:bg-indigo-600 dark:hover:bg-indigo-700"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isResetPopupOpen, setIsResetPopupOpen] = useState(false);
  const [socialLoginLoading, setSocialLoginLoading] = useState<'google' | 'github' | 'microsoft' | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');
    
    // Basic validation
    if (!email || !password) {
      setErrorMessage('Please fill in all fields');
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Add your login logic here
      console.log({ email, password, rememberMe });
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
    } catch (error) {
      console.error('Login error:', error);
      setErrorMessage('Invalid email or password');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Social login handlers
  const handleGoogleLogin = async () => {
    try {
      setSocialLoginLoading('google');
      // Implementation for Google OAuth
      console.log('Logging in with Google...');
      
      // Example OAuth flow (replace with actual implementation)
      // window.location.href = '/api/auth/google';
      
      // Simulate OAuth redirect
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // This would normally redirect to Google so the following code won't execute
      // in a real implementation
      console.log('Google login successful');
    } catch (error) {
      console.error('Google login error:', error);
      setErrorMessage('Failed to login with Google');
    } finally {
      setSocialLoginLoading(null);
    }
  };

  const handleGithubLogin = async () => {
    try {
      setSocialLoginLoading('github');
      // Implementation for GitHub OAuth
      console.log('Logging in with GitHub...');
      
      // Example OAuth flow
      // window.location.href = '/api/auth/github';
      
      // Simulate OAuth redirect
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      console.log('GitHub login successful');
    } catch (error) {
      console.error('GitHub login error:', error);
      setErrorMessage('Failed to login with GitHub');
    } finally {
      setSocialLoginLoading(null);
    }
  };

  const handleMicrosoftLogin = async () => {
    try {
      setSocialLoginLoading('microsoft');
      // Implementation for Microsoft OAuth
      console.log('Logging in with Microsoft...');
      
      // Example OAuth flow
      // window.location.href = '/api/auth/microsoft';
      
      // Simulate OAuth redirect
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      console.log('Microsoft login successful');
    } catch (error) {
      console.error('Microsoft login error:', error);
      setErrorMessage('Failed to login with Microsoft');
    } finally {
      setSocialLoginLoading(null);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Fixed Header */}
      <SiteHeader />
  
      {/* Main Content with Full Height */}
      <section className="flex-grow flex items-center justify-center bg-gradient-to-br from-gray-50 to-blue-100 dark:from-gray-900 dark:to-blue-950 pt-16 pb-8 relative overflow-hidden">
        {/* Flickering Grid Background */}
        <div className="absolute inset-0 w-full h-full z-0">
          <FlickeringGrid
            className="absolute inset-0 z-0 [mask-image:radial-gradient(70%_70%_at_center,white,transparent)]"
            squareSize={4}
            gridGap={6}
            color="#60A5FA"
            maxOpacity={0.4}
            flickerChance={0.1}
            height={2000}
            width={2000}
          />
        </div>

        {/* Content Container */}
        <div className="container mx-auto px-4 relative z-10 flex items-center justify-center py-4 md:py-8">
          <div className="flex flex-col md:flex-row items-stretch max-w-7xl mx-auto w-full">
            {/* Hero Image */}
            <div className="hidden md:block md:w-1/2 p-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="rounded-lg overflow-hidden shadow-lg dark:shadow-gray-800 backdrop-blur-sm bg-white/30 dark:bg-gray-800/30 h-full"
              >
                <Image 
                  src="/images/login.png" 
                  alt="Login illustration" 
                  width={800} 
                  height={600}
                  className="object-cover w-full h-full"
                  priority
                />
              </motion.div>
            </div>

            {/* Login Form */}
            <div className="w-full md:w-1/2 p-2 md:p-4 flex items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white/80 dark:bg-gray-800/90 backdrop-blur-md rounded-lg shadow-lg p-4 md:p-8 w-full max-w-md mx-auto"
              >
                <h2 className="text-2xl font-bold text-center mb-6 dark:text-white">Login to Prajna AI</h2>
                
                {errorMessage && (
                  <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg dark:bg-red-900/50 dark:text-red-300 dark:border-red-800">
                    {errorMessage}
                  </div>
                )}
                
                <form onSubmit={handleSubmit} noValidate>
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium mb-1 dark:text-gray-200">Email address</label>
                    <input 
                      type="email" 
                      id="email" 
                      placeholder="name@example.com"
                      className="w-full px-4 py-2 border dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="password" className="block text-sm font-medium mb-1 dark:text-gray-200">Password</label>
                    <input 
                      type="password" 
                      id="password" 
                      className="w-full px-4 py-2 border dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label className="inline-flex items-center cursor-pointer">
                      <input 
                        type="checkbox" 
                        className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-700"
                        checked={rememberMe}
                        onChange={(e) => setRememberMe(e.target.checked)}
                      />
                      <span className="ml-2 text-sm dark:text-gray-200">Remember me</span>
                    </label>
                  </div>
                  
                  <div className="mb-6">
                    <button 
                      type="submit" 
                      className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-medium py-2.5 px-4 rounded-lg transition-colors dark:bg-indigo-600 dark:hover:bg-indigo-700 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Logging in...
                        </>
                      ) : 'Login'}
                    </button>
                  </div>
                  
                  <div className="text-center mb-6">
                    <div className="flex items-center justify-center mb-4">
                      <div className="flex-grow h-px bg-gray-300 dark:bg-gray-600"></div>
                      <span className="px-3 text-sm text-gray-500 dark:text-gray-400">Or continue with</span>
                      <div className="flex-grow h-px bg-gray-300 dark:bg-gray-600"></div>
                    </div>
                    <div className="flex justify-center space-x-4">
                      <button 
                        type="button" 
                        className="relative p-2 border rounded-lg hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-700 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                        aria-label="Login with Google"
                        onClick={handleGoogleLogin}
                        disabled={socialLoginLoading !== null}
                      >
                        {socialLoginLoading === 'google' ? (
                          <svg className="animate-spin h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                        ) : (
                          <svg className="w-5 h-5 text-red-500" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M21.35,11.1H12.18V13.83H18.69C18.36,17.64 15.19,19.27 12.19,19.27C8.36,19.27 5,16.25 5,12C5,7.9 8.2,4.73 12.2,4.73C15.29,4.73 17.1,6.7 17.1,6.7L19,4.72C19,4.72 16.56,2 12.1,2C6.42,2 2.03,6.8 2.03,12C2.03,17.05 6.16,22 12.25,22C17.6,22 21.5,18.33 21.5,12.91C21.5,11.76 21.35,11.1 21.35,11.1V11.1Z" />
                          </svg>
                        )}
                      </button>
                      <button 
                        type="button" 
                        className="relative p-2 border rounded-lg hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-700 dark:text-white transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                        aria-label="Login with GitHub"
                        onClick={handleGithubLogin}
                        disabled={socialLoginLoading !== null}
                      >
                        {socialLoginLoading === 'github' ? (
                          <svg className="animate-spin h-5 w-5 text-gray-500 dark:text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                        ) : (
                          <svg className="w-5 h-5" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z" />
                          </svg>
                        )}
                      </button>
                      <button 
                        type="button" 
                        className="relative p-2 border rounded-lg hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-700 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                        aria-label="Login with Microsoft"
                        onClick={handleMicrosoftLogin}
                        disabled={socialLoginLoading !== null}
                      >
                        {socialLoginLoading === 'microsoft' ? (
                          <svg className="animate-spin h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                        ) : (
                          <svg className="w-5 h-5 text-blue-500" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M2,3H11V12H2V3M11,22H2V13H11V22M21,3V12H12V3H21M21,22H12V13H21V22Z" />
                          </svg>
                        )}
                      </button>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row justify-between text-sm">
                    <button
                      type="button"
                      onClick={() => setIsResetPopupOpen(true)}
                      className="text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300 mb-2 sm:mb-0 text-left"
                    >
                      Forgot password?
                    </button>
                    <Link 
                      href="/signup" 
                      className="text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300"
                    >
                      Need an account? Sign up
                    </Link>
                  </div>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Forgot Password Popup */}
      <ForgotPasswordPopup 
        isOpen={isResetPopupOpen} 
        onClose={() => setIsResetPopupOpen(false)} 
      />
      <SiteFooter />
    </div>
  );
}