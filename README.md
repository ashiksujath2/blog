## Blog
*Simple Django powered blog with AngularJS frontend*

### Installation

1. create virtual enviornment
  - mkvirtualenv <env_name> --python \`which python3\`

2. clone project

3. Install requirements
    - `pip install -r requirements.txt`

4. Run locally
  - `python manage.py runserver`

5. To build minified js for production
  - `cd blog/src/assets`
  - `npm install`
  - `gulp build`
