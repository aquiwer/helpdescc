// let openReviewButton = document.querySelector(".addReview");
// let addReviewButton = document.querySelector(".addTextReview");
// let reviewField = document.querySelector(".review-textarea");
// let reviewWindow = document.querySelector(".addNewReview");
//
// let reviewMain = document.querySelector(".reviewMain");
// let closeModal = document.querySelector("#close");
//
// closeModal.addEventListener("click", evt => {
//     evt.target.parentNode.parentNode.style.display = 'none'
// })
//
// let createReview = (text) =>{
//
//     let swiperSlide = document.createElement("div")
//     swiperSlide.classList.add("swiper-slide")
//     let newReview = document.createElement("div");
//     newReview.classList.add("review");
//     let reviewInfo = document.createElement("div");
//     reviewInfo.classList.add("review-info")
//
//     let reviewDescribeContainer = document.createElement("div");
//     reviewDescribeContainer.classList.add("review-describe-container");
//
//     let reviewDescribe = document.createElement("p")
//     reviewDescribeContainer.append(reviewDescribe)
//     reviewDescribe.innerHTML = text;
//
//     let reviewPhotoContainer = document.createElement("div");
//     reviewPhotoContainer.classList.add("review-photo-container");
//
//     let reviewPhoto = document.createElement("img")
//     reviewPhoto.classList.add("review-photo");
//     reviewPhoto.src = 'http://placehold.it/100x100'
//     reviewInfo.append(reviewPhotoContainer)
//     reviewPhotoContainer.append(reviewPhoto);
//
//     let reviewNameContainer = document.createElement("div");
//     reviewNameContainer.classList.add("review-name-container");
//
//     let reviewAboutContainer = document.createElement("div");
//     reviewAboutContainer.classList.add("review-about-container");
//
//     let reviewName = document.createElement("p")
//
//     reviewName.innerHTML = "Dima Kazantsev";
//
//     reviewName.classList.add("review-name")
//     reviewAboutContainer.append(reviewName)
//
//     let reviewCountry = document.createElement("p")
//
//     reviewCountry.innerHTML = "Poznan, Poland";
//     reviewCountry.classList.add("review-country");
//
//     reviewAboutContainer.append(reviewCountry)
//
//     reviewNameContainer.append(reviewAboutContainer)
//
//     reviewInfo.append(reviewNameContainer)
//
//     let reviewLikeContainer = document.createElement("div");
//     reviewLikeContainer.classList.add("review-like-container");
//
//     let like = document.createElement("i")
//
//     like.classList.add("far")
//     like.classList.add("fa-heart")
//
//     reviewLikeContainer.append(like);
//
//     reviewNameContainer.append(reviewLikeContainer)
//
//     newReview.append(reviewInfo)
//     newReview.append(reviewDescribeContainer)
//
//     swiperSlide.style.height = 'auto'
//     swiperSlide.style.marginBottom = "-30px"
//
//     swiperSlide.append(newReview)
//     reviewMain.prepend(swiperSlide)
//     console.log (newReview)
//
// }
// openReviewButton.addEventListener("click", () =>{
//     reviewWindow.style.display = "flex"
// })
// addReviewButton.addEventListener("click", () =>{
//     if(reviewField.value !== ''){
//         createReview(reviewField.value)
//         reviewField.value = ""
//     }
// })
//
