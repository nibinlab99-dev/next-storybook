'use client';

import { useState } from 'react';
import { Button } from '@/components/Button';
import { ButtonSCSS } from '@/components/ButtonSCSS/ButtonSCSS';

const variants = [
  {
    key: 'primary' as const,
    title: 'Primary',
    description: 'High emphasis actions and main CTA.',
  },
  {
    key: 'secondary' as const,
    title: 'Secondary',
    description: 'Supportive actions with balanced emphasis.',
  },
  {
    key: 'tertiary' as const,
    title: 'Tertiary',
    description: 'Low emphasis actions and links.',
  },
];

const sizes = [
  { key: 'sm' as const, label: 'Small' },
  { key: 'md' as const, label: 'Medium' },
  { key: 'lg' as const, label: 'Large' },
];

const scssVariantSnippets: Record<'primary' | 'secondary' | 'tertiary', string> = {
  primary: `.primary-button {
  background-color: var(--button-primary-fill);
  color: var(--button-primary-text);
  border-color: var(--button-primary-stroke);
}`,
  secondary: `.secondary-button {
  background-color: var(--button-secondary-fill);
  color: var(--button-secondary-text);
  border-color: var(--button-secondary-stroke);
}`,
  tertiary: `.tertiary-button {
  background-color: var(--button-tertiary-fill);
  color: var(--button-tertiary-text);
  border-color: var(--button-tertiary-stroke);
}`,
};

const tailwindSizeClasses: Record<'sm' | 'md' | 'lg', string> = {
  sm: 'px-sm py-xs text-xs leading-5 rounded-sm h-8 gap-1',
  md: 'px-md py-xs text-sm leading-6 rounded-md h-9 gap-1.5',
  lg: 'px-md py-sm text-base leading-7 rounded-md h-11 gap-2',
};

const tailwindVariantClasses: Record<'primary' | 'secondary' | 'tertiary', { normal: string; hover: string; disabled: string }> = {
  primary: {
    normal: 'bg-button-primary-fill text-button-primary-text border border-button-primary-stroke',
    hover: 'bg-button-primary-fill-hover text-button-primary-text border border-button-primary-stroke-hover',
    disabled: 'bg-button-primary-fill-disabled text-button-primary-text border border-button-primary-stroke-disabled cursor-not-allowed',
  },
  secondary: {
    normal: 'bg-button-secondary-fill text-button-secondary-text border border-button-secondary-stroke',
    hover: 'bg-button-secondary-fill-hover text-button-secondary-text border border-button-secondary-stroke-hover',
    disabled: 'bg-button-secondary-fill-disabled text-button-secondary-text-disabled border border-button-secondary-stroke-disabled cursor-not-allowed',
  },
  tertiary: {
    normal: 'bg-button-tertiary-fill text-button-tertiary-text border border-button-tertiary-stroke',
    hover: 'bg-button-tertiary-fill-hover text-button-tertiary-text-hover border border-button-tertiary-stroke-hover',
    disabled: 'bg-button-tertiary-fill-disabled text-button-tertiary-text-disabled border border-button-tertiary-stroke-disabled cursor-not-allowed',
  },
};

const scssSizeClasses: Record<'sm' | 'md' | 'lg', string> = {
  sm: 'has-sm',
  md: 'has-md',
  lg: 'has-lg',
};

const scssSizeSnippets: Record<'sm' | 'md' | 'lg', string> = {
  sm: `.has-sm {
  padding: var(--space-xs) var(--space-sm);
  font-size: var(--button-font-size-sm);
  line-height: var(--button-line-height-sm);
  border-radius: var(--button-radius-sm);
  height: var(--button-height-sm);
}`,
  md: `.has-md {
  padding: var(--space-xs) var(--space-md);
  font-size: var(--button-font-size-md);
  line-height: var(--button-line-height-md);
  border-radius: var(--button-radius-md);
  height: var(--button-height-md);
}`,
  lg: `.has-lg {
  padding: var(--space-sm) var(--space-md);
  font-size: var(--button-font-size-lg);
  line-height: var(--button-line-height-lg);
  border-radius: var(--button-radius-lg);
  height: var(--button-height-lg);
}`,
};

const scssStateSnippets: Record<'primary' | 'secondary' | 'tertiary', { hover: string; disabled: string }> = {
  primary: {
    hover: `.primary-button.hover,
.primary-button:hover {
  background-color: var(--button-primary-fill-hover);
  border-color: var(--button-primary-stroke-hover);
}`,
    disabled: `.primary-button.disabled,
.primary-button:disabled {
  background-color: var(--button-primary-fill-disabled);
  border-color: var(--button-primary-stroke-disabled);
  color: var(--button-primary-text-disabled);
}`,
  },
  secondary: {
    hover: `.secondary-button.hover,
.secondary-button:hover {
  background-color: var(--button-secondary-fill-hover);
  border-color: var(--button-secondary-stroke-hover);
}`,
    disabled: `.secondary-button.disabled,
.secondary-button:disabled {
  background-color: var(--button-secondary-fill-disabled);
  border-color: var(--button-secondary-stroke-disabled);
  color: var(--button-secondary-text-disabled);
}`,
  },
  tertiary: {
    hover: `.tertiary-button.hover,
.tertiary-button:hover {
  background-color: var(--button-tertiary-fill-hover);
  color: var(--button-tertiary-text-hover);
  border-color: var(--button-tertiary-stroke-hover);
}`,
    disabled: `.tertiary-button.disabled,
.tertiary-button:disabled {
  background-color: var(--button-tertiary-fill-disabled);
  color: var(--button-tertiary-text-disabled);
  border-color: var(--button-tertiary-stroke-disabled);
}`,
  },
};

const states = [
  { key: 'normal', label: 'Normal' },
  { key: 'hover', label: 'Hover' },
  { key: 'disabled', label: 'Disabled' },
] as const;
type StateKey = typeof states[number]['key'];
type CodeViewKey = 'tsx' | 'style';

export default function Home() {
  const [mode, setMode] = useState<'tailwind' | 'scss'>('tailwind');
  const [selectedSize, setSelectedSize] = useState<'sm' | 'md' | 'lg'>('sm');
  const [stateByCard, setStateByCard] = useState<Record<string, StateKey>>(() => {
    const initial: Record<string, StateKey> = {};
    for (const size of sizes) {
      for (const variant of variants) {
        initial[`${size.key}-${variant.key}`] = 'normal';
      }
    }
    return initial;
  });
  const [codeViewByCard, setCodeViewByCard] = useState<Record<string, CodeViewKey>>(() => {
    const initial: Record<string, CodeViewKey> = {};
    for (const size of sizes) {
      for (const variant of variants) {
        initial[`${size.key}-${variant.key}`] = 'tsx';
      }
    }
    return initial;
  });

  const CurrentButton = mode === 'tailwind' ? Button : ButtonSCSS;
  const currentSizeLabel = sizes.find((size) => size.key === selectedSize)?.label ?? 'Small';
  const selectClasses =
    'appearance-none h-8 rounded-full border border-gray-light bg-white/90 px-md pr-2xl text-xs font-medium text-default shadow-[0_8px_22px_-16px_rgba(16,24,40,0.45)] backdrop-blur transition-all hover:border-gray hover:shadow-[0_10px_28px_-16px_rgba(16,24,40,0.55)] focus:outline-none focus:border-blue-light';

  return (
    <main className="min-h-screen bg-gray-faint">
      <div className="mx-auto flex w-full max-w-none gap-xl px-lg py-3xl sm:px-2xl">
        <aside className="hidden w-60 shrink-0 lg:block">
          <div className="sticky top-8 rounded-2xl border border-gray-light bg-white p-lg shadow-sm">
            <div className="text-xs uppercase tracking-widest text-default-light">Components</div>
            <nav className="mt-md flex flex-col gap-xs text-sm">
              <button className="flex items-center justify-between rounded-lg bg-gray-lightest px-md py-xs font-medium text-default shadow-sm">
                Button
                <span className="rounded-full bg-gray-lightest px-2xs py-4xs text-xs text-default-light">1</span>
              </button>
            </nav>
            <div className="mt-lg text-xs text-default-lighter">
              More components will appear here.
            </div>
          </div>
        </aside>

        <div className="flex-1 min-w-0">
          <header className="mb-3xl">
            <div className="inline-flex items-center gap-xs rounded-full border border-gray-light bg-white px-md py-2xs text-xs uppercase tracking-widest text-default-light shadow-sm">
              Design Tokens System
            </div>
            <h1 className="mt-lg text-4xl font-semibold tracking-tight text-default sm:text-5xl">
              Button Component
            </h1>
            <p className="mt-xs text-base text-default-lighter sm:text-lg">
              Each size shows its UI and code in a premium, copy-ready layout.
            </p>

            <div className="mt-lg inline-flex items-center gap-2xs rounded-full border border-gray-light bg-white p-2xs shadow-sm">
              <button
                onClick={() => setMode('tailwind')}
                aria-pressed={mode === 'tailwind'}
                className={`px-lg py-xs rounded-full text-sm font-medium transition-all ${mode === 'tailwind'
                  ? 'bg-gray-lightest text-link shadow-sm'
                  : 'text-default-lighter hover:text-default'
                  }`}
              >
                Tailwind CSS
              </button>
              <button
                onClick={() => setMode('scss')}
                aria-pressed={mode === 'scss'}
                className={`px-lg py-xs rounded-full text-sm font-medium transition-all ${mode === 'scss'
                  ? 'bg-gray-lightest text-link shadow-sm'
                  : 'text-default-lighter hover:text-default'
                  }`}
              >
                SCSS Module
              </button>
            </div>
          </header>

          <div className="grid gap-xl">
            <section className="rounded-2xl border border-gray-light bg-white p-xl shadow-sm">
              <div className="mb-xl flex flex-col gap-xs sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-xs uppercase tracking-widest text-default-light">Size</p>
                  <h2 className="text-2xl font-semibold text-default sm:text-3xl">
                    {currentSizeLabel}
                  </h2>
                </div>
                <div className="flex items-center gap-sm text-sm text-default-lighter">
                  <span>Primary, secondary, and tertiary variants</span>
                  <div className="flex items-center gap-xs">
                    <label className="text-xs uppercase tracking-widest text-default-light">
                      Size
                    </label>
                    <div className="relative">
                      <select
                        className={selectClasses}
                        value={selectedSize}
                        onChange={(event) => setSelectedSize(event.target.value as 'sm' | 'md' | 'lg')}
                      >
                        {sizes.map((size) => (
                          <option key={size.key} value={size.key}>
                            {size.label}
                          </option>
                        ))}
                      </select>
                      <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-default-light">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                          <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid gap-lg lg:grid-cols-3">
                {variants.map((variant) => (
                  <div key={`${selectedSize}-${variant.key}`} className="min-w-0 rounded-2xl border border-gray-light bg-gray-faint p-lg shadow-sm">
                    {(() => {
                      const cardKey = `${selectedSize}-${variant.key}`;
                      const selectedState = stateByCard[cardKey] ?? 'normal';
                      const selectedCodeView = codeViewByCard[cardKey] ?? 'tsx';
                      const effectiveCodeView = mode === 'tailwind' ? 'tsx' : selectedCodeView;
                      const isHover = selectedState === 'hover';
                      const isDisabled = selectedState === 'disabled';
                      const stateProps = isHover ? ' showAsHover' : isDisabled ? ' disabled' : '';
                      const tailwindDisabledLine = isDisabled ? '\n  disabled' : '';
                      const scssStateLine = isHover ? '\n  showAsHover' : isDisabled ? '\n  disabled' : '';
                      const tailwindTsxSnippet = `<button\n  className="inline-flex items-center justify-center font-regular border ${tailwindSizeClasses[selectedSize]} ${tailwindVariantClasses[variant.key][selectedState]}"${tailwindDisabledLine}\n>\n  Label\n</button>`;
                      const scssTsxSnippet = `<ButtonSCSS\n  variant="${variant.key}"\n  size="${selectedSize}"${scssStateLine}\n>\n  Label\n</ButtonSCSS>`;

                        return (
                          <>
                            <div className="flex flex-wrap items-start justify-between gap-sm">
                              <div>
                                <div className="text-sm font-medium text-default">{variant.title}</div>
                                <div className="text-xs text-default-lighter">{variant.description}</div>
                              </div>
                              <div className="flex items-center gap-xs">
                                <span className="rounded-full bg-white px-xs py-4xs text-xs text-default-light shadow-sm">
                                  {variant.key}
                                </span>
                                <label className="text-xs uppercase tracking-widest text-default-light">
                                  State
                                </label>
                                <div className="relative">
                                  <select
                                    className={selectClasses}
                                    value={selectedState}
                                    onChange={(event) =>
                                      setStateByCard((prev) => ({
                                        ...prev,
                                        [cardKey]: event.target.value as StateKey,
                                      }))
                                    }
                                  >
                                    {states.map((state) => (
                                      <option key={state.key} value={state.key}>
                                        {state.label}
                                      </option>
                                    ))}
                                  </select>
                                  <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-default-light">
                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                                      <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                  </span>
                                </div>
                              </div>
                            </div>

                            <div className="mt-lg rounded-xl border border-gray-light bg-white p-lg">
                              <div className="text-xs uppercase tracking-widest text-default-light">Preview</div>
                              <div className="mt-sm flex items-center justify-center rounded-lg bg-gray-faint p-lg">
                                <CurrentButton
                                  variant={variant.key}
                                  size={selectedSize}
                                  showAsHover={isHover}
                                  disabled={isDisabled}
                                >
                                  Label
                                </CurrentButton>
                              </div>
                            </div>

                            <div className="mt-lg">
                              <div className="flex flex-wrap items-center justify-between gap-sm">
                                <div className="text-xs uppercase tracking-widest text-default-light">Code</div>
                                {mode === 'scss' && (
                                  <div className="inline-flex items-center rounded-full border border-gray-light bg-white p-2xs text-xs">
                                    <button
                                      onClick={() =>
                                        setCodeViewByCard((prev) => ({
                                          ...prev,
                                          [cardKey]: 'tsx',
                                        }))
                                      }
                                      className={`px-sm py-2xs rounded-full transition-all ${selectedCodeView === 'tsx'
                                        ? 'bg-gray-lightest text-default shadow-sm'
                                        : 'text-default-lighter hover:text-default'
                                        }`}
                                    >
                                      TSX
                                    </button>
                                    <button
                                      onClick={() =>
                                        setCodeViewByCard((prev) => ({
                                          ...prev,
                                          [cardKey]: 'style',
                                        }))
                                      }
                                      className={`px-sm py-2xs rounded-full transition-all ${selectedCodeView === 'style'
                                        ? 'bg-gray-lightest text-default shadow-sm'
                                        : 'text-default-lighter hover:text-default'
                                        }`}
                                    >
                                      SCSS
                                    </button>
                                  </div>
                                )}
                              </div>
                              <pre className="mt-2xs max-w-full min-h-[180px] max-h-[220px] overflow-auto rounded-lg border border-gray-light bg-white p-md text-xs text-default">
                                <code>
                                  {mode === 'tailwind'
                                    ? `// TSX
${tailwindTsxSnippet}`
                                    : effectiveCodeView === 'tsx'
                                      ? scssTsxSnippet
                                      : `${scssVariantSnippets[variant.key]}

${scssSizeSnippets[selectedSize]}

${selectedState === 'hover' ? scssStateSnippets[variant.key].hover : selectedState === 'disabled' ? scssStateSnippets[variant.key].disabled : ''}`.trim()
                                  }
                                </code>
                              </pre>
                            </div>
                          </>
                        );
                    })()}
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
