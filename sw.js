self.addEventListener('fetch', function (e) {
    console.log('Fetch event: ', e.request.url);
    e.respondWith(
        new Response(`<img src="x" onerror="alert(1)">`, {
            headers: {'Content-Type': 'text/html'}
        })
    )
});
