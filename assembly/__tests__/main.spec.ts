import * as contrato from '../index'

describe("Pruebas del contrato", () => {
    it("Debe crear un proyecto sin errores.",() => {
        expect(() => {
            contrato.crearProyecto("Proyecto de prueba", "Este es un proyecto de prueba",10)
        }).not.toThrow()
    })
    it("Debe fallar al buscar un proyecto que no existe.",() => {
        expect(() => {
            contrato.obtenerProyecto(1000)
        }).toThrow()
    })
    it("Debe fallar al votar por un proyecto que no existe.",() => {
        expect(() => {
            contrato.votarProyecto(1000)
        }).toThrow()
    })
    it("Debe retornar una lista de proyectos sin errores.",() => {
        expect(() => {
            const lista = contrato.listarProyectos()
            if(!lista) throw new Error()
        }).not.toThrow()
    })
})