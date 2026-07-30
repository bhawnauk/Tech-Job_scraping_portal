from apscheduler.schedulers.blocking import BlockingScheduler

from scrapers.arbeitnow import scrape_arbeitnow
from scrapers.remotive import scrape_remotive

from database.job_repository import save_jobs



def run_scrapers():

    print("\n🚀 Starting scheduled scrape...")


    jobs = []


    arbeitnow_jobs = scrape_arbeitnow()

    print(
        f"Arbeitnow found: {len(arbeitnow_jobs)}"
    )


    jobs.extend(
        arbeitnow_jobs
    )


    remotive_jobs = scrape_remotive()

    print(
        f"Remotive found: {len(remotive_jobs)}"
    )


    jobs.extend(
        remotive_jobs
    )


    if jobs:

        save_jobs(jobs)

        print(
            f"Saved {len(jobs)} jobs"
        )

    else:

        print(
            "No jobs found"
        )



scheduler = BlockingScheduler()



scheduler.add_job(
    run_scrapers,
    "interval",
    hours=6
)



print(
    "⏰ Scheduler running..."
)



# Run immediately once
run_scrapers()


scheduler.start()