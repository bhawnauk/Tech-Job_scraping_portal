from database.postgres import get_connection
from models.job import Job


def save_jobs(jobs: list[Job]):

    connection = get_connection()

    cursor = connection.cursor()


    for job in jobs:

        cursor.execute(
            """
            INSERT INTO "Job"
            (
                title,
                company,
                location,
                salary,
                "jobType",
                remote,
                description,
                url,
                source,
                "postedDate"
            )

            VALUES
            (
                %s,%s,%s,%s,%s,%s,%s,%s,%s,%s
            )

            ON CONFLICT (url)
            DO NOTHING
            """,

            (
                job.title,
                job.company,
                job.location,
                job.salary,
                job.job_type,
                job.remote,
                job.description,
                job.url,
                job.source,
                job.posted_date
            )
        )


    connection.commit()


    cursor.close()
    connection.close()


    print(
        f"{len(jobs)} jobs saved"
    )