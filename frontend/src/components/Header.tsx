export default function Header() {

  return (

    <header className="sticky top-0 z-50 border-b border-navy/5 bg-cream/80 backdrop-blur-md">

      <div
        className="
          max-w-7xl
          mx-auto
          px-6
          py-4
          flex
          justify-between
          items-center
          gap-4
        "
      >

        <a
          href="/"
          className="flex items-center gap-3"
        >

          <span
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-2xl
              bg-navy
              text-gold
              font-extrabold
            "
          >
            TJ
          </span>

          <span className="text-xl font-extrabold tracking-tight text-navy">
            TechJobs
          </span>

        </a>


        <nav className="flex items-center gap-8 text-sm font-semibold text-navy/60">

          <a className="transition-colors hover:text-navy" href="#latest-roles">
            Jobs
          </a>

          <a className="transition-colors hover:text-navy" href="#">
            About
          </a>

        </nav>


      </div>

    </header>

  );
}
