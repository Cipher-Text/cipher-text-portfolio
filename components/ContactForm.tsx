'use client'

import { useState, FormEvent } from 'react'
import type { FormField } from '@/lib/content'

interface ContactFormProps {
  fields: FormField[]
}

export default function ContactForm({ fields }: ContactFormProps) {
  const [formData, setFormData] = useState<Record<string, string>>({})
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setStatus('submitting')

    // Log form data to console (no backend yet)
    console.log('Form submitted:', formData)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setStatus('success')
    setFormData({})

    // Reset status after 3 seconds
    setTimeout(() => setStatus('idle'), 3000)
  }

  const handleChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {fields.map((field) => (
        <div key={field.name}>
          <label
            htmlFor={field.name}
            className="block text-sm font-medium text-slate-700 mb-2"
          >
            {field.label}
            {field.required && <span className="text-red-500 ml-1">*</span>}
          </label>

          {field.type === 'textarea' ? (
            <textarea
              id={field.name}
              name={field.name}
              required={field.required}
              rows={5}
              value={formData[field.name] || ''}
              onChange={(e) => handleChange(field.name, e.target.value)}
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none"
              placeholder={`Enter ${field.label.toLowerCase()}...`}
            />
          ) : field.type === 'select' ? (
            <select
              id={field.name}
              name={field.name}
              required={field.required}
              value={formData[field.name] || ''}
              onChange={(e) => handleChange(field.name, e.target.value)}
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors bg-white"
            >
              <option value="">Select an option</option>
              {field.options?.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          ) : (
            <input
              id={field.name}
              name={field.name}
              type={field.type}
              required={field.required}
              value={formData[field.name] || ''}
              onChange={(e) => handleChange(field.name, e.target.value)}
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              placeholder={`Enter ${field.label.toLowerCase()}...`}
            />
          )}
        </div>
      ))}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === 'submitting' ? 'Sending...' : 'Send Message'}
      </button>

      {/* Status Messages */}
      {status === 'success' && (
        <div className="p-4 bg-green-50 text-green-700 rounded-lg text-sm">
          Thank you for your message. We&apos;ll get back to you soon.
        </div>
      )}

      {status === 'error' && (
        <div className="p-4 bg-red-50 text-red-700 rounded-lg text-sm">
          Something went wrong. Please try again later.
        </div>
      )}
    </form>
  )
}
