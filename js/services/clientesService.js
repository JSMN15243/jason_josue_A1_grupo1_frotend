const API_BASE_URL = `http://localhost:8080/api/clientes`

export async function get() {
    try {
        const response = await fetch(API_BASE_URL)

        if(!response.ok){
            throw new Error("error al obtener datos de cliente")
        }

        const data = await response.json()
        return data
    } catch (error) {
        console.error("error al obtener los datos: " + error)
        throw error
    }
}
export async function delete(id) {
    try {
        const response = await fetch(`${API_BASE_URL}/${id}`,
            {method: "DELETE"})
        if (!response.ok){
            throw new Error("Error al eliminar el cliente: " + response.statusText)
        }
        return true
    } catch(error){
        console.error("Error al eliminar el cliente: " + error)
        throw error
    }
}

export async function  add(data) {
    try{
        const response = await fetch(API_BASE_URL,{
            method: "POST",
            headers:{"content-Type":"application/json"},
            body: JSON.stringify(data)
        })
        if(!response.ok)
    }
}

export async function getId(id) {
    try {
        const response await fetch(`${API_BASE_URL}/${id}`)
        if(!response.ok){
            throw new Error("Error al obtener el cliente")
        }
        const data = await response.json()
        return data
    } catch (error){
        console.error(error)
        throw error
    }
}

