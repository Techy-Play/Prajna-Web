"use client"

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from 'next/image';
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import { motion } from "framer-motion"

export default function Signup() {
  // User type selection
  const [userType, setUserType] = useState<'individual' | 'organization'>('individual');
  
  // Common fields
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordMatch, setPasswordMatch] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Individual fields
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  
  // Organization fields
  const [orgName, setOrgName] = useState("");
  const [orgSize, setOrgSize] = useState("");
  const [industry, setIndustry] = useState("");
  const [contactPerson, setContactPerson] = useState("");

  // Check if passwords match when either password field changes
  useEffect(() => {
    if (confirmPassword) {
      setPasswordMatch(password === confirmPassword);
    } else {
      setPasswordMatch(true);
    }
  }, [password, confirmPassword]);

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!passwordMatch) return;
    if (password.length < 8) return;
    
    setIsSubmitting(true);
    
    try {
      // Create form data based on user type
      const userData = userType === 'individual' 
        ? { email, password, firstName, lastName, type: 'individual' }
        : { email, password, orgName, orgSize, industry, contactPerson, type: 'organization' };
      
      console.log(userData);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
    } catch (error) {
      console.error('Signup error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />

      {/* Main Content */}
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
            height={1000}
            width={2000}
          />
        </div>

        {/* Content Container */}
        <div className="container mx-auto px-4 relative z-10 flex items-center justify-center py-4 md:py-8">
          <div className="flex flex-col md:flex-row items-start max-w-7xl mx-auto w-full">
            {/* Hero Image */}
            <div className="hidden md:block md:w-1/2 p-4 md:sticky md:top-24 md:self-start">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="rounded-lg overflow-hidden shadow-lg dark:shadow-gray-800 backdrop-blur-sm bg-white/30 dark:bg-gray-800/30 h-[600px]"
              >
                <Image 
                  src="/images/signup.png" 
                  alt="Signup illustration" 
                  width={800} 
                  height={600}
                  className="object-cover w-full h-full"
                  priority
                />
              </motion.div>
            </div>

            {/* Signup Form */}
            <div className="w-full md:w-1/2 p-2 md:p-4 flex items-center">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white/80 dark:bg-gray-800/90 backdrop-blur-md rounded-lg shadow-lg p-4 md:p-8 w-full max-w-md mx-auto"
              >
                <h2 className="text-2xl font-bold text-center mb-6 dark:text-white">Join Prajna AI</h2>
                
                {/* User Type Selector */}
                <div className="mb-6">
                  <div className="flex justify-center space-x-4">
                    <button
                      type="button"
                      onClick={() => setUserType('individual')}
                      className={`px-4 py-2 rounded-lg transition-colors ${
                        userType === 'individual'
                          ? 'bg-indigo-500 text-white'
                          : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600'
                      }`}
                    >
                      Individual
                    </button>
                    <button
                      type="button"
                      onClick={() => setUserType('organization')}
                      className={`px-4 py-2 rounded-lg transition-colors ${
                        userType === 'organization'
                          ? 'bg-indigo-500 text-white'
                          : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600'
                      }`}
                    >
                      Organization
                    </button>
                  </div>
                </div>
                
                <form onSubmit={handleSignup} noValidate>
                  {/* Individual-specific fields */}
                  {userType === 'individual' && (
                    <div className="space-y-4 mb-4">
                      <div className="flex space-x-3">
                        <div className="w-1/2">
                          <label htmlFor="firstName" className="block text-sm font-medium mb-1 dark:text-gray-200">First Name</label>
                          <input 
                            type="text" 
                            id="firstName" 
                            placeholder="John"
                            className="w-full px-4 py-2 border dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
                            required
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                          />
                        </div>
                        <div className="w-1/2">
                          <label htmlFor="lastName" className="block text-sm font-medium mb-1 dark:text-gray-200">Last Name</label>
                          <input 
                            type="text" 
                            id="lastName" 
                            placeholder="Doe"
                            className="w-full px-4 py-2 border dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
                            required
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Organization-specific fields */}
                  {userType === 'organization' && (
                    <div className="space-y-4 mb-4">
                      <div>
                        <label htmlFor="orgName" className="block text-sm font-medium mb-1 dark:text-gray-200">Organization Name</label>
                        <input 
                          type="text" 
                          id="orgName" 
                          placeholder="Company, Inc."
                          className="w-full px-4 py-2 border dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
                          required
                          value={orgName}
                          onChange={(e) => setOrgName(e.target.value)}
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="orgSize" className="block text-sm font-medium mb-1 dark:text-gray-200">Organization Size</label>
                        <select 
                          id="orgSize" 
                          className="w-full px-4 py-2 border dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
                          required
                          value={orgSize}
                          onChange={(e) => setOrgSize(e.target.value)}
                        >
                          <option value="">Select size</option>
                          <option value="1-10">1-10 employees</option>
                          <option value="11-50">11-50 employees</option>
                          <option value="51-200">51-200 employees</option>
                          <option value="201-500">201-500 employees</option>
                          <option value="501+">501+ employees</option>
                        </select>
                      </div>
                      
                      <div>
                        <label htmlFor="industry" className="block text-sm font-medium mb-1 dark:text-gray-200">Industry</label>
                        <select 
                          id="industry" 
                          className="w-full px-4 py-2 border dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
                          required
                          value={industry}
                          onChange={(e) => setIndustry(e.target.value)}
                        >
                          <option value="">Select industry</option>
                          <option value="tech">Technology</option>
                          <option value="finance">Finance</option>
                          <option value="healthcare">Healthcare</option>
                          <option value="education">Education</option>
                          <option value="manufacturing">Manufacturing</option>
                          <option value="retail">Retail</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      
                      <div>
                        <label htmlFor="contactPerson" className="block text-sm font-medium mb-1 dark:text-gray-200">Contact Person Name</label>
                        <input 
                          type="text" 
                          id="contactPerson" 
                          placeholder="Jane Smith"
                          className="w-full px-4 py-2 border dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
                          required
                          value={contactPerson}
                          onChange={(e) => setContactPerson(e.target.value)}
                        />
                      </div>
                    </div>
                  )}

                  {/* Common fields for both user types */}
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
                      minLength={8}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    {password && password.length < 8 && (
                      <p className="text-red-500 text-xs mt-1">Password must be at least 8 characters</p>
                    )}
                  </div>

                  <div className="mb-4">
                    <label htmlFor="confirmPassword" className="block text-sm font-medium mb-1 dark:text-gray-200">Confirm Password</label>
                    <input 
                      type="password" 
                      id="confirmPassword" 
                      className={`w-full px-4 py-2 border ${!passwordMatch ? 'border-red-500' : 'dark:border-gray-700'} rounded-lg focus:ring-2 focus:ring-indigo-400 focus:border-indigo-500 dark:bg-gray-700 dark:text-white`}
                      required
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    {!passwordMatch && (
                      <p className="text-red-500 text-xs mt-1">Passwords don't match</p>
                    )}
                  </div>
                  
                  <div className="mb-6">
                    <button 
                      type="submit" 
                      className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-medium py-2.5 px-4 rounded-lg transition-colors dark:bg-indigo-600 dark:hover:bg-indigo-700 disabled:opacity-70 disabled:cursor-not-allowed"
                      disabled={isSubmitting || !passwordMatch}
                    >
                      {isSubmitting ? 'Signing up...' : `Sign Up as ${userType === 'individual' ? 'Individual' : 'Organization'}`}
                    </button>
                  </div>
                  
                  {/* Only show third-party login options for individuals */}
                  {userType === 'individual' && (
                    <div className="text-center mb-6">
                      <div className="flex items-center justify-center mb-4">
                        <div className="flex-grow h-px bg-gray-300 dark:bg-gray-600"></div>
                        <span className="px-3 text-sm text-gray-500 dark:text-gray-400">Or continue with</span>
                        <div className="flex-grow h-px bg-gray-300 dark:bg-gray-600"></div>
                      </div>
                      <div className="flex justify-center space-x-4">
                        <button 
                          type="button" 
                          className="p-2 border rounded-lg hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-700 transition-colors"
                          aria-label="Sign up with Google"
                        >
                          <svg className="w-5 h-5 text-red-500" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M21.35,11.1H12.18V13.83H18.69C18.36,17.64 15.19,19.27 12.19,19.27C8.36,19.27 5,16.25 5,12C5,7.9 8.2,4.73 12.2,4.73C15.29,4.73 17.1,6.7 17.1,6.7L19,4.72C19,4.72 16.56,2 12.1,2C6.42,2 2.03,6.8 2.03,12C2.03,17.05 6.16,22 12.25,22C17.6,22 21.5,18.33 21.5,12.91C21.5,11.76 21.35,11.1 21.35,11.1V11.1Z" />
                          </svg>
                        </button>
                        <button 
                          type="button" 
                          className="p-2 border rounded-lg hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-700 dark:text-white transition-colors"
                          aria-label="Sign up with GitHub"
                        >
                          <svg className="w-5 h-5" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z" />
                          </svg>
                        </button>
                        <button 
                          type="button" 
                          className="p-2 border rounded-lg hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-700 transition-colors"
                          aria-label="Sign up with Microsoft"
                        >
                          <svg className="w-5 h-5 text-blue-500" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M2,3H11V12H2V3M11,22H2V13H11V22M21,3V12H12V3H21M21,22H12V13H21V22Z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center text-sm">
                    <Link href="/login" className="text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300">
                      Already have an account? Log in
                    </Link>
                  </div>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
