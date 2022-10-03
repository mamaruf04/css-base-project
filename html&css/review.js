const loadReviews = () => {
    fetch('review.json')
    .then(res => res.json())
    .then(data => reviews(data))
}
loadReviews();

const reviews = data => {
    const reviewParent = document.getElementById('review-parent');
   data.forEach(review => {
    const div = document.createElement('div');
    div.className = "card swiper-slide";
    div.innerHTML = `
            <div>
                <div class="image-content">
                  <span class="overlay"></span>
                  <div class="card-image">
                    <img src="${review.img}" alt="" class="card-img" />
                  </div>
                </div>
                <div class="card-content">
                  <h2 class="name">${review.name}</h2>
                  <p class="description">
                    ${review.review}
                  </p>
                  <button class="button-rvw">View More</button>
                </div>
            </div>` 
    reviewParent.appendChild(div);   
});
}