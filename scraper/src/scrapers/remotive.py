import requests

from models.job import Job
from utils.cleaner import clean_html, clean_text
from utils.filter import is_tech_job


def scrape_remotive():

    url = "https://remotive.com/api/remote-jobs"


    response = requests.get(
        url,
        timeout=10
    )


    response.raise_for_status()


    data = response.json()


    jobs = []


    for item in data.get("jobs", []):

        job = Job(

            title=clean_text(
                item.get("title")
            ),

            company=clean_text(
                item.get("company_name")
            ),

            location=clean_text(
                item.get("candidate_required_location")
            ),

            url=item.get(
                "url",
                ""
            ),

            source="Remotive",

            description=clean_text(
                clean_html(
                    item.get("description")
                )
            )

        )


        if is_tech_job(
            job.title,
            job.description
        ):

            print(
                "KEEP:",
                job.title
            )

            jobs.append(job)


    return jobs