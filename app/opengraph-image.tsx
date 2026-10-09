import { ImageResponse } from 'next/og'

export const alt = 'Cipher Text Lab — software for systems that can’t afford to fail'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

const BLOCKS = [[8, 8], [15, 8], [22, 8], [8, 15], [8, 22], [15, 22], [22, 22]]

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', background: '#0B1015', color: '#F5F7F6', padding: 72 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <svg width="72" height="72" viewBox="0 0 36 36">
            <rect width="36" height="36" rx="8" fill="#F5F7F6" />
            {BLOCKS.map(([x, y]) => <rect key={`${x}-${y}`} x={x} y={y} width="6" height="6" rx="1.2" fill="#0B1015" />)}
            <rect x="15" y="15" width="6" height="6" rx="1.2" fill="#19B48A" />
          </svg>
          <div style={{ display: 'flex', fontSize: 44, fontWeight: 600 }}>
            ciphertext<span style={{ color: '#8FA0AB', fontWeight: 400 }}>/lab</span>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <div style={{ display: 'flex', fontSize: 28, color: '#19B48A', letterSpacing: 2 }}>SOFTWARE ENGINEERING STUDIO</div>
          <div style={{ display: 'flex', fontSize: 84, fontWeight: 600, lineHeight: 1.04, letterSpacing: -2 }}>
            Software for systems that can’t afford to fail.
          </div>
        </div>
      </div>
    ),
    size,
  )
}
