from bs4 import BeautifulSoup
from typing import Optional
import re
import html


def clean_html(text: Optional[str]) -> str:

    if not text:
        return ""


    # Decode HTML entities
    text = html.unescape(text)


    # Parse HTML
    soup = BeautifulSoup(
        text,
        "html.parser"
    )


    # Remove unwanted tags
    for tag in soup(
        ["script", "style"]
    ):
        tag.decompose()


    # Extract only visible text
    cleaned = soup.get_text(
        separator=" ",
        strip=True
    )


    # Remove leftover HTML-like patterns
    cleaned = re.sub(
        r"<[^>]+>",
        "",
        cleaned
    )


    return clean_text(cleaned)



def clean_text(text: Optional[str]) -> str:

    if not text:
        return ""


    # Remove extra spaces/new lines
    text = re.sub(
        r"\s+",
        " ",
        text
    )


    return text.strip()