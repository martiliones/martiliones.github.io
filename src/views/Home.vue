<template>
  <div class="prose m-auto mb-8">
    <h1 class="mb-0">Hello.</h1>
  </div>
  <div class="prose m-auto">
    <p>
      I am {{ new Date().getFullYear() - 2005 }} y.o., a fanatical full-time open sourceror.
    </p>
    <p>
      Creator of
      <a href="https://github.com/libtelegram/libtelegram" target="_blank" rel="noopener">
        LibTelegram
      </a>,
      <a href="https://github.com/martiliones/icon-set-creator" target="_blank" rel="noopener">
        icon-set-creator
      </a>,
      <a href="https://github.com/martiliones/astam" target="_blank" rel="noopener">Astam.app</a>,
      <a href="https://github.com/openqazaqstan/OpenStudy" target="_blank" rel="noopener">
        OpenStudy</a>, and
      <router-link to="/projects">a few others</router-link>.
      <br> Core team member of
      <a href="https://github.com/openqazaqstan" target="_blank" rel="noopener">
        Open Qazaqstan</a> and
      <a href="http://github.com/libtelegram" target="_blank" rel="noopener">LibTelegram</a>.
    </p>
    <p>
      Dreaming up ideas and making them come true is where my passion lies. Check out my
      <router-link to="/projects">
        full projects list here
      </router-link>.
    </p>
    <p>
      Outside of programming, I enjoy playing chess and traveling. You can find me on
      <a href="https://www.lichess.org/@/martilione9" target="_blank" rel="noopener">Lichess</a>.
      If you happened to be in the same city I live (currently in
      <strong>Almaty</strong>), maybe we can hang out and play some chess or code together.
    </p>
    <hr>
    <p>
      Find me on
      <a href="https://github.com/martiliones" target="_blank" rel="noopener">GitHub</a>,
      <a href="https://www.telegram.me/martiliones_blog" target="_blank" rel="noopener">
        Telegram</a>,
      mail me at
      <a href="mailto:hi@martilion.es">hi@martilion.es</a>.
    </p>
    <p>If you like my works, consider sponsoring me on
      <a href="https://patreon.com/martiliones" target="_blank" rel="noopener">Patreon
      </a> to keep them sustainable.
    </p>
  </div>
</template>

<style lang="scss">
.prose{
  color: var(--fg);
  max-width: 65ch;
  font-size: 1rem;
  line-height: 1.75;

  a {
    color: var(--fg-deeper);
    font-weight: 500;
    font-weight: inherit;
    text-decoration: none;
    border-bottom: 1px solid rgba(125,125,125,.1);
    transition: border .3s ease-in-out;

    &:hover {
      border-bottom: 1px solid var(--fg);
    }
  }

  strong {
    color: var(--fg-deep);
    font-weight: 600;
  }

  hr {
    border-color: #e5e7eb;
    margin-top: 3em;
    margin-bottom: 3em;
  }

  h1 {
    color: var(--fg-deeper);
    font-weight: 800;
    font-size: 2.25em;
    margin-top: 0;
    margin-bottom: .8888889em;
    line-height: 1.1111111;
  }

  p {
    margin-top:1.25em;
    margin-bottom:1.25em;
  }

  hr {
    width: 50px;
    margin: 2em auto;
  }

  hr + *{
    margin-top:0;
  }

  :first-child{
    margin-top:0;
  }

  :last-child{
    margin-bottom:0;
  }
}
</style>
