"use strict";
import {check, validationResult} from "express-validator"

export const validacion=[
    //validar el nombre del cliente
    check("nameCliente").exists().notEmpty().isLength({min:5,max:40}).withMessage("El nombre del cliente no debe estar vacio, debe tener entre 5 y 40 caracteres"),
    check("emailCliente").exists().notEmpty().isEmail().withMessage("El email del cliente no debe estar vacio, y debe tener formato de email"),
    check("tlfnoCliente").exists().notEmpty().isLength({min:9,max:9}).isNumeric().withMessage("El telefono del cliente no debe estar vacio, debe tener 9 digitos"),
    check("empresaCliente").exists().notEmpty().matches(/^[A-Z][a-zñA-ZÑ0-9\s]{4,49}$/).withMessage("El nombre empresa del cliente no debe estar vacio, debe tener entre 4 y 49 digitos"),
    (req,res,next)=>{
        const errors = validationResult(req); //Array tantas filas como campos valide
        if (!errors.isEmpty()) {
            res.status(400).json({
                errors:errors.array() //Devolver el mensaje
            })
        } else { //todo correcto
            next(); //Sigue la ejecución del siguiente middleware
        }
    }
]