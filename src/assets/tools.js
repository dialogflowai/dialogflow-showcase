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
        for (let k of Object.keys(form)) {
            data.append(k, form[k]);
        }
        options.body = data;
    }
    else if (body) {
        options.body = JSON.stringify(body);
    }
    return fetch(url, options).then(response => response.json());
}

/**
 * Smooth-scroll an element into view.
 *
 * Prefer this over `winScrollTo` below. That one sums `offsetTop` up the
 * `offsetParent` chain and calls `window.scrollTo`, which means it cannot see
 * `scroll-margin-top` — so with a sticky nav every jump lands with the target
 * heading hidden behind the bar. `scrollIntoView` honours `scroll-margin-top`
 * natively, and `[id] { scroll-margin-top: calc(var(--nav-h) + 16px) }` in
 * `theme.css` is what gives it the right offset.
 */
export function scrollToId(id) {
    const el = typeof id === 'string' ? document.getElementById(id) : id;
    if (!el) return;
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
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