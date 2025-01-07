const host = process.env.CLIENT_HOST || 'localhost'
const port = process.env.CLIENT_PORT || 8080

async function apiCall (endpoint, method, data) {
    try {
        const response = await fetch(`http://${host}:${port}${endpoint}`, {
            method: method,
            body: data ? JSON.stringify(data) : undefined 
        })
    
        if (!response.ok) throw new Error(response.statusText)
        return response.json()
    } catch (error) {
        console.log(`Error: ${error.message}`)
    }
}

async function addTask(desc) {
    if (!desc || desc.trim() === '') throw new Error('Error: Description cannot be empty')
    return apiCall('/api/tasks', 'POST', { "description": desc, "status":  "to-do" })
}

async function removeTask(id) {
    if (!id) throw new Error("Error: id is required")
    return apiCall(`/api/tasks/${id}`, 'DELETE', { "id": id })
}

async function removeAll() {
    return apiCall(`/api/tasks`, 'DELETE')
}

async function getTasks() {
    return apiCall('/api/tasks', 'GET')
}

async function updateStatus(status, id) {
    if (!id) throw new Error("Error: id is required")
    return apiCall(`/api/tasks/${id}`, 'PUT', { "id": id, "status": status })
}

module.exports = {
    addTask,
    removeTask,
    removeAll,
    getTasks,
    updateStatus
}