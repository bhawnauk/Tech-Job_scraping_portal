import requests

from models.job import Job
from utils.cleaner import clean_html, clean_text
from utils.filter import is_tech_job


def scrape_arbeitnow():

    url = "https://www.arbeitnow.com/api/job-board-api"

    response = requests.get(
        url,
        timeout=10
    )

    response.raise_for_status()

    data = response.json()

    jobs = []


    for item in data.get("data", []):

        job = Job(

            title=clean_text(
                item.get("title")
            ),

            company=clean_text(
                item.get("company_name")
            ),

            location=clean_text(
                item.get("location")
            ),

            url=item.get(
                "url",
                ""
            ),

            source="Arbeitnow",

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
            print("KEEP:", job.title)
            jobs.append(job)

        else:
            print("REMOVE:", job.title)


    return jobs