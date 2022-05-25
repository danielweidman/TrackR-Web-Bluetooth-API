# Dockerfile to build the TrackR-Web-Bluetooth software for testing
# This is a proof of concept that:
# a) detects and pairs with a TrackR Pixel if it's nearby
# b) triggers its sound when the web page's button is pushed

FROM tiangolo/uwsgi-nginx-flask:python3.8-alpine

WORKDIR /app
COPY . /app

RUN pip install flask

CMD [ "python", "app.py"]

