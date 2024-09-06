 const darkBtn = document.querySelector(".darkBtn") ;
 const body = document.querySelector("body");

 const darkMode = () => body.classList.toggle("darkMode");

 darkBtn.addEventListener("click", darkMode);







 const galleryPopup = document.querySelector(".popupGallery");
  const galleryImages = Array.from(document.querySelectorAll(".gallImage")); 
  const galleryPopupImage = galleryPopup.querySelector("img"); 
  let currentPosition = 0;
   // console.log(galleryImages); 
   const openGallery = (event, index) => {  
     currentPosition = index; 
      const image = event.currentTarget.src; 
    galleryPopupImage.src = image; 
   galleryPopup.classList.add("active");
   }
         
    galleryImages.map((gallImg, index) => { 
     gallImg.addEventListener("click", () => openGallery(event, index));
     });
     const cancelBtn = document.querySelector(".cancelBtn");
      const closeGallery = () => galleryPopup.classList.remove("active");
     cancelBtn.addEventListener("click", closeGallery);
      const nextArrow = document.querySelector(".rightArrow");
       const prevArrow = document.querySelector(".leftArrow");
     const galleryNext = () => {
           if (currentPosition == galleryImages.length - 1) {
                 currentPosition = 0;
                   } else {     currentPosition += 1;

                      }
                      
                      galleryPopupImage.src = galleryImages[currentPosition].src;
                     }
                      const galleryPrev = () => {
                           if (currentPosition == 0) {
                                 currentPosition = galleryImages.length - 1;
                                   }
                                   
                                   else {     currentPosition -= 1;

                                      }
                                      
                                      galleryPopupImage.src = galleryImages[currentPosition].src;
                                     }
                                     
                                     nextArrow.addEventListener("click", galleryNext);
                                      prevArrow.addEventListener("click", galleryPrev);



  