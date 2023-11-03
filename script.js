const faqs = document.querySelectorAll(".FAQ li");

const toggleFaqs = (faq) => {
  faq.children[1].classList.toggle("active");
  if (faq.children[1].classList.contains("active")) {
    faq.children[0].querySelector(".material-symbols-outlined").innerText =
      "do_not_disturb_on";
  } else {
    faq.children[0].querySelector(".material-symbols-outlined").innerText =
      "add_circle";
  }
};

faqs.forEach((faq, index) => {
  faq.addEventListener("click", () => toggleFaqs(faq));
});
