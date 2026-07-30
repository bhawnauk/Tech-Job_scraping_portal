import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

import { getJobs } from "../api/jobs";
import JobCard from "../components/JobCard";


export default function Jobs() {

  const [page, setPage] = useState(1);


  const {
    data,
    isLoading,
    error
  } = useQuery({

    queryKey: [
      "jobs",
      page
    ],

    queryFn: () => getJobs(page, 6)

  });


  return (

    <>

      {/* Hero */}

      <section className="relative overflow-hidden bg-navy">

        <div
          aria-hidden
          className="
            pointer-events-none
            absolute
            -top-24
            -left-24
            h-80
            w-80
            rounded-full
            bg-gold/20
            blur-3xl
          "
        />

        <div
          aria-hidden
          className="
            pointer-events-none
            absolute
            -bottom-32
            -right-16
            h-96
            w-96
            rounded-full
            bg-navy-light/60
            blur-3xl
          "
        />

        <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-24 text-center">

          <span
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              bg-white/10
              px-4
              py-1.5
              text-xs
              font-bold
              uppercase
              tracking-wider
              text-gold
            "
          >
            🇬🇧 UK tech jobs, sorted
          </span>

          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white md:text-6xl">
            Find your next{" "}
            <span className="text-gold">tech job</span>, fast.
          </h1>

          <p className="mt-5 max-w-2xl mx-auto text-lg text-white/70">
            Clean, filtered technology jobs from multiple sources —
            no noise, just roles worth applying to.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4 text-sm font-semibold text-white">

            <div className="rounded-2xl bg-white/5 px-5 py-3">
              📦 {data?.total ?? "—"} live roles
            </div>

            <div className="rounded-2xl bg-white/5 px-5 py-3">
              🏢 Multiple sources
            </div>

            <div className="rounded-2xl bg-white/5 px-5 py-3">
              ⚡ Updated daily
            </div>

          </div>

        </div>

      </section>


      <main className="bg-cream px-6 py-16">

        <div className="max-w-7xl mx-auto">

          <div
            id="latest-roles"
            className="mb-8 flex scroll-mt-24 items-end justify-between"
          >

            <h2 className="text-2xl font-extrabold tracking-tight text-navy">
              Latest roles
            </h2>

            {
              data && (

                <p className="text-sm font-semibold text-navy/50">
                  Page {data.page} of {data.totalPages}
                </p>

              )
            }

          </div>


          {/* Loading */}

          {
            isLoading && (

              <div
                className="
                  grid
                  grid-cols-1
                  md:grid-cols-2
                  lg:grid-cols-3
                  gap-6
                "
              >

                {
                  Array.from({ length: 6 }).map((_, index) => (

                    <div
                      key={index}
                      className="
                        h-64
                        animate-pulse
                        rounded-3xl
                        border
                        border-navy/5
                        bg-white
                      "
                    />

                  ))
                }

              </div>

            )
          }


          {/* Error */}

          {
            !isLoading && error && (

              <div
                className="
                  flex
                  flex-col
                  items-center
                  gap-2
                  rounded-3xl
                  border
                  border-navy/10
                  bg-white
                  py-20
                  text-center
                "
              >

                <p className="text-lg font-bold text-navy">
                  Couldn't load jobs
                </p>

                <p className="text-sm text-navy/50">
                  Please check the API is running and try again.
                </p>

              </div>

            )
          }


          {/* Jobs Grid */}

          {
            !isLoading && !error && (

              <div
                className="
                  grid
                  grid-cols-1
                  md:grid-cols-2
                  lg:grid-cols-3
                  gap-6
                "
              >

                {
                  data?.jobs.map(
                    (job) => (

                      <JobCard
                        key={job.id}
                        job={job}
                      />

                    )
                  )
                }

              </div>

            )
          }


          {/* Empty State */}

          {
            !isLoading && !error && data?.jobs.length === 0 && (

              <div className="rounded-3xl border border-navy/5 bg-white py-20 text-center text-navy/50">
                No jobs found.
              </div>

            )
          }


          {/* Pagination */}

          {
            !isLoading && !error && (

              <div className="mt-14 flex flex-wrap items-center justify-center gap-2">

                <button
                  disabled={page === 1}
                  onClick={() => setPage((prev) => prev - 1)}
                  className="
                    rounded-full
                    border
                    border-navy/10
                    bg-white
                    px-4
                    py-2
                    text-sm
                    font-bold
                    text-navy
                    transition
                    hover:bg-navy/5
                    disabled:opacity-30
                    disabled:hover:bg-white
                  "
                >
                  ← Prev
                </button>


                {
                  Array.from(
                    { length: data?.totalPages ?? 0 },
                    (_, index) => index + 1
                  )
                  .map((pageNumber) => (

                    <button
                      key={pageNumber}
                      onClick={() => setPage(pageNumber)}
                      className={`
                        h-10
                        w-10
                        rounded-full
                        text-sm
                        font-bold
                        transition

                        ${
                          page === pageNumber
                            ? "bg-navy text-gold"
                            : "border border-navy/10 bg-white text-navy hover:bg-navy/5"
                        }
                      `}
                    >
                      {pageNumber}
                    </button>

                  ))
                }


                <button
                  disabled={page === data?.totalPages}
                  onClick={() => setPage((prev) => prev + 1)}
                  className="
                    rounded-full
                    border
                    border-navy/10
                    bg-white
                    px-4
                    py-2
                    text-sm
                    font-bold
                    text-navy
                    transition
                    hover:bg-navy/5
                    disabled:opacity-30
                    disabled:hover:bg-white
                  "
                >
                  Next →
                </button>

              </div>

            )
          }

        </div>

      </main>

    </>

  );

}
