FROM clue/json-server
EXPOSE 80
ADD https://raw.githubusercontent.com/danbracey/CIS2169-Academic-Management-System/main/db.json /data/
ADD https://raw.githubusercontent.com/danbracey/CIS2169-Academic-Management-System/main/routes.json /data/routes/
ENTRYPOINT ["json-server", "-w", "/data/db.json", "--routes", "/data/routes/routes.json","--port", "80"]
# ENTRYPOINT ["json-server", "-w", "/data/data.json", "--routes","--port", "80"] #Use this option if you do not want to use custom routing