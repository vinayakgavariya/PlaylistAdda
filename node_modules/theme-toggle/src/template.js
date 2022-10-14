const template = document.createElement("template");
template.innerHTML = `
  <style>
    .theme-toggle{--ease-3:cubic-bezier(.25,0,.3,1);--ease-out-5:cubic-bezier(0,0,0,1);--ease-elastic-3:cubic-bezier(.5,1.25,.75,1.25);--ease-elastic-4:cubic-bezier(.5,1.5,.75,1.25);--size:2rem;--icon-fill:#454d54;--icon-fill-hover:#22262a;-webkit-tap-highlight-color:transparent;aspect-ratio:1;background:none;block-size:var(--size);border:none;border-radius:50%;cursor:pointer;inline-size:var(--size);outline-offset:5px;padding:0;touch-action:manipulation}.theme-toggle>svg{stroke-linecap:round;block-size:100%;inline-size:100%}[data-theme=dark] .theme-toggle{--icon-fill:#abb3ba;--icon-fill-hover:#e2e6e9}@media (hover:none){.theme-toggle{--size:48px}}.sun-and-moon>.moon,.sun-and-moon>.sun,.sun-and-moon>.sun-beams{transform-origin:center center}.sun-and-moon>.moon,.sun-and-moon>.sun{fill:var(--icon-fill)}.theme-toggle:hover>.sun-and-moon>.moon,.theme-toggle:hover>.sun-and-moon>.sun{fill:var(--icon-fill-hover)}.theme-toggle:focus-visible>.sun-and-moon>.moon{fill:var(--icon-fill-hover)}.theme-toggle:focus-visible>.sun-and-moon>.sun{fill:var(--icon-fill-hover)}.sun-and-moon>.sun-beams{stroke:var(--icon-fill);stroke-width:2px}.theme-toggle:hover .sun-and-moon>.sun-beams{stroke:var(--icon-fill-hover)}.theme-toggle:focus-visible .sun-and-moon>.sun-beams{stroke:var(--icon-fill-hover)}[data-theme=dark] .sun-and-moon>.sun{transform:scale(1.75)}[data-theme=dark] .sun-and-moon>.sun-beams{opacity:0}[data-theme=dark] .sun-and-moon>.moon>circle{transform:translate(-7px)}@supports (cx:1){[data-theme=dark] .sun-and-moon>.moon>circle{cx:17;transform:translate(0)}}@media (prefers-reduced-motion:no-preference){.sun-and-moon>.sun{transition:transform .5s var(--ease-elastic-3)}.sun-and-moon>.sun-beams{transition:transform .5s var(--ease-elastic-4),opacity .5s var(--ease-3)}.sun-and-moon .moon>circle{transition:transform .25s var(--ease-out-5)}@supports (cx:1){.sun-and-moon .moon>circle{transition:cx .25s var(--ease-out-5)}}[data-theme=dark] .sun-and-moon>.sun{transform:scale(1.75);transition-duration:.25s;transition-timing-function:var(--ease-3)}[data-theme=dark] .sun-and-moon>.sun-beams{transform:rotate(-25deg);transition-duration:.15s}[data-theme=dark] .sun-and-moon>.moon>circle{transition-delay:.25s;transition-duration:.5s}}
  </style>
  <button class="theme-toggle" id="theme-toggle" title="Toggles light & dark" aria-label="auto" aria-live="polite">
    <svg class="sun-and-moon" aria-hidden="true" width="24" height="24" viewBox="0 0 24 24">
      <circle class="sun" cx="12" cy="12" r="6" mask="url(#moon-mask)" fill="currentColor" />
      <g class="sun-beams" stroke="currentColor">
        <line x1="12" y1="1" x2="12" y2="3" />
        <line x1="12" y1="21" x2="12" y2="23" />
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
        <line x1="1" y1="12" x2="3" y2="12" />
        <line x1="21" y1="12" x2="23" y2="12" />
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
      </g>
      <mask class="moon" id="moon-mask">
        <rect x="0" y="0" width="100%" height="100%" fill="white" />
        <circle cx="24" cy="10" r="6" fill="black" />
      </mask>
    </svg>
  </button>
`;

export default template;
