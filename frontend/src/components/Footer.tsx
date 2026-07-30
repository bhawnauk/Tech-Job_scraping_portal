function GitHubIcon() {

  return (

    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
      <path d="M12 0C5.373 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.725-4.042-1.61-4.042-1.61-.546-1.386-1.333-1.756-1.333-1.756-1.089-.744.083-.729.083-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.42-1.305.763-1.605-2.665-.303-5.467-1.334-5.467-5.93 0-1.31.469-2.381 1.236-3.221-.124-.303-.536-1.524.117-3.176 0 0 1.008-.322 3.301 1.23a11.5 11.5 0 0 1 3.003-.404c1.02.005 2.047.138 3.005.404 2.29-1.552 3.297-1.23 3.297-1.23.655 1.652.243 2.873.12 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .321.216.694.825.576C20.565 21.795 24 17.298 24 12c0-6.627-5.373-12-12-12z" />
    </svg>

  );

}


function LinkedInIcon() {

  return (

    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 .001-4.124 2.062 2.062 0 0 1-.001 4.124zM7.114 20.452H3.558V9h3.556v11.452z" />
    </svg>

  );

}


export default function Footer() {

  return (

    <footer className="mt-24 bg-navy text-white">

      <div
        className="
          max-w-7xl
          mx-auto
          px-6
          py-14
          flex
          flex-col
          md:flex-row
          md:items-center
          md:justify-between
          gap-10
        "
      >

        <div className="flex max-w-sm flex-col gap-4">

          <div className="flex items-center gap-3">

            <span
              className="
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-xl
                bg-gold
                text-sm
                font-extrabold
                text-navy
              "
            >
              TJ
            </span>

            <span className="text-lg font-extrabold tracking-tight">
              TechJobs
            </span>

          </div>

          <p className="text-sm leading-relaxed text-white/60">
            Clean, filtered technology jobs from multiple sources.
          </p>

        </div>


        <div className="flex flex-col gap-4">

          <span className="text-xs font-bold uppercase tracking-wider text-white/40">
            Contact
          </span>

          <div className="flex gap-3">

            <a
              href="#"
              aria-label="GitHub"
              className="
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-full
                border
                border-white/10
                text-white/70
                transition
                hover:border-gold/40
                hover:text-gold
              "
            >
              <GitHubIcon />
            </a>

            <a
              href="#"
              aria-label="LinkedIn"
              className="
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-full
                border
                border-white/10
                text-white/70
                transition
                hover:border-gold/40
                hover:text-gold
              "
            >
              <LinkedInIcon />
            </a>

          </div>

        </div>

      </div>


      <div className="border-t border-white/10">

        <div className="max-w-7xl mx-auto px-6 py-6 text-center text-sm text-white/40">
          © 2026 TechJobs. Built for developers | Bhawana Yadav | @allrightsreserved
        </div>

      </div>

    </footer>

  );

}
