



export class ApiFunction {
    constructoor() {


        createPublisher = async (name) => {
            const response = await fetch(`${BASE_URL}/publishers`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name })
            });
            const data = await response.json();
            return data.id;
        }

        createPost = async (title, content, publisherId, status = 'active') => {
            const response = await fetch(`${BASE_URL}/posts`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ title, content, publisherId, status })
            });
            const data = await response.json();
            return data.id;
        }


        editPost = async (postId, newStatus) => {
            const response = await fetch(`${BASE_URL}/posts/${postId}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ status: newStatus })
            });
            return response.ok;
        }


    }
}



