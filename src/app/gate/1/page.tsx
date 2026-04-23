'use client'

import { useRouter } from 'next/navigation'

export const runtime = 'edge'

export default function Gate1OverviewPage() {
  const router = useRouter()

  const steps = [
    {
      number: '01',
      title: 'Your details',
      description: 'Tell us who you are and your relationship to the deceased.',
    },
    {
      number: '02',
      title: 'About the deceased',
      description: 'Basic details about the person who has passed.',
    },
    {
      number: '03',
      title: 'Location and circumstances',
      description: 'Where the death occurred and any urgent notes.',
    },
    {
      number: '04',
      title: 'Funeral arrangements',
      description: 'Select a funeral director, venue, and service type.',
    },
    {
      number: '05',
      title: 'Review and confirm',
      description: 'Review everything before we create your case.',
    },
  ]

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f8f6f1' }}>

      {/* Top nav */}
      <div style={{ backgroundColor: '#ffffff', borderBottom: '1px solid #e5e0d8', padding: '0 24px', height: '56px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'sticky', top: 0, zIndex: 50 }}>
        <button
          onClick={() => router.push('/dashboard')}
          style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'none', border: '1px solid #e5e0d8', borderRadius: '6px', padding: '6px 14px', fontSize: '13px', fontWeight: '500', color: '#1c1c1c', cursor: 'pointer' }}
        >
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
            <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Main Menu
        </button>
        <span style={{ fontSize: '15px', fontWeight: '700', color: '#4a9068' }}>Final Legacy</span>
        <div style={{ width: '80px' }} />
      </div>

      <div style={{ maxWidth: '600px', margin: '0 auto', padding: '40px 16px' }}>

        {/* Header */}
        <div style={{ marginBottom: '32px' }}>
          <h3 style={{ fontSize: '13px', fontWeight: '600', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#4a9068', margin: '0 0 12px 0' }}>Emergency</h3>
          <h1 style={{ fontSize: '28px', fontWeight: '600', color: '#1c1c1c', margin: '0 0 12px 0' }}>
            We're here to help
          </h1>
          <p style={{ fontSize: '15px', color: '#6b7280', lineHeight: '1.6', margin: 0 }}>
            We know this is one of the hardest moments. Final Legacy will guide you through everything that needs to be done — step by step. You don't need to figure this out alone.
          </p>
        </div>

        {/* Process overview */}
        <div style={{ backgroundColor: '#ffffff', borderRadius: '10px', boxShadow: '0 1px 4px rgba(0,0,0,0.08)', padding: '32px', marginBottom: '24px' }}>
          <h2 style={{ fontSize: '16px', fontWeight: '600', color: '#1c1c1c', margin: '0 0 24px 0' }}>What we'll go through together</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {steps.map((step, index) => (
              <div key={index} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <div style={{ minWidth: '36px', height: '36px', borderRadius: '50%', backgroundColor: '#f0f7f3', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: '700', color: '#4a9068' }}>
                  {step.number}
                </div>
                <div>
                  <p style={{ margin: '0 0 4px 0', fontSize: '14px', fontWeight: '600', color: '#1c1c1c' }}>{step.title}</p>
                  <p style={{ margin: 0, fontSize: '13px', color: '#6b7280', lineHeight: '1.5' }}>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* What to have ready */}
        <div style={{ backgroundColor: '#ffffff', borderRadius: '10px', boxShadow: '0 1px 4px rgba(0,0,0,0.08)', padding: '32px', marginBottom: '32px' }}>
          <h2 style={{ fontSize: '16px', fontWeight: '600', color: '#1c1c1c', margin: '0 0 16px 0' }}>What to have ready if possible</h2>
          <ul style={{ margin: 0, padding: '0 0 0 20px', color: '#6b7280', fontSize: '13px', lineHeight: '2' }}>
            <li>The deceased's full name and NRIC/ID number</li>
            <li>Location of the body</li>
            <li>Name and contact of the doctor or hospital if applicable</li>
            <li>Known religion or funeral preferences</li>
          </ul>
          <p style={{ margin: '16px 0 0 0', fontSize: '13px', color: '#6b7280' }}>
            Don't worry if you don't have everything. You can fill in details as you go.
          </p>
        </div>

        {/* CTA */}
        <button
          onClick={() => router.push('/gate/1/reporter')}
          style={{ width: '100%', backgroundColor: '#4a9068', color: '#ffffff', border: 'none', borderRadius: '8px', padding: '16px', fontSize: '16px', fontWeight: '600', cursor: 'pointer' }}
        >
          Begin
        </button>

      </div>
    </div>
  )
}
