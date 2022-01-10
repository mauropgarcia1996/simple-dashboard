const apiHandler = async (URL: string): Promise<any> => {
    const res = await fetch(URL)

    if (res.ok) {
        return res
    } else {
        // do something with the error
        // e.g. show notification
        return res
    }
}

export const getUsers = async () => {
    return apiHandler(process.env.JSON_USERS_ENDPOINT_URL as string)
}

export const getPosts = async () => {
    return apiHandler(process.env.JSON_POSTS_ENDPOINT_URL as string)
}