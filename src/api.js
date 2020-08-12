export const addSubscriber = async (formId, email, source) => {
    const { data } = await axios.post(`https://api.convertkit.com/v3/forms/${formId}>/subscribe`, {
        api_key: 'DJqo7VuJ3eIiBod0jUfgsA',
        email,
        fields: {
            source: source
        }
    });

    return data;
}