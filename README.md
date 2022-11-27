#SKELETON

-Express
-PostgreSQL
-Sequelize ORM
-Atenticación con tokens
-Bcrypt para hashear contraseñas
-Uso de Json web token

---

-Rutas de login y creacion de usuario(resgister)
-Herramienta para publicar imagenes de perfil
-CRUD de usuarios con autenticacion y manejo de permisos
-/users/:id vamos a proteger estas rutas put delete etc
-/users/me con token


Orden 

console
npm init --y
npm install express uuid dotenv sequelize pg pg-hstore
npm install -D nodemon

para encryptar:
npm install bcrypt

1. app.js
2. .env
3. config.js
4. database.js
5. models

  // -----------------------------------------------
    /*             ----db diagram-----
    
    |   Users   |   |  Posts    |   |Categories|
    |-----------|   |-----------|   |----------|
    |  id:uuid  |-->|created_by |   |  name    |
    |first_name |   |category_id|<--|  id      |
    
    */
    // -----------------------------------------------

6. controllers
7. services
8. routes

autenticacion
https://www.passportjs.org/
jwt

npm install passport passport-jwt jsonwebtoken




#Blog API

-Front
    -Obtener todas las publicaciones
    -Obtener un post en específico
    -Obtener todas las categories
    -Obtener todos los posts de una categoría en específico
    -Obtener todos los posts que se han creado
    -Podemos paginar los posts
        ''''json
        {
            "total":68,
            "prev":"localhost:9000/api/posts?start=51&limit=60"
            "next":"localhost:9000/api/posts?start=61&limit=60"
            "data":[
                {
                    "id":baa5ce62-5958-4c4e-a330-9e18067f64c61",
                    "title":"Post de tecnología",
                    "content":"lorem",
                    "createdBy":{
                        "id":"4d440fd0-0c33-4973-b3ea-6e79b8717ebd",
                        "name":"Ricardo",
                        "email":"ricardo@posts.com"
                    },
                    "category":{
                        "id":4,
                        "name":"teconologia"
                    }
                },

                {
                    "id":"295ee048-74d3-4165-abb7-868b90657922",
                    "title":"Post de ciencia",
                    "content":"lorem2",
                    "createdBy":{
                        "id":"f40bfd0a-505b-4f3a-8a4e-4e287467423a",
                        "name":"Alberto",
                        "email":"alberto@posts.com"
                    },
                    "category":{
                        "id":2,
                        "name":"Ciencia"
                    }
                }
            ]
            //a esto se le llama querys
        }


/api/v1

/users - /me - /me/posts - /me/posts/:id - /:id

/categories - /:id - /:id/posts

/posts - /:id

    -Crear categorias


