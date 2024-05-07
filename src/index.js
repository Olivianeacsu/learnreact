let createBlog = (title, body) => {
    if (!title || !body) {
        throw new Error('A blog must have a title and body')
    }
    return alert(`${title} - ${body}`);
}

createBlog();