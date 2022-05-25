const postData = async (url, data) => {
    const res = await fetch(url, {
        method: 'POST',
        body: data,
        headers: {
            'Content-type': 'application/json'
        }
    });

    return await res.json();
};

async function getCardData (url){
    const res = await fetch(url);

    console.log(res);

    if(!res.ok){
        throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }

    return await res.json();
};

export { getCardData, postData }