const express = require("express");
const router = express.Router();
const { validatorRegister, validatorLogin}= require("../validators/auth");
const { registerCtrl, loginCtrl , getItems, getItem} = require("../controllers/auth");
//const authMiddleware = require("../middleware/session");
//const checkRol = require("../middleware/rol");

/**
 * Registro de Usuarios
 * @openapi
 * /auth/register:
 *      post:
 *          tags:
 *              - auth
 *          summary: "Registro de Usuarios"
 *          description: "Ruta de Registro de Usuarios"
 *          requestBody:
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: "#/components/schemas/registro"
 *          responses:
 *                  '201':
 *                      description: "Usuario registrado correctamente"
 *                  '403':
 *                      description: "Error registro de Usuarios"  
 */
router.post("/register", validatorRegister, registerCtrl)

/**
 * Registro de Usuarios
 * @openapi
 * /auth/login:
 *      post:
 *          tags:
 *              - auth
 *          summary: "Login de Usuarios"
 *          description: "Ruta de Login de Usuarios"
 *          requestBody:
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: "#/components/schemas/login"
 *          responses:
 *                  '201':
 *                      description: "Usuario registrado correctamente"
 *                  '401':
 *                      description: "Error de Contraseña"
 *                  '403':
 *                      description: "Error registro de Usuarios"
 *                  '404':
 *                      description: "Usuario no Existe"
 *                    
 */
router.post("/login",validatorLogin, loginCtrl);


/**
 * Listado de Usuarios
 * @openapi
 * /auth/users:
 *      get:
 *          tags:
 *              - auth
 *          summary: "Listar Usuarios"
 *          description: "Ruta de Listado de Usuarios"
 *          security:
 *              - bearerAuth: []         
 *          responses:
 *                  '201':
 *                      description: "Usuario registrado correctamente"
 *                  '401':
 *                      description: "Error de Contraseña"
 *                  '403':
 *                      description: "Error registro de Usuarios"
 *                  '404':
 *                      description: "Usuario no Existe"
 *                    
 */
//router.get("/users",getItems)


/**
 * Detalle de Usuarios
 * @openapi
 * /auth/users/{id}:
 *      get:
 *          tags:
 *              - auth
 *          summary: "Detalle Usuario"
 *          description: "Ruta de Detalle de Usuario"
 *          security:
 *              - bearerAuth: []
 *          parameters:
 *              - name: id
 *                in: path
 *                description: ID de Usuario
 *                required: true
 *                schema:
 *                  type: string         
 *          responses:
 *                  '201':
 *                      description: "Usuario registrado correctamente"
 *                  '401':
 *                      description: "Error de Contraseña"
 *                  '403':
 *                      description: "Error registro de Usuarios"
 *                  '404':
 *                      description: "Usuario no Existe"
 *                    
 */
//router.get("/users/:id", authMiddleware,checkRol(["admin"]),getItem)

module.exports= router;