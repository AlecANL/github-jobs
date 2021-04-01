export function Card({ id, company, company_logo, type, title, location }) {
  return `
            <article class="job-card" data-id="${id}">
              <div class="job-card__image">
                <img
                  src="${
                    company_logo
                      ? `${company_logo}`
                      : './assets/images/image-not-found.png'
                  }"
                  alt="awesome image"
                />
              </div>
              <div class="job-card__description">
                <span class="company">${company}</span>
                <p class="name">${title}</p>
                <span class="time">${type}</span>
              </div>
              <div class="job-card__time">
                <span>
                  <img
                    width="15"
                    height="15"
                    src="./assets/images/icons/public-24px.svg"
                    alt="icon wolrd"
                  />
                  ${location}
                </span>
                <span>
                  <img
                    width="15"
                    height="15"
                    src="./assets/images/icons/timer-24px.svg"
                    alt="time icon"
                  />
                  today
                </span>
              </div>
            </article>
    `;
}
