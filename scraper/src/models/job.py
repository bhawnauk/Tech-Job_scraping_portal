from dataclasses import dataclass


@dataclass
class Job:

    title: str

    company: str

    location: str

    url: str

    source: str

    salary: str = ""

    job_type: str = ""

    remote: bool = False

    description: str = ""

    posted_date: str = ""