	#Instala node alpine que es mas ligero: https://programmerclick.com/article/96361973898/ https://programmerclick.com/article/96361973898/
FROM node:alpine

#Cremoas una carpeta dentro del contenedor, dentro metemos nuestro codigo
WORKDIR /app

#Copiamos nuestro package.json a nuestra carpeta del proyecto(vacia por ahora), para instalar luego todas sus dependencias.
# El . significa el root de nuestro working diirectory

#COPY package.json .
#COPY package-lock.json .
COPY package*.json .

RUN npm install

#Enviar nuestro codigo al working directory
COPY . .

#Crear la version de produccion de react npm run build
#RUN npm run build

#Indicamos en que puerto se ejecuta el contenedor(react)
EXPOSE 3000

#Levantamos react por consola
CMD ["npm", "run", "dev"]

#Por ultimo solo queda convertir este Dockerfile en una imagen y luego esa imagen en un contenedor
#Crear imagen a partir del Dockerfile: ver notion
#Crear contenedor: docker run --name nameContainer -d -p 3000:3000 nameImage