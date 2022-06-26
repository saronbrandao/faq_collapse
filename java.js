const faqs = document.querySelectorAll('.faq');
const toggles = document.querySelectorAll('.faq-toggle');

// toggles.forEach((toggle, idx) => {
//   toggle.addEventListener('click', () => {
//     faqs.forEach((faq, fidx) => {
//       faq.classList.remove('active');
//       console.log(idx, fidx);
//       if (idx === fidx) faqs[idx].classList.toggle('active');
//     });
//   });
// });

toggles.forEach((toggle) => {
  toggle.addEventListener('click', () => {
    console.log(toggle.parentNode);

    toggle.parentNode.classList.toggle('active');
  });
});
