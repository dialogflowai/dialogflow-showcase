export function httpReq(method, uri, query, form, body) {
    const options = {
        method: method,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    };
    let url = uri;//window.location.host
    if (query) {
        const searchParams = new URLSearchParams(query);
        url += '?' + searchParams.toString();
    }
    if (form) {
        var data = new FormData();
        for (let k of Objects.keys(form)) {
            data.append(k, form[k]);
        }
        options.body = data;
    }
    else if (body) {
        options.body = JSON.stringify(body);
        console.log(options.body);
    }
    return fetch(url, options).then(response => response.json()).catch(error => error);
}

export function winScrollTo(t) {
    let top = 0
    let left = 0
    do {
        top += t.offsetTop || 0;
        left += t.offsetLeft || 0;
        t = t.offsetParent;
    } while (t)
    window.scrollTo({
        top: top,
        left: left,
        behavior: "smooth",
    });
}