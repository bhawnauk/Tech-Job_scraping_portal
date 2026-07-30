from scrapers.arbeitnow import scrape_arbeitnow
from scrapers.remotive import scrape_remotive

from database.job_repository import save_jobs


print("Starting scrapers...")


arbeitnow_jobs = scrape_arbeitnow()

print(
    "Arbeitnow:",
    len(arbeitnow_jobs)
)


remotive_jobs = scrape_remotive()

print(
    "Remotive:",
    len(remotive_jobs)
)


all_jobs = (
    arbeitnow_jobs
    +
    remotive_jobs
)


print(
    "TOTAL:",
    len(all_jobs)
)


save_jobs(all_jobs)