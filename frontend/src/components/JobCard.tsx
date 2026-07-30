import type { Job } from "../types/job";


interface Props {
  job: Job;
}


export default function JobCard({ job }: Props) {

  const initial = job.company?.charAt(0).toUpperCase() || "?";

  return (

    <article
      className="
        group
        flex
        flex-col
        gap-4
        rounded-3xl
        border
        border-navy/5
        bg-white
        p-6
        shadow-[0_1px_2px_rgba(11,31,58,0.06)]
        transition
        hover:-translate-y-1
        hover:shadow-[0_20px_40px_-16px_rgba(11,31,58,0.25)]
      "
    >

      <div className="flex items-start gap-4">

        <span
          className="
            flex
            h-12
            w-12
            shrink-0
            items-center
            justify-center
            rounded-2xl
            bg-navy
            text-lg
            font-extrabold
            text-white
          "
        >
          {initial}
        </span>

        <div>

          <h2 className="text-lg font-extrabold leading-snug text-navy">
            {job.title}
          </h2>

          <p className="mt-1 text-sm font-semibold text-navy/50">
            {job.company}
          </p>

        </div>

      </div>


      <div className="flex flex-wrap gap-2 text-xs font-bold">

        <span className="rounded-full bg-navy/5 px-3 py-1 text-navy/60">
          📍 {job.location}
        </span>

        {
          job.remote && (

            <span className="rounded-full bg-gold/15 px-3 py-1 text-gold-dark">
              🏠 Remote
            </span>

          )
        }

        <span className="rounded-full bg-navy/5 px-3 py-1 text-navy/60">
          {job.source}
        </span>

      </div>


      <p className="line-clamp-3 text-sm leading-relaxed text-navy/60">
        {job.description}
      </p>


      <a
        href={job.url}
        target="_blank"
        rel="noreferrer"
        className="
          mt-auto
          inline-flex
          items-center
          justify-center
          gap-2
          rounded-2xl
          bg-navy
          py-3
          text-sm
          font-bold
          text-white
          transition
          group-hover:bg-gold
          group-hover:text-navy
        "
      >
        View job
        <span className="transition group-hover:translate-x-1">→</span>
      </a>


    </article>

  );
}
