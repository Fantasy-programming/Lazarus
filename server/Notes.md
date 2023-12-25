# SCI-HUB

Cool setting to have:

DEFAULT_SCIHUB_URL = 'https://sci-hub.ru/'
DEFAULT_AUTOMATIC_PDF_DOWNLOAD = true

## Take into account

- Generate sci-hub url
- The sci-hub url is just baseurl/doi

- You need the DOI to get the right paper
- Skip items without DOI or if URL generation had failed

- You can trigger the captcha, tell the user if so
- Things can go wrong, tell the user if so
- older .tf domain return rich error message
- newer .st domains return empty page if pdf is not available
