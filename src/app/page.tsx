export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-faint p-2xl">
      <div className="text-center mb-3xl">
        <h1 className="text-5xl font-bold text-default mb-md">
          Figma Design Tokens Demo
        </h1>
        <p className="text-xl text-default-lighter">
          Using Tailwind CSS v4 with Token Studio
        </p>
      </div>

      {/* Color Tokens Demo */}
      <section className="w-full max-w-4xl mb-3xl">
        <h2 className="text-2xl font-semibold text-default mb-lg">Fill Colors (bg-*)</h2>
        <div className="grid grid-cols-4 gap-md">
          <div className="bg-blue p-lg rounded-md text-white text-center">
            bg-blue
          </div>
          <div className="bg-green p-lg rounded-md text-white text-center">
            bg-green
          </div>
          <div className="bg-red p-lg rounded-md text-white text-center">
            bg-red
          </div>
          <div className="bg-purple p-lg rounded-md text-white text-center">
            bg-purple
          </div>
          <div className="bg-blue-light p-lg rounded-md text-default text-center">
            bg-blue-light
          </div>
          <div className="bg-green-light p-lg rounded-md text-default text-center">
            bg-green-light
          </div>
          <div className="bg-orange p-lg rounded-md text-white text-center">
            bg-orange
          </div>
          <div className="bg-yellow p-lg rounded-md text-default text-center">
            bg-yellow
          </div>
        </div>
      </section>

      {/* Text Colors Demo */}
      <section className="w-full max-w-4xl mb-3xl">
        <h2 className="text-2xl font-semibold text-default mb-lg">Text Colors (text-*)</h2>
        <div className="bg-white p-xl rounded-lg border border-gray-light">
          <p className="text-default mb-sm">text-default - Primary text color</p>
          <p className="text-default-light mb-sm">text-default-light - Secondary text</p>
          <p className="text-default-lighter mb-sm">text-default-lighter - Tertiary text</p>
          <p className="text-success mb-sm">text-success - Success message</p>
          <p className="text-warning mb-sm">text-warning - Warning message</p>
          <p className="text-danger mb-sm">text-danger - Error message</p>
          <p className="text-link">text-link - Link text</p>
        </div>
      </section>

      {/* Border Colors Demo */}
      <section className="w-full max-w-4xl mb-3xl">
        <h2 className="text-2xl font-semibold text-default mb-lg">Border Colors (border-*)</h2>
        <div className="grid grid-cols-3 gap-md">
          <div className="p-lg border-2 border-blue rounded-md text-center">
            border-blue
          </div>
          <div className="p-lg border-2 border-green rounded-md text-center">
            border-green
          </div>
          <div className="p-lg border-2 border-red rounded-md text-center">
            border-red
          </div>
        </div>
      </section>

      {/* Spacing Demo */}
      <section className="w-full max-w-4xl mb-3xl">
        <h2 className="text-2xl font-semibold text-default mb-lg">Spacing (p-*, m-*, gap-*)</h2>
        <div className="bg-white rounded-lg border border-gray-light">
          <div className="bg-blue-lightest p-xs mb-2xs text-sm">p-xs (6px)</div>
          <div className="bg-blue-lightest p-sm mb-2xs text-sm">p-sm (8px)</div>
          <div className="bg-blue-lightest p-md mb-2xs text-sm">p-md (12px)</div>
          <div className="bg-blue-lightest p-lg mb-2xs text-sm">p-lg (16px)</div>
          <div className="bg-blue-lightest p-xl text-sm">p-xl (20px)</div>
        </div>
      </section>

      {/* Border Radius Demo */}
      <section className="w-full max-w-4xl">
        <h2 className="text-2xl font-semibold text-default mb-lg">Border Radius (rounded-*)</h2>
        <div className="grid grid-cols-4 gap-md">
          <div className="bg-gray-light p-lg rounded-none text-center text-sm">
            rounded-none
          </div>
          <div className="bg-gray-light p-lg rounded-sm text-center text-sm">
            rounded-sm
          </div>
          <div className="bg-gray-light p-lg rounded-md text-center text-sm">
            rounded-md
          </div>
          <div className="bg-gray-light p-lg rounded-lg text-center text-sm">
            rounded-lg
          </div>
        </div>
      </section>
    </main>
  )
}