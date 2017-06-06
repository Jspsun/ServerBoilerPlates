import json
import requests

p = {"message": "wow"}
r = requests.get("http://localhost:1337/", json=p)
data = r.json()
print data['message']
