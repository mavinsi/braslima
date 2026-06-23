(function () {
  const modal = document.getElementById('gmodal');
  if (!modal) return;

  const elTag = modal.querySelector('.gmodal__tag');
  const elName = modal.querySelector('.gmodal__name');
  const track = modal.querySelector('.gmodal__track');
  const thumbsBox = modal.querySelector('.gmodal__thumbs');
  const counter = modal.querySelector('.gmodal__counter');
  const btnPrev = modal.querySelector('.gmodal__prev');
  const btnNext = modal.querySelector('.gmodal__next');
  const contactModal = document.getElementById('contactModal');

  let photos = [];
  let idx = 0;

  function setBodyScrollLocked(locked) {
    if (locked) {
      document.body.style.overflow = 'hidden';
      return;
    }

    const contactOpen = contactModal && !contactModal.classList.contains('hidden');
    if (!contactOpen) {
      document.body.style.overflow = '';
    }
  }

  function openModal(card) {
    photos = JSON.parse(card.dataset.photos);
    const name = card.dataset.name;
    const tag = card.querySelector('.gcard__tag');
    idx = 0;

    elName.textContent = name;
    elTag.textContent = tag ? tag.textContent : '';

    track.innerHTML = photos.map((src, i) =>
      `<div class="gmodal__slide"><img src="${src}" alt="${name} — foto ${i + 1}" ${i === 0 ? '' : 'loading="lazy"'}></div>`
    ).join('');

    thumbsBox.innerHTML = photos.map((src, i) =>
      `<button type="button" class="gmodal__thumb" data-idx="${i}" aria-label="Ver foto ${i + 1}"><img src="${src}" alt="" loading="lazy"></button>`
    ).join('');

    thumbsBox.querySelectorAll('.gmodal__thumb').forEach((thumb) => {
      thumb.addEventListener('click', (event) => {
        event.stopPropagation();
        goTo(Number(thumb.dataset.idx));
      });
    });

    modal.hidden = false;
    setBodyScrollLocked(true);
    track.style.transition = 'none';
    goTo(0);
    void track.offsetWidth;
    track.style.transition = '';
  }

  function closeModal() {
    modal.hidden = true;
    setBodyScrollLocked(false);
    track.innerHTML = '';
    thumbsBox.innerHTML = '';
  }

  function goTo(i) {
    idx = Math.max(0, Math.min(i, photos.length - 1));
    track.style.transform = `translateX(${-idx * 100}%)`;
    counter.textContent = `${idx + 1} / ${photos.length}`;
    btnPrev.disabled = idx === 0;
    btnNext.disabled = idx === photos.length - 1;

    const thumbs = thumbsBox.querySelectorAll('.gmodal__thumb');
    thumbs.forEach((thumb, n) => thumb.classList.toggle('is-active', n === idx));

    const active = thumbs[idx];
    if (active) {
      active.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
  }

  function prev() {
    goTo(idx - 1);
  }

  function next() {
    goTo(idx + 1);
  }

  document.querySelectorAll('.gcard').forEach((card) => {
    card.addEventListener('click', () => openModal(card));
    card.querySelector('.gcard__btn')?.addEventListener('click', (event) => {
      event.stopPropagation();
      openModal(card);
    });
  });

  btnPrev.addEventListener('click', prev);
  btnNext.addEventListener('click', next);
  modal.querySelectorAll('[data-close]').forEach((el) => el.addEventListener('click', closeModal));

  document.addEventListener('keydown', (event) => {
    if (modal.hidden) return;
    if (event.key === 'Escape') closeModal();
    else if (event.key === 'ArrowLeft') prev();
    else if (event.key === 'ArrowRight') next();
  });

  let touchX = null;
  const viewport = modal.querySelector('.gmodal__viewport');

  viewport?.addEventListener('touchstart', (event) => {
    touchX = event.changedTouches[0].clientX;
  }, { passive: true });

  viewport?.addEventListener('touchend', (event) => {
    if (touchX === null) return;
    const dx = event.changedTouches[0].clientX - touchX;
    if (Math.abs(dx) > 45) {
      dx < 0 ? next() : prev();
    }
    touchX = null;
  }, { passive: true });
})();
