TECH_KEYWORDS = [
    "software engineer",
    "software developer",
    "frontend",
    "front-end",
    "backend",
    "back-end",
    "full stack",
    "fullstack",
    "react",
    "angular",
    "vue",
    "node",
    "node.js",
    "typescript",
    "javascript",
    "python developer",
    "java developer",
    "c# developer",
    "data engineer",
    "machine learning",
    "ml engineer",
    "ai engineer",
    "devops",
    "cloud engineer",
    "database",
    "qa engineer",
    "test engineer",
    "automation engineer",
]


EXCLUDED_KEYWORDS = [
    "business developer",
    "business development",
    "sales",
    "marketing",
    "recruiter",
    "recruitment",
    "hr ",
    "human resources",
    "account manager",
    "customer success",
    "finance",
    "legal",
]


def is_tech_job(title: str, description: str = "") -> bool:

    text = (
        f"{title} {description}"
    ).lower()


    # Remove obvious non-tech roles first
    for keyword in EXCLUDED_KEYWORDS:

        if keyword in text:
            return False


    # Then look for technical indicators
    return any(
        keyword in text
        for keyword in TECH_KEYWORDS
    )