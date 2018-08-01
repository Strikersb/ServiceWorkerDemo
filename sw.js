self.addEventListener('fetch', function (e) {
    console.log('Fetch event: ', e.request.url);
});
