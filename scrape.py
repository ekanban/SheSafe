from flask import Flask
import requests, json
from bs4 import BeautifulSoup

app = Flask(__name__)
 
@app.route("/")
def hello():

    html_doc = requests.get("https://www.ndtv.com/topic/women-safety").text
    soup = BeautifulSoup(html_doc, 'html.parser')
    links_href = soup.select(".fbld a")
    photo_href = soup.select(".marr10")
    title_text = soup.select(".fbld a strong")

    links = []
    for link in links_href:
        links.append(link.attrs["href"])

    titles = []
    for title in title_text:
        titles.append(title.text)

    photos = []
    for photo in photo_href:
        photos.append(photo.attrs["src"])
        
    data = {}
    data['links'] = links
    data['photos'] = photos
    data['title'] = titles
    json_data = json.dumps(data)
    
    return json_data

if __name__ == "__main__":
    app.run()





